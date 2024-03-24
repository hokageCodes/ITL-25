import Image from 'next/image';
import React from 'react';

// TypeScript interfaces
interface SocialLink {
  id: string;
  icon: string;
  link: string;
}

interface Speaker {
  name: string;
  title: string;
  imageSrc: string;
  socialLinks: SocialLink[];
}
const SpeakerCard: React.FC<Speaker> = ({ name, title, imageSrc, socialLinks }) => {
  return (
    <div className="relative mt-[-100px] w-[350px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden group">
      <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-opacity-0 bg-black transition-opacity duration-300 ease-linear">
        <div className="text-white text-center">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
        {/* Social Icons for Desktop */}
        <div className="absolute right-0 top-0 transition-transform transform translate-y-[-100%] group-hover:translate-y-0 duration-300 ease-in-out hidden md:block">
          <div className="bg-purple-700 p-2 rounded-bl-lg">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer" className="block text-white">
                <Image src={link.icon} alt={link.id} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        {/* Static Social Icons for Mobile */}
        <div className="flex absolute right-0 top-0 bg-purple-700 p-2 rounded-bl-lg sm:hidden">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer" className="block text-white">
                <Image src={link.icon} alt={link.id} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
// The complete SpeakersSection component
const SpeakersSection: React.FC = () => {
  // Sample data for speakers
  const speakers: Speaker[] = [
    // Replace with actual data
    {
      name: 'Albert Barnes',
      title: 'Founder',
      imageSrc: '/speaker-hero.jpg',
      socialLinks: [
        { id: 'facebook', icon: '/facebook.svg', link: 'https://facebook.com' },
        { id: 'instagram', icon: '/instagram.svg', link: 'https://instagram.com' },
        { id: 'twitter', icon: '/twitter.svg', link: 'https://twitter.com' },
        { id: 'linkedin', icon: 'linkedin.svg', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Albert Barnes',
      title: 'Founder',
      imageSrc: '/speaker-hero.jpg',
      socialLinks: [
        { id: 'facebook', icon: '/facebook.svg', link: 'https://facebook.com' },
        { id: 'instagram', icon: '/instagram.svg', link: 'https://instagram.com' },
        { id: 'twitter', icon: '/twitter.svg', link: 'https://twitter.com' },
        { id: 'linkedin', icon: 'linkedin.svg', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Albert Barnes',
      title: 'Founder',
      imageSrc: '/speaker-hero.jpg',
      socialLinks: [
        { id: 'facebook', icon: '/facebook.svg', link: 'https://facebook.com' },
        { id: 'instagram', icon: '/instagram.svg', link: 'https://instagram.com' },
        { id: 'twitter', icon: '/twitter.svg', link: 'https://twitter.com' },
        { id: 'linkedin', icon: 'linkedin.svg', link: 'https://linkedin.com' },
      ],
    },
    // Add more speakers as needed
  ];

  return (
    <section className="bg-white text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Who is Speaking</h2>
        </div>
        <div className="flex flex-wrap justify-around">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
