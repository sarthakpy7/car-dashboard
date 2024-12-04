import React, { useState } from 'react';
import './CarOverview.css';

const CarOverview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [is360ViewActive, setIs360ViewActive] = useState(false); // Track if 360 view is active
  const carImages = [
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/file.JPG?q=85&w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/file.JPG?q=85&w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/e7fb987326e3465dbbf6782dccee4d2c/file.JPG?q=85&w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/8d7b4bc2fdcf4188a934178e9d8cd167/file.JPG?q=85&w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/6eee2a4ff0cf411eac08bc7560dc8e08/file.JPG?q=85&w=900",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/7bda23a875de4550b17b006ba26bc30e/file.JPG?q=85&w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/3bad01e406f9439684e5672e5c5bfdfd/file.JPG?q=85&w=900",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/9ad12e88626f4b2ab24ea83e5fa302a0/file.JPG?q=85&w=320"
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
  };

  const toggle360View = () => {
    setIs360ViewActive(!is360ViewActive);
  };

  return (
    <div className="car-overview">
      <h2>Car Overview</h2>
      <div className="car-detail">
        <p><strong>Model:</strong> Mahindra Thar LX</p>
        <p><strong>Year:</strong> 2021</p>
        <p><strong>Mileage:</strong> 13,000 km</p>
        <p><strong>Price:</strong> ₹13.26 Lakh</p>
      </div>

      {/* 360 View Toggle Button */}
      <div className="rotation-buttons">
        <button className="rotate-button" onClick={toggle360View}>
          {is360ViewActive ? 'Close 360 View' : 'Open 360 View'}
        </button>
      </div>

      {/* Car Image with Rotation */}
      {is360ViewActive && (
        <div className="car-image-container">
          <img
            src={carImages[currentImageIndex]}
            alt="Car"
            className="car-image"
          />
        </div>
      )}

      {/* Control Buttons */}
      {is360ViewActive && (
        <div className="control-buttons">
          <button className="rotate-button" onClick={handlePrevImage}>←</button>
          <button className="rotate-button" onClick={handleNextImage}>→</button>
        </div>
      )}

      {/* Favorite Icon */}
      <div className="favorite-icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default CarOverview;
