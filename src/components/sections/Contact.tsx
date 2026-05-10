'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const socialLinks = [
  {
    icon: Github,
    href: personalInfo.github,
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: personalInfo.linkedin,
    label: 'LinkedIn',
  },
  {
    icon: MessageCircle,
    href: personalInfo.whatsapp,
    label: 'WhatsApp',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Overline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="mb-4 font-mono text-base text-brand"
        >
          05. What&apos;s Next?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="mb-6 text-4xl font-bold text-[#e6f1ff] md:text-5xl"
        >
          Get In Touch
        </motion.h2>

        {/* Body */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={2}
          className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-slate-400"
        >
          I&apos;m currently open to new opportunities — full-time roles,
          freelance projects, or conversations about AI and engineering. My
          inbox is always open.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={3}
          className="mb-10"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 rounded-md border border-brand/40 px-10 py-4 text-base font-medium text-brand transition-all hover:border-brand hover:bg-brand/10"
          >
            Say Hello
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={4}
          className="flex items-center justify-center gap-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
