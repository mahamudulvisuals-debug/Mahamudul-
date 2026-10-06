import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCodeSync: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenCodeSync }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#07080a] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-bebas text-3xl text-white tracking-wider">
              Mahamudul Hassan
            </span>
            <p className="text-xs uppercase font-archivo tracking-wider text-neutral-400 mt-1">
              Presentation Designer & Pitch Deck Specialist
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-archivo text-neutral-400">
            {PERSONAL_INFO.socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-600" />
              </a>
            ))}
            <button
              onClick={onOpenCodeSync}
              className="hover:text-blue-400 transition-colors"
            >
              Code Sync
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-archivo text-neutral-500">
          <p>© {new Date().getFullYear()} Mahamudul Hassan. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with high typographic rigor</span>
            <span>·</span>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              mahamudulhassan.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
