import React, { useState } from 'react';
import { Menu, X, Calendar, Play, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenSlideViewer: () => void;
  onOpenCodeSync: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenSlideViewer,
  onOpenCodeSync
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c0e]/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center p-1.5 overflow-hidden group-hover:border-neutral-500 transition-colors">
            <img
              src="https://mahamudulhassan.com/wp-content/uploads/2025/02/Logo-icon-01.png"
              alt="Mahamudul Hassan"
              className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                // Fallback icon if remote image is blocked
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-bebas text-xl font-bold tracking-wider text-white">MH</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bebas text-xl tracking-wider text-white group-hover:text-neutral-200 transition-colors">
                Mahamudul Hassan
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] uppercase font-archivo tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded">
                Available
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 tracking-wide font-archivo uppercase -mt-0.5">
              Presentation & Pitch Deck Specialist
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                activeTab === item.id
                  ? 'text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Interactive Slide Deck Demo */}
          <button
            onClick={onOpenSlideViewer}
            className="flex items-center gap-2 text-xs font-archivo uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-2 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 transition-colors"
            title="Preview interactive slide deck demo"
          >
            <Play className="w-3.5 h-3.5 text-neutral-400" />
            <span>Interactive Deck</span>
          </button>

          {/* Code & Sync Explorer */}
          <button
            onClick={onOpenCodeSync}
            className="flex items-center gap-2 text-xs font-archivo uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-2 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 transition-colors"
            title="View code or sync external files"
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Code & Sync</span>
          </button>

          {/* Quick Call CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-4 py-2.5 rounded transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Set a Quick Call</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white px-2.5 py-1.5 rounded"
          >
            Call
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#0d0e12] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded text-sm font-medium ${
                  activeTab === item.id
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSlideViewer();
              }}
              className="flex items-center justify-center gap-2 text-xs font-archivo uppercase tracking-wider text-neutral-300 py-2.5 rounded border border-neutral-800 bg-neutral-900"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Deck Preview</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeSync();
              }}
              className="flex items-center justify-center gap-2 text-xs font-archivo uppercase tracking-wider text-blue-300 py-2.5 rounded border border-neutral-800 bg-neutral-900"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code & Sync</span>
            </button>
          </div>

          <div className="pt-2">
            <a
              href={PERSONAL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-center text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white py-3 rounded"
            >
              <span>Schedule on TidyCal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
