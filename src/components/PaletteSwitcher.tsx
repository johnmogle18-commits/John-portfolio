import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

export type PaletteType = 'all' | 'power' | 'speed' | 'longevity';

export const PaletteSwitcher: React.FC = () => {
  const [activePalette, setActivePalette] = useState<PaletteType>('all');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', activePalette);
  }, [activePalette]);

  const palettes: { id: PaletteType; title: string; subtitle: string; colors: string[] }[] = [
    {
      id: 'all',
      title: 'Full Spectrum (Default)',
      subtitle: 'Navy #0D2047 • Crimson #B00C11 • Volt #AEE710 • Gold #FFC107',
      colors: ['#0D2047', '#4758D6', '#B00C11', '#AEE710', '#6A7E59', '#FFC107'],
    },
    {
      id: 'speed',
      title: 'Modern Sport & Speed',
      subtitle: 'Field & Running: Midnight Navy #0D2047, Electric Blue #4758D6, Volt #AEE710',
      colors: ['#0D2047', '#4758D6', '#AEE710', '#64748B'],
    },
    {
      id: 'power',
      title: 'Power & Authority',
      subtitle: 'Elite Athletics: Deep Black #000000, Charcoal #1D2320, Crimson #B00C11',
      colors: ['#000000', '#1D2320', '#B00C11', '#CB4928'],
    },
    {
      id: 'longevity',
      title: 'Premium Longevity',
      subtitle: 'Tactical & Executive: Pure White #FFFFFF, Forest Green #6A7E59, Trophy Gold #FFC107',
      colors: ['#FFFFFF', '#1F2937', '#6A7E59', '#FFC107'],
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="mb-3 p-4 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl text-left w-80 space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D2047] flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-[#4758D6]" />
              Athletic Color Palettes
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 text-xs font-bold"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1.5">
            {palettes.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePalette(p.id);
                  setIsOpen(false);
                }}
                className={`w-full p-2.5 rounded-2xl text-left transition-all flex items-center justify-between border ${
                  activePalette === p.id
                    ? 'bg-[#0D2047]/5 border-[#4758D6] shadow-sm'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0D2047]">{p.title}</span>
                    {activePalette === p.id && <Check className="w-3.5 h-3.5 text-[#4758D6]" />}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {p.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-xs"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs font-bold text-white bg-[#0D2047] hover:bg-[#1D2320] shadow-lg shadow-[#0D2047]/30 border-2 border-[#AEE710]/70 transition-all transform hover:scale-105"
        title="Toggle Athletic Palette"
      >
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B00C11]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4758D6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#AEE710]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#6A7E59]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
        </span>
        <span className="hidden sm:inline font-bold">Palette</span>
      </button>
    </div>
  );
};

