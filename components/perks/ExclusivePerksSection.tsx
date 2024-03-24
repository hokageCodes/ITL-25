import React from 'react';

interface Perk {
  icon: string;
  title: string;
  description: string;
}

const PerkCard: React.FC<Perk> = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
        <img src={icon} alt={title} className="w-12 h-12 mb-3" />
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </div>
    );
  };
const ExclusivePerksSection: React.FC = () => {
  const perks: Perk[] = [
    {
      icon: '/icoon.png', // Replace with your actual icon paths
      title: 'Expert-Led Workshops',
      description: 'Learn from the best in the industry with hands-on workshops led by experts.',
    },
    {
      icon: '/icoon.png', // Replace with your actual icon paths
      title: 'Expert-Led Workshops',
      description: 'Learn from the best in the industry with hands-on workshops led by experts.',
    },
    {
      icon: '/icoon.png', // Replace with your actual icon paths
      title: 'Expert-Led Workshops',
      description: 'Learn from the best in the industry with hands-on workshops led by experts.',
    },
    {
      icon: '/icoon.png', // Replace with your actual icon paths
      title: 'Expert-Led Workshops',
      description: 'Learn from the best in the industry with hands-on workshops led by experts.',
    },
    // ... other perks
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          ITILConference 2025 Exclusive Perks Await
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {perks.map((perk) => (
            <PerkCard key={perk.title} {...perk} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusivePerksSection;
