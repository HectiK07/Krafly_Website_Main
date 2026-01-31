import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const highlights = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in design and marketing'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '20+ specialists across design, marketing, and tech'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on measurable outcomes and ROI'
    },
    {
      icon: CheckCircle,
      title: 'Full-Service',
      description: 'End-to-end solutions under one roof'
    }
  ];

  const reasons = [
    'Proven track record with 150+ successful projects',
    'Multi-disciplinary team of creative and technical experts',
    'Data-driven strategies backed by continuous optimization',
    'Transparent communication and collaborative approach',
    'Fast turnaround without compromising quality',
    'Dedicated support throughout and beyond project completion'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About KRAFLY Media
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We're a creative powerhouse that combines stunning design, strategic marketing, and cutting-edge development to help brands stand out in the digital landscape.
              </p>
              <p>
                Founded by a team of passionate creatives and technologists, KRAFLY Media has grown into a full-service agency trusted by startups and established brands alike. We believe great work comes from understanding our clients' vision and translating it into impactful digital experiences.
              </p>
              <p>
                Our multidisciplinary approach means you get the best of all worlds—beautiful design that converts, marketing campaigns that resonate, and websites that perform.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-sky-50 transition-colors duration-300 border border-gray-100"
                  >
                    <Icon className="text-sky-600 mb-2" size={24} />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Why choose us */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 md:p-10 border border-sky-100 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="text-sky-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-sky-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default About;