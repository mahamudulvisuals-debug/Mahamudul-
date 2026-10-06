import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onOpenBooking: () => void;
  onOpenSlideViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenBooking,
  onOpenSlideViewer,
}) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/80 text-xs text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-archivo uppercase tracking-wider text-[11px] text-neutral-300">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase">
                Hello, I’m <br className="hidden sm:inline" />
                <span className="text-white hover:text-neutral-200 transition-colors">
                  Mahamudul Hassan.
                </span>
              </h1>
              <p className="font-georama text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-normal leading-snug pt-3">
                A <span className="text-white font-semibold underline decoration-neutral-700 underline-offset-4">Presentation Designer</span> &amp; <span className="text-white font-semibold underline decoration-neutral-700 underline-offset-4">Pitch Deck Specialist</span>, currently working with clients worldwide.
              </p>
            </div>

            {/* Subtext description */}
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Transforming complex business models, venture narratives, and enterprise strategies into visually stunning, high-converting slide decks that win investors, close enterprise contracts, and captivate global audiences.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-archivo font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-all shadow-md group"
              >
                <span>Set a Quick Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenSlideViewer}
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-archivo text-xs uppercase tracking-wider px-5 py-4 rounded border border-neutral-700/80 transition-all hover:border-neutral-500"
              >
                <Play className="w-3.5 h-3.5 text-neutral-300" />
                <span>Test Interactive Deck</span>
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 text-neutral-400 hover:text-white font-archivo text-xs uppercase tracking-wider px-4 py-4 transition-colors"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-y-2 gap-x-6 text-xs text-neutral-400 font-archivo">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Investor Deck Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Keynote & Corporate Summits</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Strict 100% NDA Protection</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Editorial Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Decorative background framing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-neutral-800 to-neutral-700/30 rounded-2xl -rotate-1 opacity-70" />
              <div className="absolute -inset-1 bg-neutral-900 rounded-xl" />

              {/* Main Portrait Card */}
              <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src="https://mahamudulhassan.com/wp-content/uploads/2025/02/IMG_3612-1920.jpg"
                    alt="Mahamudul Hassan - Presentation Designer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* On-image caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-[#0b0c0e]/90 backdrop-blur-md border border-neutral-800/90 rounded-lg p-3.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-archivo text-xs font-bold uppercase tracking-wider">
                            Mahamudul Hassan
                          </p>
                          <p className="text-[11px] text-neutral-400 font-archivo">
                            Design Lead @ IMAZIN · ex-SlideStack
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-bebas text-lg text-emerald-400 tracking-wide">
                            $45M+
                          </span>
                          <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-archivo">
                            Capital Raised
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating deck badge */}
              <div className="absolute -top-3 -left-3 bg-[#0d0e12] border border-neutral-700/80 rounded px-3 py-1.5 shadow-xl flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-archivo text-[10px] uppercase tracking-wider text-neutral-200">
                  Top-Tier Slide Storyteller
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
                {stat.value}
              </p>
              <p className="text-xs uppercase font-archivo tracking-wider text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
