import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-form">
        <div className="input-row">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="text" id="lastname" name="lastname" placeholder="Lastname" />
        </div>
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea id="message" name="message" placeholder="Message.."></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
