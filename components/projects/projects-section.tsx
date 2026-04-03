'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects as staticProjects } from '@/lib/data/projects';

import { Project } from './type';
import { ProjectSlider } from './project-slider';
import { ProjectPagination } from './project-pagination';

export function Projects() {
    const { ref } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [currentPage, setCurrentPage] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(3);

    useEffect(() => {
        function handleResize() {
            setProjectsPerPage(window.innerWidth < 768 ? 1 : 3);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () =>
            window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [...staticProjects].sort(
        (a, b) => Number(b.id) - Number(a.id)
    );

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
                    onDotClick={setCurrentPage}
                />
            </div>
        </section>
    );
}