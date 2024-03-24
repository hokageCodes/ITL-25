import React from 'react';

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
    <div className="w-[350px] h-[350px] group relative rounded-lg overflow-hidden shadow-lg">
      <img src={imageSrc} alt={name} className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110" />
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <ul className="flex flex-col items-center space-y-2 mt-2 transform -translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          {socialLinks.map((link) => (
            <li key={link.id} className="opacity-0 group-hover:opacity-100">
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.id} className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
        <div className="text-white">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const SpeakersSection: React.FC = () => {
    const speakers: Speaker[] = [
        {
          name: 'Albert Barnes',
          title: 'Founder',
          imageSrc: '/speaker-hero.jpg',
          socialLinks: [
            { id: 'facebook', icon: '/icons/facebook.svg', link: 'https://facebook.com' },
            { id: 'instagram', icon: '/icons/instagram.svg', link: 'https://instagram.com' },
            { id: 'twitter', icon: '/icons/twitter.svg', link: 'https://twitter.com' },
            { id: 'linkedin', icon: '/icons/linkedin.svg', link: 'https://linkedin.com' },
          ],
        },
        // More speaker objects...
      ];

  return (
    <section className="py-12 bg-purple-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Who is Speaking</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
