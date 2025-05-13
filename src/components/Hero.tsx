
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Elegant interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-xl md:text-2xl uppercase tracking-widest mb-2 font-montserrat text-gold">
            Premium Design Solutions
          </h2>
          <h1 className="font-montserrat font-semibold text-4xl md:text-5xl lg:text-6xl">
            Crafting Timeless Interiors For Modern Living
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-xl">
            Transforming spaces into elegant, functional environments 
            that reflect your unique style and personality.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-white">
              Explore Our Work
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
