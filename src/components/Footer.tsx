'use client';

import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons';
import { personalInfo } from '@/lib/data';

const socialLinks = [
  {
    icon: GithubIcon,
    href: personalInfo.github,
    label: 'GitHub',
  },
  {
    icon: LinkedinIcon,
    href: personalInfo.linkedin,
    label: 'LinkedIn',
  },
  {
    icon: XIcon,
    href: personalInfo.x,
    label: 'X / Twitter',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
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
        <p className="text-center text-sm text-slate-500">
          Designed &amp; Built by{' '}
          <span className="text-slate-400">{personalInfo.name}</span>
        </p>
      </div>
    </footer>
  );
}
