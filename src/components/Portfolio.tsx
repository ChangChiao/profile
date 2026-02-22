const projects = [
  {
    title: "全台公車動態時刻查詢",
    description:
      "串接 TDX 交通資料 API，提供公車路線查詢、附近站牌搜尋與即時到站資訊，支援收藏功能與每分鐘自動更新。",
    tags: ["Vue.js", "Vuex", "Tailwind CSS", "Leaflet"],
    link: "https://github.com/ChangChiao/bus_timetable",
  },
  {
    title: "總統即時開票全台地圖",
    description:
      "以 D3.js 與 TopoJSON 呈現 2020 總統大選各區域投票數據，搭配 GSAP 動畫打造互動式開票地圖。",
    tags: ["Angular", "TypeScript", "D3.js", "GSAP"],
    link: "https://github.com/ChangChiao/president-invoice",
  },
  {
    title: "線上 PDF 文件簽署工具",
    description:
      "上傳 PDF 後可於線上新增電子簽名並下載已簽署文件，使用 Fabric.js 處理畫布簽名與 jsPDF 產出檔案。",
    tags: ["React", "TypeScript", "Fabric.js", "Chakra UI"],
    link: "https://f2e-2022-sign.vercel.app/",
  },
  {
    title: "台灣旅遊景點導覽",
    description:
      "提供全台景點、餐廳與活動查詢功能，支援分區篩選與漸進式載入，採用 Redux Toolkit 管理狀態。",
    tags: ["React", "Redux Toolkit", "Styled Components"],
    link: "https://changchiao.github.io/react_attractions/#/",
  },
  {
    title: "自行車道地圖資訊整合網",
    description:
      "根據使用者位置搜尋附近 YouBike 租借站與自行車道，結合 Leaflet 地圖呈現路線與景點資訊。",
    tags: ["Vue 3", "Vite", "Tailwind CSS", "Leaflet"],
    link: "https://vue-youbike.vercel.app/",
  },
  {
    title: "視差滾動活動官網",
    description:
      "使用 GSAP 搭配視差滾動效果打造 F2E 修煉精神時光屋活動網站，展現流暢的捲動動畫體驗。",
    tags: ["Vue 3", "Vite", "Tailwind CSS", "GSAP"],
    link: "https://f2-e-2022.vercel.app/",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
