import { pool } from "@/lib/db";
import SubmissionsTable, { type Submission } from "./SubmissionsTable";
import LogoutButton from "./LogoutButton";

async function getSubmissions(): Promise<Submission[]> {
  const result = await pool.query(
    `SELECT id, name, email, phone, company, position, golf_simulator, business_card_filename, created_at
     FROM info_submissions
     ORDER BY created_at DESC`
  );
  return result.rows.map((r) => ({
    ...r,
    golf_simulator: Boolean(r.golf_simulator),
    created_at: r.created_at ? r.created_at.toISOString() : null,
  }));
}

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const submissions = await getSubmissions();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-semibold text-white text-sm">Delete Risk Admin</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Info Submissions</h1>
          <p className="text-slate-400 text-sm mt-1">
            {submissions.length} total submission{submissions.length !== 1 ? "s" : ""}
          </p>
        </div>

        <SubmissionsTable submissions={submissions} />
      </main>
    </div>
  );
}
