import React, { useState, useEffect } from 'react';
import './App.css';

const Education = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const notes = {
    "VGB IF": {
      description: "Managed IT operations for a sports association, built a website and was responsible for graphic design, including creating logos and various types of marketing materials such as posters.",
      url: "https://vgbif.se"
    },
    "Auel Coffee": {
      description: "Helped Auel Coffee rebrand by making them a luxurious looking website & good looking logos. (Launching soon!)",
      url: "https://auelcoffee.com"
    },
    "Studentmedia AB": {
      description: "Redesigned their admin panel to be responsive and with a completely new design. I also provided various Figma designs showcasing potential layouts for their homepage.",
    }
  };

  useEffect(() => {
    const body = document.body;
    if (showPopup) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [showPopup]);

  const openPopup = (note) => {
    setSelectedNote(note);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedNote(null);
  };

  return (
    <div className="projects">
      <div className="vertical-line"></div>
      <h1>PROJECTS</h1>
      
      <div className="sticky-notes-container">
        <div className="sticky-note" onClick={() => openPopup("VGB IF")}>
          <h2>VGB IF</h2>
          <p>read more..</p>
        </div>

        <div className="sticky-note" style={{backgroundColor: '#D25F5F'}} onClick={() => openPopup("Auel Coffee")}>
           <h2>Auel Coffee</h2>
           <p>read more..</p>
        </div>

        <div className="sticky-note" style={{backgroundColor: '#AAB8A6'}} onClick={() => openPopup("Studentmedia AB")}>
          <h2>Studentmedia AB</h2>
          <p>read more..</p>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content" style={{backgroundColor: selectedNote === "VGB IF" ? '#fff1c6' : selectedNote === "Auel Coffee" ? '#D25F5F' : selectedNote === "Studentmedia AB" ? '#AAB8A6' : selectedNote === "Tensta Träff" ? '#EC9857' : ''}}>
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{selectedNote}</h2>
            <p>{notes[selectedNote].description}</p>
            {notes[selectedNote].url && <a href={notes[selectedNote].url} style={{color: 'black'}}>Read more</a>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
