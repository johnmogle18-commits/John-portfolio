import React from 'react';
import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D2047] border-t border-[#1D2320] text-slate-300 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1D2320] to-[#4758D6] border border-white/20 flex items-center justify-center font-black text-white text-sm shadow-sm">
                JB
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base tracking-tight">
                  JOHN BENEDICT M
                </h4>
                <p className="text-[11px] text-[#AEE710] font-semibold">
                  Ex-I-League Pro • Strength & Conditioning Coach • Sports Scientist
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-xs max-w-sm leading-relaxed">
              Former professional footballer for Mumbai FC, Pune FC, BDFA XI, and Karnataka State. Currently serving at Centre for Sports Science (Gate No. 8, Sree Kanteerava Outdoor Stadium) and Lead Trainer for ROOTS Football Team.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-[#4758D6] transition-colors">About & Profile</a></li>
              <li><a href="#tactics" className="hover:text-[#4758D6] transition-colors">Tactical Pitch Profile</a></li>
              <li><a href="#career" className="hover:text-[#4758D6] transition-colors">Playing Career (2003–2016)</a></li>
              <li><a href="#sports-science" className="hover:text-[#4758D6] transition-colors">Sports Science & S&C</a></li>
              <li><a href="#coaching" className="hover:text-[#4758D6] transition-colors">Coaching Journey</a></li>
              <li><a href="#gallery" className="hover:text-[#4758D6] transition-colors">Action Photo Gallery</a></li>
              <li><a href="#achievements" className="hover:text-[#4758D6] transition-colors">Honors & Trophy Cabinet</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Direct Contact
            </span>
            <div className="space-y-1.5 text-xs text-slate-200">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4758D6] shrink-0" />
                <a href={`tel:${PERSONAL_DATA.contact.phone}`} className="hover:text-white">
                  {PERSONAL_DATA.contact.displayPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4758D6] shrink-0" />
                <a href={`mailto:${PERSONAL_DATA.contact.email}`} className="hover:text-white truncate">
                  {PERSONAL_DATA.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#4758D6] shrink-0 mt-0.5" />
                <span>Austin Town, Bangalore – 560047</span>
              </p>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[11px] font-bold text-[#FFC107] block mb-0.5">Meet In Person:</span>
                <a 
                  href={PERSONAL_DATA.contact.workVenue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-200 hover:text-[#AEE710] flex items-start gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FFC107] shrink-0 mt-0.5" />
                  <span>Gate No. 8, Sree Kanteerava Outdoor Stadium (CSS)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} John Benedict M. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#AEE710] font-semibold">AIFF D-License Certified</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-[#4758D6] transition-colors"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
