import React from 'react';
import  img from  "../photo.png"

function About() {
  return (
    <div className="App">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about-us">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>We are a team of passionate individuals dedicated to delivering high-quality medical solutions to our patients.</p>
        </div>
        <div className="about-image">
          <img src={img} alt="Our Team" />
        </div>
      </section>
    </div>
  );
}

export default About;

