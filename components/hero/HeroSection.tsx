"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TimerState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Hero = () => {
  const [timer, setTimer] = useState<TimerState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const updateTimer = () => {
    const eventDate = new Date('June 19, 2025 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeLeft = eventDate - currentTime;

    const formatWithLeadingZero = (num: number) => (num < 10 ? `0${num}` : num.toString());

    setTimer({
      days: formatWithLeadingZero(Math.floor(timeLeft / (1000 * 60 * 60 * 24))),
      hours: formatWithLeadingZero(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: formatWithLeadingZero(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: formatWithLeadingZero(Math.floor((timeLeft % (1000 * 60)) / 1000)),
    });
  };

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ height: '75vh' }}>
      <div className="absolute inset-0 z-0">
        <Image src="/break.png" layout='fill' alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-transparent to-purple-900 opacity-80"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4">ITIL CONFERENCE 2025</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2">
          Crossing Borders<br /><span className="inline-block mt-2 md:ml-2">Breaking Barriers</span>
        </h1>

        <div className="mt-4 flex justify-center space-x-2">
          {Object.entries(timer).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">{value}</span>
              <span className="block text-xs md:text-sm lg:text-base">{unit.toUpperCase()}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          <a href="#" className="px-4 py-2 text-xs md:text-sm lg:text-md font-bold bg-blue-600 rounded-lg hover:bg-blue-700">
            Pre Register
          </a>
          <a href="#" className="px-4 py-2 text-xs md:text-sm lg:text-md font-bold border border-white rounded-lg hover:bg-orange-700">
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
