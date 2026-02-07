import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function GET(request: NextRequest) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // In development or if CRON_SECRET is not set, allow the request
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
      to: ["info@deleterisk.com"],
      subject: "Delete Risk - Nightly System Check",
      html: `
        <h2>Nightly System Check</h2>
        <p>This is an automated nightly test email from the Delete Risk website.</p>

        <h3>System Status</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Check Time</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email Service</td>
            <td style="padding: 8px; border: 1px solid #ddd; color: green;">Operational</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Website</td>
            <td style="padding: 8px; border: 1px solid #ddd; color: green;">Online</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Scheduled Cron Job</td>
          </tr>
        </table>

        <p style="margin-top: 20px;">
          This email confirms that the Delete Risk website and email system are functioning correctly.
          If you stop receiving these nightly emails, please check the system status.
        </p>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
        <p style="color: #666; font-size: 12px;">
          Automated nightly check - runs daily at 2:00 AM EST
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
      message: "Nightly test email sent successfully",
      timestamp: now.toISOString(),
    });
  } catch (error) {
    console.error("Nightly cron error:", error);
    return NextResponse.json(
      { error: "Failed to send nightly test email" },
      { status: 500 }
    );
  }
}
