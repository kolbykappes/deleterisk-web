const teamMembers = [
  {
    name: "Kory Kappes",
    title: "Founder & Principal",
    bio: `Kory brings over 15 years of proven experience managing large-scale commercial and manufacturing losses. He has successfully delivered restoration projects ranging from $1M to $5M+ across diverse industries including food processing, industrial manufacturing, logistics, and entertainment venues.

Previously holding 25% ownership in a restoration business generating $20M+ in revenue over two years, Kory walked away to build Delete Risk with complete independence—leveraging his decade of established relationships with senior adjusters, engineering firms, national carriers, and facility managers.

His expertise spans rapid emergency response, vendor coordination, insurance documentation, and operational recovery for critical manufacturing environments. Kory has managed 20+ concurrent projects during catastrophic events, demonstrating the scalability and quality control that defines Delete Risk's operational model.`,
    credentials: [
      "15+ years large-loss restoration experience",
      "20+ established referral partner relationships",
      "Proven track record delivering 4-5 major losses annually",
      "National experience across multiple markets and industries",
      "Deep expertise in manufacturing operations and insurance coordination",
    ],
    hasPhoto: false,
  },
  {
    name: "Heather",
    title: "Title To Be Determined",
    bio: "Bio content to be provided. Placeholder for Heather's background, expertise, role in Delete Risk, and relevant credentials.",
    credentials: ["Credential 1", "Credential 2", "Credential 3"],
    hasPhoto: false,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-padding bg-steel-50"
      aria-labelledby="team-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="team-heading" className="heading-2 text-navy-900 mb-6">
            Leadership Built on Decades of Results
          </h2>
          <p className="body-large text-steel-600">
            Delete Risk is led by proven operators with deep expertise in
            large-loss restoration, manufacturing operations, and insurance
            stakeholder management.
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-steel-200"
            >
              {/* Photo Placeholder */}
              <div className="h-64 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                {member.hasPhoto ? (
                  // Future: Add actual photo
                  <div className="w-32 h-32 rounded-full bg-navy-700" />
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-navy-700 flex items-center justify-center mb-4">
                      <svg
                        className="w-12 h-12 text-steel-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-steel-400 text-sm">
                      Photo Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-navy-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-urgent-orange font-medium mb-6">
                  {member.title}
                </p>

                {/* Bio */}
                <div className="text-steel-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {member.bio}
                </div>

                {/* Credentials */}
                <div className="border-t border-steel-200 pt-6">
                  <h4 className="text-sm font-semibold text-navy-900 mb-3 uppercase tracking-wide">
                    Key Credentials
                  </h4>
                  <ul className="space-y-2">
                    {member.credentials.map((credential, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-urgent-orange mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-steel-700">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center mt-6 text-navy-900 font-semibold hover:text-urgent-orange transition-colors"
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
