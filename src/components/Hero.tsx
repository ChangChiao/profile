const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Next.js",
      "Nuxt",
      "HTML",
      "CSS/SCSS",
      "Tailwind CSS",
      "Webpack",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Koa",
      "RESTful API",
      "GraphQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Nginx",
    ],
  },
  {
    title: "Other",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "Jest",
      "Cypress",
      "Playwright",
      "Figma",
      "Agile / Scrum",
    ],
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Intro */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
              Senior Frontend Engineer
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Joe Chang</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              擁有多年前端開發經驗，專注於打造高效能、可擴展的 Web 應用程式。
              熱衷於提升使用者體驗、前端架構設計以及現代化前端技術的實踐與推廣。
            </p>
            <a
              href="https://medium.com/coding-hot-pot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.52-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.54-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
              Blog — Coding Hot Pot
            </a>
          </div>

          {/* Right - Skills */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white">Skills</h2>
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary/80 uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-surface-light bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
