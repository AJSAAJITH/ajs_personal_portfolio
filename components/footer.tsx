'use client';

import { Github, Linkedin, Mail, Heart, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">AJ</h3>
            <p className="text-foreground/70 text-sm">
              Full Stack Developer crafting beautiful and functional web experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/AJSAAJITH"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/a-j-a-saajith/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/94757425593?text=Hi%20there%2C%20I%20found%20your%20profile!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start border-t border-border mt-4 gap-2 p-4">
              <span className="font-medium text-sm text-foreground/60">
                075 7425 593
              </span>
              <span className="font-medium text-sm text-foreground/60">
                ajsajith99@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-foreground/60">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} A J A Saajith. BEng(Hons) Software Engineer.
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}