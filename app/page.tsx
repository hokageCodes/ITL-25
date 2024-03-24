
import AboutSection from '@/components/about-us/About';
import Hero from '@/components/hero/HeroSection';
import ExclusivePerksSection from '@/components/perks/ExclusivePerksSection';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import SpeakersSection from '@/components/speakers/SpeakerSection';

export default function Home() {

  return (
    <>
      <Hero />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <ExclusivePerksSection />
    </>
  );
}
