import React from "react";
import "./Page.css";

const Contact = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our team for visits, appointments, or inquiries
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <h3>📍 Address</h3>
                  <p>
                    123 Aviary Lane
                    <br />
                    Birdtown, BT 12345
                  </p>
                </div>
                <div className="contact-item">
                  <h3>📞 Phone</h3>
                  <p>
                    (555) 123-BIRD
                    <br />
                    (555) 123-2473
                  </p>
                </div>
                <div className="contact-item">
                  <h3>✉️ Email</h3>
                  <p>
                    info@mysheraviary.com
                    <br />
                    visits@mysheraviary.com
                  </p>
                </div>
                <div className="contact-item">
                  <h3>🕒 Hours</h3>
                  <p>
                    Mon-Sun: 9:00 AM - 6:00 PM
                    <br />
                    Closed major holidays
                  </p>
                </div>
              </div>

              <div className="appointment-section">
                <h3>Schedule an Appointment</h3>
                <p>Book your visit or consultation with our bird experts.</p>
                <button className="btn btn-primary">
                  Create an Appointment
                </button>
              </div>
            </div>

            <div className="content-section">
              <h2>Contact Form</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="visit">Visit Information</option>
                    <option value="appointment">Appointment Request</option>
                    <option value="education">Educational Programs</option>
                    <option value="conservation">Conservation Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
