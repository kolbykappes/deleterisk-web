const steps = [
  {
    number: "01",
    title: "Preparedness",
    items: [
      "Facility assessments and operational vulnerability analysis",
      "Custom business continuity playbooks",
      "Risk Management App deployment for ongoing engagement",
      "Quarterly vendor verifications and proactive risk alerts",
    ],
  },
  {
    number: "02",
    title: "Crisis Response",
    items: [
      "Immediate mobilization when disaster strikes",
      "Loss command authority established within hours",
      "Vendor coordination and resource deployment",
      "Real-time communication with all stakeholders",
    ],
  },
  {
    number: "03",
    title: "Rapid Recovery",
    items: [
      "Critical path execution to restore production",
      "Scope control and cost management",
      "Insurance coordination and documentation",
      "Timeline acceleration to minimize business interruption",
    ],
  },
  {
    number: "04",
    title: "Return to Operations",
    items: [
      "Production capacity restored",
      "Employees back to work",
      "Customer commitments maintained",
      "Post-incident analysis and plan refinement",
    ],
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="section-padding bg-brand-500"
      aria-labelledby="how-we-work-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="how-we-work-heading"
            className="heading-2 text-white mb-6"
          >
            From Preparedness to Recovery
          </h2>
          <p className="body-large text-frost-200">
            Delete Risk operates across the entire lifecycle of risk
            management: building relationships before disaster, taking command
            during crisis, ensuring rapid return to operations, and aligning
            insurance stakeholders.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-brand-600 rounded-xl p-6 border border-brand-400"
            >
              {/* Step Number */}
              <div className="text-frost-300 font-bold text-4xl mb-4 opacity-50">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              {/* Step Items */}
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-frost-200 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-frost-300 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Connector Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-6 h-6 text-frost-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-600 rounded-xl p-8 border border-brand-400">
            <p className="text-lg text-frost-100 leading-relaxed text-center">
              &ldquo;Our Risk Management App keeps us connected between
              incidents, maintaining mind share through quarterly check-ins,
              facility documentation, 3D scanning, and proactive alerts. When
              disaster strikes, you don&apos;t have to think about who to call.
              We&apos;re already your first call.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
