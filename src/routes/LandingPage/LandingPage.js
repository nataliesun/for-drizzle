import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LandingPage.scss';
import AddressApiService from '../../services/address-api-service';
import Forecast from '../../components/Forecast/Forecast';



class LandingPage extends Component {
  state = {
    foreCastHidden: true,
    moisture: 0,
    forecast: {},
    img: '',
    loading: false,

  }
  handleSubmit = (ev) => {
    ev.preventDefault()
    const zip = ev.target.zipcode.value
    this.setState({loading: true})
    AddressApiService.getPolygon(zip)
      .then(res => {
        this.setState({...res, loading: false})
        let cnt = document.getElementById("count");
        let water = document.getElementById("water");
        let percent = cnt.innerText;
        let interval;
        interval = setInterval(function () {
            percent++;
      
          cnt.innerHTML = percent;
          water.style.transform = 'translate(0,' + (100 - percent) + '%)';
          if (percent === Math.round(res.moisture * 100)) {
            clearInterval(interval);
          }
        }, 60);
      })
  }



  render() {
    const { moisture, forecast, img, loading } = this.state
    const submitIcon = loading ? <FontAwesomeIcon icon="spinner" className="fa-icon" pulse /> : <FontAwesomeIcon icon={['far', "arrow-alt-circle-right"]} className="fa-icon" />;
    
    return (
      <div className="LandingPage">
          <h2>Accurate weather and soil data monitoring</h2>
          <p>Check if you need to water your plants</p>
          <section className="form-section">
            <form onSubmit={(ev) => this.handleSubmit(ev)}>
              <input type="zipcode" placeholder="Zip code" id="zipcode" required/>
              <button type="submit">
               {submitIcon}
              </button>
            </form>
          </section>
          <Forecast moisture={moisture} forecast={forecast} img={img}/>

      </div>
    );
  }
}

export default LandingPage;

