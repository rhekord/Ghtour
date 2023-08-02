import React from 'react';
import Navbar from './../components/Navbar';
import './Home.css';
import Popsites from '../components/Popsites';
import TourExperiences from '../components/TourExperiences';
import Footer from '../components/Footer';
import HiddenGems from '../components/HiddenGems';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className='hero-title'>Welcome to Tour Ghana</h1>
          <p>Discover the beauty of Ghana's tourist sites</p>
          <button>Explore Now</button>
        </div>
      </div>
      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <div className="description-text">
              <h1>About Ghana</h1>
              <p>
                Ghana is a country located in West Africa known for its rich culture, historical sites, and breathtaking natural landscapes. With its diverse ethnic groups, vibrant festivals, and warm hospitality, Ghana offers a unique and unforgettable travel experience. Whether you are interested in exploring ancient forts and castles, relaxing on pristine beaches, or embarking on thrilling wildlife safaris, Ghana has something for everyone.
              </p>
            </div>
            <div className="description-image">
              <img src="https://fvmstatic.s3.amazonaws.com/maps/m/GH-EPS-02-6001.png" alt="Ghana" />
            </div>
          </div>
        </div>
      </section>
      <Popsites/>
      <HiddenGems/>
      <TourExperiences/>
      
      <Footer/>
    </>
  );
};

export default Home;
