import React from 'react';
import { X, ArrowUpRight, Play, CheckCircle2, TrendingUp, Layers, Calendar, User } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenSlideViewer: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenSlideViewer,
  onOpenBooking,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[92vh] bg-[#0c0d11] border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0f1015]">
          <div className="flex items-center gap-3">
            <span className="font-archivo text-xs uppercase tracking-widest text-neutral-400">
              Case Study Deep Dive
            </span>
            <span className="text-neutral-700">·</span>
            <span className="font-archivo text-xs font-semibold text-white">
              {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:border-neutral-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Banner */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="font-archivo text-xs uppercase tracking-wider text-emerald-400 bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm">
                  {project.category}
                </span>
                <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide uppercase mt-2">
                  {project.title}
                </h2>
                <p className="font-archivo text-xs text-neutral-300 uppercase tracking-wider">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenSlideViewer();
                }}
                className="bg-white hover:bg-neutral-200 text-black font-archivo text-xs uppercase font-bold tracking-wider px-4 py-2.5 rounded flex items-center gap-2 shadow-lg"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open Slide Simulator</span>
              </button>
            </div>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div>
              <span className="text-[11px] font-archivo uppercase text-neutral-500 tracking-wider">Client</span>
              <p className="text-sm font-semibold text-white">{project.client}</p>
            </div>
            <div>
              <span className="text-[11px] font-archivo uppercase text-neutral-500 tracking-wider">Timeline / Year</span>
              <p className="text-sm font-semibold text-white">{project.year}</p>
            </div>
            <div>
              <span className="text-[11px] font-archivo uppercase text-neutral-500 tracking-wider">Category</span>
              <p className="text-sm font-semibold text-white">{project.category}</p>
            </div>
            <div>
              <span className="text-[11px] font-archivo uppercase text-neutral-500 tracking-wider">Designer</span>
              <p className="text-sm font-semibold text-white">Mahamudul Hassan</p>
            </div>
          </div>

          {/* Metrics Row */}
          <div>
            <h3 className="font-bebas text-2xl text-white tracking-wide uppercase mb-3">
              Measurable Impact
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="font-bebas text-3xl text-emerald-400 tracking-wide">
                    {metric.value}
                  </span>
                  <p className="text-xs uppercase font-archivo tracking-wider text-neutral-400 mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#0f1015] border border-neutral-800 space-y-3">
              <span className="text-xs font-archivo uppercase tracking-widest text-amber-400 font-bold">
                The Challenge
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f1015] border border-neutral-800 space-y-3">
              <span className="text-xs font-archivo uppercase tracking-widest text-emerald-400 font-bold">
                The Creative Solution
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables Produced */}
          <div className="space-y-3">
            <span className="text-xs font-archivo uppercase tracking-widest text-neutral-400 font-bold">
              Delivered Assets
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200 p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Summary */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800">
            <h4 className="font-archivo text-xs uppercase font-bold tracking-wider text-white mb-2">
              Final Result
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-[#0f1015] border-t border-neutral-800">
          <button
            onClick={onClose}
            className="text-xs font-archivo uppercase tracking-wider text-neutral-400 hover:text-white"
          >
            ← Back to All Case Studies
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-5 py-2.5 rounded transition-colors inline-flex items-center gap-1.5"
            >
              <span>Build a Deck Like This</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
