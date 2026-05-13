'use client';

import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { certifications, personalInfo } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' as const },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-[#e6f1ff] md:text-3xl">
            <span className="font-mono text-base text-brand">06.</span>
            Certifications &amp; Licenses
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              custom={i + 1}
              className="group rounded-xl border border-white/5 bg-dark-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
            >
              <Award size={20} className="text-brand" strokeWidth={1.5} />

              <h3 className="mt-3 text-sm font-semibold text-[#e6f1ff]">
                {cert.name}
              </h3>

              <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded bg-brand/10 px-2 py-0.5 font-mono text-xs text-brand">
                  {cert.date}
                </span>
                {cert.status === 'ongoing' && (
                  <span className="flex items-center gap-1 rounded bg-amber-400/10 px-2 py-0.5 text-xs text-amber-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                    Ongoing
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-12 text-center"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-brand"
          >
            View all certifications on LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
