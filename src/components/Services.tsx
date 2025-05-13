
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => (
  <div 
    className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
    style={{ animationDelay: `${delay * 0.1}s` }}
  >
    <div className="mb-6">
      <img src={icon} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-montserrat font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Interior Design",
      description: "Full-service interior design solutions for residential and commercial spaces, focusing on aesthetics, functionality, and client satisfaction.",
      icon: "/placeholder.svg"
    },
    {
      title: "Architecture",
      description: "Comprehensive architectural services from concept development to construction documentation, ensuring beautiful and functional spaces.",
      icon: "/placeholder.svg"
    },
    {
      title: "3D Visualization",
      description: "Photorealistic 3D renderings that bring your project to life before construction begins, helping you make informed decisions.",
      icon: "/placeholder.svg"
    },
    {
      title: "Furniture Design",
      description: "Custom furniture design and creation, tailored to your space and style preferences, ensuring unique and exclusive pieces.",
      icon: "/placeholder.svg"
    },
    {
      title: "Project Management",
      description: "End-to-end project oversight ensuring timely delivery, quality craftsmanship, and budget adherence throughout the design process.",
      icon: "/placeholder.svg"
    },
    {
      title: "Consultation",
      description: "Expert advice on design direction, material selection, color schemes, and furniture placement to enhance your existing space.",
      icon: "/placeholder.svg"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">
            Our <span className="gold-accent">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive design solutions tailored to your unique needs and vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
