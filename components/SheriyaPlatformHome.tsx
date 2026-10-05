"use client";

import { useState } from "react";
import { ArrowRight, Check, Layers3, Menu, Sparkles, X, Zap } from "lucide-react";
import SheriyaEnquiryForm from "@/components/SheriyaEnquiryForm";

const productTabs = [
  { name: "Build", title: "A digital product built around how your business actually works.", copy: "From the first user flow to the last API, we combine strategy, design, and engineering in one hands-on team.", bullets: ["Websites and web apps", "Internal tools and dashboards", "Custom integrations"], label: "PRODUCT BUILD / 01" },
  { name: "Design", title: "Make every screen feel obvious, useful, and unmistakably yours.", copy: "We shape a clear brand presence and a component system your team can keep using after launch.", bullets: ["UX strategy and flows", "High-conversion interfaces", "Design systems"], label: "DESIGN SYSTEM / 02" },
  { name: "Grow", title: "Launch with momentum—and a partner for the next version.", copy: "Keep improving the product, content, and conversion path with a small team that already knows the context.", bullets: ["Launch support", "Feature iteration", "Content and motion"], label: "GROWTH LOOP / 03" },
];

const faqs = [
  ["What can Team Sheriya build?", "We design and build marketing websites, customer portals, dashboards, workflow tools, and custom web products."],
  ["Do you only work with new businesses?", "No. We work with founders and established teams that need a clearer digital product or a stronger web presence."],
  ["Can you improve an existing product?", "Yes. We can audit an existing experience, identify the important fixes, and create a practical roadmap for the next release."],
];

