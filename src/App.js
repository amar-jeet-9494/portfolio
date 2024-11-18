import React from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import HeroBanner from './components/HeroBanner';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <HeroBanner />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
