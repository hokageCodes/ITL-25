
import AboutSection from '@/components/about-us/About';
import Hero from '@/components/hero/HeroSection';
import ExclusivePerksSection from '@/components/perks/ExclusivePerksSection';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import SpeakersSection from '@/components/speakers/SpeakerSection';
import PartnerLogo from '@/components/sponsors/PartnerLogo.tsx';
import PartnersSection from '@/components/sponsors/PartnerSection';

export default function Home() {

  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <ExclusivePerksSection />
    </>
  );
}
