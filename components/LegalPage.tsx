import Link from "next/link";

type Section = { title: string; body: string[] };

export default function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: Section[] }) {
  return (
    <main className="legal-page">
      <nav><Link href="/" aria-label="Team Sheriya home">team<span>sheriya</span></Link></nav>
      <article>
        <p>TEAM SHERIYA / LEGAL</p>
        <h1>{title}</h1>
        <time dateTime={updated}>Last updated: {updated}</time>
        {sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <p className="legal-note">This page is a plain-language operational notice for Team Sheriya. Have a qualified legal professional review it for your specific business, services, jurisdiction, and launch date.</p>
      </article>
    </main>
  );
}
