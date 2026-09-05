"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/data/project";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/project-card";

const robloxSections = [
  {
    id: "map",
    title: "Map",
    category: "Roblox",
    description: "Worlds, games, and experiences I’ve helped create.",
  },
  {
    id: "system",
    title: "System",
    category: "Script",
    description:
      "Gameplay mechanics and the systems behind the experience.",
  },
  {
    id: "ui",
    title: "UI",
    category: "UI",
    description:
      "Interfaces, menus, and the little details players interact with.",
  },
  {
    id: "animation",
    title: "Animation",
    category: "Animation",
    description: "Movement, character, and bringing ideas to life.",
  },
  {
    id: "building",
    title: "Building",
    category: "Building",
    description: "Environments, spaces, and the details that make a world.",
  },
];

export default function WorkPage({
  robloxOnly = false,
}: {
  robloxOnly?: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const collection = robloxOnly
    ? projects.filter((project) =>
      robloxSections.some(
        (section) => section.category === project.category,
      ),
    )
    : projects;
  const tabs = [
    "All",
    ...Array.from(
      new Set(collection.map((project) => project.category || "Others")),
    ),
  ];
  const getItemsForTab = (tab: string) =>
    collection
      .filter(
        (project) =>
          tab === "All" || (project.category || "Others") === tab,
      )
      .sort(
        (a, b) =>
          (b.year ?? 0) - (a.year ?? 0) ||
          (b.id ?? -1) - (a.id ?? -1),
      );

  useEffect(() => {
    if (!selectedImage || !dialog.current) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selectedImage]);

  return (
    <div className="site-width section-space">
      <div className="mb-12 border-b border-border pb-10">
        <p className="eyebrow">
          {robloxOnly
            ? "PLAY / EXPLORE / DISCOVER"
            : "A COLLECTION OF IDEAS BROUGHT TO LIFE"}
        </p>
        <h1 className="mt-5 text-4xl tracking-tight md:text-6xl">
          {robloxOnly ? "Made for play." : "Work & experiments."}
        </h1>
        <div className="mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            {robloxOnly
              ? "Worlds, games, and experiences I’ve helped bring to life on Roblox."
              : "เว็บไซต์ เกม และสิ่งที่ได้ลองทำ — รวมผลงานที่เกิดจากความอยากรู้อยากลองของผม"}
            <span className="mt-2 block text-sm">
              Click any image for a closer look.
            </span>
          </p>
          <a
            href="https://discord.gg/qp7rTNMgUD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm text-primary"
          >
            Latest updates on Discord{" "}
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
      {robloxOnly ? (
        <>
          <nav
            aria-label="Roblox sections"
            className="mb-14 flex flex-wrap gap-x-7 gap-y-3 border-b border-border pb-6"
          >
            {robloxSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-link min-h-10 text-sm"
              >
                {section.title}
                <span className="text-xs text-muted-foreground">
                  {getItemsForTab(section.category).length}
                </span>
              </a>
            ))}
          </nav>
          <div className="space-y-20">
            {robloxSections.map((section, index) => {
              const items = getItemsForTab(section.category);
              return (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-title`}
                  className="scroll-mt-28"
                >
                  <div className="mb-8 flex items-start gap-5 border-t border-border pt-7">
                    <span className="eyebrow pt-2">
                      0{index + 1}
                    </span>
                    <div>
                      <h2
                        id={`${section.id}-title`}
                        className="text-3xl tracking-tight md:text-4xl"
                      >
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  {items.length ? (
                    <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((project) => (
                        <ProjectCard
                          key={`${project.category}-${project.title}`}
                          project={project}
                          setSelectedImage={
                            setSelectedImage
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="border-l-2 border-primary/30 bg-secondary/60 px-6 py-7 text-sm text-muted-foreground">
                      ยังไม่มีผลงานในหมวดนี้
                    </p>
                  )}
                </section>
              );
            })}
          </div>
        </>
      ) : (
        <Tabs defaultValue="All" className="gap-9">
          {!robloxOnly && (
            <TabsList className="h-auto! w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="h-10 flex-none gap-3 rounded-none border border-border px-4 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  {tab}
                  <span className="text-[10px] opacity-70">
                    {getItemsForTab(tab).length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          )}
          {(robloxOnly ? ["All"] : tabs).map((tab) => (
            <TabsContent
              key={tab}
              value={tab}
              className="m-0 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            >
              {getItemsForTab(tab).map((project) => (
                <ProjectCard
                  key={`${project.category}-${project.title}`}
                  project={project}
                  setSelectedImage={setSelectedImage}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      )}
      <dialog
        ref={dialog}
        aria-label={
          selectedImage
            ? `Image preview: ${selectedImage.alt}`
            : "Image preview"
        }
        onClose={() => setSelectedImage(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget)
            setSelectedImage(null);
        }}
        className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none bg-black/90 p-5 backdrop:bg-black/60 open:flex open:items-center open:justify-center"
      >
        <button
          type="button"
          autoFocus
          onClick={() => setSelectedImage(null)}
          className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full bg-white text-foreground"
          aria-label="Close image preview"
        >
          <X className="size-5" />
        </button>
        {selectedImage && (
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            // unoptimized={selectedImage.src.startsWith("https://")}
            width={1920}
            height={1080}
            className="max-h-[85dvh] w-auto max-w-full object-contain"
          />
        )}
      </dialog>
    </div>
  );
}
