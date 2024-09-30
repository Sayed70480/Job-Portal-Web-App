import CategoryCarousel from '@/components/CategoryCarousel'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/shared/Navbar'
import LatestJobs from '@/components/LatestJobs'
import React from 'react'
import Footer from '@/components/shared/Footer'
import useGetAlljobs from '@/hooks/useGetAlljobs'

function Home() {
  useGetAlljobs()
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJobs/>
    <Footer/>
    </>
  )
}

export default Home