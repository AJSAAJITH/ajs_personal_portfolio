'use client';

import {
    useEffect,
    useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { getProjectsAction } from '@/actions/projects.action';

import { Project } from './type';
import { ProjectSlider } from './project-slider';
import { ProjectPagination } from './project-pagination';

export function Projects() {
    const { ref } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [projects, setProjects] =
        useState<Project[]>([]);

    const [currentPage, setCurrentPage] =
        useState(0);

    const [projectsPerPage, setProjectsPerPage] =
        useState(3);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setProjectsPerPage(1);
            } else {
                setProjectsPerPage(3);
            }
        }

        handleResize(); // initial load

        window.addEventListener(
            'resize',
            handleResize
        );

        return () =>
            window.removeEventListener(
                'resize',
                handleResize
            );
    }, []);

    useEffect(() => {
        async function fetchProjects() {
            const dbProjects =
                await getProjectsAction();

            const formatted =
                dbProjects.map((project) => ({
                    id: project.id,
                    title: project.title,
                    description:
                        project.description,
                    tags: project.tags,
                    image:
                        project.ProjectImage?.[0]
                            ?.imageUrl ??
                        '/assets/projects/placeholder.jpg',
                    github:
                        project.githubUrl,
                    live:
                        project.liveUrl,
                }));

            setProjects(formatted);
        }

        fetchProjects();
    }, []);

    const totalPages = Math.ceil(
        projects.length / projectsPerPage
    );

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Featured Projects
                </h2>

                <ProjectSlider
                    projects={projects}
                    currentPage={currentPage}
                    perPage={projectsPerPage}
                />

                <ProjectPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPrev={() =>
                        setCurrentPage((prev) =>
                            prev === 0
                                ? totalPages - 1
                                : prev - 1
                        )
                    }
                    onNext={() =>
                        setCurrentPage((prev) =>
                            prev === totalPages - 1
                                ? 0
                                : prev + 1
                        )
                    }
                    onDotClick={
                        setCurrentPage
                    }
                />
            </div>
        </section>
    );
}