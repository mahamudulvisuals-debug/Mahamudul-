import React, { useState } from 'react';
import { Mail, Calendar, ArrowUpRight, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Investor Pitch Deck',
    budget: '$3,000 - $5,000',
    timeline: 'Within 2 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Booking Hook */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-neutral-600" />
                <span className="text-xs uppercase font-archivo tracking-widest text-neutral-400">
                  Initiate Collaboration
                </span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
                Let’s Get Started
              </h2>
              <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                Tell me about your project and deadline. If you’re ready to elevate your ideas and make an impact, let’s create something remarkable together!
              </p>
              <p className="mt-2 text-neutral-400 text-sm">
                I personally review every inquiry and typically respond within 12–24 hours.
              </p>
            </div>

            {/* Quick Actions Card */}
            <div className="p-6 rounded-2xl bg-[#0d0e12] border border-neutral-800 space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-white">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-archivo text-xs uppercase font-bold tracking-wider text-white">
                    Need a Faster Decision?
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Book a direct 30-minute discovery call via TidyCal to discuss scope, timeline, and deliverables live.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-3.5 py-2 rounded transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Open Calendar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={PERSONAL_INFO.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-archivo text-neutral-400 hover:text-white underline underline-offset-4"
                    >
                      Open in TidyCal ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-white">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-archivo text-xs uppercase font-bold tracking-wider text-white">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs text-neutral-300 hover:text-white underline underline-offset-2"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Follow & Socials */}
            <div className="space-y-3">
              <span className="font-archivo text-xs uppercase tracking-widest text-neutral-400 font-bold">
                Follow & Connect
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-archivo text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0e12] border border-neutral-800 shadow-xl relative">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide uppercase">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Mahamudul has received your project details for <span className="text-emerald-400">{formData.projectType}</span> and will get back to you at <span className="underline">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-archivo uppercase tracking-wider text-neutral-400 hover:text-white px-4 py-2 border border-neutral-800 rounded"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white px-4 py-2 rounded"
                    >
                      Book 30-Min Call
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@startup.io"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Investor Pitch Deck',
                        'Sales & Enterprise Deck',
                        'Keynote Presentation',
                        'Brand System & Templates'
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`p-2.5 rounded text-left text-xs font-archivo transition-all border ${
                            formData.projectType === type
                              ? 'bg-white text-black font-semibold border-white'
                              : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors"
                      >
                        <option value="$2,000 - $3,500">$2,000 - $3,500 (Early Deck)</option>
                        <option value="$3,500 - $6,000">$3,500 - $6,000 (Series A / B Full Package)</option>
                        <option value="$6,000 - $12,000+">$6,000 - $12,000+ (Enterprise / Keynote System)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                        Target Deadline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors"
                      >
                        <option value="Rush: 5-7 Days">Rush: 5–7 Days (Urgent)</option>
                        <option value="Standard: 2 Weeks">Standard: 2 Weeks</option>
                        <option value="Flexible: 3-4 Weeks">Flexible: 3–4 Weeks</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                      Tell me about your project, stage, or goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your business, current slide count or draft, and what key milestone this presentation needs to achieve..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-neutral-500 font-archivo">
                      Guaranteed 100% confidential under mutual NDA.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-archivo font-bold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all shadow-md disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
