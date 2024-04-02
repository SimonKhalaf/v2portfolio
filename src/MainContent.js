import React from 'react';
import bild1 from './images/ss.png';
import './App.css';

const MainContent = () => {
    return (
        <div className="main">
          <div className="left">
            <h4>Hi!</h4>
            <h2><span className="smaller">I'm</span> Simon Khalaf</h2>
            <h1>Front End Developer</h1>
            <div className='knappar'>
            <button className='insta'>INSTAGRAM</button>
            <button className='link'>LINKEDIN</button> 
            </div>
          </div>
          <div className="right">
            <img src={bild1} alt="" />
          </div>
        </div>
      );
    };
export default MainContent;
