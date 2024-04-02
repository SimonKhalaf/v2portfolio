import React from 'react';
import './App.css';

const Education = () => {
  return (
    <div className="projects">
      <div className="vertical-line"></div>
      <h1>MY PROJECTS</h1>
      <div class="sticky-notes-container">
        <div class="sticky-note">
          <h2>Vision Generation Boll IF</h2>
          <p>This is the content of sticky note 1.</p>
        </div>

        <div class="sticky-note" style={{backgroundColor: '#D25F5F'}}>
           <h2>Studentmedia AB</h2>
           <p>This is the content of sticky note 2.</p>
        </div>

        <div class="sticky-note" style={{backgroundColor: '#AAB8A6'}}>
          <h2>Tensta Träff</h2>
           <p>This is the content of sticky note 3.</p>
        </div>

        <div class="sticky-note" style={{backgroundColor: '#EC9857'}}>
          <h2>Awa...</h2>
          <p>This is the content of sticky note 4.</p>
          </div>
        </div>
      </div>
  );
};

export default Education;
