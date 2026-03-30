import { Facebook, Github, Linkedin, MessageCircle } from 'lucide-react'
import React from 'react'

function SocialLinks() {
    return (
        <div className="flex justify-center gap-6 pt-8">
            <a
                href="https://github.com/AJSAAJITH"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform glow-green"
                aria-label="GitHub"
            >
                <Github className="w-6 h-6" />
            </a>
            <a
                href="https://www.linkedin.com/in/a-j-a-saajith/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform glow-cyan"
                aria-label="LinkedIn"
            >
                <Linkedin className="w-6 h-6" />
            </a>
            <a
                href="https://wa.me/94757425593?text=Hi%20there%2C%20I%20found%20your%20profile!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform glow-green"
                aria-label="Email"
            >
                <MessageCircle className="w-6 h-6" />
            </a>
            <a href="https://web.facebook.com/A.J.A.Saajith/"
                target='_blank'
                rel="noopener noreferrer"
                className='p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform glow-green'
            >
                <Facebook className="w-6 h-6" />
            </a>
        </div>
    )
}

export default SocialLinks