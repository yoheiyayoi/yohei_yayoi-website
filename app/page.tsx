import Experiences from "@/components/experiences";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { websiteProjects } from "@/data/projects/website";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";

const selectedWork = [8, 7, 6].flatMap((id) => websiteProjects.filter((project) => project.id === id));

export default function Page() {
  return (
    <div>
      <section className="site-width hero-grid" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> THE PORTFOLIO OF YOHEI_YAYOI</p>
          <h1 id="intro-title" className="hero-title">A little curiosity.<br />A world of<br /><span className="text-primary">possibilities.</span></h1>
          <div className="mt-7 flex items-center gap-3 text-sm"><span className="h-px w-7 bg-primary" /><p>Hi, I’m <strong className="font-bold">yooo_</strong> a game &amp; web developer.</p></div>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">Turning little ideas into things you can play, use, and enjoy. Building with curiosity since 2020.</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild className="h-12 rounded-none px-6"><Link href="/work">Explore my work <ArrowUpRight className="ml-4" /></Link></Button>
            <a href="#about-me" className="text-link text-sm">A little about me <ArrowDown className="size-4" /></a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="absolute inset-x-6 top-6 z-10 flex items-start justify-between text-primary"><span className="text-[11px] tracking-[0.18em]">DEVELOPER.<br />CREATOR. EXPLORER.</span><Asterisk className="size-9" strokeWidth={1} /></div>
          {/* <span aria-hidden="true" className="portrait-word">hello.</span> */}
          <Image src="/yoheiyayoi_body_avatar.png" alt="Illustrated portrait of yooo_ wearing round glasses and a blue shirt" width={1200} height={1200} priority sizes="(max-width: 767px) 90vw, 440px" className="portrait-image" />
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-primary/15 bg-[#e5f2ff] px-6 py-4"><span className="text-sm">yohei_yayoi <span className="text-muted-foreground">/ yooo_</span></span></div>
        </div>
      </section>
      <div className="border-y border-border">
        <div className="site-width flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 text-xs text-muted-foreground sm:text-sm">
          <span className="eyebrow text-foreground">IDEAS TAKE MANY FORMS</span><span>Game development</span><span aria-hidden="true" className="text-primary">✳</span><span>Web experiences</span><span aria-hidden="true" className="hidden text-primary sm:block">✳</span><span>Experiments &amp; more</span>
        </div>
      </div>
      <section className="site-width section-space" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title" className="section-title">From idea to everyday.</h2></div><Link href="/work" className="text-link text-sm">All projects <ArrowUpRight className="size-4" /></Link></div>
        <div className="grid gap-9 md:grid-cols-3 md:gap-6">
          {selectedWork.map((project, index) => (
            <a key={project.id} href={project.linkWebsite} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 90vw, 360px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-background text-primary"><ArrowUpRight className="size-4" /></span></div>
              <div className="mt-5 flex items-center justify-between text-[10px] tracking-[0.15em] text-muted-foreground"><span>WEB DEVELOPMENT / {project.year}</span><span>0{index + 1}</span></div>
              <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-primary">{project.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            </a>
          ))}
        </div>
        <Link href="/roblox" className="group mt-12 flex flex-col justify-between gap-5 border-y border-border py-7 sm:flex-row sm:items-center"><div className="flex items-center gap-5"><span className="flex size-12 shrink-0 items-center justify-center bg-secondary text-primary"><Asterisk className="size-7" strokeWidth={1.2} /></span><div><h3 className="text-lg font-bold">There’s a playful side, too.</h3><p className="mt-1 text-sm text-muted-foreground">Explore the worlds and experiences I build on Roblox.</p></div></div><span className="text-link text-sm text-primary">Explore Roblox <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>
      </section>
      <section id="about-me" className="scroll-mt-28 bg-secondary/50">
        <div className="site-width section-space grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-20"><div><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2 className="section-title">Always curious.<br />Always creating.</h2></div><div className="space-y-5 text-base leading-relaxed text-muted-foreground"><p className="text-lg text-foreground">It started with Roblox in 2020.<br />The curiosity never really stopped.</p><p>I’m yohei_yayoi, but you can call me yooo_. I work as a studio scripter and love bringing random ideas to life — whether it’s a website, a Minecraft mod, or a Discord bot.</p><p>When I’m not coding, you’ll probably find me nerding out over space and comics.</p><a href="https://github.com/yoheiyayoi" target="_blank" rel="noopener noreferrer" className="text-link pt-2 text-sm text-primary">Find me on GitHub <ArrowUpRight className="size-4" /></a></div></div>
      </section>
      <div className="site-width section-space"><Experiences /><TechStack /></div>
    </div>
  );
}
