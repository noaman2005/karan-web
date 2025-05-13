
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">
            Get In <span className="gold-accent">Touch</span>
          </h2>
          <p className="section-subtitle">
            Contact us to discuss your project or schedule a consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md">
            <h3 className="text-xl font-montserrat font-medium mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    required 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-montserrat font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gold/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-600">123 Design Street, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gold/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">info@elegantinteriors.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gold/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-montserrat font-medium mb-6">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
