'use client';

import { useInView } from 'react-intersection-observer';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Freelance Full Stack Developer',
    company: 'Self Employed / Client Projects',
    period: '2023 - Present',
    description: [
      'Delivered full-stack web applications for real clients using Next.js, TypeScript, Prisma ORM, and PostgreSQL',
      'Successfully delivered a production-ready web application for a real client with scalable architecture, optimized database design, and modern full-stack development practices',
      'Managed end-to-end project lifecycle including requirement gathering, UI development, backend APIs, deployment, and maintenance',
    ],
    highlights: [
      'Next.js',
      'Prisma ORM',
      'PostgreSQL',
      'Neon DB',
      'Supabase',
      'Firebase',
      'Client Delivery',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer & Project Lead',
    company: 'Freelance / Agile Team Workflow',
    period: '2022 - Present',
    description: [
      'Led project planning, sprint task breakdown, and Agile Scrum-based workflow management for multiple development projects',
      'Handled architecture decisions, database modeling, API design, and frontend-backend integration',
      'Collaborated with clients and stakeholders to convert business requirements into technical solutions',
    ],
    highlights: [
      'Agile Scrum',
      'Project Management',
      'System Design',
      'API Design',
      'Team Collaboration',
    ],
  },
  {
    id: 3,
    title: 'Backend & Cloud Development Engineer',
    company: 'Independent Projects',
    period: '2022 - Present',
    description: [
      'Built scalable backend services using Node.js, Express, Spring Boot, and RESTful API architecture',
      'Worked with Docker and Docker Compose for containerized development and cloud-ready deployment',
      'Deployed and maintained applications using AWS EC2, database optimization, and secure authentication systems',
    ],
    highlights: [
      'Docker',
      'Docker Compose',
      'AWS EC2',
      'Spring Boot',
      'REST APIs',
      'Authentication',
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Timeline line */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
      )}

      <div className="relative flex gap-6">
        {/* Timeline dot */}
        <div className="relative flex flex-col items-center mt-1">
          <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                <p className="text-sm text-foreground/60">{exp.company}</p>
              </div>
              {/* <span className="text-xs font-medium text-foreground/50 whitespace-nowrap">
                {exp.period}
              </span> */}
            </div>

            {/* Description */}
            <ul className="space-y-2 mb-4">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm text-foreground/70 flex gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Highlights/Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-foreground/70">
            A journey through my professional career and growth as a developer
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
