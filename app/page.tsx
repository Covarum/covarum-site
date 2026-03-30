export default function CovarumWebsite() {
  const services = [
    {
      title: "Transparency",
      description:
        "See exactly what you have, what’s missing, and what actually matters - without the noise.",
    },
    {
      title: "Protection",
      description:
        "Design the right structure to protect your income, your family, and everything you’re building.",
    },
    {
      title: "Control",
      description:
        "Feel in control of your decisions, your coverage, and the path forward - with nothing left unclear.",
    },
  ];

  const pillars = [
    "Clarity over complexity",
    "Protection-first thinking",
    "No pressure guidance",
    "Built specifically for you",
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1115]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-2xl font-semibold tracking-[0.18em] text-white">COVARUM</div>
            <div className="mt-1 text-xs uppercase tracking-[0.35em] text-white/45">
              Protection Solutions
            </div>
          </div>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Solutions</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-[#0f1115]">
            Start a Conversation
          </a>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,52,71,0.35),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(28,42,56,0.35),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">

            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                Clear protection guidance for real life decisions
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
                Life has a funny way of making you think you’re on track… right before it tells you to “recalculate.”
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                At Covarum, we don’t just plan for where you’re going - we help protect you through the detours. Because the unexpected isn’t the exception. It’s part of the plan.
              </p>

              <div className="mt-10 flex">
                <a href="#contact" className="rounded-2xl bg-white px-6 py-4 text-base font-semibold text-[#0f1115]">
                  Start Your Plan
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {pillars.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#1c2a38]/40 p-4 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative z-10 flex items-center">
              <div className="w-full rounded-[2rem] border border-white/12 bg-[#1c2a38]/40 p-6 backdrop-blur">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#243447]/60 p-6">
                  <div className="mb-5 text-sm uppercase tracking-[0.28em] text-white/50">What this looks like</div>
                  <div className="space-y-4">
                    {[
                      "Protecting income and family",
                      "Avoiding coverage gaps",
                      "Making clear, confident decisions",
                      "Built around your life, not a template",
                      "Not overpaying or carrying coverage you don’t actually need",
                    ].map((line) => (
                      <div key={line} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4">
                        <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
                        <span className="text-white/80">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSITION */}
        <section className="mx-auto max-w-4xl px-6 py-16 text-center text-white/70">
          Most people don’t think about protection and planning until something forces them to. I’ve lived through enough to know it’s better to be prepared before that moment comes.
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div className="rounded-[2rem] overflow-hidden border border-white/10">
              <img src="/mnt/data/TW_headshot.jpg" alt="Tara Wallace" className="w-full h-full object-cover" />
            </div>

            <div>
              <p className="text-base leading-8 text-white/70">
                I’m a single mom of two, I’ve built businesses, led at the executive level in tech, and I’ve navigated some very real life moments - including going through cancer twice.
              </p>
              <p className="mt-4 text-base leading-8 text-white/70">
                Experiences like that have a way of sharpening your perspective. You get clear on what actually matters, what needs to be protected, and how important it is to have the right plans in place before life forces those decisions on you.
              </p>
              <p className="mt-4 text-base leading-8 text-white/70">
                Today, I work with people who are building something - their income, their family, their future - helping them bring clarity and control to the parts of their financial life that are easy to put off.
              </p>
              <p className="mt-4 text-base leading-8 text-white/70">
                Because the truth is - most people aren’t lacking options. They’re lacking clarity. And that’s where I come in.
              </p>
              <p className="mt-4 text-base leading-8 text-white/70">
                Outside of work, you’ll usually find me on a golf course or a pickleball court - and now that I’ve officially been relieved of at least half my chauffeur duties, I’m still figuring out what to do with all that “extra” time… usually a great glass of wine, a good laugh, and the kind of company that makes everything feel a little lighter.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Confidence comes from clarity.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-[#1c2a38]/30 p-7">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-[#1c2a38]/40 p-10 text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              You don’t need a perfect plan. You just need the right one - to protect what matters most.
            </h2>
            <p className="mt-5 text-white/70">
              For you, your family, and everything you’re building. We’ll simplify the noise, uncover what’s missing, and make sure you’re covered - wherever life takes you next.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#contact" className="rounded-2xl bg-white px-6 py-4 text-[#0f1115] font-semibold">
                Start Your Plan
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-sm text-white/50">© 2026 Covarum</div>
      </footer>
    </div>
  );
}
