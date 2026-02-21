import type { Projects } from "@/types/project.type";

export const websiteProjects: Projects[] = [
    {
        title: "Shop Website",
        description: "เว็บขายของออนไลน์ ประเภทขายไอดีเกม (เลิกพัฒนาแล้วตั้งแต่ปี 2024)",
        image: "/projects/website/shop_website.png",
        linkGithub: "",
        linkWebsite: "",
        stacks: ["Next.js", "Prisma", "Supabase", "TailwindCSS"],
        category: "Website",
        year: 2023,
        type: "Private"
    },
    {
        title: "yooo_ Portfolio",
        description: "Portfolio ส่วนตัวของผมเองครับ เว็บนี้นี่แหละ (เว็บเก่า)",
        image: "/projects/website/yooo_portfolio.png",
        // linkGithub: "https://github.com/yoheiyayoi/yooo_-portfolio",
        linkWebsite: "",
        stacks: ["Next.js", "TailwindCSS", "shadcn/ui"],
        category: "Website",
        year: 2025,
        type: "Private",
    },
    {
        title: "yohei_yayoi Portfolio",
        description: "Portfolio ส่วนตัวอันใหม่ของผมเองครับ เว็บนี้นี่แหละ :)",
        image: "/projects/website/yohei_yayoi.png",
        linkGithub: "https://github.com/yoheiyayoi/yohei_yayoi-website",
        linkWebsite: "https://github.com/yoheiyayoi/yohei_yayoi-website",
        stacks: ["Next.js", "TailwindCSS", "shadcn/ui"],
        category: "Website",
        year: 2026,
        type: "Public",
    },
];
