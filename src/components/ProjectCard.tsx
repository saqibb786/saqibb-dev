'use client';

import { Folder, Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group flex h-full flex-col rounded-lg border border-white/5 bg-dark-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
      style={{
        boxShadow: '0 0 0px rgba(100,255,218,0)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 0 20px rgba(100,255,218,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 0 0px rgba(100,255,218,0)';
      }}
    >
      {/* Top Row: Folder + Links */}
      <div className="flex items-center justify-between">
        <Folder size={32} className="text-brand" strokeWidth={1.2} />
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub`}
            className="text-slate-500 transition-colors hover:text-brand"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-slate-500 transition-colors hover:text-brand"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[#e6f1ff] transition-colors group-hover:text-brand">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-3">
        {project.category.split(' / ').map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-brand/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
