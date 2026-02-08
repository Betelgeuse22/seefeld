import React from 'react';
import { motion } from 'framer-motion';
import { Check, Quote } from 'lucide-react'; // Импортируем галочку
import { ABOUT_FEATURES, OWNER_QUOTE } from '../constants'; // Импортируем наши данные

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
                src="../img/about/about_img.webp" 
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
                Seit 2018 steht das Seefeld in Frankfurt für echte Tiroler Küche mit frischem Blick auf Tradition. Ob im urig-gemütlichen Innenraum oder im lauschigen Biergarten – bei uns trifft alpine Kochkunst auf moderne Leichtigkeit.
              </p>
              <p>
                Authentizität und Frische sind für uns keine Schlagworte, sondern täglicher Anspruch. Wir stehen im direkten Austausch mit Küchenprofis und ausgewählten Produzenten aus Tirol, um Qualität und Originalgeschmack auf den Teller zu bringen.
              </p>
              <p>
                Freue Dich auf saisonale Spezialitäten, wechselnde Wochenkarten und unsere beliebten Klassiker. Auch Bierliebhaber und Weinfreunde entdecken bei uns regelmäßig neue Highlights.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="about-owner-quote"
        >
          <Quote className="quote-icon" size={40} />
          <p className="quote-text">{OWNER_QUOTE.text}</p>
          <cite className="quote-author">— {OWNER_QUOTE.author}</cite>
        </motion.div>

        {/* Новая лента преимуществ под основным блоком */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-features-ribbon"
        >
          <div className="features-grid">
            {ABOUT_FEATURES.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-circle">
                  <Check size={24} strokeWidth={3} />
                </div>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;