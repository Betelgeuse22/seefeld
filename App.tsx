import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
};

export default App;