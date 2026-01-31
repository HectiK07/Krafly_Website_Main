import React, { useEffect, useRef, useState } from 'react';
import { Palette, TrendingUp, Code, Megaphone } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  'Graphics Design': Palette,
  'Social Media Marketing': TrendingUp,
  'Paid Marketing': Megaphone,
  'Website Development': Code
};

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProcess = () => {
    const element = document.querySelector('#process');
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
    <section id="services" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-service solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.title];
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-300">
                  <Icon className="text-sky-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="inline-block w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <button
                  onClick={scrollToProcess}
                  className="text-sky-600 hover:text-sky-700 font-semibold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn more about our process →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;