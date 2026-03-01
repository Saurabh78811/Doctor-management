import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Certification from '../component/Certification'
import HomeDoctors from '../component/HomeDoctors'
import TestimonialPage from '../component/TestimonialPage'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Certification/>
        <HomeDoctors/>
        <TestimonialPage/>
        <Footer/>
    </div>
  )
}

export default Home