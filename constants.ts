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
    name: 'Tiroler Gröstl',
    description: 'Röstkartoffeln, Rindfleisch, Spiegelei, Krautsalat',
    price: '18,50 €',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'Hauptgang'
  },
  {
    id: 2,
    name: 'Kaspressknödelsuppe',
    description: 'Kräftige Rindersuppe, handgemachter Käseknödel, Schnittlauch',
    price: '9,50 €',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'Vorspeise'
  },
  {
    id: 3,
    name: 'Wiener Schnitzel',
    description: 'Vom Kalb, lauwarmem Kartoffel-Gurkensalat, Preiselbeeren',
    price: '26,90 €',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'Hauptgang'
  },
  {
    id: 4,
    name: 'Kaiserschmarrn',
    description: 'Karamellisiert, Zwetschgenröster, Apfelmus',
    price: '12,90 €',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'Dessert'
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/800/800?random=10',
  'https://picsum.photos/800/800?random=11',
  'https://picsum.photos/800/800?random=12',
  'https://picsum.photos/800/800?random=13',
  'https://picsum.photos/800/800?random=14',
  'https://picsum.photos/800/800?random=15',
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