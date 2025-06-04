import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Basic_About from '../components/Basic_About';
import DesignPackages from '../components/DesignPackages';
import PressMention from '../components/PressMention';
import LivingRoomShowcase from '../components/LivingRoomShowcase';
import HomeTestimonials from '../components/HomeTestimonials';
import DesignHelp from '../components/DesignHelp';
import OurPartners from '../components/OurPartners';
import Footer from '../components/Footer';
import TapToTop from '../components/TapToTop';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Basic_About />
      <DesignPackages />
      <PressMention />
      <LivingRoomShowcase />
      <HomeTestimonials />
      <DesignHelp />
      <OurPartners/>
      <TapToTop />
      <Footer />
    </div>
  )
}

export default Home
