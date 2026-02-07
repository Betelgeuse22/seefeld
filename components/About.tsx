import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-col"
          >
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="about-img"
              />
              <div className="about-badge">
                <p className="about-badge-text">
                  "Tiroler Küche mit Pfiff"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-col"
          >
            <span className="section-subtitle">Unser Konzept</span>
            <h2 className="section-title">
              Authentizität & <br/>Gemütlichkeit
            </h2>
            <div className="about-text-content">
              <p>
                Das Seefeld steht für <strong>Tiroler Küche mit Pfiff</strong> – eine neue, leichte Interpretation der traditionellen Tiroler Küche. Wir verbinden alpenländische Klassiker mit modernen Einflüssen.
              </p>
              <p>
                Genießen Sie saisonale Gerichte, klassische Speisen sowie eine erlesene Auswahl an Bier & Wein in unserem gemütlichen Innenraum oder im schönen Biergarten mit Sonnenterrasse.
              </p>
              <p>
                Bei uns erwartet Sie eine authentische Atmosphäre, in der Gastfreundschaft großgeschrieben wird. Ein Stück Urlaub mitten in Frankfurt.
              </p>
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="signature-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;