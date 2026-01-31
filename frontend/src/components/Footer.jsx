import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' }
  ];

  const serviceLinks = [
    { name: 'Graphics Design', href: '#services' },
    { name: 'Social Media Marketing', href: '#services' },
    { name: 'Paid Marketing', href: '#services' },
    { name: 'Website Development', href: '#services' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/krafly_media', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/krafly_media', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@krafly_media', label: 'YouTube' },
    { icon: Mail, href: 'mailto:kraflymedia@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/Krafly (White ).png" 
                alt="KRAFLY Media" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A creative agency specializing in design, marketing, and development. Building brands that capture attention.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-sky-500 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-sky-500 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:kraflymedia@gmail.com"
                  className="hover:text-sky-500 transition-colors duration-300"
                >
                  kraflymedia@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918767313141"
                  className="hover:text-sky-500 transition-colors duration-300"
                >
                  +91 87673 13141
                </a>
              </li>
              <li>
                <a
                  href="tel:+919321636513"
                  className="hover:text-sky-500 transition-colors duration-300"
                >
                  +91 93216 36513
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm font-semibold"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} KRAFLY Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;