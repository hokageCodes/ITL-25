import React from 'react'
import AboutSection from '@/components/about-us/About'
import ScheduleSection from '@/components/schedule/ScheduleSection'
import PartnersSection from '@/components/sponsors/PartnerSection'
import Image from 'next/image'
import SpeakersSection from '@/components/speakers/SpeakerSection'

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <PartnersSection />
      <ScheduleSection />
      {/* <SpeakersSection /> */}
    </div>
  )
}
