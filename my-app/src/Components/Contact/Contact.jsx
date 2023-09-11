import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.scss"
import ContactLocation from '../ContactLocation/ContactLocation'

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const botToken = "6452795161:AAFOYii0ygohOebRNaB-kpWO9fqD4j_-ucc";

  const sendTelegramMessage = async () => {

    try {
      const text = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `;

      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: "-1001905649628",
          text: text,
        }
      );

      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="top_contact">
            <h1>Contact Us</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="contact_inputs">
            <div className="top_inputs">
              <label className='input_text'>
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} />
              </label>
              <label className='input_text'>
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} />
              </label>
            </div>
            <label className='label'>
              <span>Email</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='label'>
              <span>Phone Number</span>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label className="comment">
              <span>Message</span>
              <input
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
            </label>
          </div>
          <div className="contact_btn">
            <button onClick={sendTelegramMessage}>Send Massage</button>
          </div>
          <ContactLocation />
        </div>
      </main>
    </>)
}
