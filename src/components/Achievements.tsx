import React from 'react';
import { Trophy, Medal, Award, Shield, Star, Zap } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#FFC107]" />;
      case 'Medal':
        return <Medal className="w-5 h-5 text-[#B00C11]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#FFC107]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#4758D6]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#AEE710]" />;
      default:
        return <Star className="w-5 h-5 text-[#FFC107]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFC107]/20 text-[#1D2320] border border-[#FFC107]/50 mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#997300]" />
            Honors & Trophy Cabinet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Championships, Medals & State Honors
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            A decorated track record across national tournaments, state representative stages, and premier league competitions.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#FFC107] shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0D2047] border border-[#0D2047] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                {getIcon(item.icon)}
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#FFC107]/20 text-[#1D2320] border border-[#FFC107]/50">
                    {item.highlight}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1D2320] group-hover:text-[#B00C11] transition-colors pt-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#4758D6]">
                  {item.organization}
                </p>

                <p className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                  <span>📍 {item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
