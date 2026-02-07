import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-location"
        >
          Frankfurt am Main
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="hero-title"
        >
          Neue Tiroler
          <br />
          <span className="hero-highlight">
            Küche
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-text"
        >
          Tradition trifft Moderne. Erleben Sie authentische österreichische Gastfreundschaft im Herzen von Frankfurt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#reservation"
            className="btn-hero"
          >
            TISCH RESERVIEREN
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="scroll-indicator"
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;