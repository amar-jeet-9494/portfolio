import React from 'react';
// import './PortfolioSection.css'; // Optional: If you want to add some CSS for styling

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-heading">
        <h1 className="my-heading text-center">Featured Portfolio</h1>
      </div>
      <div className="portfolio-content">
        <div className="my-row">
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <image src="./Images/designImage2.avif" alt="Web Design Image" />
              </div>
              <h3 className="greet-heading blue-text">Web Design</h3>
              <p className="small-para blue-text">Designing</p>
            </div>
          </div>
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <image src="./Images/webDevelopment2.avif" alt="Web Development Image" />
              </div>
              <h3 className="greet-heading blue-text">Web Development</h3>
              <p className="small-para blue-text">Development</p>
            </div>
          </div>
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <image src="./Images/SEOImage2.avif" alt="SEO Image" />
              </div>
              <h3 className="greet-heading blue-text">SEO</h3>
              <p className="small-para blue-text">Optimization</p>
            </div>
          </div>
        </div>
        <div className="my-row">
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <image src="./Images/contentImage2.avif" alt="Content Writing Image" />
              </div>
              <h3 className="greet-heading blue-text">Content Writing</h3>
              <p className="small-para blue-text">Writing</p>
            </div>
          </div>
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <image src="./Images/wordpressImage2.avif" alt="Wordpress Image" />
              </div>
              <h3 className="greet-heading blue-text">WordPress Dev</h3>
              <p className="small-para blue-text">Content Management System</p>
            </div>
          </div>
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <image src="./Images/videoEditing2.avif" alt="Video Editing Image" />
              </div>
              <h3 className="greet-heading blue-text">Video Editing</h3>
              <p className="small-para blue-text">Editing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
