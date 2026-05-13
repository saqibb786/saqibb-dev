'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data';

/* ─── Stats Data ─── */

const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '98.5th', label: 'Percentile — HEC National Test' },
  { value: '10+', label: 'Certifications' },
  { value: '3.28', label: 'CGPA' },
];

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
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
            <span className="font-mono text-base text-brand">01.</span>
            About Me
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </h2>
        </motion.div>

        {/* 2-Column Grid: Bio + Stats */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-base leading-relaxed text-slate-400"
            >
              I&apos;m a final-year{' '}
              <span className="text-slate-300">Computer Science</span> student at
              the{' '}
              <span className="text-slate-300">
                University of Central Punjab, Lahore
              </span>
              , building at the intersection of{' '}
              <span className="text-brand">Software Engineering</span> and{' '}
              <span className="text-brand">Artificial Intelligence</span>. I
              specialize in transforming complex data into intuitive
              products — whether that means training robust machine learning
              models or architecting fluid, scalable web applications using
              React and Next.js.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base leading-relaxed text-slate-400"
            >
              Beyond building software, I hold an{' '}
              <span className="text-slate-300">
                IBM Data Science Professional Certificate
              </span>{' '}
              and recently ranked in the{' '}
              <span className="text-brand font-medium">98.5th percentile</span>{' '}
              nationwide in the{' '}
              <span className="text-slate-300">
                HEC National Skills Competency Test
              </span>
              . Driven by a growing fascination with{' '}
              <span className="text-brand">Generative AI</span>, my ultimate goal
              is to engineer intelligent technology that is technically profound
              and genuinely useful.
            </motion.p>
          </motion.div>

          {/* Right: 2x2 Bento Stat Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i + 1}
                className="group rounded-xl border border-white/5 bg-dark-800 p-6 transition-colors duration-300 hover:border-brand/30"
              >
                <p className="mb-1 text-3xl font-bold text-brand">
                  {stat.value}
                </p>
                <p className="text-sm leading-snug text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-20"
        >
          <motion.h3
            variants={fadeUp}
            custom={0}
            className="mb-8 text-lg font-semibold text-[#e6f1ff]"
          >
            Technical Arsenal
          </motion.h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, catIdx) => (
              <motion.div key={category.name} variants={fadeUp} custom={catIdx + 1}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/5 bg-dark-800 px-3 py-1.5 font-mono text-xs text-brand/80 transition-colors hover:border-brand/20 hover:text-brand"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
