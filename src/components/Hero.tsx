
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Elegant interior design"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Modern living room interior"
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Luxury kitchen design"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Hero Background with Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Carousel 
          className="w-full h-full" 
          opts={{ loop: true }}
          selectedIndex={currentSlide}
          setApi={(api) => {
            if (api) {
              api.on('select', () => {
                setCurrentSlide(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute z-10 left-4 right-4 bottom-8 flex justify-between">
            <CarouselPrevious className="relative left-0 bg-black/20 hover:bg-black/40 border-0 text-white" />
            <div className="flex gap-2 items-center">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === index ? 'bg-gold scale-110' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative right-0 bg-black/20 hover:bg-black/40 border-0 text-white" />
          </div>
        </Carousel>
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
