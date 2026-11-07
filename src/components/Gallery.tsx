import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/portfolioData';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'match' | 'team' | 'coaching' | 'portrait'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const handleOpenPhoto = (item: GalleryItem) => {
    setSelectedPhoto(item);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0D2047]/10 text-[#0D2047] border border-[#4758D6]/30 mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#4758D6]" />
            Visual Archive & Action Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2047] tracking-tight">
            Moments on the Pitch & Behind the Whistle
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Historic I-League clashes, inaugural squad formations, state championship squads, and elite sports science coaching sessions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photographs' },
            { id: 'match', label: 'Match Action' },
            { id: 'team', label: 'Historic Squads' },
            { id: 'coaching', label: 'Coaching & S&C' },
            { id: 'portrait', label: 'Portraits' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#0D2047] text-white shadow-md border-b-2 border-[#4758D6]'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Information bottom card */}
              <div className="p-5 text-left bg-white border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between mb-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    photo.category === 'match' ? 'bg-[#B00C11]/10 text-[#B00C11] border border-[#B00C11]/30' :
                    photo.category === 'team' ? 'bg-[#FFC107]/20 text-[#1D2320] border border-[#FFC107]/50' :
                    photo.category === 'coaching' ? 'bg-[#AEE710]/20 text-[#0D2047] border border-[#AEE710]/50' :
                    'bg-[#4758D6]/10 text-[#4758D6] border border-[#4758D6]/30'
                  }`}>
                    {photo.category}
                  </span>
                  {photo.year && (
                    <span className="text-xs font-mono font-bold text-[#FFC107]">
                      {photo.year}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[#1D2320] group-hover:text-[#4758D6] transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#4758D6]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0"
              onClick={() => setSelectedPhoto(null)}
            />

            {/* Modal Dialog Box */}
            <div className="relative z-10 max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl space-y-0">
              
              {/* Modal Top Bar */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-left">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {selectedPhoto.title}
                  </h3>
                  <span className="text-xs text-blue-700 font-mono font-bold">
                    {selectedPhoto.year ? `Archive Year: ${selectedPhoto.year}` : 'Archive Snapshot'}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Display */}
              <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />

                {/* Left/Right navigation buttons */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Details */}
              <div className="p-5 bg-white border-t border-slate-200 text-left">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedPhoto.caption}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
