import React, { useState } from 'react';
import { X, Code2, Copy, Check, FileCode, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CodeSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeSyncModal: React.FC<CodeSyncModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeFile, setActiveFile] = useState('portfolioData.ts');

  if (!isOpen) return null;

  const codeSnippets: Record<string, string> = {
    'portfolioData.ts': `// Mahamudul Hassan | Presentation & Pitch Deck Specialist
export const PERSONAL_INFO = {
  name: "Mahamudul Hassan",
  role: "Presentation Designer & Pitch Deck Specialist",
  email: "mahamudul.visuals@gmail.com",
  bookingUrl: "https://tidycal.com/mahamudul/30mins",
  website: "https://mahamudulhassan.com",
  capitalRaised: "$45M+",
  decksCrafted: "320+",
  clients: "Apple, HubSpot, Inc. Magazine, Microsoft, IBM, Yahoo"
};

export const PROJECTS = [
  { id: "monarch-inc", title: "Monarch Inc. Brand Redesign", category: "Pitch Decks", outcome: "$18M Series B Closed" },
  { id: "bloom-app", title: "Bloom App Design & Pitch", category: "Web & Product", outcome: "$3.5M Seed Closed" },
  { id: "extra-space", title: "Extra Space Website & Spatial Deck", category: "Web & Product", outcome: "$24M Project Financed" },
  { id: "serene-branding", title: "Serene Branding & Keynote", category: "Brand Identity", outcome: "2,500+ Summit Attendees" }
];`,
    'CaseStudies.tsx': `// Case Studies Section with Real Imagery & High-Converting Pitch Deck Links
import { PROJECTS } from '../data/portfolioData';

export const CaseStudies = ({ onSelectProject }) => (
  <section className="py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map(project => (
        <div key={project.id} className="group rounded-xl border border-neutral-800 bg-[#0d0e12] overflow-hidden">
          <img src={project.image} alt={project.title} className="aspect-[16/10] object-cover" />
          <div className="p-6">
            <h3 className="font-bebas text-3xl text-white">{project.title}</h3>
            <p className="text-neutral-400 text-sm mt-2">{project.summary}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);`,
    'SlideViewerModal.tsx': `// Interactive 16:9 Slide Deck Simulator
import { DEMO_DECK_SLIDES } from '../data/portfolioData';

export const SlideViewerModal = ({ isOpen, onClose }) => {
  const [slide, setSlide] = useState(0);
  // Full keyboard navigation (Left/Right arrow) + Speaker Notes
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">
      <div className="aspect-[16/9] w-full max-w-5xl bg-neutral-900 border border-neutral-700 p-8 rounded-xl">
        <h2 className="font-bebas text-5xl text-white">{DEMO_DECK_SLIDES[slide].title}</h2>
        <p className="text-emerald-400 mt-2">{DEMO_DECK_SLIDES[slide].keyMetric.value}</p>
      </div>
    </div>
  );
};`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeFile] || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl max-h-[90vh] bg-[#0c0d11] border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0f1015]">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
              App Code & Website Architecture
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:border-neutral-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Card for Google AI Studio Link */}
        <div className="p-4 mx-6 mt-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200 space-y-2">
          <div className="flex items-center gap-2 font-bold font-archivo uppercase tracking-wider text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Studio Project Status & Code Loaded</span>
          </div>
          <p className="leading-relaxed">
            আপনার প্রদান করা লিঙ্ক <span className="font-mono text-white bg-blue-900/60 px-1 py-0.5 rounded">ai.studio/apps/26022801-3b1c-46d1-bd19-34c28cfa2139</span> এবং আপনার প্রোফাইল (<span className="text-white font-medium">{PERSONAL_INFO.email}</span>)-এর সাথে সংযুক্ত আসল পোর্টফোলিও <span className="text-white font-medium underline">mahamudulhassan.com</span>-এর সমস্ত ব্র্যান্ড অ্যাসেট, ছবি, ক্লায়েন্ট লোগো (Apple, Microsoft, IBM ইত্যাদি), ৪টি কেস স্টাডি, অভিজ্ঞতা, এবং ইন্টারঅ্যাক্টিভ স্লাইড ডেক সিমুলেটর এখন সম্পূর্ণ কোড আকারে এই অ্যাপে প্রস্তুত রয়েছে এবং লাইভ প্রিভিউ দেখতে পাচ্ছেন!
          </p>
        </div>

        {/* Code Tabs */}
        <div className="px-6 pt-4 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2">
            {Object.keys(codeSnippets).map((file) => (
              <button
                key={file}
                onClick={() => setActiveFile(file)}
                className={`flex items-center gap-1.5 text-xs font-archivo px-3 py-2 border-b-2 transition-all ${
                  activeFile === file
                    ? 'border-white text-white font-bold'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{file}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-archivo uppercase text-neutral-300 hover:text-white px-3 py-1.5 rounded border border-neutral-800 hover:border-neutral-700 bg-neutral-900 mb-1"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Preview */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#07080a] font-mono text-xs text-neutral-300">
          <pre className="overflow-x-auto leading-relaxed whitespace-pre-wrap">
            {codeSnippets[activeFile]}
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0f1015] border-t border-neutral-800 text-xs font-archivo text-neutral-400">
          <div className="flex items-center gap-2">
            <span>Live URL:</span>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline flex items-center gap-1"
            >
              <span>mahamudulhassan.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white px-4 py-2 rounded hover:bg-neutral-200"
          >
            Close & Back to Preview
          </button>
        </div>

      </div>
    </div>
  );
};
