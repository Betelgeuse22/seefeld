import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const imagesPerPage = 6;
  const totalSteps = GALLERY_IMAGES.length - imagesPerPage + 1; // Общее количество шагов
  
  const visibleImages = GALLERY_IMAGES.slice(currentIndex, currentIndex + imagesPerPage);

  const nextSlide = () => {
    if (currentIndex < totalSteps - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="text-center menu-mb">
          <span className="section-subtitle">Impressionen</span>
          <h2 className="section-title">Galerie</h2>
        </div>

        <div className="gallery-slider-wrapper">
          {/* Уменьшенные кнопки навигации */}
          <button 
            className={`slider-nav prev ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} /> {/* Иконка чуть меньше */}
          </button>

          <motion.div layout className="gallery-grid">
            <AnimatePresence mode="popLayout">
              {visibleImages.map((img) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-item"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt="Gallery" className="gallery-img" loading="lazy" />
                  <div className="gallery-overlay" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <button 
            className={`slider-nav next ${currentIndex >= totalSteps - 1 ? 'disabled' : ''}`}
            onClick={nextSlide}
            disabled={currentIndex >= totalSteps - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Индикатор с пустыми пузырьками */}
        <div className="gallery-dots">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox остается прежним */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close"><X size={32} /></button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Full view"
              className="lightbox-img"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;