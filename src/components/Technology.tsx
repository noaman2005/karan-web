
import React from 'react';

const Technology = () => {
  const features = [
    {
      title: "Advanced 3D Modeling",
      description: "State-of-the-art 3D visualization technology allowing clients to experience their space before construction begins."
    },
    {
      title: "Sustainable Materials",
      description: "Eco-friendly materials and practices that reduce environmental impact without compromising on quality or aesthetics."
    },
    {
      title: "Smart Home Integration",
      description: "Seamless incorporation of home automation systems for lighting, climate control, security, and entertainment."
    },
    {
      title: "Custom Manufacturing",
      description: "Proprietary manufacturing capabilities for bespoke furniture and architectural elements tailored to each project."
    }
  ];

  return (
    <section id="technology" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">
              Our <span className="gold-accent">Technology</span>
            </h2>
            <p className="section-subtitle">
              Leveraging cutting-edge technology to deliver exceptional design solutions
            </p>

            <div className="space-y-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1574691250077-03129bacb1a6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Design Technology" 
              className="w-full h-auto rounded-md shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg hidden md:block">
              <p className="font-montserrat text-lg">
                <span className="text-gold font-semibold">100%</span> Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
