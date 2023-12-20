
import axios from "axios"
import Chart from "chart.js/auto"

import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);


/*------TEMPERATURE------*/
const  apiTemperature = "https://global-warming.org/api/temperature-api";

/*create two arrays for time and value*/
export const ArrayTime = []; 
export const ArrayTemperature = [];


/*API call that extracts the data, are inserted into the array*/
await axios
  .get(apiTemperature)
  .then((response) => {
    let dataApi = response.data.result;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        ArrayTime.push(item.time);
        ArrayTemperature.push(item.station);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });

  /*same temperature method*/

   /*------CO2------*/
   const apiCo2 = "https://global-warming.org/api/co2-api";

   export const Co2ArrayTime = [];
   export const ArrayCo2=[];

   await axios
   .get(apiCo2)
   .then((response) => {
    console.log(response)
    let dataApi = response.data.co2
    console.log(dataApi)

    dataApi.forEach((item, index) => {
      if(index % 2 ===0){
        Co2ArrayTime.push(item.year);
        ArrayCo2.push(item.trend);
      }
    });

   })
   .catch((error) => {
    console.error("Error in the request", error);
  });


  /*-----------Methane------------*/

  const apiMethane = "https://global-warming.org/api/methane-api";

  export const MethaneArrayTime =[];
  export const ArrayMethane = [];

  await axios 
  .get(apiMethane)
  .then((response) => {
    let dataApi = response.data.methane;

    dataApi.forEach((item, index) => {
      if(index % 2 === 0 ){
        MethaneArrayTime.push(item.date);
        ArrayMethane.push(item.average)
      }
    });
  })
  .catch((error) => {
    console.error("Error in the request", error);
  });

  /*----------------No2-------------- */
  const apiNo2 = "https://global-warming.org/api/nitrous-oxide-api";
  export const No2ArrayTime= [];
  export const ArrayNo2 = [];

  await axios
  .get(apiNo2)
  .then((response) => {
    let dataApi = response.data.nitrous;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        No2ArrayTime.push(item.date);
        ArrayNo2.push(item.average);
      }
    });

  })
  .catch((error) => {
    console.error("Error in the request:", error);
  });

  /*------------Glacier-------------- */



const apiGlaciers = "https://global-warming.org/api/arctic-api";
export const GlacierTime = []; 
export const ArrayGlaciersArea = []; 
export const newArrayGlaciersExtent = []; 

await axios
  .get(apiGlaciers)
  .then((response) => {
    console.log(response);
    let dataApi = response.data.arcticData;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        GlacierTime.push(item.year);
        ArrayGlaciersArea.push(item.area);
        newArrayGlaciersExtent.push(item.extent);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request:", error);
  });
