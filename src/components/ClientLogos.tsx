import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0d0e12] border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-neutral-600" />
            <span className="text-xs uppercase font-archivo tracking-widest text-neutral-400">
              Trusted by Innovators
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide uppercase">
            Selected Clients
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            I’ve had the privilege of working with innovative startups, industry leaders, and forward-thinking businesses to craft impactful presentations that drive results. From investor pitch decks to corporate presentations, my designs have helped companies secure funding, close deals, and captivate audiences worldwide.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="group relative h-24 bg-neutral-900/60 hover:bg-neutral-800/60 border border-neutral-800 hover:border-neutral-700 rounded-lg p-5 flex items-center justify-center transition-all duration-300"
            >
              <img
                src={client.url}
                alt={client.name}
                className="max-h-10 max-w-[120px] object-contain filter invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  // Text fallback if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-text font-archivo font-bold text-xs uppercase tracking-widest text-neutral-300';
                    span.innerText = client.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
