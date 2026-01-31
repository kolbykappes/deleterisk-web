const industries = [
  {
    title: "Food Processing",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    items: [
      "Perishable inventory constraints",
      "Strict regulatory compliance",
      "Customer delivery commitments",
      "Example: Hormel, General Mills facilities",
    ],
  },
  {
    title: "Packaging Manufacturing",
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    items: [
      "Supply chain dependencies",
      "Just-in-time delivery requirements",
      "Contract commitment obligations",
      "Critical infrastructure for manufacturers",
    ],
  },
  {
    title: "Industrial Facilities",
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    items: [
      "Complex operational systems",
      "High-value equipment",
      "Specialized workforce",
      "Regional economic impact",
    ],
  },
  {
    title: "Critical Infrastructure",
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
    items: [
      "Cascading downtime impacts",
      "Community dependencies",
      "Regulatory considerations",
      "Multi-facility portfolios",
    ],
  },
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="section-padding bg-frost-100"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="who-we-serve-heading"
            className="heading-2 text-brand-500 mb-6"
          >
            Critical Manufacturing Operations Where Downtime Destroys Value
          </h2>
          <p className="body-large text-slate-600">
            We partner with large, complex manufacturing operations where every
            day of downtime costs millions—and where rapid recovery is the
            difference between survival and failure.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-shield-400 transition-colors"
            >
              {/* Icon */}
              <div className="text-brand-500 mb-4">{industry.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-brand-500 mb-4">
                {industry.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {industry.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-slate-600 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-shield-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-500 rounded-xl p-8 text-center">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              If your facility experiences downtime costs of millions per day,
              customers who cannot wait for delivery, and employees whose
              livelihoods depend on rapid recovery—Delete Risk is built for you.
            </p>
            <a href="#contact" className="btn-primary mt-6 inline-block !bg-shield-500 hover:!bg-shield-600">
              Protect Your Operations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
