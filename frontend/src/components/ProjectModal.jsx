import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const getLinkIcon = (type) => {
    if (type === 'github') return <Github size={16} />;
    return <ExternalLink size={16} />;
  };

  const getLinkLabel = (key) => {
    const labels = {
      live: 'Visit Website',
      behance: 'View on Behance',
      instagram: 'View on Instagram',
      github: 'View Code',
      case_study: 'Read Case Study'
    };
    return labels[key] || 'View Link';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
      >
        {/* Header with image */}
        <div className="relative h-72 md:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-900" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-white/90 text-sky-700 text-sm font-semibold rounded-full mb-3">
              {project.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Problem */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Problem</h3>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Solution</h3>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </div>

          {/* Tools */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
              {Object.entries(project.links).map(([key, url]) => (
                <Button
                  key={key}
                  onClick={() => window.open(url, '_blank')}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                >
                  {getLinkIcon(key)}
                  <span className="ml-2">{getLinkLabel(key)}</span>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

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
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;