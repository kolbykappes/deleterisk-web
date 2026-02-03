const differentiators = [
  {
    title: "Independence That Matters",
    description:
      "We have no financial incentive tied to restoration volume or remediation scope. Our advisory services are compensated for speed, control, and results, not for dragging out timelines or inflating costs. When execution is needed, it's delivered through transparent, proven capabilities.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Manufacturing Expertise",
    description:
      "We understand how plants actually operate. Our team has managed large-scale manufacturing losses across food processing, packaging, industrial operations, and critical infrastructure. We speak your language and know your operational realities.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Rapid Mobilization",
    description:
      "Our lean, vendor-driven model enables rapid mobilization without fixed overhead constraints. We scale quickly for multiple concurrent projects while maintaining quality through systemized documentation and proven PM/APM structure.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const trustIndicators = [
  "15+ Years Managing Complex Manufacturing Losses",
  "Proven Track Record Across Multiple Industries",
];

export default function WhyDeleteRisk() {
  return (
    <section
      id="why-delete-risk"
      className="section-padding bg-white"
      aria-labelledby="why-delete-risk-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="why-delete-risk-heading"
            className="heading-2 text-brand-500 mb-6"
          >
            Proven Expertise. Proven Relationships. Proven Results.
          </h2>
          <p className="body-large text-slate-600">
            Delete Risk brings operational execution and independent advisory
            expertise that traditional contractors and consultants cannot match.
          </p>
        </div>

        {/* Differentiation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-frost-100 rounded-xl p-8 border border-slate-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-brand-500 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-brand-500 rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Track Record You Can Trust
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-brand-600 rounded-lg px-6 py-3 border border-brand-400"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-frost-300 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white text-sm md:text-base">
                    {indicator}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
