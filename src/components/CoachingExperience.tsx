import React, { useState } from 'react';
import { 
  Briefcase, 
  School, 
  Building2, 
  CheckCircle2, 
  Calendar,
} from 'lucide-react';
import { COACHING_EXPERIENCE } from '../data/portfolioData';

export const CoachingExperience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'schools' | 'academies' | 'corporate'>('all');

  const filteredRoles = COACHING_EXPERIENCE.filter((role) => {
    if (filter === 'all') return true;
    if (filter === 'schools') return role.type === 'school';
    if (filter === 'academies') return role.type === 'academy' || role.type === 'sports-science';
    if (filter === 'corporate') return role.type === 'corporate';
    return true;
  });

  return (
    <section id="coaching" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#6A7E59]/15 text-[#6A7E59] border border-[#6A7E59]/30 mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#6A7E59]" />
            Professional Coaching Journey (2016 – Present)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Nurturing Future Champions Across Top Academies & Schools
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            A decade of pedagogical coaching leadership—from grassroots school academies to corporate wellness and elite state talent development.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Coaching Roles' },
            { id: 'academies', label: 'Sports Science & Academies' },
            { id: 'schools', label: 'International & ICSE Schools' },
            { id: 'corporate', label: 'Corporate Fitness' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#6A7E59] text-white shadow-md shadow-[#6A7E59]/30'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Coaching Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => {
            const isSportsScience = role.type === 'sports-science';
            const isSchool = role.type === 'school';
            const isCorporate = role.type === 'corporate';

            return (
              <div 
                key={role.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#6A7E59]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase ${
                      isSportsScience ? 'bg-[#0D2047]/10 text-[#4758D6] border border-[#4758D6]/30' :
                      isSchool ? 'bg-slate-100 text-[#1D2320] border border-slate-200' :
                      isCorporate ? 'bg-[#FFC107]/20 text-[#997300] border border-[#FFC107]/40' :
                      'bg-[#6A7E59]/15 text-[#6A7E59] border border-[#6A7E59]/30'
                    }`}>
                      {role.type.replace('-', ' ')}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#4758D6]" />
                      {role.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-[#1D2320] group-hover:text-[#6A7E59] transition-colors">
                    {role.role}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1 mb-4 flex items-center gap-1.5">
                    {isSchool ? <School className="w-3.5 h-3.5 text-[#6A7E59]" /> : <Building2 className="w-3.5 h-3.5 text-[#6A7E59]" />}
                    <span>{role.organization}</span>
                  </div>

                  {/* Sub Institutes if any (e.g. Kids Chaupal) */}
                  {role.subInstitutes && (
                    <div className="mb-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block">
                        Assigned International Schools:
                      </span>
                      {role.subInstitutes.map((inst, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>{inst}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {role.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags if any */}
                {role.techUsed && (
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {role.techUsed.map((t, tidx) => (
                      <span key={tidx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
