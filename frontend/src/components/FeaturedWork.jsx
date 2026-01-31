import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/mockData';
import ProjectModal from './ProjectModal';
import { Button } from './ui/button';

const FeaturedWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Graphics', slug: 'graphics' },
    { name: 'Social Media', slug: 'social-media' },
    { name: 'Paid Marketing', slug: 'paid-ads' },
    { name: 'Web Development', slug: 'web-dev' }
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.categorySlug === selectedCategory));
    }
  }, [selectedCategory]);

  // Animate items on load
  useEffect(() => {
    setVisibleProjects([]);
    filteredProjects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProjects(prev => [...prev, index]);
      }, index * 100);
    });
  }, [filteredProjects]);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across design, marketing, and development.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.slug
                  ? 'bg-sky-600 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`break-inside-avoid transform transition-all duration-500 ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image */}
                <div className={`relative overflow-hidden ${
                  project.height === 'tall' ? 'h-96' : 'h-64'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink size={16} className="mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default FeaturedWork;