
import React from 'react';

const Clients = () => {
  // In a real implementation, these would be actual client logos
  const clients = [
    { id: 1, name: "Client 1", logo: "/placeholder.svg" },
    { id: 2, name: "Client 2", logo: "/placeholder.svg" },
    { id: 3, name: "Client 3", logo: "/placeholder.svg" },
    { id: 4, name: "Client 4", logo: "/placeholder.svg" },
    { id: 5, name: "Client 5", logo: "/placeholder.svg" },
    { id: 6, name: "Client 6", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-16 bg-offwhite">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-montserrat font-medium text-gray-800">
            Trusted by Leading Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
