import React from 'react'

export default function WeatherForm() {
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("Handling...");
    }
    return (
        <div className='app-form-section'>
            <form className='app-form' onSubmit={submitHandler} >
            <input className='app-form-group input'/>
            <button className='app-form-group  button'>Get Weather</button>
            </form>
        </div>
    )
    }


    //Temperature  (Celsius/Farheneit)
    //Humidity
    //Wind Speed

    //Recent Searches