import WorkPage from './WorkPage'
import { type Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Work",
        description: "yooo_'s (yohei_yayoi) portfolio website",
    };
}

export default function page() {
    return <WorkPage />
}
