"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, X, List } from 'lucide-react'
import { projects } from "@/data/project";
import { Link } from 'next-view-transitions'
import Image from "next/image";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';

export default function WorkPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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

        return items.sort((a: any, b: any) => {
            // what the heck even is this logic?
            // i don't know but it's working
            if ((b.year ?? 0) !== (a.year ?? 0)) {
                return (b.year ?? 0) - (a.year ?? 0);
            }

            return (b.id ?? -1) - (a.id ?? -1);
        });
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

                        <div className='text-md text-zinc-500 flex flex-col sm:flex-row gap-2 sm:items-center mt-2'>
                            <span>โน๊ต: คลิกที่รูปภาพเพื่อดูขนาดเต็ม และ แนะนำให้ดูงานทั้งหมดใน</span>
                            <Button variant="outline" size="sm" asChild className="w-fit hover:scale-105 hover:rotate-3 transition">
                                <Link href={"https://discord.gg/qp7rTNMgUD"} target='_blank'>
                                    <ExternalLink className="w-4 h-4 mr-1" /> ดิสคอร์ด
                                </Link>
                            </Button>
                            <span>จะอัปเดตเร็วกว่า</span>
                        </div>
                    </div>

                    <Tabs defaultValue="All" className="w-full flex flex-col gap-4">
                        <TabsList className="flex flex-wrap items-center justify-start w-full h-auto! p-1.5 bg-muted rounded-lg gap-1.5">
                            {tabs.map((t) => {
                                const count = getItemsForTab(t.value).length;
                                return (
                                    <TabsTrigger
                                        key={t.value}
                                        value={t.value}
                                        className="px-4 h-8 text-sm rounded-md shrink-0 data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center gap-1.5"
                                    >
                                        {t.label}
                                        <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground group-data-[state=active]:bg-slate-300 group-data-[state=active]:text-slate-700">
                                            {count}
                                        </span>
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>

                        {tabs.map((t) => (
                            <TabsContent key={t.value} value={t.value} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 m-0 outline-none">
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
