import React from "react";
import './contact.css'
const Contact = () => {
  return (
    <>
       <div className="contact-container">
        <div className="form-section">
            <h2 className="title">Let's work together</h2>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nescit sit
                illo esse commodo.
            </p>

            <form className="form">
                <input type="text" placeholder="Name" className="input" />
                <input type="email" placeholder="Email address" className="input" />
                <input type="text" placeholder="Phone number" className="input" />

                <select className="input">
                    <option>Select a service</option>
                    <option>Service 1</option>
                    <option>Service 2</option>
                </select>

                <textarea placeholder="Type your message here." className="input textarea" rows="4"></textarea>

                <button type="submit" className="submit-button">Send message</button>
            </form>
        </div>

        <div className="contact-section">
            <div className="contact-info">
                <div className="info-item">
                    <span className="icon">📞</span>
                    <span className="text">(+40) 321 654 876</span>
                </div>
                <div className="info-item">
                    <span className="icon">✉️</span>
                    <span className="text">youremail@email.com</span>
                </div>
                <div className="info-item">
                    <span className="icon">📍</span>
                    <span className="text">Code Corner, Tech Town 13579</span>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Contact;
