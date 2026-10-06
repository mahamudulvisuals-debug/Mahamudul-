import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, X } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/portfolioData';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="journal" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-neutral-600" />
              <span className="text-xs uppercase font-archivo tracking-widest text-neutral-400">
                Insights & Methodology
              </span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
              The Journal
            </h2>
            <p className="mt-2 text-neutral-400 max-w-xl text-sm sm:text-base">
              Notes on investor psychology, visual storytelling, and the science of making decks that convert.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group p-6 sm:p-7 rounded-xl bg-[#0d0e12] border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-archivo text-neutral-400">
                  <span className="uppercase tracking-widest text-neutral-300 font-bold">{article.category}</span>
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-neutral-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-archivo uppercase font-bold tracking-wider text-white inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <BookOpen className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-2xl max-h-[85vh] bg-[#0c0d11] border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0f1015]">
              <div className="flex items-center gap-2 text-xs font-archivo text-neutral-400">
                <span className="uppercase tracking-widest text-emerald-400">{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:border-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-archivo uppercase tracking-widest text-neutral-500">
                  Published {selectedArticle.date} by Mahamudul Hassan
                </span>
                <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase mt-2">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 italic text-sm text-neutral-300">
                "{selectedArticle.excerpt}"
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-[#0f1015] border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-5 py-2.5 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
