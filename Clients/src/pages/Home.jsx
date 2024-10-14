import CategoryCarousel from '@/components/CategoryCarousel'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/shared/Navbar'
import LatestJobs from '@/components/LatestJobs'
import React, { useEffect } from 'react'
import Footer from '@/components/shared/Footer'
import useGetAlljobs from '@/hooks/useGetAlljobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  useGetAlljobs()

  const {user} = useSelector(store => store.auth)
useEffect(()=>{
if(user?.role === "recruiter"){
navigate("/admin/companies")
}
},[])
  
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