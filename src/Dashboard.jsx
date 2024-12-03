import React from 'react'
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

function Dashboard() {
  // Sample data for Bar Chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 8, 15, 22, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  }

  // Sample data for Pie Chart
  const pieData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Others'],
    datasets: [
      {
        label: 'Category Distribution',
        data: [40, 25, 20, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  }

  // Sample data for Line Chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [10000, 15000, 13000, 17000, 20000, 25000],
        fill: false,
        borderColor: '#FF5733',
        tension: 0.4,
      },
    ],
  }

  // Sample data for Doughnut Chart
  const doughnutData = {
    labels: ['Profit A', 'Profit B', 'Profit C', 'Profit D'],
    datasets: [
      {
        data: [35, 30, 20, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  }

  return (
    <div>
      <div className="main-title">
        <h2>Dashboard Overview</h2>
      </div>
      <div className="main-cards">
        <div className="card">
          <h3>Total Sales</h3>
          <p>$15,230</p>
        </div>
        <div className="card">
          <h3>New Customers</h3>
          <p>452</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>1,230</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>$32,000</p>
        </div>
      </div>
      <div className="charts">
        <div>
          <h3>Sales Over Time</h3>
          <Bar data={barData} />
        </div>
        <div>
          <h3>Category Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>
      <div className="charts">
        <div>
          <h3>Revenue Trends</h3>
          <Line data={lineData} />
        </div>
        <div>
          <h3>Profit Distribution</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
