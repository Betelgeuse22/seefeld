export const API_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000';

export const NAV_LINKS = [
  { name: 'Über uns', href: '#about' },
  { name: 'Speisekarte', href: '#menu' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Kontakt', href: '#contact' },
];

export const CONTACT_INFO = {
  phone: '069 95508639',
  address: 'Scheffelstraße 1, 60318 Frankfurt am Main',
  mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.123456789!2d8.682123!3d50.110922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea3b2b8c3ab%3A0x123456789abcdef!2sScheffelstra%C3%9Fe%201%2C%2060318%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1600000000000!5m2!1sde!2sde',
};

export const OPENING_HOURS = [
  { days: 'Mo – Do', hours: '17:00 – 23:00' },
  { days: 'Fr', hours: '17:00 – 24:00' },
  { days: 'Sa', hours: '12:00 – 24:00' },
  { days: 'So', hours: '12:00 – 23:00' },
];

export const PREVIEW_MENU_ITEMS = [
  {
    id: 1,
    name: 'Hirschroulade',
    description: 'Schwarzwurzel, Kartoffelkrapfen, Bratenjus',
    price: '28,50 €',
    image: '/img/menu/hirsch_roulade.webp',
    category: 'Hauptgang'
  },
  {
    id: 2,
    name: 'Rehrücken',
    description: 'Kartoffelkrapfen, Grüne Pfeffersauce, Gemüse',
    price: '29,50 €',
    image: '/img/menu/rehe_rucken.webp',
    category: 'Hauptgang'
  },
  {
    id: 3,
    name: 'Wiener Schnitzel',
    description: 'Vom Kalb, lauwarmem Kartoffel-Gurkensalat, Preiselbeeren',
    price: '26,90 €',
    image: '/img/menu/wiener_schnitzel.webp',
    category: 'Hauptgang'
  },
  {
    id: 4,
    name: 'Kaiserschmarrn',
    description: 'Karamellisiert, Zwetschgenröster, Apfelmus',
    price: '12,90 €',
    image: '/img/menu/kaiserschmarrn.webp',
    category: 'Dessert'
  }
];

export const GALLERY_IMAGES = [
  '/img/gallery/content-lokal-neu1.webp',
  '/img/gallery/content-lokal-neu2.webp',
  '/img/gallery/content-lokal-neu3.webp',
  '/img/gallery/content-lokal-neu4.webp',
  '/img/gallery/content-lokal-neu5.webp',
  '/img/gallery/content-lokal-neu6.webp',
  '/img/gallery/content-lokal-neu7.webp',
  '/img/gallery/content-lokal-neu8.webp',
  '/img/gallery/content-lokal-neu9.webp',
  '/img/gallery/content-lokal-neu10.webp',
  '/img/gallery/content-lokal-neu11.webp',
  '/img/gallery/content-lokal-neu12.webp',
  '/img/gallery/content-lokal-neu13.webp',
  '/img/gallery/content-lokal-neu14.webp',
  '/img/gallery/content-lokal-neu15.webp',
];

export const ABOUT_FEATURES = [
  "Authentische tiroler Küche",
  "Frische Zubereitung",
  "Wohlfühlatmosphäre",
  "Ein herzliches & kompetentes Team"
];

export const OWNER_QUOTE = {
  text: "„Seit Mitte der Siebzigerjahre, als ich als kleiner Bub in Seefeld in Tirol das erste Mal auf Skiern gestanden bin und meinen ersten Kaiserschmarrn probieren durfte, fasziniert mich die Einfachheit und Originalität der Tiroler Küche.“",
  author: "Stephan Barth, Inhaber"
};