import React, { useEffect, useState } from 'react'
import { getSearchOptions } from '../utils/getSearchOptions';
import "./css/WeatherForm.css";
import SearchOptionsList from './SearchOptionsList/SearchOptionsList';
export default function WeatherForm(props) {
    const [city,setCity] = useState("")
    const [searchOptions,setSearchOptions] = useState([]);
    const [searchItem,setSearchItem] = useState();


    useEffect(()=>{
        
        if(!searchItem){
            const timer = setTimeout(async () => {
                const searchOptionsResult = await getSearchOptions(city);
                setSearchOptions(searchOptionsResult);
              }, 20);
        
        }
        },[city,searchItem]);


    const onChangeHandler = async (event)=>{
        const searchThis = event.target.value;
        if(!searchThis){
            setSearchItem();
        }
        setCity(searchThis);
        // if( searchThis.trim().length<searchThis.length){
        //     const searchOptionsResult = await getSearchOptions(searchThis);
        //     setSearchOptions(searchOptionsResult);
        // }
        // else{
        //     setSearchOptions([]);
        // }
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        props.setSearchItem(searchItem);

    }
    
    return (
        <div className='app-form-section'>
            <form className='app-form' onSubmit={submitHandler} >
            <input className='app-form-group input' onChange={onChangeHandler} placeholder="Enter City, State, Country" value={city}/>
            {searchOptions.length>0 && <SearchOptionsList setSearchItem={setSearchItem} setCity={setCity} setSearchOptions={setSearchOptions} options={searchOptions}/>}
            <button className='app-form-group  button'>Get Weather</button>
            </form>
        </div>
    )
    }


    //Temperature  (Celsius/Farheneit)
    //Humidity
    //Wind Speed

    //Recent Searches