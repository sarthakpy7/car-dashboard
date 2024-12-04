import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      {/* First Carousel: Car Exterior Images */}
      <div className="carousel-wrapper">
        <h3>Exterior View</h3>
        <Slider {...settings}>
          <div><img src="https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/file.JPG?q=85" alt="Car 1" className="carousel-image" /></div>
          <div><img src="https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/file.JPG?q=85&w=900&dpr=1.4" alt="Car 2" className="carousel-image" /></div>
          <div><img src="https://mda.spinny.com/sp-file-system/public/2024-10-27/e7fb987326e3465dbbf6782dccee4d2c/file.JPG?q=85&w=900&dpr=1.4" alt="Car 3" className="carousel-image" /></div>
        </Slider>
      </div>

      {/* Second Carousel: Inside View Images */}
      <div className="carousel-wrapper">
        <h3>Inside View</h3>
        <Slider {...settings}>
          <div><img src="https://mda.spinny.com/sp-file-system/public/2024-10-27/af0aae5931d34af28f94b0b747d65d12/file.JPG?q=85&w=900" alt="Inside View 1" className="carousel-image" /></div>
          <div><img src="https://mda.spinny.com/sp-file-system/public/2024-10-27/3c327ee07b9641339a896707e6d25e51/file.JPG?q=85&w=320" alt="Inside View 2" className="carousel-image" /></div>
          <div><img src="https://mda.spinny.com/sp-file-system/public/2024-10-27/1608f8a1ba444ff192012d870482d139/file.JPG?q=85&w=900" alt="Inside View 3" className="carousel-image" /></div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
