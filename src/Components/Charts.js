import React from "react";
import ReactApexChart from "react-apexcharts";
import '../Styles/layout.css';
import '../Styles/colors.css';
import '../Styles/typography.css'

const Charts = ({ chartData }) => {
  const chartOptions = {
    chart: { type: "line" },
    xaxis: { categories: chartData.labels }
  };
  const chartSeries = [{ name: "Data", data: chartData.series }];

  return (
    <div className="chart-container">
      <ReactApexChart options={chartOptions} series={chartSeries} type="line" />
    </div>
  );
};

export default Charts;
