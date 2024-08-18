import React from 'react'
import { Hero, Testimonials } from '../_sections'
import { MissionSection, StorySection, TeamSection, ValuesSection } from './_sections'

export default function Page() {
  return (
    <main>
        <Hero/>
        <MissionSection/>
        <StorySection/>
        <TeamSection/>
        <ValuesSection/>
        <Testimonials/>
    </main>
  )
}
