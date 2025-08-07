import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Investment from './components/Investment';
import Earnings from './components/Earnings';
import DownloadSection from './components/DownloadSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="investment">
          <Investment />
        </section>
        <section id="earnings">
          <Earnings />
        </section>
        <section id="download">
          <DownloadSection />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;