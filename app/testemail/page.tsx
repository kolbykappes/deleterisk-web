"use client";

import { useState } from "react";

export default function TestEmailPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const sendTestEmail = async () => {
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send test email");
      }

      setStatus("success");
      setMessage(`Test email sent successfully! Email ID: ${data.id}`);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to send test email");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Test Page</h1>
        <p className="text-gray-600 mb-6">
          Click the button below to send a test email to info@deleterisk.com
        </p>

        <button
          onClick={sendTestEmail}
          disabled={status === "sending"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
        >
          {status === "sending" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Test Email"
          )}
        </button>

        {message && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Other Endpoints</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">POST /api/contact</code> - Contact form
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">GET /api/cron/nightly-test</code> - Nightly check
            </li>
          </ul>
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center">
          Delete Risk - Email System Test
        </p>
      </div>
    </div>
  );
}
