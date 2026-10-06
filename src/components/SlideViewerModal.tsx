import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { DEMO_DECK_SLIDES, PERSONAL_INFO } from '../data/portfolioData';

interface SlideViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SlideViewerModal: React.FC<SlideViewerModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const slides = DEMO_DECK_SLIDES;
  const currentSlide = slides[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`w-full max-w-6xl bg-[#0c0d11] border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all ${
        isFullScreen ? 'fixed inset-2 max-w-none rounded-none' : 'max-h-[92vh]'
      }`}>
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-[#0f1015]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
                Live Pitch Deck Showcase
              </span>
            </div>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-xs text-neutral-400 font-archivo hidden sm:inline">
              Slide {currentSlideIndex + 1} of {slides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`flex items-center gap-1.5 text-xs font-archivo uppercase px-3 py-1.5 rounded border transition-colors ${
                showNotes
                  ? 'bg-neutral-800 text-white border-neutral-700'
                  : 'text-neutral-400 border-neutral-800 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Design Annotations</span>
            </button>

            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:border-neutral-700 transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:border-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Canvas & Slide Screen */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center bg-[#07080a]">
          
          {/* 16:9 Presentation Frame */}
          <div className="w-full max-w-5xl aspect-[16/9] bg-gradient-to-br from-neutral-900 via-[#101217] to-neutral-950 rounded-xl border border-neutral-700/60 shadow-2xl relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            
            {/* Ambient slide glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 blur-[90px] pointer-events-none" />

            {/* Slide Top Metadata Bar */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="font-archivo text-[11px] font-bold tracking-widest text-emerald-400 uppercase">
                  {currentSlide.category}
                </span>
                <span className="text-neutral-700">·</span>
                <span className="text-xs text-neutral-400 font-archivo">
                  {currentSlide.subtitle}
                </span>
              </div>
              <div className="font-archivo text-xs text-neutral-500 uppercase tracking-widest">
                0{currentSlideIndex + 1} / 0{slides.length}
              </div>
            </div>

            {/* Slide Body */}
            <div className="my-auto py-4 relative z-10">
              <h2 className="font-bebas text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight uppercase max-w-3xl">
                {currentSlide.title}
              </h2>

              <p className="mt-3 text-neutral-300 text-sm sm:text-base lg:text-lg max-w-2xl font-light">
                {currentSlide.description}
              </p>

              {/* Layout Specific Dynamic Visuals */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Points checklist */}
                <div className="md:col-span-8 space-y-3">
                  {currentSlide.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metric Callout */}
                {currentSlide.keyMetric && (
                  <div className="md:col-span-4 bg-neutral-900/80 border border-neutral-700/80 rounded-xl p-5 text-right flex flex-col justify-center">
                    <span className="font-bebas text-4xl sm:text-5xl text-emerald-400 tracking-wide">
                      {currentSlide.keyMetric.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-archivo text-neutral-400 mt-1">
                      {currentSlide.keyMetric.label}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Slide Footer */}
            <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4 relative z-10 text-[11px] font-archivo text-neutral-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span>Designed by Mahamudul Hassan</span>
                <span>·</span>
                <span>Confidential</span>
              </div>
              <div>Series A Deck Framework</div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full max-w-5xl mt-4 px-2">
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
              className="flex items-center gap-2 text-xs font-archivo uppercase tracking-wider text-neutral-300 hover:text-white px-4 py-2 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Slide</span>
            </button>

            {/* Slide Pills Indicator */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 transition-all rounded-full ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
              className="flex items-center gap-2 text-xs font-archivo uppercase tracking-wider text-neutral-300 hover:text-white px-4 py-2 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Designer Annotations / Storyteller Notes */}
          {showNotes && (
            <div className="w-full max-w-5xl mt-6 p-4 rounded-xl bg-[#0f1015] border border-neutral-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-archivo font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Why Mahamudul Designed It This Way:</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Notice the mathematical spacing: the headline is an active thesis, not a generic label. Investors instantly absorb the primary takeaway without needing to decipher dense paragraphs. Data anchors ({currentSlide.keyMetric?.value}) are visually elevated to anchor credibility within 3 seconds of viewing.
              </p>
            </div>
          )}

        </div>

        {/* Modal Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-[#0f1015] border-t border-neutral-800">
          <div className="text-xs text-neutral-400 font-archivo text-center sm:text-left">
            Need a custom investor pitch deck designed for your venture round?
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-4 py-2.5 rounded transition-colors inline-flex items-center gap-1.5"
            >
              <span>Book Deck Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
