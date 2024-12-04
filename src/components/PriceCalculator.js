import React, { useState } from 'react';
import './PriceCalculator.css';

const PriceCalculator = () => {
  const [invites, setInvites] = useState(1);
  const [duration, setDuration] = useState(12);
  
  const calculatePrice = () => {
    return (invites * 1000 * duration).toLocaleString();
  };

  return (
    <div className="calculator">
      <h2>Price Calculator</h2>
      
      <div className="slider-container">
        <label>Number of Invites</label>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={invites} 
          onChange={(e) => setInvites(e.target.value)} 
          className="slider" 
        />
        <p>Invites: {invites}</p>
      </div>

      <div className="slider-container">
        <label>Duration of Event (Months)</label>
        <input 
          type="range" 
          min="12" 
          max="84" 
          value={duration} 
          onChange={(e) => setDuration(e.target.value)} 
          className="slider" 
        />
        <p>Duration: {duration} months</p>
      </div>

      <h3>Calculated Price: ₹ {calculatePrice()}</h3>
    </div>
  );
};

export default PriceCalculator;
