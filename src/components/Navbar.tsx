
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Projects', href: '#projects' },
  { title: 'Technology', href: '#technology' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="z-10">
          <h1 className="font-montserrat font-bold text-2xl tracking-tight">
            <span className="text-charcoal">Elegant</span>
            <span className="text-gold">Interiors</span>
          </h1>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden z-20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="font-montserrat text-sm tracking-wider uppercase hover:text-gold transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className={cn(
          'fixed inset-0 bg-white flex flex-col items-center justify-center lg:hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}>
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={closeMenu}
                className="font-montserrat text-xl tracking-wider uppercase hover:text-gold transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
