'use server'

import { ProjectService } from "@/services/project.service";

export async function getProjectsAction() {
    try {
        return await ProjectService.getAllProjects();
    } catch (error) {
        console.error("Project fetch failed:", error);
        return [];
    }
}

export async function getFeaturedProjectsAction() {
    try {
        return await ProjectService.getFeaturedProjects();
    } catch (error) {
        console.error("Failed to fetch featured projects:", error);
        throw new Error("Unable to fetch featured projects");
    }
}