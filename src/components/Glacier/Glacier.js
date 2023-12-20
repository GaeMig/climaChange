import React from 'react'
import Footer from '../Footer/Footer'
import "../Glacier/Glacier.css"
import { Line } from 'react-chartjs-2'

import {ArrayGlaciersArea, newArrayGlaciersExtent, GlacierTime,} from "../../fetchData"

import data from"../../data"
import Dropdown from '../Dropdown/Dropdown'


const Glacier = () => {
  return (
    <div>
      <GlacierSection></GlacierSection>
      <Footer></Footer>
    </div>
  )
}

export default Glacier;


export const GlacierSection = () => {
  return(
  <div className='containerFather'>
      <Dropdown></Dropdown>
      <div className='containerText'>
      <h1 className='glacierTitle'>{data.glacier.title}</h1>
      <p className='glacierText'>{data.glacier.desc}</p>
    </div>
  <div className='containerGraphic'>
    <ChartLine></ChartLine>      
    </div>
    <br></br>
    <br></br>
</div>
  )
}
const setupChartGlaciers = {
  labels: GlacierTime,
  datasets: [
    {
      label: "Area",
      backgroundColor: "rgb(50, 150, 132)",
      borderColor: "rgb(50, 150, 132)",
      data: ArrayGlaciersArea,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Set the curvature of the lines
    },
    {
      label: "Extension",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: newArrayGlaciersExtent,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Set the curvature of the lines
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
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
    <div className="d-flex justify-content-center">
      <div>
        <Line
          className="graphic"
          data={setupChartGlaciers}
          options={optionsChart}
        />
      </div>
    </div>
  );
};