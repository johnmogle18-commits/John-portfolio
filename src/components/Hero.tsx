import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Activity, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  Dumbbell,
  Compass
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [photoMode, setPhotoMode] = useState<'suit' | 'athlete'>('suit');

  const clubLogos = [
    { name: "Mumbai FC", src: "/images/logo_mumbai_fc.jpg", sub: "I-League & 2nd Div Champ" },
    { name: "Pune FC", src: "/images/logo_pune_fc.jpg", sub: "I-League Top Flight" },
    { name: "BDFA XI", src: "/images/logo_bdfa.png", sub: "All India Champions 2014" },
    { name: "KSFA", src: "/images/logo_ksfa.png", sub: "State U16, U19, U21" },
    { name: "HAL Club", src: "/images/logo_hal.png", sub: "All India Runners-Up" },
    { name: "Student Union FC", src: "/images/logo_sufc.png", sub: "Super Division 1955" },
  ];

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden executive-grid-light bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
      {/* Background subtle radial accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill badges — Tri-Palette Thematic Accents */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4758D6]/10 text-[#4758D6] border border-[#4758D6]/30 shadow-sm whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4758D6] shrink-0" />
                AIFF D-License Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#B00C11]/10 text-[#B00C11] border border-[#B00C11]/30 shadow-sm whitespace-nowrap">
                <Award className="w-3.5 h-3.5 text-[#B00C11] shrink-0" />
                Ex-I-League Professional
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#AEE710]/20 text-[#1D2320] border border-[#AEE710]/50 shadow-sm whitespace-nowrap font-bold">
                <Activity className="w-3.5 h-3.5 text-[#0D2047] shrink-0" />
                CSS Sree Kanteerava Stadium
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0D2047] tracking-tight leading-[1.1]">
                JOHN BENEDICT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4758D6] via-[#B00C11] to-[#FFC107]">. M</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700 flex items-center gap-2">
                <span className="text-[#4758D6] font-bold">Central Defender & Right Wing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span className="text-[#1D2320] font-semibold">Elite Strength & Conditioning Coach</span>
              </p>
            </div>

            {/* Detailed narrative */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              A seasoned professional footballer with a celebrated decade in India's top flight—including lifting the 
              <span className="text-[#B00C11] font-bold"> National 2nd Division Championship</span> with Mumbai FC and competing in the 
              <span className="text-[#0D2047] font-bold"> I-League & Federation Cup</span>. Today, John empowers high-performance athletes as Strength & Conditioning Coach at 
              <span className="text-[#4758D6] font-bold"> Centre for Sports Science (Gate No. 8, Sree Kanteerava Outdoor Stadium)</span>, applying advanced force plates, isokinetic dynamometry, and kinematic speed diagnostics.
            </p>

            {/* Quick Meta Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block">Dominant Foot</span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4758D6]"></span>
                  {PERSONAL_DATA.physicalAttributes.dominantFoot}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block">Height & Weight</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                  {PERSONAL_DATA.physicalAttributes.height} • {PERSONAL_DATA.physicalAttributes.weight}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block">Primary Positions</span>
                <span className="text-sm font-bold text-[#B00C11] mt-0.5 block truncate">
                  CB / Right Wing
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block">Meet In Person</span>
                <a 
                  href={PERSONAL_DATA.contact.workVenue.directionsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#4758D6] hover:text-[#0D2047] mt-0.5 flex items-center gap-1 group"
                  title="Centre for Sports Science, Gate No. 8, Sree Kanteerava Outdoor Stadium"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B00C11] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">Gate 8, Kanteerava</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#career"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#B00C11] hover:bg-[#8f080c] shadow-md shadow-[#B00C11]/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Playing Career</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#sports-science"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#0D2047] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
              >
                <Activity className="w-4 h-4 text-[#4758D6]" />
                <span>Sports Science & S&C</span>
              </a>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#6A7E59] hover:bg-[#6A7E59]/20 bg-[#6A7E59]/10 border border-[#6A7E59]/30 transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#6A7E59]" />
                <span>Contact Coach</span>
              </button>
            </div>

            {/* Numbers summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              {PERSONAL_DATA.statsSummary.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#0D2047] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#4758D6]">{stat.label}</div>
                  <div className="text-[11px] text-slate-500 leading-tight">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Profile Presentation Card with Photo Toggle */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Profile Card Container */}
              <div className="relative rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xl">
                
                {/* Photo Mode Switcher */}
                <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4758D6]"></span>
                    <span className="text-xs font-bold text-[#0D2047] tracking-wide">PORTFOLIO VIEW</span>
                  </div>
                  <div className="flex items-center bg-slate-200/80 rounded-lg p-0.5 border border-slate-300">
                    <button
                      onClick={() => setPhotoMode('suit')}
                      className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                        photoMode === 'suit'
                          ? 'bg-[#0D2047] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Executive & S&C
                    </button>
                    <button
                      onClick={() => setPhotoMode('athlete')}
                      className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                        photoMode === 'athlete'
                          ? 'bg-[#B00C11] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      On The Pitch
                    </button>
                  </div>
                </div>

                {/* Primary Photo Display */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={photoMode === 'suit' ? '/images/john_suit_portrait.jpg' : '/images/john_red_jersey_portrait.jpg'}
                    alt="John Benedict M"
                    className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[#0D2047] text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#FFC107]" />
                      <span>{photoMode === 'suit' ? 'Sports Science Specialist' : 'Former I-League Pro #18'}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-[#0D2047] text-[#AEE710] font-black text-xs flex items-center justify-center shadow-md border-2 border-[#AEE710]/50">
                      CSS
                    </div>
                  </div>

                  {/* Bottom overlay info on photo */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg space-y-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0D2047] font-black text-sm tracking-wide">
                          {photoMode === 'suit' ? 'John Benedict M' : 'John Benedict #18'}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#4758D6]/10 text-[#4758D6] font-bold">
                          {photoMode === 'suit' ? 'Coach & Evaluator' : 'Central Defender / RW'}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-600 leading-snug">
                        {photoMode === 'suit' 
                          ? 'Strength & Conditioning Coach, Centre for Sports Science (Gate No. 8, Sree Kanteerava Outdoor Stadium).'
                          : 'Mumbai FC, Pune FC, BDFA XI (All India Champ), Karnataka State U16/19/21.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2.5 text-left">
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Dumbbell className="w-3.5 h-3.5 text-[#4758D6]" />
                      Lead Trainer, ROOTS Football Team
                    </span>
                    <span className="text-[#6A7E59] font-bold bg-[#6A7E59]/15 px-1.5 py-0.5 rounded border border-[#6A7E59]/30">U15 • U17 • U19</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-700 pt-1 border-t border-slate-200">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Compass className="w-3.5 h-3.5 text-[#4758D6]" />
                      Technical Talent Evaluator
                    </span>
                    <span className="text-[#0D2047] font-bold">2023 – 2025</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Club Crests Ticker / Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Clubs Represented & Key Affiliations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {clubLogos.map((club, idx) => (
              <div 
                key={idx}
                className="group p-3.5 rounded-2xl bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-300 transition-all flex flex-col items-center text-center gap-2 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 p-1.5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform border border-slate-100">
                  <img
                    src={club.src}
                    alt={club.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors block">
                    {club.name}
                  </span>
                  <span className="text-[10px] text-slate-500 block line-clamp-1 font-medium">
                    {club.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
