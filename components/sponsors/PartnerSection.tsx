import React from 'react';
import PartnerLogo from './PartnerLogo.tsx';

// Define your partner data
const partners = [
  {
    name: 'Google',
    logoSrc: '/google.png',
    url: 'https://google.com'
  },
  {
    name: 'Google',
    logoSrc: '/google.png',
    url: 'https://google.com'
  },
  {
    name: 'Google',
    logoSrc: '/google.png',
    url: 'https://google.com'
  },
  {
    name: 'Google',
    logoSrc: '/google.png',
    url: 'https://google.com'
  },
  // ... Add more partners here
];

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Partners</h2>
        <div className="flex justify-around flex-wrap">
          {partners.map(partner => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
