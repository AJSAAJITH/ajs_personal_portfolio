'use client';

import { useState } from 'react';
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hotel Management System With (AI)',
    description: `Developed an AI-powered hotel management system enabling users to
    search for hotels based on their specific requirements using a real-time AI chat feature.
    Integrated a Large Language Model (LLM) with Retrieval-Augmented Generation (RAG) architecture
    for intelligent and precise search results. Built with Node.js, TypeScript, and Express for a
    robust backend, and designed a dynamic UI using Tailwind CSS and shadcn UI.`,
    tags: [
      'Node',
      'TypeScript',
      'RTK Query',
      'Clerk',
      'OpenAi',
      'Vector DB',
      'ShadcnUi',
    ],
    image: '/assets/projects/hotel_system.jpg',
    github: 'https://github.com/AJSAAJITH/AI-BASE-HOTEL-MANAGMENT-SYSTEM',
    live: 'https://aidf-horizone-frontend-saajith.netlify.app/',
  },
  {
    id: 2,
    title: 'Derana Landscaping Website',
    description:
      'Collaborative platform with real-time messaging, authentication, and modern responsive UI.',
    tags: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
    image: '/assets/projects/derana_landscaping.png',
    github: '',
    live: '',
  },
  {
    id: 3,
    title: 'Socially - Social Media Application',
    description: `Developed a fully responsive social media application using Next.js.
    Users can create posts, comment, like, follow/unfollow, and receive notifications.`,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: '/assets/projects/socially.webp',
    github: 'https://github.com/AJSAAJITH/social_media_app-nextjs',
    live: 'https://social-media-app-nextjs.onrender.com/',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'Modern developer portfolio with animations, glassmorphism, and responsive sections.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    image: '/assets/projects/socially.webp',
    github: '',
    live: '',
  },
];

const PROJECTS_PER_PAGE = 3;

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group h-full rounded-xl glass dark:glass-dark overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-primary/20 ${inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
        }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="h-48 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-foreground/70 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t border-border">
          {project.github && (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-primary hover:bg-primary/10"
            >
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
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-primary hover:bg-primary/10"
            >
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

export function Projects() {
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    projects.length / PROJECTS_PER_PAGE
  );

  const nextSlide = () => {
    setCurrentPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore a selection of projects I&apos;ve built showcasing
            my expertise in full-stack development.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map(
              (_, pageIndex) => {
                const start =
                  pageIndex * PROJECTS_PER_PAGE;

                const visibleProjects = projects.slice(
                  start,
                  start + PROJECTS_PER_PAGE
                );

                return (
                  <div
                    key={pageIndex}
                    className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {visibleProjects.map(
                      (project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                        />
                      )
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index)
                  }
                  className={`h-2 rounded-full transition-all duration-300 ${currentPage === index
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-primary/30'
                    }`}
                />
              )
            )}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}