import React from 'react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { SiInstagram, SiFacebook, SiTripadvisor } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Kontakt</h3>
            <div className="footer-item">
              <MapPin className="footer-icon" size={20} />
              <p className="footer-text">{CONTACT_INFO.address}</p>
            </div>
            <div className="footer-item">
              <Phone className="footer-icon" size={20} />
              <p className="footer-text">{CONTACT_INFO.phone}</p>
            </div>
            <div className="footer-socials">
              <a href="https://www.instagram.com/seefeld_frankfurt/" target="_blank" rel="noopener noreferrer">
        <SiInstagram size={24} />
      </a>
      <a href="https://www.facebook.com/seefeld.frankfurt/" target="_blank" rel="noopener noreferrer">
        <SiFacebook size={24} />
      </a>
      <a href="https://www.tripadvisor.ru/Restaurant_Review-g187337-d14783956-Reviews-Seefeld_Neue_Tiroler_Kuche-Frankfurt_Hesse.html" target="_blank" rel="noopener noreferrer">
        <SiTripadvisor size={24} />
      </a>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-col">
            <h3 className="footer-title">Öffnungszeiten</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {OPENING_HOURS.map((oh, idx) => (
                <div key={idx} className="opening-row">
                  <span>{oh.days}</span>
                  <span>{oh.hours}</span>
                </div>
              ))}
              <p className="footer-note">* Warme Küche entsprechend</p>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe
              src={CONTACT_INFO.mapsUrl}
              className="map-frame"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seefeld Location"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Seefeld – Neue Tiroler Küche. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;