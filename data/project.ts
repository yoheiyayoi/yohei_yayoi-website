// Database ไม่ต้อง ใช้ json เอา เฟี้ยวจัด

import type { Projects } from "@/types/project.type";

import { robloxProjects } from "./projects/roblox";
import { websiteProjects } from "./projects/website";
import { programProjects } from "./projects/program";
import { discordBotProjects } from "./projects/discord-bot";
import { uiProjects } from "./projects/ui";
import { scriptProjects } from "./projects/script";

export const projects: Projects[] = [
    ...robloxProjects,
    ...websiteProjects,
    ...programProjects,
    ...discordBotProjects,
    ...uiProjects,
    ...scriptProjects,
];
