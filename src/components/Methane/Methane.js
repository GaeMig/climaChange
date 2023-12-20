import React from 'react'
import Footer from '../Footer/Footer'
import { Line } from 'react-chartjs-2'
import Dropdown from '../Dropdown/Dropdown'
import "../Methane/Methane.css"
import data from"../../data"

import {MethaneArrayTime, ArrayMethane} from "../../fetchData"

const Methane = () => {
  return (
    <div>
      <SectionMethane></SectionMethane>
      <Footer></Footer>
    </div>
  )
}

export default Methane
  
export const SectionMethane = () => {
  return(
  <div className='containerFather'>
      <Dropdown></Dropdown>
      <div className='containerText'>
      <h1 className='methaneTitle'>{data.methane.title}</h1>
      <p className='methaneText'>{data.methane.desc}</p>
    </div>
  <div className='containerGraphic'>
    <ChartLine></ChartLine>      
    </div>
    <br></br>
    <br></br>
</div>
  )
}

const MethaneChart = {
  labels: MethaneArrayTime,
  datasets: [
    {
      label: "Methane",
      backgroundColor: "orange",
      borderColor: "orange",
      data: ArrayMethane,
      borderWidth: 1, // Change the thickness of the line
      fill: false, //  Prevents underlined fill
      pointBorderWidth: -5, //  Change the radius of the point apexes
      pointRadius: 1.5,
    },
  ],
};


const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 1500, // Set the minium value of the y-axis
      max: 2000, // Set the maximum value of the y-axis
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of Y-axis lines
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of X-axis lines
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


const ChartLine = (data, options) => {
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <Line
          className="graphic"
          data={MethaneChart}
          options={optionsChart}
        />
      </div>
    </div>
  );
};