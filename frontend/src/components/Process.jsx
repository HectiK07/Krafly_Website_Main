import React, { useEffect, useRef, useState } from 'react';
import { processSteps } from '../data/mockData';

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
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

  return (
    <section id="process" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that transforms ideas into impactful results.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-200 via-sky-400 to-sky-600 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-12'
                    : 'opacity-0 translate-x-12'
                }`}
              >
                {/* Left content (odd steps) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 text-right">
                      <div className="inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-sky-600 text-white rounded-full font-bold text-xl shadow-lg flex-shrink-0">
                      {step.id}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-sky-600 text-white rounded-full font-bold text-xl shadow-lg flex-shrink-0">
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <div className="inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;