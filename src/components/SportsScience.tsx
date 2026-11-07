import React, { useState } from 'react';
import { 
  Activity, 
  Cpu, 
  Dumbbell, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Award,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SPORTS_SCIENCE_TECHNOLOGIES, PERSONAL_DATA } from '../data/portfolioData';
import { ScrollExpand } from './ScrollExpand';

export const SportsScience: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState(SPORTS_SCIENCE_TECHNOLOGIES[0].id);

  const activeTech = SPORTS_SCIENCE_TECHNOLOGIES.find((t) => t.id === selectedTech) || SPORTS_SCIENCE_TECHNOLOGIES[0];

  return (
    <section id="sports-science" className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0D2047]/10 text-[#4758D6] border border-[#4758D6]/30 mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#4758D6]" />
            Centre of Sports and Science (CSS) — Sree Kanteerava Stadium
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Specialized Strength & Conditioning
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Applying clinical biomechanics, kinetic data, and laboratory-grade performance technologies to optimize athletic speed, power, and injury resistance.
          </p>
        </div>

        {/* Top 3 Core Institutional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1 — Modern Sport & Speed Hub */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#4758D6]/60 transition-all shadow-sm hover:shadow-xl group text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D2047] border border-[#0D2047] flex items-center justify-center text-[#AEE710] group-hover:scale-105 transition-transform shadow-md">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#0D2047] bg-[#AEE710]/25 border border-[#AEE710]/60 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
                  Gate No. 8
                </span>
              </div>
              <span className="text-xs font-bold text-[#4758D6] uppercase tracking-wider block mb-1">
                Official In-Person Base
              </span>
              <h3 className="text-lg font-bold text-[#0D2047] mb-2">
                Centre for Sports Science (CSS)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Stationed as Strength & Conditioning Coach at Gate No. 8, Sree Kanteerava Outdoor Stadium. Delivers biomechanical analysis, force plate testing, and elite periodization for state and national competitors.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">
                Meet Coach in Person
              </span>
              <a
                href={PERSONAL_DATA.contact.workVenue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#4758D6] hover:text-[#0D2047] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B00C11]" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Pillar 2 — Premium Longevity: Youth Development */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#6A7E59]/60 transition-all shadow-sm hover:shadow-xl group text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#6A7E59]/15 border border-[#6A7E59]/30 flex items-center justify-center text-[#6A7E59] mb-4 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#6A7E59] uppercase tracking-wider block mb-1">
              Youth Development Leader
            </span>
            <h3 className="text-lg font-bold text-[#1D2320] mb-2">
              Lead Trainer, ROOTS Football Team
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Managing complete athletic and physical development pathways across the crucial <span className="text-[#6A7E59] font-bold">U15, U17, and U19</span> age cohorts, bridging physiological growth with match intensity.
            </p>
          </div>

          {/* Pillar 3 — State Talent Identification */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#FFC107]/60 transition-all shadow-sm hover:shadow-xl group text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC107]/20 border border-[#FFC107]/40 flex items-center justify-center text-[#997300] mb-4 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#997300] uppercase tracking-wider block mb-1">
              Official State Selection
            </span>
            <h3 className="text-lg font-bold text-[#1D2320] mb-2">
              Karnataka Talent Identification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Appointed Technical Evaluator for three consecutive cycles (<span className="text-[#997300] font-bold">2023, 2024, 2025</span>), scouting high-potential players across Karnataka through objective sports science testing.
            </p>
          </div>

        </div>

        {/* Interactive Sports Science Diagnostic Lab Matrix with Scroll-to-Expand Animation */}
        <ScrollExpand>
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200 text-left">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  Diagnostic Equipment Suite
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Advanced Sports Science Technologies Utilized
                </h3>
              </div>
              <p className="text-xs text-slate-500 max-w-md">
                John integrates five cutting-edge diagnostic modalities into training regimens to provide athletes with empirical performance metrics.
              </p>
            </div>

            {/* Technology Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 my-8">
              {SPORTS_SCIENCE_TECHNOLOGIES.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`p-4 rounded-2xl text-left transition-all ${
                    selectedTech === tech.id
                      ? 'bg-[#0D2047] text-white shadow-lg border-2 border-[#AEE710] scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 hover:text-[#0D2047] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold uppercase mb-1 ${
                    selectedTech === tech.id ? 'text-[#AEE710]' : 'text-[#4758D6]'
                  }`}>
                    [{tech.acronym}]
                  </div>
                  <div className="font-bold text-sm tracking-tight leading-snug">
                    {tech.name}
                  </div>
                  <div className={`text-[11px] mt-1 line-clamp-1 ${
                    selectedTech === tech.id ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {tech.category}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Technology Deep-Dive Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#0D2047] border border-[#0D2047] flex items-center justify-center font-bold text-[#AEE710] font-mono text-sm shadow-sm">
                    {activeTech.acronym}
                  </span>
                  <div>
                    <h4 className="text-xl font-black text-[#0D2047]">
                      {activeTech.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#64748B]">
                      {activeTech.category}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeTech.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-[#0D2047] uppercase tracking-wider block">
                    Practical Performance & Clinical Applications:
                  </span>
                  {activeTech.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Zap className="w-4 h-4 text-[#4758D6] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Diagnostic Panel on Right - High contrast digital readouts */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0D2047] text-slate-100 border border-[#0D2047] space-y-4 shadow-xl">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-[#AEE710]">
                    <TrendingUp className="w-3.5 h-3.5" />
                    CSS Live Diagnostic Metric
                  </span>
                  <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">CALIBRATED</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300">Precision Testing Frequency</span>
                      <span className="text-[#4758D6] font-mono font-bold">1000 Hz Sampling</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4758D6] w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300">Asymmetry Detection Threshold</span>
                      <span className="text-[#AEE710] font-mono font-bold">&lt; 10% Bilateral</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#AEE710] w-4/5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300">Return-to-Play Readiness Index</span>
                      <span className="text-[#FFC107] font-mono font-bold">Validated Protocol</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFC107] w-11/12" />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070e1f] border border-[#4758D6]/30 text-[11px] text-slate-300">
                  <span className="font-bold text-[#AEE710] block mb-0.5">Coach's Field Insight:</span>
                  "Data removes guesswork. When testing countermovement jumps or isokinetic torque, we pinpoint exact fatigue thresholds before soft-tissue failure occurs."
                </div>

              </div>

            </div>

            {/* Academic Background Note */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Academic Foundation: B.A. Degree • <strong className="text-slate-900">Pursuing B.P.Ed. (Bachelor of Physical Education)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Certified AIFF D-License (Mumbai)</span>
              </div>
            </div>

          </div>
        </ScrollExpand>

      </div>
    </section>
  );
};
