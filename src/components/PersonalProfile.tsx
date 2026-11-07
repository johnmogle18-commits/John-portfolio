import React from 'react';
import { 
  User, 
  Languages, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Award,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const PersonalProfile: React.FC = () => {
  return (
    <section id="profile" className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0D2047]/10 text-[#4758D6] border border-[#4758D6]/30 mb-3 shadow-sm">
            <User className="w-3.5 h-3.5 text-[#4758D6]" />
            Personal Dossier & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Official Profile & Academic Background
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Verified identity, physical metrics, languages, and formal coaching certifications.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Attributes Table */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="text-2xl font-black text-[#0D2047]">
                    {PERSONAL_DATA.name}
                  </h3>
                  <span className="text-xs font-bold text-[#4758D6]">
                    Bangalore, Karnataka, India
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#B00C11] hover:bg-[#8f080c] transition-all shadow-sm shadow-[#B00C11]/25"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium">Father's Name</span>
                  <p className="font-bold text-slate-900 text-sm">
                    {PERSONAL_DATA.personalProfile.fatherName}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium">Date of Birth</span>
                  <p className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {PERSONAL_DATA.personalProfile.dob}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium">Academic Qualification</span>
                  <p className="font-bold text-slate-900 text-sm">
                    {PERSONAL_DATA.personalProfile.qualification}
                  </p>
                  <span className="text-[11px] text-blue-700 block font-bold">
                    + {PERSONAL_DATA.personalProfile.currentPursuit}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium">Coaching Certification</span>
                  <p className="font-bold text-amber-800 text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    {PERSONAL_DATA.personalProfile.coachingLicense}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium">Nationality & Status</span>
                  <p className="font-bold text-slate-900 text-sm">
                    {PERSONAL_DATA.personalProfile.nationality} • {PERSONAL_DATA.personalProfile.maritalStatus}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium">Religion</span>
                  <p className="font-bold text-slate-900 text-sm">
                    {PERSONAL_DATA.personalProfile.religion}
                  </p>
                </div>

              </div>

              {/* Languages */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-blue-600" />
                  Languages Known (Fluent)
                </span>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_DATA.personalProfile.languages.map((lang, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Dedication Quote from Original Document */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs italic leading-relaxed">
                <p className="text-blue-700 font-bold not-italic mb-1 font-mono text-[11px] uppercase tracking-wider">
                  Professional Commitment
                </p>
                "I dedicate myself to providing the highest caliber of coaching, physical discipline, and scientific conditioning to elevate athletes and institutions to peak championship performance."
              </div>

            </div>
          </div>

          {/* Right Column: Physical Attributes & Address Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Physical Attributes Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  Physical Attributes
                </h4>
                <span className="text-xs font-mono font-bold text-blue-700">ATHLETE SPECS</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500">Height</span>
                  <span className="font-bold text-slate-900 text-sm font-mono">{PERSONAL_DATA.physicalAttributes.height}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500">Weight</span>
                  <span className="font-bold text-slate-900 text-sm font-mono">{PERSONAL_DATA.physicalAttributes.weight}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500">Dominant Foot</span>
                  <span className="font-bold text-blue-700 text-sm">{PERSONAL_DATA.physicalAttributes.dominantFoot}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 block">Preferred Positions</span>
                  <span className="font-bold text-amber-800 text-sm">
                    {PERSONAL_DATA.physicalAttributes.preferredPositions.join(" / ")}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 block">Track & Athletics Honors</span>
                  <span className="font-bold text-slate-700 text-xs">
                    {PERSONAL_DATA.physicalAttributes.secondarySpecialty}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Work & In-Person Meeting Venue */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#0D2047]/5 via-white to-[#4758D6]/10 border-2 border-[#0D2047]/20 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0D2047] uppercase tracking-wider flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#4758D6]" />
                  Primary Work & Meeting Venue
                </span>
                <span className="text-[11px] font-bold text-[#0D2047] bg-[#AEE710]/25 border border-[#AEE710]/60 px-2.5 py-0.5 rounded-full font-mono">
                  Gate No. 8
                </span>
              </div>

              <div>
                <h4 className="text-base font-black text-[#0D2047]">
                  Centre for Sports Science (CSS)
                </h4>
                <p className="text-xs font-bold text-[#4758D6] mt-0.5">
                  Gate No. 8, Sree Kanteerava Outdoor Stadium
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Sampangi Rama Nagar, Bangalore – 560001
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                If you are an athlete, parent, coach, or sports organization looking to consult or meet John in person, please visit him at <strong>Gate No. 8, Sree Kanteerava Outdoor Stadium</strong>.
              </p>

              <div className="pt-1">
                <a
                  href={PERSONAL_DATA.contact.workVenue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#B00C11] hover:bg-[#8f080c] shadow-sm shadow-[#B00C11]/25 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>

            {/* Permanent Residence & Communications */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Permanent Residence & Direct Contact
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{PERSONAL_DATA.contact.address}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`tel:${PERSONAL_DATA.contact.phone}`} className="hover:text-blue-700 font-semibold">
                    {PERSONAL_DATA.contact.displayPhone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`mailto:${PERSONAL_DATA.contact.email}`} className="hover:text-blue-700 font-semibold">
                    {PERSONAL_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
