import React, { Component } from 'react';
import WaterMeter from '../WaterMeter/WaterMeter';

import './Forecast.scss';

class Forecast extends Component {
  static defaultProps = {
    moisture: 0,
    forecast: {},
    img: ''
  }
  render() {
    const { moisture, forecast, img } = this.props
    // let rain = forecast.probability ? 'yes' : 'no'
    let suggestion = moisture >= .30 || forecast.probability ? `Don't water` : `Water`;
    let pClasses = suggestion === `Water` ? `dowater` : `dont`;
    return (
      <section className="Forecast">
        <div className="forecast-prediction">
          <div className="tooltip">
            <h2>Moisture content of soil</h2>
            <p>Greater than 30% generally means there is enough moisture for plants to not water</p>
          </div>
          <WaterMeter />
          {!!img && <p className={pClasses}>{suggestion}</p>}
        </div>
        {img && <img src={img} alt="map" />}
      </section>
    );
  }
}

export default Forecast;

// function formatMoisture(moisture) {
//   return Math.round(moisture * 100) + '%'
// }