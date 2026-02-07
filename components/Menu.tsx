import React from 'react';
import { PREVIEW_MENU_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="text-center menu-mb">
          <span className="section-subtitle">Kulinarik</span>
          <h2 className="section-title">Aus der Speisekarte</h2>
        </div>

        <div className="menu-grid">
          {PREVIEW_MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="menu-item"
            >
              <div className="menu-thumb-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-thumb"
                />
              </div>
              <div className="menu-content">
                <div className="menu-header">
                  <h3 className="menu-title">
                    {item.name}
                  </h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-desc">
                  {item.description}
                </p>
                <span className="menu-cat">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '4rem' }}>
          <button className="btn-menu-full">
            Ganze Speisekarte ansehen (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;