import React from 'react';
import './App.css'; // Importera din CSS-fil här

const About = () => {
  return (
    <div className="about-container">
      <div className="vertical-line"></div>

      <div className="aboutcontent">

        <div className="left">
          <h1>ABOUT</h1>
        </div>

        <div className="righttext">
          <h1>ME</h1>
        </div>

        <div className="right">
        <p>Hi! I'm Simon, a 22-year-old Front End Developer from Stockholm, Sweden. I love designing, coding, eating good food, and playing basketball!
        <br /><br />
        In addition to my technical skills, I am also a creative individual with an eye for design and user experience. I believe in combining technology and design to create websites that are not only functional but also beautiful and engaging.
        <br /><br />
        I mainly use HTML, CSS, JavaScript, and React for coding. I've worked on small projects to improve my skills and I work part-time as an IT manager for a sports club (<a href="https://vgbif.se/" className='vgbif'><span><ins>vgbif.se</ins></span></a>), which has provided me with a broad understanding of various aspects of technology and leadership.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
