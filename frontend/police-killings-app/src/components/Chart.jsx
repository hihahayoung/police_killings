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
    let myChart = null;

    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   `${ROOT_PATH}/data/asset/data/life-expectancy-table.json`
        // );
        const rawData = data;
        initializeChart(rawData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const initializeChart = (rawData) => {
      const option = {
        dataset: [
          {
            id: 'dataset_raw',
            source: rawData,
          },
          {
            id: 'dataset_since_1950_of_germany',
            fromDatasetId: 'dataset_raw',
            transform: {
              type: 'filter',
              config: {
                and: [
                  { dimension: 'Year', gte: 1950 },
                  { dimension: 'Country', '=': 'Germany' },
                ],
              },
            },
          },
          {
            id: 'dataset_since_1950_of_france',
            fromDatasetId: 'dataset_raw',
            transform: {
              type: 'filter',
              config: {
                and: [
                  { dimension: 'Year', gte: 1950 },
                  { dimension: 'Country', '=': 'France' },
                ],
              },
            },
          },
        ],
        title: {
          text: 'Income of Germany and France since 1950',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Germany', 'France'], // Add legend entries
          top: '10%', // Position the legend at the top
          left: 'center',
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle',
          name: 'Year',
          nameGap: 30
        },
        yAxis: {
          name: 'Income',
          nameLocation: 'end'
        },
        series: [
          {
            name: 'Germany', // Add name for legend
            type: 'line',
            datasetId: 'dataset_since_1950_of_germany',
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Income',
              itemName: 'Year',
              tooltip: ['Income'],
            },
          },
          {
            name: 'France', // Add name for legend
            type: 'line',
            datasetId: 'dataset_since_1950_of_france',
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Income',
              itemName: 'Year',
              tooltip: ['Income'],
            },
          },
        ],
      };
    
      if (myChart) {
        myChart.setOption(option);
      }
    };
    

    if (chartRef.current) {
      myChart = echarts.init(chartRef.current);
      fetchData();
    }

    // Cleanup on unmount
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, []);

  return <div ref={chartRef} style={{ width: '45%', height: '500px', margin: 'auto', background: "#efefef" }} />;
};

export default Chart;
