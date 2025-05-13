
import React, { useState } from 'react';

type ProjectCategory = 'all' | 'residential' | 'commercial' | 'hospitality' | 'retail';

interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  image: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Apartment",
      category: "residential",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Luxury Office",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Boutique Hotel",
      category: "hospitality",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Contemporary House",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Fashion Store",
      category: "retail",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 6,
      title: "Corporate Office",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'retail', label: 'Retail' }
  ];

  return (
    <section id="projects" className="section-padding bg-offwhite">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">
            Our <span className="gold-accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore our diverse portfolio of premium design projects
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 text-sm font-montserrat uppercase tracking-wider transition-colors duration-300 
                ${activeCategory === category.value
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-gray-600 hover:text-gold'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="text-center p-4">
                  <h3 className="text-white font-montserrat text-xl mb-2">{project.title}</h3>
                  <p className="text-gold uppercase text-sm tracking-wider">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
