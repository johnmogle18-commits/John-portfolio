import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

interface ScrollExpandProps {
  children: React.ReactNode;
  className?: string;
  badgeTitle?: string;
}

export const ScrollExpand: React.FC<ScrollExpandProps> = ({
  children,
  className = '',
  badgeTitle = 'Centre of Sports and Science — Diagnostic Suite',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandProgress, setExpandProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from 0 (when top of card enters bottom of viewport)
      // to 1 (when card is comfortably centered in viewport)
      const startTrigger = windowHeight * 0.92;
      const endTrigger = windowHeight * 0.35;

      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setExpandProgress(clamped);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollProgress(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Compute dynamic styles based on scroll progress
  // Scale from 0.90 to 1.0
  const scale = 0.90 + expandProgress * 0.10;
  // Border radius from 40px to 24px
  const borderRadius = 36 - expandProgress * 16;
  // Opacity from 0.85 to 1.0
  const opacity = 0.85 + expandProgress * 0.15;
  const isFullyExpanded = expandProgress >= 0.95;

  return (
    <div ref={containerRef} className="relative w-full py-4 overflow-visible">
      
      {/* Floating Scroll-to-Expand Indicator */}
      <div className="flex justify-center mb-4 transition-opacity duration-500">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
          isFullyExpanded
            ? 'bg-blue-600 text-white shadow-blue-500/25'
            : 'bg-white text-slate-700 border border-slate-200'
        }`}>
          {isFullyExpanded ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-200" />
              <span>Diagnostic Lab • Fully Expanded</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>Scroll to Expand Lab ({Math.round(expandProgress * 100)}%)</span>
            </>
          )}
        </div>
      </div>

      {/* Expanding Main Container */}
      <div
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
          opacity,
          transformOrigin: 'center top',
          transition: 'transform 0.1s ease-out, border-radius 0.1s ease-out, opacity 0.1s ease-out',
          willChange: 'transform, border-radius, opacity',
        }}
        className={`w-full mx-auto shadow-2xl transition-shadow duration-500 ${
          isFullyExpanded ? 'ring-2 ring-blue-500/30' : 'ring-1 ring-slate-200'
        } ${className}`}
      >
        {children}
      </div>

    </div>
  );
};

