import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnimatedList from './components/AnimatedList'
import CircularGallery from './components/CircularGallery'
import './styles.css'

const projectData = [
  { slug: 'weifang-ip', number: '01', title: '潍坊城市 IP 视觉计划', category: '品牌视觉 · 城市文化', images: Array.from({ length: 20 }, (_, i) => `/assets/projects/weifang-ip/${i + 1}${i === 18 ? '.png' : '.jpg'}`) },
  { slug: 'aigc-awards', number: '02', title: 'AIGC 创意图像实验', category: 'AI 视觉 · 创意叙事', images: ['/assets/projects/aigc-awards/1.jpg', '/assets/projects/aigc-awards/2.jpg', '/assets/projects/aigc-awards/3.jpg', '/assets/projects/aigc-awards/4.jpg', '/assets/projects/aigc-awards/5.png', '/assets/projects/aigc-awards/6.jpg'] },
  { slug: 'milan-week', number: '03', title: '米兰设计周视觉叙事', category: '编辑设计 · 海报', images: ['/assets/projects/milan-week/1.jpg', '/assets/projects/milan-week/2.jpg', '/assets/projects/milan-week/3.jpg', '/assets/projects/milan-week/4.jpg', '/assets/projects/milan-week/5.png'] },
  { slug: 'aib-university', number: '04', title: 'AIB 亚洲大学生设计赛', category: '视觉创意 · 竞赛', images: ['/assets/projects/aib-university/1.jpg', '/assets/projects/aib-university/2.jpg', '/assets/projects/aib-university/3.jpg', '/assets/projects/aib-university/4.jpg'] },
  { slug: 'party-cultural', number: '05', title: '党建文创设计', category: '文创设计 · 包装', images: ['/assets/projects/party-cultural/1.jpg', '/assets/projects/party-cultural/2.png'] },
  { slug: 'lanqiao-national', number: '06', title: '蓝桥杯文创设计 · 国赛', category: '文创设计 · 国赛三等奖', images: Array.from({ length: 5 }, (_, i) => `/assets/projects/lanqiao-national/${i + 1}.jpg`) },
  { slug: 'lanqiao-provincial', number: '07', title: '蓝桥杯文创设计 · 省赛', category: '文创设计 · 省赛二等奖', images: Array.from({ length: 3 }, (_, i) => `/assets/projects/lanqiao-provincial/${i + 1}.jpg`) },
  { slug: 'lanqiao-poster', number: '08', title: '蓝桥杯海报设计', category: '海报设计 · 省赛二等奖', images: ['/assets/projects/lanqiao-poster/1.png', '/assets/projects/lanqiao-poster/2.png', '/assets/projects/lanqiao-poster/3.png', '/assets/projects/lanqiao-poster/4.jpg'] },
]

