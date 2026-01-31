import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;