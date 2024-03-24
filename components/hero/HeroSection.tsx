"use client";
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
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src="/break.png" layout='fill' alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-transparent to-purple-900 opacity-80"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-8">ITIL CONFERENCE 2025</p>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 sm:mt-4">
          Crossing Borders<br /><span className="sm:inline-block sm:ml-2">Breaking Barriers</span>
        </h1>

        <div className="mt-4 sm:mt-8 flex justify-center space-x-2 sm:space-x-4">
          {Object.entries(timer).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <span className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">{value}</span>
              <span className="block text-xs sm:text-sm md:text-base lg:text-lg">{unit.toUpperCase()}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-8 flex justify-center space-x-2 sm:space-x-4">
          <a href="#" className="px-4 py-2 text-sm font-bold bg-blue-600 rounded-lg hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-md md:px-8 md:py-3 md:text-lg">
            Pre Register
          </a>
          {/* This button will be hidden on screens smaller than 'md' */}
          <a href="#" className="hidden md:inline-block px-4 py-2 text-sm font-bold border border-white rounded-lg hover:bg-green-700 sm:px-6 sm:py-3 sm:text-md md:px-8 md:py-3 md:text-lg">
            Volunteer
          </a>
          <a href="#" className="px-4 py-2 text-sm font-bold border border-white rounded-lg hover:bg-orange-700 sm:px-6 sm:py-3 sm:text-md md:px-8 md:py-3 md:text-lg">
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
