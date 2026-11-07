import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TacticalPitch } from './components/TacticalPitch';
import { CareerTimeline } from './components/CareerTimeline';
import { SportsScience } from './components/SportsScience';
import { CoachingExperience } from './components/CoachingExperience';
import { Gallery } from './components/Gallery';
import { Achievements } from './components/Achievements';
import { PersonalProfile } from './components/PersonalProfile';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { PaletteSwitcher } from './components/PaletteSwitcher';

export const App: React.FC = () => {
  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-[#4758D6] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Tactical Pitch & Playing Position Matrix */}
        <ScrollReveal direction="up" delay={50}>
          <TacticalPitch />
        </ScrollReveal>

        {/* Playing Career Timeline (2003 - 2016) */}
        <ScrollReveal direction="up" delay={50}>
          <CareerTimeline />
        </ScrollReveal>

        {/* Sports Science & S&C (CSS Sree Kanteerava Stadium & ROOTS) */}
        <ScrollReveal direction="up" delay={50}>
          <SportsScience />
        </ScrollReveal>

        {/* Professional Coaching Experience (2016 - Present) */}
        <ScrollReveal direction="up" delay={50}>
          <CoachingExperience />
        </ScrollReveal>

        {/* Visual Archive & Photo Lightbox Gallery */}
        <ScrollReveal direction="up" delay={50}>
          <Gallery />
        </ScrollReveal>

        {/* Honors & Trophy Cabinet */}
        <ScrollReveal direction="up" delay={50}>
          <Achievements />
        </ScrollReveal>

        {/* Personal Profile Dossier & Credentials */}
        <ScrollReveal direction="up" delay={50}>
          <PersonalProfile />
        </ScrollReveal>

        {/* Contact & Consultation Base */}
        <ScrollReveal direction="up" delay={50}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Athletic Palette Switcher */}
      <PaletteSwitcher />
    </div>
  );
};

export default App;
