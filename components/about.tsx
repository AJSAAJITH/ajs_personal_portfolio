'use client';

import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div
            className={`space-y-4 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-foreground/70 leading-relaxed">
              I&apos;m a passionate full-stack developer with over 4 years of experience building scalable
              web applications. My journey began with a curiosity about how the web works, and it
              evolved into a career dedicated to crafting elegant solutions for complex problems.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              I specialize in modern JavaScript frameworks and have expertise in both frontend and
              backend development. When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              My goal is to create user-centric applications that not only look great but are also
              performant, accessible, and maintainable. I believe in continuous learning and staying
              updated with the latest industry trends.
            </p>
          </div>

          {/* Stats */}
          {/* Stats + Image Section */}
          <div
            className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >

            {/* Profile Image Card */}
            <div className="relative rounded-2xl overflow-hidden glass dark:glass-dark p-3 flex justify-center">

              {/* Glow Circle (background effect) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border-4 border-primary/30 rounded-full blur-sm"></div>
              </div>

              {/* Image */}
              <img
                src="/assets/user/hero.png"
                alt="Profile"
                className="relative z-10 w-full max-w-xs md:max-w-sm object-cover rounded-xl opacity-60"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">

              <div className="p-6 rounded-xl glass dark:glass-dark text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-sm text-foreground/70">Years of Experience</p>
              </div>

              <div className="p-6 rounded-xl glass dark:glass-dark text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-foreground/70">Projects Completed</p>
              </div>

              <div className="p-6 rounded-xl glass dark:glass-dark text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <p className="text-sm text-foreground/70">Happy Clients</p>
              </div>

              <div className="p-6 rounded-xl glass dark:glass-dark text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                <p className="text-sm text-foreground/70">Lines of Code</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
