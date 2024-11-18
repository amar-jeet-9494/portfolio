import React from 'react';
// import './HeroBanner.css'; // Optional: If you want to add some CSS for styling

const HeroBanner = () => {
  return (
    <section id="home" className="hero">
      <div className="intro">
        <div className="headings">
          <h3 className="greet-heading">Hello, I'm</h3>
          <h1 className="my-heading">Emrit Diyal</h1>
          <h4 className="sub-heading">A Software Engineer with 3 years of Experience.</h4>
        </div>
        <div className="intro-buttons">
          <button className="btn common-btn">Hire Me</button>
          <button className="btn ghost-btn">Get Resume</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
