const teamMembers = [
  {
    name: "Kory R. Kappes",
    title: "Founder | Disaster Risk & Large-Loss Advisor",
    bio: `Kory R. Kappes is a nationally recognized large-loss and disaster-recovery leader with more than 15 years of experience advising and executing complex loss response across the United States. Over his career, he has led and supported hundreds of millions of dollars in commercial, industrial, and catastrophic loss events spanning manufacturing, agriculture, healthcare, and critical infrastructure.

Kory operates where failure is expensive and time is unforgiving. His expertise centers on business continuity, claims strategy, and large-scale execution, bridging the gap between insurance policy language, operational reality, and executive decision-making under pressure. He is frequently called in when losses exceed deductibles, schedules are at risk, or stakeholders are misaligned.

His approach is disciplined and direct: identify risk early, control the critical path, mitigate business interruption, and make decisions that are fast, defensible, and informed. Kory is known for bringing order to chaos and clarity to moments that define organizations.

Beyond active engagements, Kory is a trusted industry voice, speaker, and collaborator, challenging legacy approaches to disaster response and advocating for proactive, intelligence-driven risk frameworks. His work is grounded in one belief: preparation and leadership matter most on a company's worst day.`,
    credentials: [
      "15+ years leading large-loss and disaster recovery",
      "Hundreds of millions in commercial and industrial loss events",
      "Expert in business continuity and claims strategy",
      "Trusted industry voice and speaker",
      "National experience across manufacturing, agriculture, healthcare, and critical infrastructure",
    ],
    photo: "/Kory.jpg",
  },
  {
    name: "Heather N. Kappes",
    title: "Founder | Risk, Compliance & Large-Loss Strategy",
    bio: `Heather N. Kappes is a senior risk, compliance, and operations leader with more than 20 years of experience guiding organizations through regulated, high-stakes environments where operational disruption, financial exposure, and governance risk converge. Her background spans enterprise compliance, public-sector finance, insurance, and large-loss response.

Heather operates where accountability is non-negotiable and decisions must hold up under scrutiny. Her expertise centers on risk governance, regulatory alignment, and operational readiness, bridging the gap between compliance requirements, financial controls, and real-world execution under pressure. She is frequently relied upon when organizations face audit exposure, complex stakeholder coordination, or critical response decisions.

Her approach is disciplined and methodical: identify risk gaps early, strengthen controls, align stakeholders, and ensure decisions are defensible, documented, and executable. Heather is known for translating complexity into clarity and bringing calm structure to moments that test leadership and systems alike.

Beyond active engagements, Heather is a trusted strategic partner and advisor, valued for her ability to integrate compliance, finance, and operations into cohesive risk frameworks. Her work is grounded in one belief: organizations perform best in crisis when preparation, governance, and execution move together.`,
    credentials: [
      "20+ years in risk, compliance, and operations leadership",
      "Expert in enterprise compliance and public-sector finance",
      "Specialist in risk governance and regulatory alignment",
      "Trusted strategic partner for complex stakeholder coordination",
      "Deep expertise integrating compliance, finance, and operations",
    ],
    photo: "/Heather.jpg",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-padding bg-frost-100"
      aria-labelledby="team-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="team-heading" className="heading-2 text-brand-500 mb-6">
            Leadership Built on Decades of Results
          </h2>
          <p className="body-large text-slate-600">
            Delete Risk is led by proven operators with deep expertise in
            large-loss management, manufacturing operations, and insurance
            stakeholder coordination.
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            >
              {/* Photo */}
              <div className="h-72 bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-brand-500 mb-1">
                  {member.name}
                </h3>
                <p className="text-shield-500 font-medium mb-6">
                  {member.title}
                </p>

                {/* Bio */}
                <div className="text-slate-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {member.bio}
                </div>

                {/* Credentials */}
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="text-sm font-semibold text-brand-500 mb-3 uppercase tracking-wide">
                    Key Credentials
                  </h4>
                  <ul className="space-y-2">
                    {member.credentials.map((credential, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-shield-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-700">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center mt-6 text-brand-500 font-semibold hover:text-shield-500 transition-colors"
                >
                  Connect with {member.name.split(" ")[0]}
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
          ))}
        </div>
      </div>
    </section>
  );
}
