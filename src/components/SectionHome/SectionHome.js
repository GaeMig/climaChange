import React from "react";
import { Link } from "react-router-dom";
import "../SectionHome/SectionHome.css"
import Img from '../../assets/img/statistiche.png'

const SectionHome = () => {
    return(
        <>
        <div className="sectionHome">
          <img src={Img} alt="imagine Statistics" className="imageSt"></img>
          <br></br>
          <h4 className="subtitleHome">Below you can take a look at some data:</h4>
          </div>

  <div class='grid-container'>
  <div class='grid'>
    <Link to="/temperature">
    <div class='grid-item first-item'>
     <h5 className="elementClimate">Temperature</h5>
     <p className="textEle">Global temperature anomalies from year 1 to present</p>
    </div>
    </Link>
    <Link to="/co2">
    <div class='grid-item'>
      <h5 className="elementClimate">CO2</h5>
      <p className="textEle">Carbon Dioxide levels from 800,000 years ago to present</p>
    </div>
    </Link>
    <Link to="/methane"> 
    <div class='grid-item'>
      <h5 className="elementClimate">Methane</h5>
      <p className="textEle">Methane levels from 800,000 years ago to present</p>
    </div>
    </Link>
    <Link to="/no2">
    <div class='grid-item'>
      <h5 className="elementClimate">NO2</h5>
      <p className="textEle">Nitrous Oxide levels from 800,000 years ago to present</p>
    </div>
    </Link>
    <Link to="/glacier">
    <div class='grid-item last-item'>
      <h5 className="elementClimate">Glacier</h5>
      <p className="textEle">Melted Polar Ice Caps</p>
    </div>
    </Link>
  </div>
</div>

        </>
    )
}


export default SectionHome;