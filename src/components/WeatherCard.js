import React, { useEffect, useState } from 'react'
import './css/WeatherCard.css';
import {BsThermometerSun,BsWind,BsFillBookmarkFill} from "react-icons/bs";
import {GiDroplets} from "react-icons/gi";
import {ImLocation2} from "react-icons/im";

export default function WeatherCard(props) {

  useEffect(()=>{
    
  },[])


  const [temperatureUnit,setTemperatureUnit] = useState(false);
  const [wind,setWind] = useState(true);

  const tempUnitDisplay = !temperatureUnit?(<span className='value-unit' onClick={e=>setTemperatureUnit(!temperatureUnit)}>&#x2103;</span>):(<span className='value-unit' onClick={e=>setTemperatureUnit(!temperatureUnit)}>&#8457;</span>);
  const windUnitDisplay = wind?(<span className='value-unit' onClick={e=>setWind(!wind)}>Km/Hr</span>):(<span className='value-unit' onClick={e=>setWind(!wind)}>Mi/Hr</span>);
  
  return (
    <div className='weather-card-wrap'>
      
    <div className='weather-card'>
      <div className='heading-wrap'>
      <div className='weather-card-primary-heading' >
        <ImLocation2 className='location-icon'/>
        <p  className='heading-text margin-left-1'>{props.city.name}{props.city.state?", "+props.city.state:""}, {props.city.country}</p>
      </div>
      <BsFillBookmarkFill className='bookmark-icon-card'/>
      </div>
      <div className='partition'></div>
      <div className='weather-info'>
        <div className='weather-info-item temperature'>
          <div className='info-item-title'><BsThermometerSun className='info-item-icon'/><span className='info-item-title-text text'>Temperature</span></div>
          <span className='info-item-value temperature-value'>
            23 {tempUnitDisplay}
          </span>
        </div>
        <div className='partition'></div>
        <div className='weather-info-item humidity'>
        <div className='info-item-title'><GiDroplets className='info-item-icon humidity-icon'/><span className='info-item-title-text text'>Humidity</span></div>
          <span className='info-item-value humidity-value'>
            55%
          </span>
        </div>
        <div className='partition'></div>
        <div className='weather-info-item wind'>
        <div className='info-item-title'><BsWind className='info-item-icon wind-icon'/><span className='info-item-title-text text'>Wind Speed</span></div>
         <span className='info-item-value wind-value'>
            2 <soan className='value-unit'>{windUnitDisplay}</soan>
          </span>
        </div>
        <div className='partition'></div>
    </div>
    
    
    </div>
    </div>
  )
}