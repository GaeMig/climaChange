import React from 'react'
import Footer from '../Footer/Footer'
import {Line} from "react-chartjs-2"
import { ArrayTemperature, ArrayTime } from "../../fetchData";
import { Link } from 'react-router-dom';
import data from "../../data"
import "../Temperature/Temperature.css"
import Dropdown from "../Dropdown/Dropdown"

const Temperature = () => {
  return (
    <div>
      <SectionTemperature></SectionTemperature>
      <Footer></Footer>
    </div>
  );
};



export const SectionTemperature = () => {
  return(
    <div className='containerFather'>
        <div className='containerButton'>
          <Dropdown></Dropdown>
        </div>
        <div className='containerText'>
        <h1 className='TemperatureTitle'>{data.temperature.title}</h1>
       <p className='temperatureText'>{data.temperature.desc}</p>
       </div>
      <div className='containerGraphic'>
        <Chartline></Chartline>      
        </div>
        <br></br>
        <br></br>
    </div>
  )
} 

export default Temperature;


/*CHART*/
const TemperatureChart = {
  labels: ArrayTime,
  datasets: [
    {
      label:"Temperature",
      backgroundColor: "rgba(255,69,0,0.7)",
      borderColor: "rgba(255,69,0,0.7)",
      data:ArrayTemperature,
      borderWidth:0.8,
      fill: false, 
      pointBorderWidth: 0,
      pointRadius: 1.5,
    }
  ]

};


const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)", 
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)", 
      },
    },
  },
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
};


const Chartline = (data, option) => {
return(
  <div>
    <div>
      <Line
      className="graphic"
          data={TemperatureChart}
          options={optionsChart}
          >
      </Line>
    </div>
  </div>
)

}