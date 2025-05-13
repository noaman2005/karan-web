
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <h2 className="font-montserrat font-bold text-2xl tracking-tight mb-6">
              <span className="text-white">Elegant</span>
              <span className="text-gold">Interiors</span>
            </h2>
            <p className="text-white/70 mb-6 max-w-md">
              Creating distinctive, elegant spaces that inspire and enrich the lives 
              of our clients through thoughtful design and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Technology', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-montserrat font-medium text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elegant Interiors. All rights reserved.
          </p>
          <div className="text-sm text-white/50">
            Designed with <span className="text-gold">♥</span> by Elegant Interiors
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
