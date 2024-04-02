import React from 'react';
import './App.css';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import elementor from './images/elementor.png';
import figma from './images/figma.png';
import github from './images/github.png';
import postman from './images/postman.png';
import wordpress from './images/wordpress.png';
import visual from './images/visual.png';

const Skills = () => {
  return (
    <div className="skills">
        <h1>SKILLS</h1>
        <div className="vertical-line"></div>

  <div className="allt">
    <div className="buttons-wrapper">
        <div class="button">
         <img src={html} alt="" />
        </div>
        <div class="button">
          <img src={css} alt="" />
        </div>
        <div class="button">
          <img src={javascript} alt="" />
        </div>
        <div class="button">
          <img src={react} alt="" />
        </div>
        <div class="button">
          <img src={nodejs} alt="" /> 
        </div>
        <div class="button">
          <img src={wordpress} alt="" />
        </div>
    </div>
    <div className="buttons-wrapper">
        <div class="button">
         <img src={figma} alt="" />
        </div>
        <div class="button">
          <img src={elementor} alt="" />
        </div>
        <div class="button">
          <img src={github} alt="" />
        </div>
        <div class="button">
          <img src={postman} alt="" />
        </div>
        <div class="button">
          <img src={visual} alt="" />
        </div>
    </div>
    </div>
    </div>
  );
};

export default Skills;
