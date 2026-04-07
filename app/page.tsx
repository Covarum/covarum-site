const solutions = [
  {
    title: "Life Insurance",
    description:
      "Protect the people who depend on you and create a plan that fits your real life.",
  },
  {
    title: "Mortgage Protection",
    description:
      "Help protect your home and your family's stability if something happens to you.",
  },
  {
    title: "Health Insurance",
    description:
      "Find coverage that works when you need it, without unnecessary confusion.",
  },
  {
    title: "Disability Insurance",
    description:
      "Protect your income, not just your health, with the right coverage in place.",
  },
  {
    title: "Medicare",
    description:
      "Navigate your options with clarity and avoid costly gaps or surprises.",
  },
  {
    title: "Long-Term Care",
    description:
      "Plan ahead so future care decisions stay in your control, not someone else's.",
  },
  {
    title: "Annuities",
    description:
      "Create more stability with structured strategies designed for long-term income.",
  },
  {
    title: "Retirement Planning",
    description:
      "Build a thoughtful strategy around the life you want to protect and enjoy.",
  },
  {
    title: "Business Solutions",
    description:
      "Put the right protection in place for your business, your partners, and your people.",
  },
];

const audiences = [
  "Families planning for stability",
  "Professionals protecting income",
  "Business owners managing risk",
  "Individuals preparing for retirement",
];

const pillars = [
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

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] text-[#1f1a17]">
      <header className="sticky top-0 z-50 border-b border-[#ddd2c6] bg-[#f7f2eb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <div>
            <div className="text-xl font-semibold tracking-[0.22em] text-[#1f1a17]">
              COVARUM
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.26em] text-[#8a6a43]">
              Protection Solutions
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#4f443c] md:flex">
            <a href="/" className="transition hover:text-[#1f1a17]">
              Home
            </a>
            <a href="/solutions" className="transition hover:text-[#1f1a17]">
              Solutions
            </a>
            <a href="/about" className="transition hover:text-[#1f1a17]">
              About
            </a>
            <a href="/team" className="transition hover:text-[#1f1a17]">
              Team
            </a>
            <a href="/contact" className="transition hover:text-[#1f1a17]">
              Contact
            </a>
          </nav>

          <a
            href="https://go.covarum.com/start-625573"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Start Here
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#ddd2c6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,171,133,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.62),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#8a6a43]">
              Protection and planning for real life
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              You do not need more options. You need clarity.
            </h1>

            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[#4e443d]">
              <p>
                Life has a funny way of making you think you’re on track… right
                before it tells you to “recalculate.”
              </p>
              <p>
                At Covarum, we don’t just plan for where you’re going - we help
                protect you through the detours. After all, the unexpected isn't
                the exception. It’s part of the plan.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Start Here
              </a>

              <a
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-[#1f1a17] px-7 py-3.5 text-sm font-medium text-[#1f1a17] transition hover:bg-white/70"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ddd2c6] bg-white/70 p-7 shadow-[0_24px_80px_rgba(31,26,23,0.08)] backdrop-blur lg:p-8">
            <div className="rounded-[1.5rem] border border-[#e8ddd1] bg-[#fcfaf7] p-7 lg:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6a43]">
                Why Covarum
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.02em] text-[#1f1a17] sm:text-[2rem]">
                Most people aren’t lacking options. They’re lacking clarity.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#5b5048]">
                We simplify the noise, uncover what’s missing, and help you
                build the right structure around what actually matters.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl bg-[#f4ede5] p-4"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a6a43]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5b5048]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ddd2c6] bg-[#fcfaf7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm font-medium uppercase tracking-[0.18em] text-[#6f6258] sm:px-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:px-12">
          <span>Independent guidance</span>
          <span>Personalized strategy</span>
          <span>Long-term relationships</span>
          <span>Thoughtful protection planning</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8a6a43]">
              A better way to approach planning
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
              Real protection starts with understanding what actually matters.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#4e443d]">
            <p>
              Most people don’t need more generic recommendations. They need
              someone to help them understand what they already have, what is
              missing, and what is worth protecting.
            </p>
            <p>
              Covarum was built to make those conversations clearer, more
              personal, and more thoughtful from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd2c6] bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8a6a43]">
              Solutions
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
              Solutions built around real life, not one-size-fits-all advice.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4e443d]">
              Explore the areas where Covarum can help you protect your income,
              your family, your health, and your future.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <a
                key={solution.title}
                href="/solutions"
                className="group rounded-[1.75rem] border border-[#ddd2c6] bg-[#fcfaf7] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(31,26,23,0.08)]"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.02em] text-[#1f1a17]">
                      {solution.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#5b5048]">
                      {solution.description}
                    </p>
                  </div>

                  <span className="mt-8 inline-flex items-center text-sm font-medium uppercase tracking-[0.16em] text-[#8a6a43]">
                    Learn More
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-[2rem] border border-[#ddd2c6] bg-[#fcfaf7] p-8 lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8a6a43]">
              Who we help
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
              Built for where you are - and where you’re going.
            </h2>

            <ul className="mt-8 space-y-4">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="flex items-start gap-3 text-base leading-7 text-[#4e443d]"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#b09167]" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#ddd2c6] bg-[#1f1a17] p-8 text-white lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#c8aa7a]">
              Why clients choose Covarum
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-medium">Personalized guidance</h3>
                <p className="mt-2 text-base leading-7 text-white/75">
                  Recommendations are built around your life, not pushed from a
                  generic playbook.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Clear conversations</h3>
                <p className="mt-2 text-base leading-7 text-white/75">
                  We make complex decisions easier to understand so you can move
                  forward with confidence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Long-term thinking</h3>
                <p className="mt-2 text-base leading-7 text-white/75">
                  The goal is not a quick fix. It is thoughtful protection that
                  evolves as life changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ddd2c6] bg-[#efe5d9]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8a6a43]">
                About Covarum
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
                A more personal approach to protection and planning.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#4e443d]">
              <p>
                Covarum was built on the belief that people deserve better
                guidance, clearer conversations, and a partner who understands
                what is actually at stake.
              </p>
              <p>
                This is not about overwhelming you with options. It is about
                helping you understand what fits, what matters, and what
                deserves protection.
              </p>

              <div className="pt-2">
                <a
                  href="/about"
                  className="inline-flex items-center rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-white/60"
                >
                  Learn More About Covarum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="rounded-[2.25rem] border border-[#ddd2c6] bg-[#fcfaf7] px-8 py-12 text-center shadow-[0_20px_60px_rgba(31,26,23,0.07)] sm:px-12 lg:px-16 lg:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8a6a43]">
            Start here
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            You don’t need a perfect plan. You just need the right one.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4e443d]">
            Start with a conversation and get clear on what makes sense for you,
            your family, and everything you’re building.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://go.covarum.com/start-625573"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Start Here
            </a>

            <a
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-[#1f1a17] px-7 py-3.5 text-sm font-medium text-[#1f1a17] transition hover:bg-white"
            >
              View Solutions
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ddd2c6] bg-[#f7f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-[#5b5048] sm:flex-row sm:items-center">
            <div>© 2026 Covarum</div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://go.covarum.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1f1a17]"
              >
                Privacy Policy
              </a>

              <a
                href="https://go.covarum.com/terms--conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1f1a17]"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
