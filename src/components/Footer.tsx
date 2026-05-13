'use client';

import { MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons';
import { personalInfo } from '@/lib/data';

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: XIcon, href: personalInfo.x, label: 'X' },
  { icon: MessageCircle, href: personalInfo.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6">
        {/* Brand */}
        <a
          href="/"
          className="font-mono text-base font-semibold text-brand transition-opacity hover:opacity-80"
        >
          saqib.dev
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-slate-500 transition-colors duration-200 hover:text-brand"
            >
              <social.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Attribution */}
        <p className="text-center font-mono text-xs text-slate-500">
          Designed &amp; Built by {personalInfo.name} · 2025
        </p>

        {/* Tech stack */}
        <p className="text-xs text-white/20">
          Built with Next.js, Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
