import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <div className="vertical-line"></div>

      <div className="contact2">
      <p>Thank you for stopping by my portfolio. I hope you enjoyed browsing through my work and learning a bit about me. If you have any questions or would like to collaborate, feel free to reach out. Looking forward to connecting with you!</p> <br />
        <div className="text-container">
        <h2>Ready to start a project together?</h2>
        <a href="mailto:simon.khalaf@hotmail.se"><button>I'm just a message away!</button></a>
        </div><br />
      <p>discover my other portfolios...</p><br />
      <div className="portfolios">
          <a href="https://v1.khsimon.se/"><span><ins>version 1</ins></span></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
