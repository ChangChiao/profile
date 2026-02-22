const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "使用 Next.js 與 TypeScript 打造的電商平台，支援 SSR、購物車系統與金流整合。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Real-time Dashboard",
    description:
      "即時數據儀表板，透過 WebSocket 串接後端資料，搭配 D3.js 進行資料視覺化。",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    link: "#",
  },
  {
    title: "Design System",
    description:
      "建立企業級 Design System，包含 30+ 可複用元件，搭配 Storybook 文件與自動化測試。",
    tags: ["React", "Storybook", "Jest", "SCSS"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "以 MDX 為基礎的技術部落格，支援深色模式、SEO 最佳化與靜態頁面生成。",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          Portfolio
        </p>
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group rounded-xl border border-surface-light bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2.5 py-1 text-xs text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