export default function SheriyaPlatformHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const active = productTabs[tab];
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <main className="sheriya-page">
      <div className="sheriya-orb sheriya-orb-one" /><div className="sheriya-orb sheriya-orb-two" />
      <nav className="sheriya-nav" aria-label="Main navigation">
        <button onClick={() => scrollTo("top")} className="sheriya-logo" aria-label="Go to top">Team<span>Sheriya</span><i /></button>
        <div className="sheriya-nav-links"><button onClick={() => scrollTo("platform")}>Platform</button><button onClick={() => scrollTo("services")}>What we do</button><button onClick={() => scrollTo("about")}>Why us</button></div>
        <button onClick={() => scrollTo("contact")} className="sheriya-nav-cta">Start a project <ArrowRight size={16} /></button>
        <button className="sheriya-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      {menuOpen && <div className="sheriya-mobile-menu"><button onClick={() => scrollTo("platform")}>Platform</button><button onClick={() => scrollTo("services")}>What we do</button><button onClick={() => scrollTo("about")}>Why us</button><button onClick={() => scrollTo("contact")}>Start a project</button></div>}

      <section id="top" className="sheriya-hero">
        <div className="sheriya-kicker"><Sparkles size={14} /> Digital products for teams with momentum</div>
        <h1>Build the thing your<br /><em>business</em> has been waiting for.</h1>
        <p>Team Sheriya is your compact product team for sharper websites, useful web applications, and digital systems that move work forward.</p>
        <div className="sheriya-hero-actions"><button onClick={() => scrollTo("contact")} className="sheriya-primary">Let&apos;s build <ArrowRight size={18} /></button><button onClick={() => scrollTo("platform")} className="sheriya-secondary">See how it works</button></div>
        <div className="sheriya-stats"><div><strong>15+</strong><span>projects delivered</span></div><div><strong>10+</strong><span>businesses supported</span></div><div><strong>1+</strong><span>years of building</span></div></div>
        <div className="sheriya-hero-product" aria-hidden="true"><div className="window-top"><span /><span /><span /><b>SHERIYA / PRODUCT SPACE</b></div><div className="product-inner"><div><small>YOUR NEXT RELEASE</small><h2>Built for<br />momentum.</h2><button>Explore product <ArrowRight size={13} /></button></div><div className="product-tiles"><div><i className="violet" /><span>Discover</span><b>01</b></div><div><i className="orange" /><span>Design</span><b>02</b></div><div><i className="lime" /><span>Launch</span><b>03</b></div></div></div></div>
      </section>
      <section className="sheriya-marquee" aria-label="Services"><div>WEB PRODUCTS <i /> INTERFACES <i /> SYSTEMS <i /> WEBSITES <i /> MOTION <i /> WEB PRODUCTS <i /> INTERFACES <i /> SYSTEMS <i /></div></section>

      <section id="platform" className="sheriya-section sheriya-platform">
        <p className="sheriya-eyebrow">ONE TEAM. ALL THE IMPORTANT PARTS.</p><h2>You bring the ambition.<br />We make it <em>real.</em></h2><p className="sheriya-intro">No hand-off maze. No scattered freelancers. Just one product-minded team keeping every decision connected.</p>
        <div className="sheriya-tabs"><div className="sheriya-tab-list">{productTabs.map((item, index) => <button key={item.name} className={tab === index ? "active" : ""} onClick={() => setTab(index)}><span>0{index + 1}</span>{item.name}<ArrowRight size={16} /></button>)}</div><article className="sheriya-tab-panel" key={active.name}><p>{active.label}</p><h3>{active.title}</h3><span>{active.copy}</span><ul>{active.bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul><div className="sheriya-mini-dashboard"><div className="dashboard-sidebar"><Layers3 size={17} /><span /><span /><span /></div><div className="dashboard-body"><div><small>PROJECT HEALTH</small><b>On track</b></div><div className="dashboard-chart">{[35, 65, 48, 78, 61, 92, 74].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div></div></article></div>
      </section>

      <section id="services" className="sheriya-section sheriya-services"><p className="sheriya-eyebrow">THE SHERIYA TOOLKIT</p><h2>Everything you need to<br />make the <em>next move.</em></h2><div className="sheriya-service-grid">{[["01", "Websites", "A front door that makes your best customers want to walk in."], ["02", "Web products", "Tools, portals and platforms people actually enjoy using."], ["03", "Product design", "Clear flows and a visual system designed to keep working."], ["04", "Growth content", "Motion and content that give the launch somewhere to go."]].map(([number, title, copy]) => <article key={number}><span>{number}</span><Zap size={23} /><h3>{title}</h3><p>{copy}</p><button onClick={() => scrollTo("contact")}>Explore <ArrowRight size={15} /></button></article>)}</div></section>
      <section id="about" className="sheriya-proof"><div><p className="sheriya-eyebrow">WHY TEAM SHERIYA</p><h2>The care of a small team.<br />The thinking of a <em>product company.</em></h2></div><div className="sheriya-proof-cards"><article><b>01</b><h3>We ask before we build.</h3><p>Good products start by understanding the people and decisions on the other side.</p></article><article><b>02</b><h3>We make complexity feel simple.</h3><p>We turn messy operational details into experiences people can understand quickly.</p></article><article><b>03</b><h3>We stay close to the outcome.</h3><p>Launch is not the end; it is where the useful feedback starts.</p></article></div></section>
      <section className="sheriya-section sheriya-faq"><p className="sheriya-eyebrow">NO MYSTERY, JUST ANSWERS</p><h2>A few things people<br />ask us <em>first.</em></h2><div>{faqs.map(([question, answer], index) => <article key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>{question}<span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>
      <section id="contact" className="sheriya-contact"><p>YOUR NEXT DIGITAL MOVE STARTS HERE</p><h2>Ready when<br /><em>you are.</em></h2><p className="sheriya-contact-copy">Tell us a little about your idea and we will reply with the next practical step.</p><SheriyaEnquiryForm /><small>Or write to <a href="mailto:tarunbusiness912@gmail.com">tarunbusiness912@gmail.com</a></small></section>
      <footer className="sheriya-footer"><span className="sheriya-logo">Team<span>Sheriya</span><i /></span><p>© {new Date().getFullYear()} Team Sheriya · <a href="/privacy-policy">Privacy</a> · <a href="/terms-and-conditions">Terms</a> · <a href="/cookie-policy">Cookies</a> · <a href="/refund-policy">Refunds</a></p><button onClick={() => scrollTo("top")}>Back to top ↑</button></footer>
    </main>
  );
}
