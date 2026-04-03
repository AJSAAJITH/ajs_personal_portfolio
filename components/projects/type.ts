export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string | null;
    live?: string | null;
}