import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Booking.css'; 

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    budget: '',
    numberOfTourists: '',
    tourSites: '',
    numberOfDays: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="hero-section-sites">
        <div className="hero-content">
          <h1 className="hero-title">Booking</h1>
          <p className="hero-para">Embark on your unforgettable journey with Ghtour! Fill out our booking form now and receive personalized assistance to plan your dream vacation. Experience Ghana's hidden gems and breathtaking landscapes with us. Book your tour today and explore the wonders of Ghana! Let Ghtour be your guide to an amazing adventure!</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget for Tour:</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfTourists">Number of Tourists:</label>
            <input
              type="number"
              id="numberOfTourists"
              name="numberOfTourists"
              value={formData.numberOfTourists}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tourSites">Tour Sites:</label>
            <textarea
              id="tourSites"
              name="tourSites"
              value={formData.tourSites}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfDays">Number of Days for Tour:</label>
            <input
              type="number"
              id="numberOfDays"
              name="numberOfDays"
              value={formData.numberOfDays}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
