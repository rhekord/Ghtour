import React from 'react'
import Navbar from '../components/Navbar'
import './Sites.css'
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';

function Sites() {
  return (
    <>
    <Navbar />
    <div className="hero-section-sites">
          <div className="hero-content">
              <h1 className='hero-title'>Tour Sites</h1>
              <p className='hero-para'>Welcome to our enchanting Tour Sites page! Discover Ghana's hidden gems, from lush rainforests to pristine beaches. Unearth ancient forts, immerse in vibrant festivals, and explore majestic mountains. Your unforgettable adventure starts here! Happy exploring!</p>
          </div>
      </div>
      <Destinations/>
      <Footer/>
      </>
  )
}

export default Sites;

