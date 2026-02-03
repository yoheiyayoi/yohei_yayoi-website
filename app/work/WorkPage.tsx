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
    console.log("Project Categories:", projectCategories);

    const TAB_CLASS = [
        "h-9 px-4 rounded-full",
        "border border-border bg-background text-foreground",
        "shadow-none",
        "hover:bg-muted/60",
        "data-[state=active]:bg-foreground data-[state=active]:text-background",
        "data-[state=active]:border-transparent",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "transition-colors",
    ].join(" ")

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

                        <p className='mt-2 flex flex-col sm:flex-row gap-2 sm:items-center text-sm sm:text-base'>
                            <span>โน๊ต: คลิกที่รูปภาพเพื่อดูขนาดเต็ม และ แนะนำให้ดูงานทั้งหมดใน</span>
                            <Button variant="outline" size="sm" asChild className="w-fit hover:scale-105 hover:rotate-3 transition">
                                <Link href={"https://discord.gg/qp7rTNMgUD"} target='_blank'>
                                    <ExternalLink /> ดิสคอร์ด
                                </Link>
                            </Button>
                            <span>จะอัปเดตเร็วกว่า</span>
                        </p>
                    </div>

                    <Tabs defaultValue="All" className="w-full">
                        <TabsList
                            className={[
                                "w-fit h-auto p-1 gap-2",
                                "inline-flex flex-wrap items-center",
                                "rounded-full bg-transparent border-0 shadow-none",
                            ].join(" ")}>
                            {tabs.map((t) => (
                                <TabsTrigger key={t.value} value={t.value} className={TAB_CLASS}>
                                    {t.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {tabs.map((t) => (
                            <TabsContent key={t.value} value={t.value} className="mt-5">
                                <div className="flex flex-col gap-6">
                                    {getItemsForTab(t.value).map((item, index) => (
                                        <ProjectCard key={index} project={item as any} setSelectedImage={setSelectedImage} />
                                    ))}
                                </div>
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
