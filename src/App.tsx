import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { CaseStudies } from './components/CaseStudies';
import { AboutSection } from './components/AboutSection';
import { JournalSection } from './components/JournalSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { SlideViewerModal } from './components/SlideViewerModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { BookingModal } from './components/BookingModal';
import { CodeSyncModal } from './components/CodeSyncModal';
import { Footer } from './components/Footer';
import { Project } from './types';
import { Play, Sparkles, ArrowUpRight, Code2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [slideViewerOpen, setSlideViewerOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [codeSyncModalOpen, setCodeSyncModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-neutral-100 selection:bg-white selection:text-black">
      
      {/* Top Banner Alert / Code Sync Indicator */}
      <div className="bg-[#12141c] border-b border-neutral-800/80 px-4 py-2 text-xs font-archivo text-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-white font-semibold">Active Preview:</span>
            <span className="text-neutral-300 truncate">
              Mahamudul Hassan | Presentation &amp; Pitch Deck Specialist Portfolio
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCodeSyncModalOpen(true)}
              className="text-[11px] uppercase tracking-wider text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-semibold"
            >
              <Code2 className="w-3 h-3" />
              <span>View App Code &amp; Sync</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenSlideViewer={() => setSlideViewerOpen(true)}
        onOpenCodeSync={() => setCodeSyncModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreWork={() => {
            const el = document.getElementById('work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenSlideViewer={() => setSlideViewerOpen(true)}
        />

        {/* Selected Clients Banner */}
        <ClientLogos />

        {/* Featured Case Studies */}
        <CaseStudies
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenSlideViewer={() => setSlideViewerOpen(true)}
        />

        {/* Interactive Presentation Deck Promo Section */}
        <section className="py-14 bg-gradient-to-b from-[#0d0e12] to-[#07080a] border-y border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#101218] border border-neutral-800 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs uppercase font-archivo tracking-widest text-emerald-400 font-bold">
                    Interactive Feature
                  </span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide uppercase">
                  Experience a Live Pitch Deck Simulator
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  Click through a high-stakes, 16:9 widescreen Series A pitch deck crafted with custom typography, problem-solution frameworks, market size calculation, and designer annotations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setSlideViewerOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-archivo font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-all shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch 16:9 Simulator</span>
                </button>

                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-archivo uppercase tracking-wider text-neutral-300 hover:text-white px-5 py-4 rounded border border-neutral-700 bg-neutral-900"
                >
                  <span>Book Custom Deck</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* About Mahamudul, Experience & Education */}
        <AboutSection onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Articles / The Journal */}
        <JournalSection />

        {/* Contact Form & TidyCal Meeting Scheduler */}
        <ContactSection onOpenBooking={() => setBookingModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenCodeSync={() => setCodeSyncModalOpen(true)}
      />

      {/* Modals */}
      <SlideViewerModal
        isOpen={slideViewerOpen}
        onClose={() => setSlideViewerOpen(false)}
        onOpenBooking={() => {
          setSlideViewerOpen(false);
          setBookingModalOpen(true);
        }}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSlideViewer={() => {
          setSelectedProject(null);
          setSlideViewerOpen(true);
        }}
        onOpenBooking={() => {
          setSelectedProject(null);
          setBookingModalOpen(true);
        }}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <CodeSyncModal
        isOpen={codeSyncModalOpen}
        onClose={() => setCodeSyncModalOpen(false)}
      />

    </div>
  );
}
