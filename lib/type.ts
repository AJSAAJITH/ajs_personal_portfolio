export interface ProjectImageType {
    id: string;
    imageUrl: string;
    altText: string;
    sortOrder: number;
}
export interface ProjectType {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string | null;
    liveUrl?: string | null;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
    ProjectImage: ProjectImageType[];
}