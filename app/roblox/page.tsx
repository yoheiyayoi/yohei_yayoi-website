import type { Metadata } from "next";
import WorkPage from "@/app/work/WorkPage";

export const metadata: Metadata = { title: "Roblox", description: "Roblox games and experiences by yooo_ (yohei_yayoi)." };

export default function RobloxPage() {
  return <WorkPage robloxOnly />;
}
