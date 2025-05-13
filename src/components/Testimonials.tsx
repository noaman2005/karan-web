
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Homeowner",
      content: "Elegant Interiors transformed our house into a stunning home that perfectly reflects our style. Their attention to detail and commitment to quality exceeded our expectations."
    },
    {
      id: 2,
      name: "Michael Thompson",
      position: "CEO, Thompson Enterprises",
      content: "Working with the team at Elegant Interiors on our corporate headquarters was a seamless experience. Their ability to blend functionality with sophisticated design has significantly improved our work environment."
    },
    {
      id: 3,
      name: "Emily Roberts",
      position: "Restaurant Owner",
      content: "The design for our new restaurant captured exactly what we envisioned. The team's creativity and understanding of hospitality spaces helped create an atmosphere our customers love."
    },
    {
      id: 4,
      name: "David Chen",
      position: "Property Developer",
      content: "As a developer working on luxury properties, I need designers who understand both aesthetics and practicality. Elegant Interiors consistently delivers beautiful, marketable spaces on time and on budget."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-charcoal text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">
            Client <span className="gold-accent">Testimonials</span>
          </h2>
          <p className="section-subtitle text-white/70">
            What our clients say about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-charcoal/50 backdrop-blur-sm p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-1 bg-gold"></div>
              </div>
              <blockquote className="text-xl md:text-2xl text-center italic mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="text-center">
                <p className="font-montserrat font-medium text-gold">{testimonials[currentIndex].name}</p>
                <p className="text-white/70">{testimonials[currentIndex].position}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
