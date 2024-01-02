import React from 'react';
import '../styling/login.css'

const Popup = ({ onClose , text, titlemsg}) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{titlemsg}</h2>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;