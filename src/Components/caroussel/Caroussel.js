import React from "react";
import "./Caroussel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BoraBora from "../../Assets/borabora.jpg";
import BoraBora2 from "../../Assets/borabora2.jpg";
import Maldive from "../../Assets/maldives.jpg";

function Caroussel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
          {/* <p className="legend">Maldives 1</p> */}
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Maldive} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Caroussel;
