import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET() {
  try {
    const result = await pool.query(
      `SELECT id, name, email, phone, company, position, golf_simulator, business_card_filename, created_at
       FROM info_submissions
       ORDER BY created_at DESC`
    );

    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Position",
      "Golf Simulator",
      "Business Card",
      "Submitted At",
    ];

    const rows = result.rows.map((row) => [
      row.id,
      row.name,
      row.email,
      row.phone,
      row.company,
      row.position,
      row.golf_simulator ? "Yes" : "No",
      row.business_card_filename,
      row.created_at ? new Date(row.created_at).toISOString() : "",
    ]);

    const csv = [
      headers.map(escapeCsvField).join(","),
      ...rows.map((r) => r.map(escapeCsvField).join(",")),
    ].join("\r\n");

    const timestamp = new Date().toISOString().slice(0, 10);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="info-submissions-${timestamp}.csv"`,
      },
    });
  } catch (error) {
    console.error("Submissions export error:", error);
    return NextResponse.json({ error: "Export failed" }, { status: 500 });
  }
}
