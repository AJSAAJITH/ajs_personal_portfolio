'use client';

import { ProjectCard } from './project-card';
import { Project } from './type';

interface Props {
    projects: Project[];
    currentPage: number;
    perPage: number;
}

export function ProjectSlider({
    projects,
    currentPage,
    perPage,
}: Props) {
    const totalPages = Math.ceil(
        projects.length / perPage
    );

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentPage * 100}%)`,
                }}
            >
                {Array.from({
                    length: totalPages,
                }).map((_, pageIndex) => {
                    const start =
                        pageIndex * perPage;

                    const visibleProjects =
                        projects.slice(
                            start,
                            start + perPage
                        );

                    return (
                        <div
                            key={pageIndex}
                            className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {visibleProjects.map(
                                (
                                    project,
                                    index
                                ) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                    />
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}