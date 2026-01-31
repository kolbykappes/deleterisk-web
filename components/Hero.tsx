export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 md:pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative section-container py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="heading-1 text-white mb-6 text-balance"
          >
            When Disaster Strikes, Every Minute Costs Millions
          </h1>

          {/* Subheadline */}
          <p className="body-large text-steel-300 mb-8 max-w-3xl">
            Delete Risk delivers rapid large-loss restoration and independent
            loss control for critical manufacturing operations. We stand between
            catastrophic events and business failure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="btn-primary text-center">
              Protect Your Operations
            </a>
            <a href="#services" className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white/10 text-center">
              Learn How
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-urgent-orange font-bold text-2xl md:text-3xl mb-1">
                15+
              </div>
              <div className="text-steel-300 text-sm">
                Years Managing Large-Scale Manufacturing Losses
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-urgent-orange font-bold text-2xl md:text-3xl mb-1">
                20+
              </div>
              <div className="text-steel-300 text-sm">
                National Brand Partnerships
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-urgent-orange font-bold text-2xl md:text-3xl mb-1">
                $20M+
              </div>
              <div className="text-steel-300 text-sm">
                in Successful Project Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#problem"
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
