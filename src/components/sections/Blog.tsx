'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const blogPosts = [
  {
    title: 'Building Real-World AI Systems',
    tag: 'AI Engineering',
  },
  {
    title: 'From Student to Shipping: My Journey',
    tag: 'Career',
  },
  {
    title: 'Context Engineering for LLM Applications',
    tag: 'Gen AI',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32">
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
            <span className="font-mono text-base text-brand">04.</span>
            Writing
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              variants={fadeUp}
              custom={i + 1}
              className="group relative overflow-hidden rounded-lg border border-white/5 bg-dark-800 p-6 transition-colors duration-300 hover:border-brand/20"
            >
              {/* Shimmer border animation */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(135deg, transparent 40%, rgba(100,255,218,0.08) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 2s linear infinite',
                }}
              />

              {/* Tag Badge */}
              <span className="mb-4 inline-block rounded-full bg-brand/5 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-brand/70">
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="mb-4 text-lg font-semibold text-[#e6f1ff]">
                {post.title}
              </h3>

              {/* Placeholder lines */}
              <div className="mb-5 space-y-2">
                <div className="h-2 w-full rounded bg-white/[0.03]" />
                <div className="h-2 w-4/5 rounded bg-white/[0.03]" />
                <div className="h-2 w-3/5 rounded bg-white/[0.03]" />
              </div>

              {/* Coming Soon Pill */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">
                <span className="h-1.5 w-1.5 animate-glow rounded-full bg-brand/50" />
                Coming soon
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-12 text-center text-sm text-slate-500"
        >
          Articles coming soon. Follow on{' '}
          <a
            href={personalInfo.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand transition-opacity hover:opacity-80"
          >
            @Saqibbdev
          </a>{' '}
          to get notified first.
        </motion.p>
      </div>

      {/* Shimmer keyframe (injected inline) */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 200%;
          }
          100% {
            background-position: -200% -200%;
          }
        }
      `}</style>
    </section>
  );
}
