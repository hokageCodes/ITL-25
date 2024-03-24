"use client"

import React, { useState } from 'react';
import ScheduleTab from './ScheduleTab';
import ScheduleCard from './ScheduleCard';

// Define the structure for the data for better type checking
interface Event {
    title: string;
    speakerName: string;
    speakerRole: string;
    time: string; // Time of the event
    date: string; // This should correspond to the tab's date
    location: string;
    speakerImage: string;
  }

// Sample data for the events. This would typically come from an API or a data file.
const allEvents: Event[] = [
  // Events for Monday
  {
    title: 'Dealing with Difficult People',
    speakerName: 'Gary Armstrong',
    speakerRole: 'CEO of Confer',
    time: '10:30 - 11',
    date: 'January 14, 2019',
    location: 'Mountain Resort, Phoenix, USA',
    speakerImage: '/speakers/gary-armstrong.jpg',
  },
  {
    title: 'Dealing with Difficult People',
    speakerName: 'Gary Armstrong',
    speakerRole: 'CEO of Confer',
    time: '10:30 - 11',
    date: 'January 14, 2019',
    location: 'Mountain Resort, Phoenix, USA',
    speakerImage: '/speakers/gary-armstrong.jpg',
  },
  {
    title: 'Dealing with Difficult People',
    speakerName: 'Gary Armstrong',
    speakerRole: 'CEO of Confer',
    time: '10:30 - 11',
    date: 'January 14, 2019',
    location: 'Mountain Resort, Phoenix, USA',
    speakerImage: '/speakers/gary-armstrong.jpg',
  },
  {
    title: 'Dealing with Difficult People',
    speakerName: 'Gary Armstrong',
    speakerRole: 'CEO of Confer',
    time: '10:30 - 11',
    date: 'January 14, 2019',
    location: 'Mountain Resort, Phoenix, USA',
    speakerImage: '/speakers/gary-armstrong.jpg',
  },
  // ... other events for Monday

  // Events for Tuesday
  {
    title: 'Innovative Design Workshop',
    speakerName: 'Jane Doe',
    speakerRole: 'Lead Designer at Creatives',
    date: 'January 15, 2019',
    location: 'Design Hub, Phoenix, USA',
    speakerImage: '/speakers/jane-doe.jpg',
    time: ''
  },
  {
    title: 'Innovative Design Workshop',
    speakerName: 'Jane Doe',
    speakerRole: 'Lead Designer at Creatives',
    date: 'January 15, 2019',
    location: 'Design Hub, Phoenix, USA',
    speakerImage: '/speakers/jane-doe.jpg',
    time: ''
  },
  {
    title: 'Innovative Design Workshop',
    speakerName: 'Jane Doe',
    speakerRole: 'Lead Designer at Creatives',
    date: 'January 15, 2019',
    location: 'Design Hub, Phoenix, USA',
    speakerImage: '/speakers/jane-doe.jpg',
    time: ''
  },
  {
    title: 'Innovative Design Workshop',
    speakerName: 'Jane Doe',
    speakerRole: 'Lead Designer at Creatives',
    date: 'January 15, 2019',
    location: 'Design Hub, Phoenix, USA',
    speakerImage: '/speakers/jane-doe.jpg',
    time: ''
  },
  // ... other events for Tuesday

  // Events for Wednesday
  {
    title: 'Future of Technology',
    speakerName: 'John Smith',
    speakerRole: 'CTO of TechFuture',
    date: 'January 16, 2019',
    location: 'Innovation Center, Phoenix, USA',
    speakerImage: '/speakers/john-smith.jpg',
    time: ''
  },
  {
    title: 'Future of Technology',
    speakerName: 'John Smith',
    speakerRole: 'CTO of TechFuture',
    date: 'January 16, 2019',
    location: 'Innovation Center, Phoenix, USA',
    speakerImage: '/speakers/john-smith.jpg',
    time: ''
  },
  {
    title: 'Future of Technology',
    speakerName: 'John Smith',
    speakerRole: 'CTO of TechFuture',
    date: 'January 16, 2019',
    location: 'Innovation Center, Phoenix, USA',
    speakerImage: '/speakers/john-smith.jpg',
    time: ''
  },
  {
    title: 'Future of Technology',
    speakerName: 'John Smith',
    speakerRole: 'CTO of TechFuture',
    date: 'January 16, 2019',
    location: 'Innovation Center, Phoenix, USA',
    speakerImage: '/speakers/john-smith.jpg',
    time: ''
  },
  // ... other events for Wednesday
];

const ScheduleSection: React.FC = () => {
  const [activeTabDate, setActiveTabDate] = useState<string>('January 14, 2019');

  const tabs = [
    { day: 'MONDAY', date: 'January 14, 2019' },
    { day: 'TUESDAY', date: 'January 15, 2019' },
    { day: 'WEDNESDAY', date: 'January 16, 2019' },
  ];

  // Filter events for the currently active tab
  const eventsToShow = allEvents.filter((event) => event.date === activeTabDate);

  return (
    <section className="bg-purple-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Schedule Plan</h2>
        </div>
        <div className="flex justify-center mb-8 space-x-2">
          {tabs.map((tab) => (
            <ScheduleTab
              key={tab.date}
              day={tab.day}
              date={tab.date}
              isActive={activeTabDate === tab.date}
              onClick={() => setActiveTabDate(tab.date)}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {eventsToShow.map((event, index) => (
            <ScheduleCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
