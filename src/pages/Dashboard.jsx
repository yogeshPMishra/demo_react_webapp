import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardCard from '../minicomponents/DashboardCard'
function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <NavLink to="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</NavLink>
      </div> 
      <div class="row">
           <DashboardCard title="Earnings (Monthly)" value = "$40,000" color = "primary" icon={'fa-calendar'}/>
           <DashboardCard title="Earnings (Annual)" value = "$215,000" color = "success" icon={'fa-dollar-sign'}/>
           <DashboardCard title="Tasks" value = "50%" color = "info" icon={'fa-clipboard-list'}/>
           <DashboardCard title=" Pending Requests" value = "18" color = "warning" icon={'fa-comments'}/>
      </div>
    </>
  )
}

export default Dashboard
