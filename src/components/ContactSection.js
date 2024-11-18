import React from 'react';
// import './ContactSection.css'; // Optional: If you want to add some CSS for styling

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <h1 className="my-heading text-center">Contact Me</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form-container">
          <h1 className="greet-heading">Get In Touch</h1>
          <form className="contact-form">
            <input className="form-controls" type="text" placeholder="Your Name" />
            <input className="form-controls" type="text" placeholder="Your Email" />
            <input className="form-controls" type="text" placeholder="Your Phone" />
            <textarea className="form-controls" placeholder="Write your message" name="message" cols="30" rows="10"></textarea>
            <input className="form-btn btn common-btn" type="submit" value="Send Message" />
          </form>
        </div>
        <div className="contact-details">
          <h1 className="greet-heading">My Contact Details</h1>
          <div className="details">
            <h5 className="contact-heading">EMAIL</h5>
            <p className="contact-text">jeet.amar9494@gmail.com</p>
          </div>
          <div className="details">
            <h5 className="contact-heading">PHONE</h5>
            <p className="contact-text">+91 09334306358</p>
          </div>
          {/* <div className="details">
            <h5 className="contact-heading">FAX</h5>
            <p className="contact-text">+91 09334306358</p>
          </div> */}
          <div className="details">
            <h5 className="contact-heading">ADDRESS</h5>
            <p className="contact-text">India</p>
            <p>Jharkhand, Ranchi</p>
            <p>Kanke, 834006</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
