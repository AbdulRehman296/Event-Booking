import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h2>Contact Us</h2>
      <p className="contact-text">
        Have questions about an event? Feel free to contact us.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" rows="5"></textarea>

        <button type="submit">Send Message</button>
      </form>

    </div>
  );
}

export default Contact;