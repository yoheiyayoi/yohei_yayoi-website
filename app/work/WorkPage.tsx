"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, X, List } from 'lucide-react'
import { projects } from "@/data/project";
import { Link } from 'next-view-transitions'
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';

export default function WorkPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const check = () => setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
        check();

        el.addEventListener("scroll", check);
        window.addEventListener("resize", check);

        return () => { el.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
    }, []);

    const projectCategories = Array.from(new Set(projects.map((p) => p.category || "Others")));
    const tabs = [
        { value: "All", label: "All" },
        ...projectCategories.map((cat) => ({ value: cat, label: cat })),
    ];

    const getItemsForTab = (tabValue: string) => {
        const items =
            tabValue === "All"
                ? [...projects]
                : projects.filter((p) => (p.category || "Others") === tabValue);

        return items.sort((a: any, b: any) => (b.year || 0) - (a.year || 0));
    };

    return (
        <div className="container max-w-3xl mx-auto">
            <div className="py-10">
                <div>
                    <div className="mb-5">
                        <h1 className="font-bold text-xl md:text-2xl mb-3 flex items-center gap-2">
                            <List className="w-7 h-7 text-blue-500" />
                            Projects
                        </h1>

                        <p className="monkey-font text-lg md:text-xl gradient-text">โปรเจกต์หรืองานต่าง ๆ ที่ผมเคยทำมา</p>

                        <p className='text-md text-zinc-500 flex flex-col sm:flex-row gap-2 sm:items-center'>
                            <span>โน๊ต: คลิกที่รูปภาพเพื่อดูขนาดเต็ม และ แนะนำให้ดูงานทั้งหมดใน</span>
                            <Button variant="outline" size="sm" asChild className="w-fit hover:scale-105 hover:rotate-3 transition">
                                <Link href={"https://discord.gg/qp7rTNMgUD"} target='_blank'>
                                    <ExternalLink /> ดิสคอร์ด
                                </Link>
                            </Button>
                            <span>จะอัปเดตเร็วกว่า</span>
                        </p>
                    </div>

                    <Tabs defaultValue="All" className="gap-1">
                        <div className="relative">
                            <div
                                ref={scrollRef}
                                className="overflow-x-auto pb-2 mb-1
                                    [&::-webkit-scrollbar]:h-0.75
                                    [&::-webkit-scrollbar-track]:bg-muted/40
                                    [&::-webkit-scrollbar-track]:rounded-full
                                    [&::-webkit-scrollbar-thumb]:bg-muted-foreground/30
                                    [&::-webkit-scrollbar-thumb]:rounded-full
                                    [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/60"
                            >
                                <TabsList className="w-max flex gap-0.5">
                                    {tabs.map((t) => (
                                        <TabsTrigger key={t.value} value={t.value} className="px-5 h-8 text-sm rounded-md">
                                            {t.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                            {/* Right fade indicator */}
                            <div
                                className={`absolute right-0 top-0 h-[calc(100%-6px)] w-10 bg-linear-to-l from-background to-transparent pointer-events-none transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
                            />
                        </div>

                        {tabs.map((t) => (
                            <TabsContent key={t.value} value={t.value} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3">
                                {getItemsForTab(t.value).map((item, index) => (
                                    <ProjectCard key={index} project={item as any} setSelectedImage={setSelectedImage} />
                                ))}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={1920}
                            height={1080}
                            className="max-w-full max-h-full object-contain rounded-lg animate-in zoom-in-95 duration-300"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
