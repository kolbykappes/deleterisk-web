export default function Problem() {
  return (
    <section
      id="problem"
      className="section-padding bg-frost-100"
      aria-labelledby="problem-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="problem-heading" className="heading-2 text-brand-500 mb-6">
            The Real Risk Isn&apos;t the Damage. It&apos;s What Happens Next
          </h2>
        </div>

        {/* Problem Points */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="body-large text-slate-600 mb-8">
            Large manufacturing losses don&apos;t fail because of fire, flood, or
            equipment damage. They fail because:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-shield-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-lg text-slate-700">
                Business interruption escalates unchecked while decisions are
                made under pressure
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-shield-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-lg text-slate-700">
                Contractors optimize for revenue, not recovery. Over-scoping is
                systematic, not accidental
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-shield-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-lg text-slate-700">
                Days turn into weeks. Customers leave. Employees face layoffs.
                Supply chains collapse.
              </span>
            </li>
          </ul>
        </div>

        {/* Callout Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-brand-500 rounded-xl p-8 text-center">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              &ldquo;When your facility is down, downtime costs millions. You
              need someone who understands operations, controls the response,
              and has one objective: get you back online fast.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
