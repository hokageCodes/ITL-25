// ScheduleTab.tsx

import React from 'react';

interface ScheduleTabProps {
  day: string;
  date: string;
  isActive: boolean;
  onClick: () => void;
}

const ScheduleTab: React.FC<ScheduleTabProps> = ({ day, date, isActive, onClick }) => {
  const activeStyles = 'bg-purple-500 text-white';
  const inactiveStyles = 'bg-purple-300 text-purple-700';

  return (
    <button
      className={`px-6 py-2 rounded-t-lg transition duration-300 ease-in-out ${isActive ? activeStyles : inactiveStyles}`}
      onClick={onClick}
    >
      <span className="block text-sm font-medium">{day}</span>
      <span className="block text-xs">{date}</span>
    </button>
  );
};

export default ScheduleTab;
