import React, { useState } from 'react'
import { getSearchOptions } from '../utils/getSearchOptions';
import "./css/WeatherForm.css";
import SearchOptionsList from './SearchOptionsList';
export default function WeatherForm() {
    const [city,setCity] = useState("Enter City Name");
    const [searchOptions,setSearchOptions] = useState([]);
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(city);
    }

    const citySerachOptions = async (event)=>{
        const searchThis = event.target.value;
        if(city!=="Enter City Name" && searchThis.trim().length<searchThis.length){
            console.log(city+"@");
            const searchOptionsResult = await getSearchOptions(searchThis);
            setSearchOptions(searchOptionsResult);
            console.log(searchOptions.length>0? searchOptions:"");
        }
        setCity(searchThis?searchThis:"Enter City Name");
        
    };
    
    return (
        <div className='app-form-section'>
            <form className='app-form' onSubmit={submitHandler} >
            <input className='app-form-group input' onChange={citySerachOptions} placeholder={city}/>
            {searchOptions.length>0 && <SearchOptionsList {...searchOptions}/>}
            <button className='app-form-group  button'>Get Weather</button>
            </form>
        </div>
    )
    }


    //Temperature  (Celsius/Farheneit)
    //Humidity
    //Wind Speed

    //Recent Searches