"use client";

import { useState } from "react";

export interface Submission {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  position: string | null;
  golf_simulator: boolean;
  business_card_filename: string | null;
  created_at: string | null;
}

function Cell({ value }: { value: string | null }) {
  return (
    <span className={value ? "text-slate-100" : "text-slate-600 italic"}>
      {value ?? "—"}
    </span>
  );
}

export default function SubmissionsTable({ submissions }: { submissions: Submission[] }) {
  const [search, setSearch] = useState("");

  const filtered = submissions.filter((s) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      s.name?.toLowerCase().includes(q) ||
      s.email?.toLowerCase().includes(q) ||
      s.company?.toLowerCase().includes(q) ||
      s.phone?.toLowerCase().includes(q) ||
      s.position?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Filter by name, email, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
        <span className="text-sm text-slate-500 whitespace-nowrap">
          {filtered.length} of {submissions.length} records
        </span>
        <a
          href="/api/admin/submissions/export"
          className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
          download
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export CSV
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-slate-800/60 text-slate-400 uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Position</th>
              <th className="px-4 py-3 font-medium text-center">Golf</th>
              <th className="px-4 py-3 font-medium">Business Card</th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">Submitted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-slate-500">
                  {search ? "No records match your filter." : "No submissions yet."}
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap"><Cell value={s.name} /></td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {s.email ? (
                      <a href={`mailto:${s.email}`} className="text-blue-400 hover:text-blue-300 transition">
                        {s.email}
                      </a>
                    ) : (
                      <Cell value={null} />
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {s.phone ? (
                      <a href={`tel:${s.phone}`} className="text-blue-400 hover:text-blue-300 transition">
                        {s.phone}
                      </a>
                    ) : (
                      <Cell value={null} />
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap"><Cell value={s.company} /></td>
                  <td className="px-4 py-3 whitespace-nowrap"><Cell value={s.position} /></td>
                  <td className="px-4 py-3 text-center">
                    {s.golf_simulator ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {s.business_card_filename ? (
                      <span className="inline-flex items-center gap-1 text-slate-300 text-xs">
                        <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        {s.business_card_filename}
                      </span>
                    ) : (
                      <span className="text-slate-600 italic text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-400 text-xs">
                    {s.created_at
                      ? new Date(s.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })
                      : "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
