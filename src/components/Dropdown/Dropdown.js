import React from 'react'
import "../Dropdown/Dropdown.css"
import img from "../../assets/img/statisticheMenu.png"
import imgHome from "../../assets/img/home.png"
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div>
      <div class="dropdown">
      <button class="dropbtn"><img src={img} alt='imagine sta'></img></button>
  <div class="dropdown-content">
     <Link to="/temperature">Temperature</Link>
    <Link to="/co2">Co2</Link>
    <Link to="/methane">Methane</Link>
    <Link to="/no2">No2</Link>
    <Link to="/glacier">Glacier</Link>
  </div> 
</div>
  <p className='linkHome'><a href='/'><img src={imgHome} alt='Imagehome'></img></a></p>
    </div>
  )
}

export default Dropdown
