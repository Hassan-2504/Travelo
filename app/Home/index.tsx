
import React from 'react'
import Hero from '@/components/Hero'
import Places from '@/components/Places'
import TravelStats from '@/components/TravelStats'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div>
      {/* Hero Section - positioned after navbar */}
      <Hero />
      
      {/* Places Section */}
      <Places />
      
      {/* Travel Stats Section */}
      <TravelStats />
      
      {/* Services Section */}
      <Services />
      
      
  
    </div>
  )
}
