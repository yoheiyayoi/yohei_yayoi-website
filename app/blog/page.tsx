import BlogPage from './BlogPage'
import { type Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Blog",
        description: "yooo_'s (yohei_yayoi) portfolio website",
    };
}

export default function page() {
    return <BlogPage />
}
