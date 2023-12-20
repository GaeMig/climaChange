import React from "react";
import { Link } from "react-router-dom";
import "../Section/Section.css"
import Img from "../../assets/img/terra7.png"

const Section = () => {
    return(
        <>
        <br></br>
        <br></br>
        <div className='containerHome'>
        <div className='container'>
        <h1 className='title'>Climate Change</h1>
        <h1 className='title'>is real!</h1>
        <p className='textHome'>
        Climate change is no longer a threat, it is a reality 
        that is having a devastating impact on our planet.
        </p>
          <p className='textLink'>
          Click the button below if you want to contact me and have further information.
          </p>
          <Link to="/contact">
          <button className='buttonLink'><span>Click here</span></button>
          </Link>  
        </div>
        <div className='container1 element'>
          <img src={Img} alt='imagine of planet' className='imagine'></img>
        </div>
      
        </div>
        </>
    )
}

export default Section;