const certificates = Array.from({ length: 14 }, (_, i) => `/assets/certificates-ordered/${String(i + 1).padStart(2, '0')}.jpg`)
const capabilityItems = [
  { number: '01', title: '品牌叙事', description: '从品牌定位到视觉语言，建立可持续生长的识别体系。' },
  { number: '02', title: '包装落地', description: '兼顾创意、工艺与货架表现，让每一次设计真正进入市场。' },
  { number: '03', title: 'AI 共创', description: '以 AIGC 拓展视觉想象边界，将灵感高效转为创作方案。' },
  { number: '04', title: '全栈协作', description: '理解商业目标，能够跨部门推进项目从概念到成品。' },
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

function Navigation() { return <nav className="nav shell"><a className="brand" href="/"><b>ZHAO</b><i /> <b>PEIYI</b></a><div className="nav__links"><a href="/#resume">简历</a><a href="/#awards">荣誉</a><a href="/#works">作品</a><a href="/#capability">能力</a></div><a className="nav__contact" href="/#contact">开启合作 <Arrow /></a></nav> }

function Home() {
  return <main>
    <section className="hero" id="top"><div className="hero__art"><img src="/assets/projects/party-cultural/1.jpg" alt="赵沛义设计作品封面" /></div><div className="hero__veil" /><Navigation /><div className="hero__content shell"><p className="eyebrow">PORTFOLIO 2026 · VISUAL / AI / BRAND</p><div className="hero__title-row"><h1>以设计，<br /><em>让品牌被看见。</em></h1><p className="hero__edition">ZHAO<br />PEIYI<br /><span>01—05</span></p></div><div className="hero__bottom"><p>赵沛义 · 视觉设计师 / AI 设计师 / 品牌设计师<br />用视觉系统与 AI 创作，回应每一次真实的品牌表达。</p><a href="#resume" className="scroll-link">向下探索 <span>↓</span></a></div></div></section>

    <section className="resume section" id="resume"><div className="shell"><div className="section-label"><span>01</span><span>RESUME</span></div><div className="resume__grid"><div className="resume__intro"><p className="large-copy">我叫赵沛义，是一名专注于品牌、包装与 AI 视觉创作的视觉设计师。</p><p>擅长把创意转化为可落地的视觉方案，在品牌语境、产品工艺与真实市场之间，找到准确而有温度的表达。</p></div><div className="resume__info"><div><span>教育经历</span><h3>潍坊学院</h3><p>视觉传达设计 · 本科<br />2023.09 — 2027.07</p></div><div><span>项目经验</span><h3>山东大艾姜山农业科技有限公司</h3><p>包装视觉设计 · 2025.10 — 2026.04<br />完成 10+ 款产品包装与高端礼盒设计，覆盖 80% 以上核心在售产品。</p></div><div><span>工具与方法</span><p>Photoshop · Illustrator · Blender · Codex · ChatGPT<br />品牌视觉系统 · 包装落地 · AIGC 创意生成</p></div></div><div className="stats"><div><strong>10<span>+</span></strong><p>省级及以上奖项</p></div><div><strong>10<span>+</span></strong><p>包装设计落地</p></div><div><strong>80<span>%</span></strong><p>核心产品视觉覆盖</p></div></div></div></div></section>

    <section className="recognition" id="awards"><div className="shell recognition__head"><div className="section-label"><span>02</span><span>RECOGNITION</span></div><div><h2>荣誉不是终点，<em>是持续创造的记录。</em></h2><p>从代表性认可，到完整的创作轨迹。</p></div></div><div className="shell featured-certs"><article className="featured-cert featured-cert--scholarship"><div className="featured-cert__index">01</div><div className="featured-cert__image"><img src="/assets/national-scholarship.jpg" alt="国家奖学金证书" /><span>国家级</span></div><div className="featured-cert__copy"><span>FEATURED HONOR / 2025</span><h3>国家<br /><em>奖学金</em></h3><p>以持续、稳定的学业表现与设计实践能力获得认可。这份荣誉是长期投入的一个坐标，也是下一次创作的起点。</p><b>DISCIPLINE · CRAFT · CONSISTENCY</b></div></article><article className="featured-cert featured-cert--brics"><div className="featured-cert__index">02</div><div className="featured-cert__image"><img src="/assets/brics-2025.jpg" alt="2025 一带一路暨金砖国家技能发展与技术创新大赛证书" /><span>国赛二等奖</span></div><div className="featured-cert__copy"><span>FEATURED HONOR / 2025</span><h3>金砖国家<br /><em>技能大赛</em></h3><p>以 AIGC 创意与技术创新回应真实命题，在跨学科的竞赛语境中探索设计、技术与叙事的结合。</p><b>AIGC · DESIGN · INNOVATION</b></div></article></div><div className="certificate-gallery-head shell"><div><span>FULL HONOR ARCHIVE</span><h3>沿着荣誉，<br />向左右展开。</h3></div><p>14 份证书已按编号排列。将鼠标移至画廊内滚动，<br />中心证书自动成为视觉焦点。</p></div><CircularGallery items={certificates.map((image, index) => ({ image, label: `CERTIFICATE · ${String(index + 1).padStart(2, '0')}` }))} /></section>

    <section className="works section" id="works"><div className="shell works__head"><div className="section-label"><span>03</span><span>SELECTED WORKS</span></div><p>八个项目单元<br />点击查看完整作品</p></div><div className="projects shell">{projectData.map(project => <a className="project" style={{ aspectRatio: project.slug === 'party-cultural' ? '4032 / 3024' : '3508 / 4961' }} href={`/project/${project.slug}`} key={project.slug}><img src={project.images[0]} alt={project.title} /><div className="project__shade" /><div className="project__meta"><span>{project.number}</span><span>{project.category}</span></div><div className="project__title"><h3>{project.title}</h3><span className="project__button"><Arrow /></span></div></a>)}</div></section>

    <section className="capability-section section" id="capability"><div className="shell capability"><div className="capability__intro"><div className="section-label"><span>04</span><span>CAPABILITY</span></div><h2>理性构建，<br />感性表达。</h2></div><AnimatedList items={capabilityItems} className="strengths" renderItem={(item) => <article className="strength"><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><Arrow /></article>} /></div></section>

    <footer className="contact" id="contact"><div className="contact__glow" /><div className="shell contact__inner"><div className="section-label"><span>05</span><span>CONTACT</span></div><p className="contact__hint">有趣的项目、灵感或合作想法</p><a className="contact__title" href="mailto:18562793146@163.com">LET'S MAKE<br /><em>IT MATTER.</em> <Arrow /></a><div className="contact__bottom"><p>© 2026 ZHAO PEIYI<br />VISUAL DESIGNER</p><div><a href="tel:18562793146">185 6279 3146</a><a href="mailto:18562793146@163.com">18562793146@163.com</a></div><a href="#top">BACK TO TOP ↑</a></div></div></footer>
  </main>
}

function ProjectPage({ project }) { return <main className="detail"><header className="detail__nav shell"><a className="brand" href="/"><b>ZHAO</b><i /> <b>PEIYI</b></a><a className="back" href="/#works">← 返回全部作品</a></header><section className="detail__head shell"><span>{project.number} / 08</span><p>{project.category}</p><h1>{project.title}</h1><p>本项目收录 {project.images.length} 张作品图，涵盖从概念到最终呈现的完整视觉探索。</p></section><div className="detail__gallery shell">{project.images.map((image, i) => <figure key={image} className={i === 0 ? 'detail__cover' : ''}><img src={image} alt={`${project.title} · ${i + 1}`} /><figcaption>{String(i + 1).padStart(2, '0')}</figcaption></figure>)}</div><footer className="detail__footer shell"><a href="/#works">← 全部作品</a><a href="#top">回到顶部 ↑</a></footer></main> }

function App() { const match = window.location.pathname.match(/^\/project\/([^/]+)/); const project = match && projectData.find(item => item.slug === match[1]); return project ? <ProjectPage project={project} /> : <Home /> }

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
