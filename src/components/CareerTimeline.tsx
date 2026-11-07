import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  CheckCircle2, 
} from 'lucide-react';
import { PLAYING_CAREER } from '../data/portfolioData';

export const CareerTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pro' | 'state' | 'championship'>('all');

  const filteredClubs = PLAYING_CAREER.filter((club) => {
    if (filter === 'all') return true;
    if (filter === 'pro') return club.category === 'pro';
    if (filter === 'state') return club.category === 'state';
    if (filter === 'championship') {
      return club.badgeHighlight?.includes('Champ') || club.badgeHighlight?.includes('🏆');
    }
    return true;
  });

  return (
    <section id="career" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0D2047]/10 text-[#0D2047] border border-[#4758D6]/30 mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#B00C11]" />
            Playing Career Till Date (2003 – 2016)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            A Decade of Elite Football Battles
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            From youth state caps to winning national championships and representing top clubs in India's I-League and Federation Cup.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Complete Timeline' },
            { id: 'pro', label: 'I-League & Top Flight' },
            { id: 'state', label: 'State & National Caps' },
            { id: 'championship', label: 'Championship Trophies 🏆' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? tab.id === 'championship'
                    ? 'bg-[#B00C11] text-white shadow-md shadow-[#B00C11]/30'
                    : 'bg-[#0D2047] text-white shadow-md border-b-2 border-[#4758D6]'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Stream */}
        <div className="relative">
          {/* Central vertical guideline on desktop */}
          <div className="hidden lg:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-0.5 bg-slate-200" />

          <div className="space-y-8 sm:space-y-12">
            {filteredClubs.map((club, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={club.id} 
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Marker on desktop — Power & Authority Crimson */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#B00C11] items-center justify-center z-20 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B00C11]" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full lg:w-1/2 text-left">
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#B00C11]/40 transition-all duration-300 group">
                      
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          {club.logo ? (
                            <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 flex items-center justify-center shrink-0 border border-slate-200 group-hover:scale-105 transition-transform">
                              <img
                                src={club.logo}
                                alt={club.name}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-[#0D2047]/10 border border-[#0D2047]/20 flex items-center justify-center text-[#B00C11] shrink-0">
                              <Trophy className="w-5 h-5" />
                            </div>
                          )}

                          <div>
                            <h3 className="text-xl font-bold text-[#1D2320] group-hover:text-[#B00C11] transition-colors">
                              {club.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#4758D6] font-mono">
                                <Calendar className="w-3 h-3" />
                                {club.period}
                              </span>
                              <span className="text-xs text-slate-400">•</span>
                              <span className="text-xs font-medium text-slate-600">{club.role}</span>
                            </div>
                          </div>
                        </div>

                        {club.badgeHighlight && (
                          <span className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#FFC107]/20 text-[#1D2320] border border-[#FFC107]/50 shadow-sm">
                            {club.badgeHighlight}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {club.description}
                      </p>

                      {/* Achievements List */}
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {club.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#B00C11] shrink-0 mt-0.5" />
                            <span className="leading-snug">{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty side for balanced grid on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
