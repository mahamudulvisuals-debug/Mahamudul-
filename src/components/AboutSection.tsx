import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, ArrowUpRight, Award, Compass, Zap } from 'lucide-react';
import { EXPERIENCES, EDUCATION, PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const tools = [
    { name: 'Microsoft PowerPoint', category: 'Executive Decks & Animations' },
    { name: 'Apple Keynote', category: 'Keynotes & Cinema Stage' },
    { name: 'Google Slides', category: 'Cloud Collaboration' },
    { name: 'Figma', category: 'Design Systems & Mockups' },
    { name: 'Pitch.com', category: 'Interactive VC Presentations' },
    { name: 'Adobe Illustrator', category: 'Vector Data & Graphics' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0d0e12] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-neutral-600" />
            <span className="text-xs uppercase font-archivo tracking-widest text-neutral-400">
              Biography & Experience
            </span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
            About Mahamudul
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg leading-relaxed">
            A presentation designer and visual storyteller fusing sociological insight with high-end aesthetic precision.
          </p>
        </div>

        {/* Narrative & Portrait Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Bio narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                <span className="font-bebas text-2xl text-white tracking-wide mr-2">HELLO THERE,</span>
                I believe a great presentation isn’t just about beautiful design—it’s about telling a compelling story that connects with your audience and triggers decisive action.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                With a background in Sociology from the National University of Bangladesh, I approach every pitch deck not merely as graphic decoration, but as an exercise in human communication, perceptual psychology, and investor persuasion. Whether it’s a high-stakes Series A pitch, a board meeting, or a keynote before thousands, I craft slides that do more than just look good—they speak, inspire, and leave a lasting impression.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Over the past 8+ years, I have spearheaded presentations for innovative startups, Fortune 500 executives, and world-class agencies—helping raise more than $45M in venture capital.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <h4 className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
                  Narrative Strategy
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Clarifying the core thesis before touching a single slide.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h4 className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
                  Typographic Punch
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Mathematical hierarchy so skim-readers absorb value in seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <Award className="w-5 h-5 text-blue-400" />
                <h4 className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
                  Investor Psychology
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  De-risking the business model with transparent data visualization.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-6 py-3.5 rounded transition-all"
              >
                <span>Let's Discuss Your Presentation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Tools & Software Arsenal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <h3 className="font-archivo text-xs uppercase font-bold tracking-widest text-neutral-400">
                  Software & Presentation Arsenal
                </h3>
                <span className="text-[10px] font-archivo uppercase tracking-wider text-emerald-400">
                  Master Level
                </span>
              </div>

              <div className="space-y-3">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800/80"
                  >
                    <div>
                      <p className="text-xs font-bold text-white font-archivo">
                        {tool.name}
                      </p>
                      <p className="text-[11px] text-neutral-400">
                        {tool.category}
                      </p>
                    </div>
                    <span className="text-neutral-500 font-archivo text-[10px] uppercase">
                      Pro
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick quote callout */}
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-400 italic">
              "Design is not just what it looks like and feels like. In pitch decks, design is what gets the term sheet signed."
            </div>
          </div>

        </div>

        {/* Experience Timeline */}
        <div className="pt-12 border-t border-neutral-800/80">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-neutral-400" />
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
              Professional Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-archivo text-neutral-400 mb-2">
                    <span className="uppercase tracking-widest text-emerald-400">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <h4 className="font-bebas text-2xl text-white tracking-wide uppercase">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-archivo uppercase tracking-wider text-neutral-300 font-bold mb-3">
                    @ {exp.company}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-neutral-800/80">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-14 pt-10 border-t border-neutral-800/80">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-neutral-400" />
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
              Education & Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-archivo text-neutral-400">
                  <span className="uppercase tracking-widest text-white font-bold">{edu.degree}</span>
                  <span className="text-neutral-500">{edu.period}</span>
                </div>
                <p className="text-xs font-archivo uppercase text-neutral-400">
                  {edu.institution}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
