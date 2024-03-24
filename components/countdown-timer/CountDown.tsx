"use client"
import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const defaultTimeLeft: TimeLeft = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(defaultTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
        });
      } else {
        setTimeLeft(defaultTimeLeft);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center space-x-4">
      {(Object.keys(timeLeft) as Array<keyof TimeLeft>).map((interval) => (
        <div key={interval} className="flex flex-col items-center justify-center bg-gray-200 text-black text-center shadow-lg p-6 rounded-lg transform-gpu perspective">
          <span className="text-5xl font-semibold">{timeLeft[interval]}</span>
          <span className="text-lg uppercase">{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
