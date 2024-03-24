import React from 'react';
import Image from 'next/image';

interface ScheduleCardProps {
  title: string;
  speakerName: string;
  speakerRole: string;
  time: string;
  location: string;
  speakerImage: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ title, speakerName, speakerRole, time, location, speakerImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center space-y-2" style={{ width: '300px' }}>
      <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-purple-500">
        <Image src={speakerImage} alt={speakerName} layout="fill" objectFit="cover" />
      </div>
      <h3 className="font-bold text-purple-700">{title}</h3>
      <p className="text-sm text-purple-500">{`${speakerName} / ${speakerRole}`}</p>
      <div className="text-xs text-gray-500">
        <p>{time}</p>
        <p>{location}</p>
      </div>
      <button className="bg-purple-500 text-white rounded-lg px-4 py-2 text-sm">
        View More →
      </button>
    </div>
  );
};

export default ScheduleCard;
