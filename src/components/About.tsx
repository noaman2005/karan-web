
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-offwhite">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Interior design team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 hidden md:block">
              <p className="text-white font-montserrat text-2xl font-light">
                15+ Years<br />
                <span className="font-semibold">of Excellence</span>
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="section-title">
              About <span className="gold-accent">Us</span>
            </h2>
            <p className="section-subtitle">
              Creating distinctive spaces tailored to each client's needs and aspirations.
            </p>
            <p className="text-gray-700 mb-4">
              Elegant Interiors is a premium design studio specializing in creating 
              sophisticated, functional spaces that reflect our clients' unique 
              personalities and lifestyles. Our approach combines innovative design 
              thinking with meticulous attention to detail.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 2008, our team of experienced designers, architects, and 
              craftsmen work collaboratively to deliver exceptional results, from 
              concept development to final installation.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-4xl font-montserrat font-semibold text-gold mb-2">250+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-montserrat font-semibold text-gold mb-2">15+</h3>
                <p className="text-gray-600">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
