import React from "react";
import Carousel from "../../components/Carousel";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { MapPin, Phone, Clock, Compass } from "react-feather";

import "./style.scss";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <Carousel />
      </header>
      <main>
        <section className="background--dark">
          <div className="home--info-container">
            <MapPin className="home--info-icon" color="#fff" />
            <h4 className="home--info-header">Location</h4>
            <p className="home--info">Ha-Ha Road, 10</p>
            <p className="home--info">Tomeka</p>
            <p className="home--info">Kansas</p>
          </div>
          <div className="home--info-container">
            <Phone className="home--info-icon" color="#fff" />
            <h4 className="home--info-header">Call us</h4>
            <p className="home--info">9191919191</p>
          </div>
          <div className="home--info-container">
            <Clock className="home--info-icon" color="#fff" />
            <h4 className="home--info-header">Open hours</h4>
            <p className="home--info">Mon - Fri: 11-21</p>
            <p className="home--info">Sat and Sun: 11-22</p>
          </div>
          <div className="home--info-container">
            <Compass className="home--info-icon" color="#fff" />
            <h4 className="home--info-header">Order online</h4>
            <ButtonLink
              to="/menu"
              text="Menu"
              className="button--link-home d-block"
            />
          </div>
        </section>
        <section>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur, orci ornare dapibus convallis, elit magna scelerisque
            justo, ornare sollicitudin ante purus ac nisl. In laoreet auctor
            nisl, nec luctus elit. Quisque et venenatis nibh, vitae facilisis
            dolor. Sed vulputate consequat eros, vitae consequat urna tempor
            quis. Integer tempor maximus erat quis mattis.{" "}
          </p>
        </section>
      </main>
      <footer>
        <p>Ha-Ha Road, 10 Tomeka Kansas</p>
        <p>
          <strong>Phone:</strong> 9191919191
        </p>
        <p>
          <strong>Email:</strong> loremimpsum@loremipsum.com
        </p>

        <ButtonLink
          to="/menu"
          text="Order online"
          className=" button--footer-highlight d-block py-2"
        />
      </footer>
    </>
  );
};

export default Home;
