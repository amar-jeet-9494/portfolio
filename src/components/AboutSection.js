import React from 'react';
// import './AboutSection.css'; // Optional: If you want to add some CSS for styling

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1 className="my-heading">About Me</h1>
        <p className="lead-para">
          GeeksforGeeks is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts, along with interview and exam preparations for upcoming aspirants. With a strong emphasis on enhancing coding skills and knowledge, it has become a trusted destination for over 12 million plus registered users worldwide. The platform offers a vast collection of tutorials, practice problems, interview tutorials, articles, and courses, covering various domains of computer science.
        </p>
        <p>
          Our exceptional mentors hailing from top colleges & organizations have the ability to guide you on a journey from the humble beginnings of coding to the pinnacle of expertise. Under their guidance, watch your skills flourish as we lay the foundation and help you conquer the world of coding.
        </p>
      </div>
      <div className="about-image">
        <image src="./MY-PIC.png" alt="About Image" />
      </div>
    </section>
  );
};

export default AboutSection;
