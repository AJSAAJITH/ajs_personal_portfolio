'use client';

import { Github, Linkedin, MessageCircle, Facebook, Mail, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { ContactMapBg } from './contact-map-bg';

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'ajsajith99@gmail.com',
      href: 'mailto:ajsajith99@gmail.com',
      color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Send a message',
      href: 'https://wa.me/94757425593?text=Hi%20there%2C%20I%20found%20your%20profile!',
      color: 'bg-green-500/20 text-green-600 dark:text-green-400',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '075 7425 593',
      href: 'tel:+94757425593',
      color: 'bg-purple-500/20 text-purple-600 dark:text-purple-400',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      {/* Contact Map Background */}
      <ContactMapBg />

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Let&apos;s connect and explore opportunities together. Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className="h-full p-8 rounded-xl glass dark:glass-dark hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                    {method.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Links Section */}
        <div
          className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{
            transitionDelay: '100ms',
          }}
        >
          <h3 className="text-2xl font-semibold mb-8">Follow On Social Media</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group p-4 rounded-xl glass dark:glass-dark hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/60">
            Or feel free to explore my work through the projects and experience sections above.
          </p>
        </div>
      </div>
    </section>
  );
}
