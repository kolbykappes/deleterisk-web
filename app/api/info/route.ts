import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { uploadFile, isConfigured as s3Configured } from "@/lib/s3";
import { randomUUID } from "node:crypto";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();

    const name = form.get("name") as string | null;
    const email = form.get("email") as string | null;
    const phone = (form.get("phone") as string | null) || null;
    const company = form.get("company") as string | null;
    const position = form.get("position") as string | null;
    const businessCard = form.get("businessCard") as File | null;

    if (!name?.trim() || !email?.trim() || !company?.trim() || !position?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    let businessCardS3Key: string | null = null;
    let businessCardFilename: string | null = null;

    if (businessCard && businessCard.size > 0) {
      if (!s3Configured()) {
        console.warn("S3 not configured — skipping business card upload");
      } else {
        const buffer = Buffer.from(await businessCard.arrayBuffer());
        const key = `info-submissions/${randomUUID()}/${businessCard.name}`;
        const result = await uploadFile(buffer, key, businessCard.type || "application/octet-stream");

        if (result.success) {
          businessCardS3Key = result.key;
          businessCardFilename = businessCard.name;
        } else {
          console.error("Business card upload failed:", result.error);
        }
      }
    }

    const record = await prisma.infoSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        company: company.trim(),
        position: position.trim(),
        businessCardS3Key,
        businessCardFilename,
      },
    });

    if (resend) {
      const { error: emailError } = await resend.emails.send({
        from: "Delete Risk <noreply@deleterisk.com>",
        to: ["drew@mtm.earth", "jetplaneai@gmail.com"],
        replyTo: email.trim(),
        subject: `New Info Submission from ${name.trim()}`,
        html: `
          <h2>New Info Collection Submission</h2>
          <p>A new interested party has submitted their information via the Delete Risk info page.</p>

          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
            </tr>
            ${phone?.trim() ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${phone.trim()}">${phone.trim()}</a></td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${company.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Position</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${position.trim()}</td>
            </tr>
            ${businessCardFilename ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Business Card</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${businessCardFilename} (uploaded to S3)</td>
            </tr>` : ""}
          </table>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Delete Risk info collection page. Record ID: ${record.id}
          </p>
        `,
      });

      if (emailError) {
        console.error("Resend error:", emailError);
      }
    } else {
      console.warn("Resend not configured — skipping notification email");
    }

    return NextResponse.json({ success: true, id: record.id });
  } catch (error) {
    console.error("Info submission error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
