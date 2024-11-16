import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import usaJson from './USA.json';
import filtered from './USA_filtered.json';
import '../styles/Article.css';

const Chart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    // Check if the chart reference exists and initialize the chart
    if (chartRef.current) {
      myChart = echarts.init(chartRef.current);
    }

    // Target states and corresponding years
    const stateYears = {
      "Colorado": 2023,
      "Connecticut": 2022,
      "Illinois": 2024,
      "Maryland": 2025,
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
        text: "Adoption of Police Body Cameras by Year",
        left: "center",
        textStyle: {
          fontWeight: "bolder",
          fontSize: 22,
          color: "#000000"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>Year: {c}",
      },
      visualMap: {
        type: "piecewise",
        pieces: [
          { min: 2025, max: 2024, label: "2025", color: "#08306b" }, // Dark blue
          { min: 2024, max: 2024, label: "2024", color: "#08519c" },
          { min: 2023, max: 2023, label: "2023", color: "#2171b5" },
          { min: 2022, max: 2022, label: "2022", color: "#4292c6" },
          { min: 2021, max: 2021, label: "2021", color: "#6baed6" },
          { min: 2020, max: 2020, label: "2020", color: "#9ecae1" },
          { min: 2016, max: 2016, label: "2016", color: "#a6cee3" }, // Light blue
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
      filtered
    );

    // Set options to the chart
    if (myChart) {
      myChart.setOption(option);
    }

    window.addEventListener('resize', function() {
      myChart.resize();
    });

    // Cleanup on unmount
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, []);

  return <div ref={chartRef} style={{ width: "60%", height: "500px", margin: 'auto', background: "#efefef", display: "flex" }} />;
};

export default Chart2;
