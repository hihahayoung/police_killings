// Chart.jsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import data from '../assets/data.json'
import Papa from 'papaparse';

const Chart = () => {
  const chartRef = useRef(null);
//   const ROOT_PATH = 'https://echarts.apache.org/examples';

  let datadata = []
  Papa.parse(
    "https://raw.githubusercontent.com/washingtonpost/data-police-shootings/refs/heads/master/v2/fatal-police-shootings-data.csv",
    {
      download: true,
      header: true,
      worker: true,
      step: function(results) {
        datadata.push(results.data['state'])
      }
    }
  );
  console.log(datadata)

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://raw.githubusercontent.com/washingtonpost/data-police-shootings/refs/heads/master/v2/fatal-police-shootings-data.csv');
//       console.log(response);
//     };

//     fetchData();
//   }, []);

  useEffect(() => {

    const chartDom = document.getElementById("usMap");
    const myChart = echarts.init(chartDom);

    // Target states and corresponding years
    const stateYears = {
      Colorado: 2023,
      Connecticut: 2022,
      Illinois: 2024,
      Maryland: 2025,
      "New Jersey": 2021,
      "New Mexico": 2020,
      "South Carolina": 2016,
    };

    const data = Object.entries(stateYears).map(([state, year]) => ({
      name: state,
      value: year,
    }));

    // Map configuration
    const option = {
      title: {
        text: "US States Highlighted by Year",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>Year: {c}",
      },
      visualMap: {
        type: "piecewise",
        pieces: [
          { min: 2025, label: "2025", color: "#d73027" },
          { min: 2024, max: 2024, label: "2024", color: "#fc8d59" },
          { min: 2023, max: 2023, label: "2023", color: "#fee08b" },
          { min: 2022, max: 2022, label: "2022", color: "#d9ef8b" },
          { min: 2021, max: 2021, label: "2021", color: "#91cf60" },
          { min: 2020, max: 2020, label: "2020", color: "#1a9850" },
          { min: 2016, max: 2016, label: "2016", color: "#66c2a5" },
        ],
        left: "left",
        top: "bottom",
        textStyle: {
          color: "#000",
        },
      },
      series: [
        {
          name: "Year",
          type: "map",
          map: "USA",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: data,
        },
      ],
    };

    // Load USA map
    echarts.registerMap(
      "USA",
      "https://echarts.apache.org/examples/data/asset/geo/USA.json"
    );

    // Set the options
    myChart.setOption(option);


    // Cleanup on unmount
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, []);

  return <div ref={chartRef} style={{ width: '50%', height: '500px', margin: 'auto', background: "white" }} />;
};

export default Chart;
