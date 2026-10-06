import React from 'react';
import { ArrowUpRight, Play, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface CaseStudiesProps {
  onSelectProject: (project: Project) => void;
  onOpenSlideViewer: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  onSelectProject,
  onOpenSlideViewer
}) => {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-neutral-600" />
              <span className="text-xs uppercase font-archivo tracking-widest text-neutral-400">
                Curated Work
              </span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
              Case Studies
            </h2>
            <p className="mt-2 text-neutral-400 max-w-xl text-sm sm:text-base">
              A selection of high-stakes investor pitch decks, brand systems, and keynote presentations designed to compel action and secure enterprise scale.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSlideViewer}
              className="inline-flex items-center gap-2 text-xs font-archivo uppercase font-bold tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 px-4 py-3 rounded transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Launch Live Deck Simulator</span>
            </button>
          </div>
        </div>

        {/* Projects Grid: 2x2 Clean Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#0d0e12] border border-neutral-800 hover:border-neutral-600 rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Project Image Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative aspect-[16/10] overflow-hidden bg-neutral-950 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  onError={(e) => {
                    // Fallback visually pleasing card
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-black/20 opacity-80" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-archivo text-[11px] uppercase tracking-wider text-neutral-300 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded border border-neutral-700/80">
                    {project.category}
                  </span>
                  <span className="font-archivo text-xs text-neutral-400 font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Hover Reveal Action */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <span className="bg-white text-black font-archivo text-xs uppercase font-bold tracking-wider px-4 py-2.5 rounded flex items-center gap-2 shadow-lg">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase hover:text-neutral-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <span className="font-archivo text-xs text-neutral-500 uppercase tracking-widest shrink-0">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <p className="text-xs font-archivo uppercase tracking-wider text-neutral-400 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-neutral-300 text-sm leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Primary Metric Bar */}
                <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 gap-4">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i}>
                      <span className="font-bebas text-2xl text-white tracking-wide">
                        {metric.value}
                      </span>
                      <p className="text-[11px] text-neutral-400 font-archivo uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Deliverables Tags - zero pill rule compliant */}
                <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-400 font-archivo">
                  <Layers className="w-3 h-3 text-neutral-500 shrink-0" />
                  <span className="truncate">
                    {project.deliverables.slice(0, 3).join(' · ')}
                  </span>
                </div>

                {/* Action footer */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-archivo uppercase font-bold tracking-wider text-white hover:text-neutral-300 inline-flex items-center gap-1 group/btn"
                  >
                    <span>Read Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenSlideViewer}
                    className="text-xs font-archivo uppercase tracking-wider text-neutral-400 hover:text-emerald-400 inline-flex items-center gap-1 transition-colors"
                  >
                    <Play className="w-3 h-3" />
                    <span>Slide Deck</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
