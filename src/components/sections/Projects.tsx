'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const featuredProjects = projects.filter((p) => p.featured);
const highlightedProject = featuredProjects[0]; // EcoScout
const gridProjects = featuredProjects.slice(1);

/* ─── Mock Terminal (pure CSS) ─── */

function MockTerminal({ name }: { name: string }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg border border-white/5 bg-[#0c0c18]">
      {/* Title Bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 font-mono text-[11px] text-slate-500">
          {name.toLowerCase().replace(/\s+/g, '-')}.py
        </span>
      </div>

      {/* Terminal Body */}
      <div className="space-y-2 p-5 font-mono text-xs">
        <p className="text-slate-600"># {name} — Detection Pipeline</p>
        <p>
          <span className="text-brand/70">import</span>{' '}
          <span className="text-slate-400">cv2</span>
        </p>
        <p>
          <span className="text-brand/70">import</span>{' '}
          <span className="text-slate-400">torch</span>
        </p>
        <p>
          <span className="text-brand/70">from</span>{' '}
          <span className="text-slate-400">ultralytics</span>{' '}
          <span className="text-brand/70">import</span>{' '}
          <span className="text-slate-400">YOLO</span>
        </p>
        <p className="mt-3">
          <span className="text-purple-400/70">class</span>{' '}
          <span className="text-brand">DetectionPipeline</span>
          <span className="text-slate-500">:</span>
        </p>
        <p className="pl-4">
          <span className="text-purple-400/70">def</span>{' '}
          <span className="text-blue-400/70">__init__</span>
          <span className="text-slate-500">(self):</span>
        </p>
        <p className="pl-8">
          <span className="text-slate-500">self.</span>
          <span className="text-slate-400">models</span>
          <span className="text-slate-500"> = </span>
          <span className="text-brand/60">[</span>
        </p>
        <p className="pl-12">
          <span className="text-amber-300/60">&quot;litter_v8&quot;</span>
          <span className="text-slate-600">,</span>
        </p>
        <p className="pl-12">
          <span className="text-amber-300/60">&quot;smoke_v8&quot;</span>
          <span className="text-slate-600">,</span>
        </p>
        <p className="pl-12">
          <span className="text-amber-300/60">&quot;vehicle_v8&quot;</span>
        </p>
        <p className="pl-8">
          <span className="text-brand/60">]</span>
        </p>
        <p className="mt-2 pl-4">
          <span className="text-purple-400/70">def</span>{' '}
          <span className="text-blue-400/70">detect</span>
          <span className="text-slate-500">(self, frame):</span>
        </p>
        <p className="pl-8">
          <span className="text-slate-600"># Real-time violation detection</span>
        </p>
        <p className="pl-8">
          <span className="text-brand/70">return</span>{' '}
          <span className="text-slate-400">violations</span>
        </p>
        <p className="mt-3 text-slate-600">
          <span className="text-brand">$</span> python pipeline.py
          <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-brand/70" />
        </p>
      </div>
    </div>
  );
}

/* ─── Projects Section ─── */

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            <span className="font-mono text-base text-brand">03.</span>
            Some Things I&apos;ve Built
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </h2>
        </motion.div>

        {/* Featured Project — EcoScout (full width) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="group relative mb-16 overflow-hidden rounded-xl border border-white/5 bg-dark-800 transition-all duration-300 hover:border-brand/20"
          style={{
            boxShadow: '0 0 0px rgba(100,255,218,0)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 0 40px rgba(100,255,218,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 0 0px rgba(100,255,218,0)';
          }}
        >
          <div className="grid md:grid-cols-5">
            {/* Left 60%: Info */}
            <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-10">
              <p className="mb-2 font-mono text-xs tracking-wider text-brand">
                Featured Project
              </p>
              <h3 className="mb-4 text-2xl font-bold text-[#e6f1ff] md:text-3xl">
                {highlightedProject.name}
              </h3>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-slate-400">
                {highlightedProject.description} Built as a Final Year Project,
                EcoScout uses a multi-model YOLO architecture to detect littering
                and smoke emissions from vehicles in real-time video feeds,
                featuring license plate recognition and violation evidence
                capture.
              </p>

              {/* Tech Stack Pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {['Python', 'YOLOv8', 'FastAPI', 'OpenCV', 'React', 'PostgreSQL'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-brand/5 px-3 py-1 font-mono text-xs text-brand/80"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={highlightedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-brand"
                >
                  <GithubIcon size={18} />
                  Source
                </a>
                {highlightedProject.liveLink && (
                  <a
                    href={highlightedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-brand"
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Right 40%: Mock Terminal */}
            <div className="hidden md:col-span-2 md:block md:p-4">
              <MockTerminal name={highlightedProject.name} />
            </div>
          </div>
        </motion.div>

        {/* 3-Column Grid: Remaining Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gridProjects.map((project, i) => (
            <motion.div key={project.id} variants={fadeUp} custom={i + 1}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-12 flex justify-end"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-mono text-sm text-brand transition-opacity hover:opacity-80"
          >
            View All on GitHub
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
