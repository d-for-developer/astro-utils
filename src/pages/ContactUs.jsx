import React from "react";
import "../assets/css/contact.css"; // Make sure this CSS file exists

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">Contact Us</h1>

      <p className="contact-paragraph">
        We'd love to hear from you! Whether you have a question, suggestion, or found an issue,
        feel free to reach out. Astro Utils is here to make your numerology journey insightful and enjoyable.
      </p>

      <div className="contact-info">
        <p><strong>Developer:</strong> Sandeep Rawat</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sandy4u1994@gmail.com" className="contact-link">
            sandy4u1994@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub Repository:</strong>{" "}
          <a
            href="https://github.com/d-for-developer/astro-utils"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/d-for-developer/astro-utils
          </a>
        </p>
      </div>
        <div className="contact-info">
        <p><strong>Developer:</strong> Gowthami Priya, Meka</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:mgowthamipriya312@gmail.com" className="contact-link">
            mgowthamipriya312@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub Repository:</strong>{" "}
          <a
            href="https://github.com/d-for-developer/astro-utils"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/d-for-developer/astro-utils
          </a>
        </p>
      </div>

      <p className="contact-paragraph signature">
        💬 We appreciate your feedback and are constantly improving.
      </p>
    </div>
  );
};

export default ContactUs;
