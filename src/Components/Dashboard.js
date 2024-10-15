import React from "react";
import Charts from "./Charts";
import dashboardData from "../data/dashboardData.json";
import '../Styles/layout.css';
import '../Styles/colors.css';
import '../Styles/typography.css'


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Charts chartData={dashboardData.chartData} />
    </div>
  );
};

export default Dashboard;
