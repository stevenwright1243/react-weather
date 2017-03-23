import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const kelvinTemps = cityData.list.map(weather => weather.main.temp);
    // variable kelvin in the map function is the value or kelvinTemps
    // Convert kelvin to fahrenheit
    const temps = kelvinTemps.map(kelvin => (9/5 * (kelvin - 273) + 32));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    // is equivalent to
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="℉" /></td>
        <td><Chart data={pressures} color="green" units=" hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (℉)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapDispatchToProps(state) {
//   return { weather: state.weather };
// }

// Is equivalent to

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect(mapDispatchToProps)(WeatherList);
