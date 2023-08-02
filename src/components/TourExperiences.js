import React from 'react';
import './TourExperiences.css';

const TourExperiences = () => {
  return (
    <section className="tour-experiences-section">
      <div className="container">
        <h1 className="section-heading">Tour Experiences</h1>
        <div className="testimonial-container">
          <div className="testimonial">
            <img src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Person 1" className="testimonial-image" />
            <div className="testimonial-content">
              <h3 className="testimonial-name">Kwame Tanjuro</h3>
              <div className="quotation-mark">
                <span className="quotation-left">“</span>
                <p className="testimonial-text">.    I had an amazing experience exploring the beautiful landscapes of Ghana. The friendly locals, delicious food, and rich history made it a trip to remember.</p>
                <span className="quotation-right">”</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src="https://images.unsplash.com/photo-1620794108219-aedbaded4eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Person 2" className="testimonial-image" />
            <div className="testimonial-content">
              <h3 className="testimonial-name">Akosua Ichigo</h3>
              <div className="quotation-mark">
                <span className="quotation-left">“</span>
                <p className="testimonial-text">Ghana's cultural heritage left me in awe. From visiting traditional villages to witnessing colorful festivals, every moment was filled with joy and excitement.</p>
                <span className="quotation-right">”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourExperiences;
