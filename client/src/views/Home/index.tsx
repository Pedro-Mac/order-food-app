import React from "react";
import Carousel from "../../components/Carousel";

import { MapPin, Phone, Clock, Compass } from "react-feather";

import "./style.scss";

const Home: React.FC = () => {
  return (
    <header>
      <Carousel />
      <main>
        <div className="home--info-container">
          <MapPin className="home--info-icon" />
          <h4 className="home--info-header">Location</h4>
          <p className="home--info">Ha-Ha Road, 10</p>
          <p className="home--info">Tomeka</p>
          <p className="home--info">Kansas</p>
        </div>
        <div className="home--info-container">
          <Phone className="home--info-icon" />
          <h4 className="home--info-header">Call us</h4>
          <p className="home--info">9191919191</p>
        </div>
        <div className="home--info-container">
          <Clock className="home--info-icon" />
          <h4 className="home--info-header">Open hours</h4>
          <p className="home--info">Mon - Fri: 11-21</p>
          <p className="home--info">Sat and Sun: 11-22</p>
        </div>
        <div className="home--info-container">
          <Compass className="home--info-icon" />
          <h4 className="home--info-header">Order online</h4>
          <button>Menu</button>
        </div>
      </main>
    </header>
  );
};

export default Home;
