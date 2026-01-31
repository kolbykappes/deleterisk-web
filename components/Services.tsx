export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white"
      aria-labelledby="services-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="services-heading" className="heading-2 text-brand-500 mb-6">
            Two Sides of Complete Protection
          </h2>
          <p className="body-large text-slate-600">
            Delete Risk delivers both rapid restoration execution and
            independent loss control advisory. Whether you need boots on the
            ground or command authority in the room, we bring the expertise that
            protects your operations.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Card 1: Large-Loss Restoration */}
          <div className="bg-frost-100 rounded-2xl p-8 border border-slate-200 hover:border-shield-400 transition-colors">
            {/* Icon */}
            <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="heading-3 text-brand-500 mb-4">
              Rapid Response & Restoration
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              When catastrophic events strike—fires, floods, equipment failures,
              environmental releases—we mobilize within hours to contain damage,
              coordinate specialized vendors, and restore operations. Our lean,
              vendor-driven model delivers superior margins and 7-day
              mobilization capabilities.
            </p>

            {/* Capabilities */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  7-day mobilization for large-loss projects ($1M-$5M+)
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  Specialized vendor coordination (electrical, refrigeration,
                  environmental, demolition)
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  Complete insurance documentation and claims support
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  National coverage with proven execution across 20+ markets
                  simultaneously
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center text-brand-500 font-semibold hover:text-shield-500 transition-colors"
            >
              Discuss Your Facility Needs
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Service Card 2: Independent Loss Control */}
          <div className="bg-frost-100 rounded-2xl p-8 border border-slate-200 hover:border-shield-400 transition-colors">
            {/* Icon */}
            <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <h3 className="heading-3 text-brand-500 mb-4">
              Business Continuity & Loss Command
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Before disaster strikes, we build customized business continuity
              playbooks. During crisis, we provide independent loss command
              authority—controlling scope, managing contractors, and driving
              every stakeholder toward one goal: operational resumption. No
              financial incentive tied to restoration volume. Only results.
            </p>

            {/* Capabilities */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  Pre-loss continuity planning and facility vulnerability
                  assessments
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  Crisis response command with vendor and insurance coordination
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  Scope control and cost protection (prevent contractor
                  over-scoping)
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-shield-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">
                  Timeline acceleration—every day saved retains customers and
                  protects jobs
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center text-brand-500 font-semibold hover:text-shield-500 transition-colors"
            >
              Learn About Advisory Services
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
