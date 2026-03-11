import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    if (process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  if (!resend) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    const { data, error } = await resend.emails.send({
      from: "Delete Risk <noreply@deleterisk.com>",
      to: ["jetplaneai@gmail.com"],
      subject: "[AUTOMATED TEST] Contact Form Test Submission",
      html: `
        <h2>[AUTOMATED TEST] Contact Form Submission</h2>
        <p>This is an automated test to verify the contact form email pipeline is working.</p>

        <h3>Simulated Contact Details</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Test User (Automated)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;">test@deleterisk.com</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Delete Risk (Test)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">000-000-0000</td>
          </tr>
        </table>

        <h3>Test Message</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          This is an automated test submission to confirm the contact form email pipeline is operational.
        </p>

        <h3>Run Details</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Triggered At</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Scheduled Contact Form Test</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Status</td>
            <td style="padding: 8px; border: 1px solid #ddd; color: green;">Email Sent Successfully</td>
          </tr>
        </table>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
        <p style="color: #666; font-size: 12px;">
          Automated contact form test - runs twice daily at 6:00 AM and 3:30 PM EST via GitHub Actions.
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Contact form test email sent successfully",
      timestamp: now.toISOString(),
    });
  } catch (error) {
    console.error("Contact form test error:", error);
    return NextResponse.json(
      { error: "Failed to send contact form test email" },
      { status: 500 }
    );
  }
}
