import React from 'react'
import "./Contact.scss"
import ContactLocation from '../ContactLocation/ContactLocation'

export default function Contact() {
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
                <input type="text" placeholder='First Name' />
              </label>
              <label className='input_text'>
                <span>Last Name</span>
                <input type="text" placeholder='Last Name' />
              </label>
            </div>
            <label className='label'>
              <span>Email</span>
              <input type="text" placeholder='Email' />
            </label>
            <label className='label'>
              <span>Phone Number</span>
              <input type="text" placeholder='Phone Number' />
            </label>
            <label className="comment">
              <span>Message</span>
              <input type="text" placeholder='Message' />
            </label>
          </div>
          <div className="contact_btn">
            <button>Send Massage</button>
          </div>
          <ContactLocation />
        </div>
      </main>
    </>)
}
