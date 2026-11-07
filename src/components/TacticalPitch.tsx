import React, { useState } from 'react';
import { Shield, Zap, Target, CheckCircle2 } from 'lucide-react';

export const TacticalPitch: React.FC = () => {
  const [activePosition, setActivePosition] = useState<'cb' | 'rw'>('cb');

  const positions = {
    cb: {
      title: "Central Defender (CB)",
      jerseyRole: "Center Back & Defensive Anchor",
      number: "18",
      headline: "Commanding Backline Commander & Aerial Presence",
      summary: "Anchoring the defensive line with 5'11\" aerial dominance, aggressive 1v1 ground challenges, and clean ball distribution out of the back. Proven in high-pressure I-League and Federation Cup atmospheres.",
      attributes: [
        { name: "Aerial Duels & Headers", value: 92, note: "5'11\" frame with explosive vertical jump" },
        { name: "Tackling & Ground Challenges", value: 95, note: "Clinical recovery tackles and box protection" },
        { name: "Tactical Discipline & Marking", value: 94, note: "Compact zonal marking and offside line control" },
        { name: "Distribution from the Back", value: 88, note: "Calm distribution with dominant right foot" },
        { name: "Physicality & Body Positioning", value: 93, note: "80 kg solid physical frame against target men" },
      ],
      keyHighlights: [
        "Led Mumbai FC defense during the 2007–08 National 2nd Division Championship triumph",
        "Competed against elite national strikers in the 2008 Kolkata Federation Cup",
        "Anchored BDFA XI to the 3rd All India Football Tournament Championship in Patna (2014)",
        "Key defensive starter for Hindustan Aeronautics Limited (HAL) & Pune FC"
      ],
      pitchCoordinates: { x: '25%', y: '50%' }
    },
    rw: {
      title: "Right Wing / Wing Back (RW)",
      jerseyRole: "High-Paced Wing Machine & Transition Specialist",
      number: "29",
      headline: "Endless Aerobic Engine & Direct Flank Explosiveness",
      summary: "Combining university middle-distance running stamina (800m & 1600m) with explosive right-flank bursts, pinpoint crossing, and swift defensive transition tracking back 70+ meters.",
      attributes: [
        { name: "Sprint Speed & Acceleration", value: 94, note: "Explosive linear burst down the right corridor" },
        { name: "Aerobic Capacity (VO2 Max)", value: 97, note: "Collegiate 800m / 1600m middle-distance engine" },
        { name: "Crossing & Delivery", value: 89, note: "Whipping dangerous service with dominant right foot" },
        { name: "Defensive Recovery Workrate", value: 96, note: "High-intensity tracking back to cover fullback" },
        { name: "Agility & 1v1 Take-ons", value: 88, note: "Sharp change of pace on transitional counters" },
      ],
      keyHighlights: [
        "Represented University in 800m and 1600m track championships",
        "Spearheaded Southern Blues FC back-to-back league titles (B-Division & A-Division)",
        "Played dual player-coach role as #29 for Legends De Sporting (2020–2022)",
        "Exploited flank overloads in fast-break tactical schemes"
      ],
      pitchCoordinates: { x: '70%', y: '82%' }
    }
  };

  const current = positions[activePosition];

  return (
    <section id="tactics" className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0D2047]/10 text-[#4758D6] border border-[#4758D6]/30 mb-3 shadow-sm">
            <Target className="w-3.5 h-3.5 text-[#4758D6]" />
            Tactical Pitch & Position Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Versatility on the Pitch
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            A rare dual-threat profile: unshakeable defensive composure in the heart of the backline paired with the blazing stamina of a university middle-distance runner down the right wing.
          </p>
        </div>

        {/* Position Selector Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActivePosition('cb')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activePosition === 'cb'
                  ? 'bg-[#B00C11] text-white shadow-md shadow-[#B00C11]/30'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Central Defender (CB)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-black/20 font-mono">#18</span>
            </button>
            <button
              onClick={() => setActivePosition('rw')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activePosition === 'rw'
                  ? 'bg-[#0D2047] text-[#AEE710] shadow-md border-2 border-[#AEE710] font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Right Wing (RW)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-black/20 font-mono font-bold">#29</span>
            </button>
          </div>
        </div>

        {/* Pitch & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Football Field Visualization - Authentic Tactical Pitch */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#1D2320] border-2 border-slate-700 p-6 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
              
              {/* Subtle turf striping effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-slate-300'}`} />
                ))}
              </div>

              {/* Pitch Markings (Crisp white lines) */}
              <div className="absolute inset-4 sm:inset-6 border-2 border-white/40 rounded-lg pointer-events-none">
                {/* Halfway line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/40" />
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 border-2 border-white/40 rounded-full" />
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />

                {/* Left penalty area */}
                <div className="absolute top-1/4 bottom-1/4 left-0 w-24 sm:w-32 border-r-2 border-y-2 border-white/40" />
                <div className="absolute top-1/3 bottom-1/3 left-0 w-10 sm:w-14 border-r-2 border-y-2 border-white/40" />
                
                {/* Right penalty area */}
                <div className="absolute top-1/4 bottom-1/4 right-0 w-24 sm:w-32 border-l-2 border-y-2 border-white/40" />
                <div className="absolute top-1/3 bottom-1/3 right-0 w-10 sm:w-14 border-l-2 border-y-2 border-white/40" />
              </div>

              {/* Interactive Player Node: CB (Power & Authority Crimson) */}
              <div 
                onClick={() => setActivePosition('cb')}
                style={{ top: '50%', left: '26%' }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group transition-all duration-300 ${
                  activePosition === 'cb' ? 'scale-125 z-30' : 'opacity-70 hover:opacity-100 hover:scale-110'
                }`}
              >
                <div className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full font-black text-xs sm:text-sm shadow-xl transition-all ${
                  activePosition === 'cb'
                    ? 'bg-[#B00C11] text-white ring-4 ring-[#B00C11]/40'
                    : 'bg-[#1D2320] text-white border-2 border-[#B00C11]'
                }`}>
                  CB
                  {activePosition === 'cb' && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFC107] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                      18
                    </span>
                  )}
                </div>
                <div className="mt-1 text-center font-bold text-[11px] text-white bg-black/90 px-2 py-0.5 rounded shadow border border-slate-700">
                  Central Defender
                </div>
              </div>

              {/* Interactive Player Node: RW (Modern Sport & Speed Volt) */}
              <div 
                onClick={() => setActivePosition('rw')}
                style={{ top: '80%', left: '72%' }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group transition-all duration-300 ${
                  activePosition === 'rw' ? 'scale-125 z-30' : 'opacity-70 hover:opacity-100 hover:scale-110'
                }`}
              >
                <div className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full font-black text-xs sm:text-sm shadow-xl transition-all ${
                  activePosition === 'rw'
                    ? 'bg-[#0D2047] text-[#AEE710] ring-4 ring-[#AEE710]/40 border-2 border-[#AEE710]'
                    : 'bg-[#1D2320] text-white border-2 border-[#AEE710]'
                }`}>
                  RW
                  {activePosition === 'rw' && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4758D6] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                      29
                    </span>
                  )}
                </div>
                <div className="mt-1 text-center font-bold text-[11px] text-white bg-black/90 px-2 py-0.5 rounded shadow border border-slate-700">
                  Right Wing
                </div>
              </div>

              {/* Pitch direction indicators */}
              <div className="absolute top-2 left-6 text-[10px] uppercase font-bold tracking-wider text-slate-300">
                ← Defensive Half
              </div>
              <div className="absolute top-2 right-6 text-[10px] uppercase font-bold tracking-wider text-[#AEE710]">
                Attacking Half →
              </div>

              {/* Click instruction */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-200 font-medium bg-black/80 px-3 py-0.5 rounded-full border border-slate-700">
                Click on CB or RW nodes to switch tactical view
              </div>
            </div>
          </div>

          {/* Tactical Role Breakdown Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold uppercase ${
                      activePosition === 'cb' ? 'bg-[#B00C11]/10 text-[#B00C11] border border-[#B00C11]/30' : 'bg-[#AEE710]/20 text-[#0D2047] border border-[#AEE710]/50 font-bold'
                    }`}>
                      Role Analysis
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-bold">
                      Jersey #{current.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0D2047] mt-1">
                    {current.title}
                  </h3>
                </div>

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                  activePosition === 'cb' ? 'bg-[#B00C11] text-white shadow-md shadow-[#B00C11]/30' : 'bg-[#0D2047] text-[#AEE710] shadow-md border-2 border-[#AEE710]'
                }`}>
                  {activePosition === 'cb' ? <Shield className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {current.summary}
              </p>

              {/* Skill Rating Bars */}
              <div className="space-y-3.5 pt-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Tactical Attribute Metrics
                </h4>
                {current.attributes.map((attr, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-800">{attr.name}</span>
                      <span className="font-mono font-bold text-[#4758D6]">{attr.value} / 100</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200/50">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          activePosition === 'cb' 
                            ? 'bg-[#B00C11]' 
                            : 'bg-[#4758D6]'
                        }`}
                        style={{ width: `${attr.value}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500">{attr.note}</p>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Career Match Highlights
                </h4>
                <div className="space-y-2">
                  {current.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        activePosition === 'cb' ? 'text-[#B00C11]' : 'text-[#4758D6]'
                      }`} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
