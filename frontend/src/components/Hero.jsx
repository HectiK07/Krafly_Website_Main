import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={parallaxRef}
          className="absolute top-20 right-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-30"
        />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm animate-fadeIn">
            <Sparkles size={16} className="text-sky-600" />
            <span className="text-sm font-medium text-gray-700">Creative + Marketing + Development</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slideUp">
            We Build Brands That
            <span className="block text-sky-600 mt-2">Capture Attention</span>
          </h1>

          {/* Supporting text */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            A full-service creative agency specializing in stunning design, strategic marketing, and powerful web development.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => scrollToSection('#work')}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              View Our Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-gray-300 hover:border-sky-600 text-gray-900 hover:text-sky-600 px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 bg-white"
            >
              Get a Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-sm md:text-base text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">4.9★</div>
              <div className="text-sm md:text-base text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;