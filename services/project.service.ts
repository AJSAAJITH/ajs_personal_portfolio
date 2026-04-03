
import prisma from "@/lib/prisma";
import { ProjectType } from "@/lib/type";

export class ProjectService {
    static async getAllProjects(): Promise<ProjectType[]> {
        return await prisma.project.findMany({
            include: {
                ProjectImage: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    static async getFeaturedProjects(): Promise<ProjectType[]> {
        return prisma.project.findMany({
            where: {
                featured: true,
            },
            include: {
                ProjectImage: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
}