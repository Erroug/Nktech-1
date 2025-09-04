import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import WhoAreWe from '../components/WhoareWe.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AwardsAchievements from "../components/AwardsAchievements.jsx"
import ClientsCarousel from "../components/ClientsCarousel.jsx"
import ServicesSection from "../components/ServicesSection .jsx"
import Offer from "../components/Offer.jsx";
import  Productlist from "../pages/Products/Productlist.jsx"
import SoftwareAndApps from "../pages/SoftwareApps.jsx"
import Quality from '../components/Quality.jsx'
import Career from "../components/Career.jsx"
import ClientsMarquee from '../components/ClientsMarquee.jsx'
import Consultation from "../components/Consultation.jsx"
import PopularSearches from "../components/PopularSearch.jsx"
import Footer from "../components/Footer.jsx";
const Home = () => {
  return (
    <>  
    <header>

       <HeroSection/>
    </header>

    <outlet>
      
        <WhoAreWe/>
        <Offer/>
        <Quality/>
        <Career/>
        <AwardsAchievements/>
        <ServicesSection/>
        <ClientsMarquee/>
        <Testimonials/>
        <Consultation/>
        <PopularSearches/>

    </outlet>
        <Footer />
    </>
  )
}

export default Home