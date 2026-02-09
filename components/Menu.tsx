import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Utensils, CupSoda, Wine, GlassWater, } from 'lucide-react';
import { PREVIEW_MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

 // 1. Создаем "якорь" для нашего меню
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 2. Логика отслеживания клика вне области меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Если меню открыто и клик был НЕ по нашему dropdownRef — закрываем
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Вешаем слушатель на весь документ
    document.addEventListener('mousedown', handleClickOutside);
    
    // Обязательно убираем слушатель при закрытии компонента, чтобы не "сорить" в памяти
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Список наших PDF файлов (убедись, что они лежат в public/menu/)
  const menuFiles = [
  { name: 'Speisekarte', path: '/menu/Speisekarte-Seefeld-01-2025.pdf', Icon: Utensils },
  { name: 'Getränke', path: '/menu/Seefeld-Getraenke-01-2025.pdf', Icon: CupSoda },
  { name: 'Weine', path: '/menu/Seefeld-Weine-01-25.pdf', Icon: Wine },
  { name: 'Spirituosen', path: '/menu/Seefeld-Spirituose-01-2025.docx.pdf', Icon: GlassWater },
];

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

        {/* --- НОВОЕ МЕНЮ PDF --- */}
        <div className="menu-pdf-dropdown-wrapper" ref={dropdownRef}>
          <button 
            className="btn-menu-full dropdown-trigger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Speisekarte ansehen (PDF)</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-block', marginLeft: '10px' }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="menu-dropdown-list"
              >
                {menuFiles.map((file, idx) => (<li key={idx} className="menu-dropdown-item">
                <a 
                    href={file.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="menu-dropdown-link"
                    onClick={() => setIsOpen(false)}
                >
                  <file.Icon size={18} className="icon-red" />
                  {file.name}
                </a>
                  </li>
                    ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;