'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTyping } from '@/hooks/use-typing';
import { WorldMapBg } from './world-map-bg';
import SocialLinks from './social_links';

const typingTexts = [
  'Full Stack Developer',
  'Backend Engineer',
  'System Architect',
];

export function Hero() {
  const displayText = useTyping(typingTexts);

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* World Map Background */}
      <WorldMapBg />

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Avatar/Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow-green">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">AJS</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m{' '}
              <span className="gradient-text">A J A Saajith</span>
            </h1>

            {/* Typing effect */}
            <div className="h-12 sm:h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable web applications with modern technologies. Specializing in
              Next.js, Node.js, and cloud architecture. Turning ideas into elegant solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={handleProjectsClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleContactClick}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
