import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0D2047]/10 text-[#0D2047] border border-[#4758D6]/30 mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#4758D6]" />
            Connect & Meet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Get in Touch with John Benedict
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Reach out directly for team Strength & Conditioning coaching, athletic biomechanical assessments, football academy leadership, or in-person meetings.
          </p>
        </div>

        {/* Featured Card: Meet In-Person at Gate No. 8, Sree Kanteerava Stadium */}
        <div className="mb-8 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0D2047]/5 via-white to-[#4758D6]/10 border-2 border-[#0D2047]/20 shadow-xl text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#0D2047]/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D2047] text-white shadow-sm">
                  📍 Official Work & Meeting Base
                </span>
                <span className="text-xs font-bold text-[#0D2047] bg-[#AEE710]/25 border border-[#AEE710]/60 px-2.5 py-0.5 rounded-full font-mono">
                  Gate No. 8
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#0D2047] flex items-center gap-2">
                <Navigation className="w-6 h-6 text-[#4758D6] shrink-0" />
                Centre for Sports Science (CSS)
              </h3>
              <p className="text-sm font-bold text-[#4758D6] mt-1">
                Gate No. 8, Sree Kanteerava Outdoor Stadium, Sampangi Rama Nagar, Bangalore – 560001
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={PERSONAL_DATA.contact.workVenue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#B00C11] hover:bg-[#8f080c] shadow-md shadow-[#B00C11]/25 transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
              </a>
              <a
                href={`tel:${PERSONAL_DATA.contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0D2047] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#4758D6]" />
                <span>Call Before Coming</span>
              </a>
            </div>
          </div>

          <div className="mt-5 p-4 rounded-2xl bg-white border border-[#0D2047]/10 text-xs sm:text-sm text-slate-700 space-y-2">
            <span className="font-extrabold text-[#0D2047] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4758D6] shrink-0" />
              Visiting & In-Person Consultation Notice:
            </span>
            <p className="leading-relaxed text-slate-600">
              John is actively stationed here as <strong>Strength & Conditioning Coach</strong>. If you are an athlete, parent, academy director, or sports team seeking an evaluation, fitness assessment, or in-person consultation, please come directly to <strong>Gate No. 8 at Sree Kanteerava Outdoor Stadium</strong>.
            </p>
          </div>
        </div>

        {/* Direct Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          
          {/* Phone Card — Power & Authority Crimson */}
          <a 
            href={`tel:${PERSONAL_DATA.contact.phone}`}
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#B00C11] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group block"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B00C11]/10 border border-[#B00C11]/25 flex items-center justify-center text-[#B00C11] group-hover:scale-105 transition-transform mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                Direct Mobile
              </span>
              <span className="text-base font-black text-slate-900 group-hover:text-[#B00C11] transition-colors mt-1 block">
                {PERSONAL_DATA.contact.displayPhone}
              </span>
            </div>
            <span className="text-xs text-[#B00C11] font-semibold pt-4 mt-2 border-t border-slate-100 flex items-center gap-1">
              Tap to call directly →
            </span>
          </a>

          {/* WhatsApp Direct — Premium Longevity Forest Green */}
          <a 
            href={`https://wa.me/91${PERSONAL_DATA.contact.phone}?text=Hello%20John,%20I%20would%20like%20to%20meet%20you%20at%20Gate%20No.%208,%20Sree%20Kanteerava%20Stadium.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#6A7E59] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group block"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#6A7E59]/15 border border-[#6A7E59]/30 flex items-center justify-center text-[#6A7E59] group-hover:scale-105 transition-transform mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                WhatsApp Chat
              </span>
              <span className="text-base font-black text-slate-900 group-hover:text-[#6A7E59] transition-colors mt-1 block">
                Chat on WhatsApp
              </span>
            </div>
            <span className="text-xs text-[#6A7E59] font-semibold pt-4 mt-2 border-t border-slate-100 flex items-center gap-1">
              Coordinate via chat →
            </span>
          </a>

          {/* Email Card — Modern Sport & Speed Electric Blue */}
          <a 
            href={`mailto:${PERSONAL_DATA.contact.email}`}
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#4758D6] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group block"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#4758D6]/10 border border-[#4758D6]/20 flex items-center justify-center text-[#4758D6] group-hover:scale-105 transition-transform mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                Direct Email
              </span>
              <span className="text-xs font-black text-slate-900 group-hover:text-[#4758D6] transition-colors mt-1 block truncate" title={PERSONAL_DATA.contact.email}>
                {PERSONAL_DATA.contact.email}
              </span>
            </div>
            <span className="text-xs text-[#4758D6] font-semibold pt-4 mt-2 border-t border-slate-100 flex items-center gap-1">
              Send an email →
            </span>
          </a>

          {/* Residence Address Card — Charcoal Neutral */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1D2320]/10 border border-[#1D2320]/20 flex items-center justify-center text-[#1D2320] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                Permanent Residence
              </span>
              <p className="text-xs font-semibold text-[#1D2320] leading-relaxed mt-1">
                {PERSONAL_DATA.contact.address}
              </p>
            </div>
            <span className="text-[11px] text-slate-500 pt-4 mt-2 border-t border-slate-200">
              Austin Town, Bangalore
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
