'use client';

import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { Project } from './type';

interface Props {
    project: Project;
    index: number;
}

export function ProjectCard({
    project,
    index,
}: Props) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`group h-full rounded-xl glass dark:glass-dark overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-primary/20 p-2 ${inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDelay: `${index * 100}ms`,
            }}
        >
            <div className="h-48 w-full relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>

                <p className="text-sm text-foreground/70 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                    {project.github && (
                        <Button asChild size="sm" variant="ghost">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                            </a>
                        </Button>
                    )}

                    {project.live && (
                        <Button asChild size="sm" variant="ghost">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}