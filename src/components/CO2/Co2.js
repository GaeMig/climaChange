import React from 'react'
import Footer from '../Footer/Footer'
import {Line} from "react-chartjs-2"
import "../CO2/Co2.css"
import data from "../../data"
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import {Co2ArrayTime, ArrayCo2} from "../../fetchData"


const Co2 = () => {
  return (
    <div>
       <SectionCo2></SectionCo2>
      <Footer></Footer>
    </div>
  )
}

export default Co2;


export const SectionCo2 = () => {
  return(
    <div className='containerFather'>
      <Dropdown></Dropdown>
      <div className='containerText'>
      <h1 className='co2Title'>{data.co2.title}</h1>
      <p className='co2Text'>{data.co2.desc}</p>
    </div>
  <div className='containerGraphic'>
    <ChartLine></ChartLine>      
    </div>
    <br></br>
    <br></br>
</div>
)
  
}

const Co2Chart = {
  labels:Co2ArrayTime,
  datasets:[
    {
      label:"CO2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: ArrayCo2, 
      borderWidth: 1, // Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: 0, //Change the thickness of the superscript points
      pointRadius: 1,
    }
  ]
}

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "xy",
      },
      zoom: {
        enabled: true,
        mode: "xy",
      },
    },
  },
  scales: {
    y: {
      min: 370, // Set the minimum value of the x-axis
      max: 440, // Set the minimum value of the y-axis
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Color and opacity of Y-axis lines
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Color and opacity of X-axis lines
      },
    },
  },
};


const ChartLine = (data, options) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Line
          className="graphic"
          data={Co2Chart}
          options={optionsChart}
        />
      </div>
    </div>
  );
};