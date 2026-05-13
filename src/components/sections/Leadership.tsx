'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activities } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function Leadership() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="leadership" className="relative py-24 md:py-32">
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
            <span className="font-mono text-base text-brand">07.</span>
            Leadership &amp; Activities
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative ml-4 border-l-2 border-white/10 pl-8"
        >
          {activities.map((activity, i) => (
            <motion.div
              key={`${activity.organization}-${activity.role}`}
              variants={fadeUp}
              custom={i + 1}
              className="group relative mb-10 last:mb-0 cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+7px)] top-1.5 h-3 w-3 rounded-full bg-brand ring-4 ring-dark-900 transition-shadow group-hover:ring-brand/20" />

              {/* Role & Org */}
              <h3 className="text-base font-semibold text-[#e6f1ff]">
                {activity.role}
              </h3>
              <p className="mt-0.5 font-mono text-sm text-brand">
                {activity.organization}
              </p>
              <p className="mt-0.5 font-mono text-xs text-slate-500">
                {activity.year}
              </p>

              {/* Expandable description */}
              <AnimatePresence>
                {expanded === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 max-w-lg overflow-hidden text-sm leading-relaxed text-slate-400"
                  >
                    {activity.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Expand hint */}
              {expanded !== i && (
                <p className="mt-1 text-xs text-slate-600 transition-colors group-hover:text-slate-400">
                  Click to expand ↓
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
