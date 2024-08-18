import React from 'react'
import { Contact, HeroSection, ProcessAndQuality, ServicesList, WhyChooseUs } from './_section'

export default function Page() {
  return (
    <main>
        <HeroSection/>
        <ServicesList/>
        <WhyChooseUs/>
        <ProcessAndQuality/>
        <Contact/>
    </main>
  )
}
