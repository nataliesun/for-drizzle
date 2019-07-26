import React, { Component } from 'react';
import './AboutPage.scss';
import Agronomy from '../../assets/Agronomy';
import Orbit from '../../assets/Orbit';
import GoogleMaps from '../../assets/GoogleMaps';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <GoogleMaps />
              <figcaption>Google Maps</figcaption>
            </div>
            <div className="flip-card-back">
              <p>
                <a href="https://developers.google.com/maps/documentation/maps-static/intro" target="_blank" rel="noopener noreferrer">
                Google maps</a> API for map image</p>
            </div>
          </div>
        </div>
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Agronomy />
              <figcaption>Agromonitoring</figcaption>
            </div>
            <div className="flip-card-back">
              <p>
                <a href="https://agromonitoring.com/" target="_blank" rel="noopener noreferrer">
                Agromonitoring</a> API for soil moisture and rain data</p>
            </div>
          </div>
        </div>
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Orbit />
              <figcaption>Geoservices</figcaption>
            </div>
            <div className="flip-card-back">
              <p>
                <a href="https://geoservices.tamu.edu/" target="_blank" rel="noopener noreferrer">
                  Geoservices</a> API for location coordinates
                
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;