import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import galleryImages from '../data/galleryData';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImg(galleryImages[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIdx);
    setSelectedImg(galleryImages[nextIdx]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIdx);
    setSelectedImg(galleryImages[prevIdx]);
  };

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wide text-sm mb-2">Munkafolyamat</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Galéria a helyszíni munkáinkról
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Betekintést nyerhet abba, hogyan dolgozunk. Nincsenek titkok, csak alapos és szakszerű tisztítás.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {galleryImages.map((img, index) => {
            // Bento stílusú kiosztás 6 képhez
            const gridClasses = [
              "md:col-span-8 md:row-span-2", // 1. kép (Nagy)
              "md:col-span-4 md:row-span-2", // 4. kép (Tall)
              "md:col-span-4 md:row-span-1", // 2. kép
              "md:col-span-4 md:row-span-1", // 3. kép
              "md:col-span-4 md:row-span-1", // 5. kép
            ][index] || "md:col-span-4";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-3xl bg-slate-100 h-full ${gridClasses}`}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Logo Vízjel (Sarokban) */}
                <div className="absolute bottom-4 right-4 z-10 pointer-events-none scale-[0.4] origin-bottom-right opacity-80 group-hover:opacity-100 transition-opacity">
                  <Logo pureWhite={true} className="drop-shadow-lg" />
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2 absolute top-4 right-4 text-white scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <p className="text-white font-bold text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/karbantartas"
            className="inline-flex items-center gap-3 bg-white border-2 border-brand-500 text-brand-600 hover:bg-brand-50 px-8 py-4 rounded-full font-bold text-lg transition-all group"
          >
            <span>Tovább a teljes galériához</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-50 bg-white/5 rounded-full backdrop-blur-md"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-50 hover:bg-white/5 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-50 hover:bg-white/5 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <img 
                src={selectedImg.url} 
                alt={selectedImg.caption}
                className="max-h-[80vh] w-auto shadow-2xl rounded-lg pointer-events-auto"
              />
              <div className="mt-6 text-center pointer-events-auto">
                <p className="text-white text-xl font-display font-semibold tracking-wide">
                  {selectedImg.caption}
                </p>
                <div className="text-white/40 text-sm mt-2 uppercase tracking-widest">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
