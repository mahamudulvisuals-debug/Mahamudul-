import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0a0b0e] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-neutral-600" />
            <span className="text-xs uppercase font-archivo tracking-widest text-neutral-400">
              Endorsements
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide uppercase">
            Client Words
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base">
            What venture founders and executive partners say about collaborating with Mahamudul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-xl bg-[#0d0e12] border border-neutral-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-neutral-600" />
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <p className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
                  {t.author}
                </p>
                <p className="text-[11px] text-neutral-400 font-archivo">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
