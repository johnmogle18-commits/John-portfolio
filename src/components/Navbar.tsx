import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tactics', href: '#tactics' },
    { label: 'Career', href: '#career' },
    { label: 'Sports Science', href: '#sports-science' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo / Brand — Non-wrapping & Responsive */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0D2047] via-[#24376c] to-[#4758D6] flex items-center justify-center font-black text-white text-sm sm:text-base shadow-sm group-hover:scale-105 transition-transform shrink-0 border border-[#0D2047]/30">
              JB
            </div>
            <div className="text-left">
              <div className="flex items-center whitespace-nowrap">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#0D2047] group-hover:text-[#4758D6] transition-colors whitespace-nowrap">
                  JOHN BENEDICT M
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase whitespace-nowrap hidden 2xl:block">
                Ex-I-League Pro • S&C Coach • CSS Kanteerava
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-1.5 xl:px-2 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#4758D6] hover:bg-slate-100/80 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions on Right — Guaranteed Visibility */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Phone pill on 2xl screens where ample width is guaranteed */}
            <a
              href={`tel:${PERSONAL_DATA.contact.phone}`}
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#4758D6] shrink-0" />
              <span>{PERSONAL_DATA.contact.displayPhone}</span>
            </a>

            {/* Direct Phone icon button on lg and xl screens (compact & prevents clipping) */}
            <a
              href={`tel:${PERSONAL_DATA.contact.phone}`}
              className="hidden lg:inline-flex 2xl:hidden items-center justify-center w-8 h-8 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all shrink-0"
              title={`Call ${PERSONAL_DATA.contact.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#4758D6]" />
            </a>

            {/* Primary 'Get in Touch' CTA button — Vibrant Crimson Red for High Adrenaline & Passion */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold text-white bg-[#B00C11] hover:bg-[#8f080c] shadow-sm shadow-[#B00C11]/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>Get in Touch</span>
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-1.5 animate-fadeIn text-left">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${PERSONAL_DATA.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {PERSONAL_DATA.contact.displayPhone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_DATA.contact.email}`}
                className="flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_DATA.contact.email}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
