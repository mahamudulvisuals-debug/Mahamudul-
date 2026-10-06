import React, { useState } from 'react';
import { X, Calendar, Clock, Globe, ArrowUpRight, CheckCircle2, User, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('2:00 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const dates = ['Tomorrow', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM', '6:00 PM'];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-[#0c0d11] border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0f1015]">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="font-archivo text-xs font-bold uppercase tracking-wider text-white">
              Schedule 30-Min Strategy Call
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:border-neutral-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {booked ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bebas text-3xl text-white uppercase tracking-wide">
                Call Confirmed!
              </h3>
              <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                Your 30-minute discovery call with Mahamudul Hassan is scheduled for <span className="text-white font-semibold">{selectedDate} at {selectedTime}</span>. A calendar invitation has been prepared for <span className="underline">{email}</span>.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={PERSONAL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-4 py-2.5 rounded inline-flex items-center gap-1.5"
                >
                  <span>Sync with TidyCal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onClose}
                  className="text-xs font-archivo uppercase tracking-wider text-neutral-400 hover:text-white px-4 py-2.5 border border-neutral-800 rounded"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-5">
              
              <div className="flex items-center justify-between text-xs text-neutral-400 font-archivo border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>30 Minutes · Google Meet / Zoom</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Timezone Auto-Detected</span>
                </div>
              </div>

              {/* Day selection */}
              <div>
                <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                  Select Preferred Day
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`py-2 px-2 rounded text-xs font-archivo text-center border transition-all ${
                        selectedDate === d
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 rounded text-xs font-archivo text-center border transition-all ${
                        selectedTime === t
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-archivo uppercase tracking-wider text-neutral-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={PERSONAL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-archivo text-neutral-400 hover:text-white underline"
                >
                  Or book directly on TidyCal ↗
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto text-xs font-archivo uppercase font-bold tracking-wider text-black bg-white hover:bg-neutral-200 px-6 py-3 rounded transition-colors"
                >
                  Confirm Meeting
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
