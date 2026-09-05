import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const experiences = [
  { image: "/experience/nit_logo.png", title: "Full-Stack Developer", place: "NTUNISo", link: "https://ntuniso.net/", date: "May 2026 — Now", description: "Creating tools that make everyday academic and administrative work a little easier." },
  { image: "/experience/rottendoge.png", title: "Game Developer", place: "RottenDoge", link: "https://www.roblox.com/communities/34121244/RottenDoge#!/about", date: "Oct 2024 — Now", description: "Working with the studio team to bring gameplay mechanics and player experiences to life." },
  { image: "/experience/ghost.png", title: "Game Developer", place: "Ghost Extermination Company", link: "https://www.roblox.com/communities/14813831/Ghost-Extermination-Company#!/about", date: "Sep 2023 — Jul 2024", description: "Collaborating on core gameplay systems and improving the experience for players." },
  { image: "/experience/ntun.png", title: "Student", place: "NTUN", link: "http://ntun.ac.th/", date: "2021 — Now", description: "Learning, experimenting, and finding new things to be curious about." },
];

export default function Experiences() {
  return (
    <section aria-labelledby="experience-title" className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
      <div><p className="eyebrow">03 / THE JOURNEY SO FAR</p><h2 id="experience-title" className="section-title">Learning.<br />Building. Growing.</h2><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">The teams, places, and experiences that have shaped the way I create.</p></div>
      <div className="border-t border-border">{experiences.map((exp) => <article key={exp.place} className="flex gap-5 border-b border-border py-7"><Image src={exp.image} alt="" width={44} height={44} className="mt-1 size-11 shrink-0 rounded-full object-contain" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><h3 className="text-lg font-bold">{exp.title}</h3><span className="text-xs text-muted-foreground">{exp.date}</span></div><a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-link mt-1 text-sm text-primary">{exp.place}<ArrowUpRight className="size-3" /></a><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p></div></article>)}</div>
    </section>
  );
}
