'use client';

import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    color: 'from-primary to-accent',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-secondary to-primary',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'RESTful APIs', level: 95 },
    ],
  },
  {
    category: 'Database',
    color: 'from-accent to-secondary',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Prisma', level: 90 },
      { name: 'Database Design', level: 85 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: 'from-primary to-secondary',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 85 },
    ],
  },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-foreground/60">{skill.level}%</span>
      </div>
      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that I use to build
            modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`p-6 rounded-xl glass dark:glass-dark transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
              }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
