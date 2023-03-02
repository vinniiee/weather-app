import React, { useEffect, useState } from "react";
import "./css/WeatherCard.css";
import { BsThermometerSun, BsWind, BsFillBookmarkFill } from "react-icons/bs";
import { GiDroplets } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { getWeatherInfo } from "../utils/requests/getWeatherInfo";

export default function WeatherCard(props) {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const info = await getWeatherInfo(props.city);
      if (!info) {
        props.setSearchItem([]);
      } else {
        // console.log(info);
        setWeather(info.weather);
      }
    };
    getWeather();
  }, [props, setWeather]);


  const nextSearchHandler = (event)=>{
    props.setSearchItem();
  }



  const [temperatureUnit, setTemperatureUnit] = useState(false);
  const [windUnit, setWindUnit] = useState(true);
  const tempUnitDisplay = !temperatureUnit ? (
    <span
      className="value-unit"
      onClick={(e) => setTemperatureUnit(!temperatureUnit)}
    >
      &#x2103;
    </span>
  ) : (
    <span
      className="value-unit"
      onClick={(e) => setTemperatureUnit(!temperatureUnit)}
    >
      &#8457;
    </span>
  );
  const windUnitDisplay = windUnit ? (
    <span className="value-unit" onClick={(e) => setWindUnit(!windUnit)}>
      Km/Hr
    </span>
  ) : (
    <span className="value-unit" onClick={(e) => setWindUnit(!windUnit)}>
      Mi/Hr
    </span>
  );
  // console.log("@@@@@@@@@@",weather);
  return (
    <React.Fragment>
      <div className="weather-card-wrap">
      <div className="weather-card">
        <div className="heading-wrap">
          <div className="weather-card-primary-heading">
            <ImLocation2 className="location-icon" />
            <p className="heading-text margin-left-1">
              {props.city.name}
              {props.city.state ? ", " + props.city.state : ""},{" "}
              {props.city.country}
            </p>
          </div>
          <BsFillBookmarkFill className="bookmark-icon-card" />
        </div>
        <div className="partition"></div>
        <div className="weather-info">
          <div className="weather-info-item temperature">
            <div className="info-item-title">
              <BsThermometerSun className="info-item-icon" />
              <span className="info-item-title-text text">Temperature</span>
            </div>
            <span className="info-item-value temperature-value">
              {weather !== undefined &&
                (temperatureUnit
                  ? weather.temp.farenheit
                  : weather.temp.celcius)}{" "}
              {tempUnitDisplay}
            </span>
          </div>
          <div className="partition"></div>
          <div className="weather-info-item humidity">
            <div className="info-item-title">
              <GiDroplets className="info-item-icon humidity-icon" />
              <span className="info-item-title-text text">Humidity</span>
            </div>
            <span className="info-item-value humidity-value">
              {weather !== undefined && weather.humidity} %
            </span>
          </div>
          <div className="partition"></div>
          <div className="weather-info-item wind">
            <div className="info-item-title">
              <BsWind className="info-item-icon wind-icon" />
              <span className="info-item-title-text text">Wind Speed</span>
            </div>
            <span className="info-item-value wind-value">
              {weather !== undefined &&
                (windUnit ? weather.wind.kmph : weather.wind.mph)}{" "}
              {windUnitDisplay}
            </span>
          </div>
          <div className="partition"></div>
        </div>
      </div>
    </div>
    <button className="button" onClick={nextSearchHandler}>Next Search</button>
    </React.Fragment>
  );
}
