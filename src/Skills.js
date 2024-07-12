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
  // Funktion för att spela ljudet
  const playSound = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }
  
  return (
    <div className="skills">
        <h1>SKILLS</h1>
        <div className="vertical-line"></div>

        <div className="buttons-wrapper">
            <div className="button" onClick={playSound}>
                <img src={html} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={css} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={javascript} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={react} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={nodejs} alt="" /> 
            </div>
            <div className="button" onClick={playSound}>
                <img src={wordpress} alt="" />
            </div>
        </div>
        <div className="buttons-wrapper">
            <div className="button" onClick={playSound}>
                <img src={figma} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={elementor} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={github} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={postman} alt="" />
            </div>
            <div className="button" onClick={playSound}>
                <img src={visual} alt="" />
            </div>
        </div>

        {/* Audio tagg för att spela ljud */}
        <audio className="audio-element">
            <source src="/click.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
  );
};

export default Skills;
