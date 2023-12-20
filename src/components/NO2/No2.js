import React from 'react'
import Footer from '../Footer/Footer'
import { Line } from 'react-chartjs-2'
import Dropdown from '../Dropdown/Dropdown'
import data from"../../data"
import "../NO2/No2.css"
import {No2ArrayTime, ArrayNo2} from "../../fetchData"


const No2 = () => {
  return (
    <div>
      <SectionNo2></SectionNo2>
      <Footer></Footer>
    </div>
  )
}

export default No2

export const SectionNo2 = () => {
  return(
    <div className='containerFather'>
      <Dropdown></Dropdown>
      <div className='containerText'>
      <h1 className='No2Title'>{data.no2.title}</h1>
      <p className='No2Text'>{data.no2.desc}</p>
    </div>
  <div className='containerGraphic'>
    <ChartLine></ChartLine>      
    </div>
    <br></br>
    <br></br>
</div>
  )
}


const No2Chart = {
  labels: No2ArrayTime,
  datasets: [
    {
      label: "NO2",
      backgroundColor: "#AD9652",
      borderColor: "#AD9652",
      data: ArrayNo2,
      borderWidth: 2, 
      fill: false, 
      pointBorderWidth: -5, 
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 310, // Set the minimum value of the y-axis
      max: 340, // Set the maximum value of the y-axis
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
      <div className="d-flex justify-content-center">
        <Line className="graphic" 
        data={No2Chart} 
        options={optionsChart} />
      </div>
    </div>
  );
};