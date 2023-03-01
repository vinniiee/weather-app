import logo from './logo.svg';
import './css/App.css';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';
import {BsFillBookmarkFill} from "react-icons/bs";
import { useState } from 'react';


function App() {
  const footNoteLink = 'https://www.google.com/search?q=can+you+believe+this+weather+we+are+having&rlz=1C1CHBF_enIN977IN977&oq=can+you+believe+this+weather+we+are+having&aqs=chrome..69i57.240j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:7a2914ce,vid:FMvw1kk4_Gc';

  const [searchItem,setSearchItem] = useState();

  return (
    <div className="App">
      <BsFillBookmarkFill className='bookmark-icon-home'/>
      <div className="App-header">
      <h1 className="primary-heading">
        Weather App
      </h1>
      </div>
      {!searchItem && <WeatherForm setSearchItem={setSearchItem}/>}
      {searchItem && <WeatherCard city={searchItem}/>}
      <footer className='footer'><a href={footNoteLink} className='footer-note'>Can you believe this weather we're having?</a></footer>
      <p className='tip'>Tip: Click on units to change.</p>
    </div>
  );
}
export default App;
