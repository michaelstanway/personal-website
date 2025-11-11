// app/page.tsx
const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
    {children}
  </span>
);

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <header className="relative mx-auto max-w-6xl px-4 pt-16 pb-20">
        {/* soft spotlight */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute top-40 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag">Founder</span>
            <span className="tag">Media & Design</span>
            <span className="tag">Neurotech</span>
            <span className="tag">Sat/AI</span>
          </div>

          <h1 className="text-pretty text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Michael Stanway — building at the edge of <Accent>vision, compression, and creativity</Accent>
          </h1>

          <p className="max-w-2xl text-lg text-ink-300">
            I start and ship things. This site collects selected projects across startups, tools,
            and film/media. If you want the quick version, jump to projects; otherwise, scroll.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a className="btn btn-primary" href="#projects">See projects</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Project 1 */}
          <article className="card p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Compression for EO</h3>
              <span className="text-xs text-ink-400">AI • On-device</span>
            </div>
            <p className="mt-2 text-ink-300">
              Variable-rate neural compression for satellite imagery. Designed for Jetson-class
              hardware; trade space between lossless on critical pixels and efficient lossy
              elsewhere.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">Next.js</span>
              <span className="tag">CUDA/GPU</span>
              <span className="tag">HPC</span>
            </div>
          </article>

          {/* Project 2 */}
          <article className="card p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Active Predictive Coding</h3>
              <span className="text-xs text-ink-400">Vision • Research</span>
            </div>
            <p className="mt-2 text-ink-300">
              Inference-time learning for long-video parsing. Efficient attention to only what
              matters, enabling lightweight search and reporting.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">PyTorch</span>
              <span className="tag">Vision</span>
              <span className="tag">Tooling</span>
            </div>
          </article>

          {/* Project 3 */}
          <article className="card p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Merge (media)</h3>
              <span className="text-xs text-ink-400">Film • Events</span>
            </div>
            <p className="mt-2 text-ink-300">
              Short-form films, podcasts, and events pairing artists with technologists to make
              complex ideas feel obvious, not opaque.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">Directing</span>
              <span className="tag">Post</span>
              <span className="tag">Live</span>
            </div>
          </article>

          {/* Project 4 */}
          <article className="card p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Neurotech notes</h3>
              <span className="text-xs text-ink-400">R&D • Notes</span>
            </div>
            <p className="mt-2 text-ink-300">
              Explorations in stimulation, sensing, and modeling — practical notes on building
              useful systems that play well with biology.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">BCI</span>
              <span className="tag">Clinical</span>
              <span className="tag">Modeling</span>
            </div>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 pt-10">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-white">About</h2>
          <p className="mt-2 text-ink-300">
            I like building high-leverage tools and stories. Background spans startup leadership,
            product & research, and media. I value clear writing, tight feedback loops, and calm
            intensity.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">Let’s work on something useful</h2>
            <p className="mt-2 max-w-xl text-ink-300">
              For collaborations, intros, or speaking, email me. A short brief is ideal.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="mailto:hello@example.com">Email</a>
            <a className="btn btn-ghost" href="https://github.com/michaelstanway" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
