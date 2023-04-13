import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import './layout.css'
import Dashboard from '../../pages/Dashboard';
import { Routes,Route } from 'react-router-dom';
import Addabout from '../../pages/aboutus/Addabout';
import About from '../../pages/aboutus/About';

function Layout() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
            <Header/>
            <div className="container-fluid">
              <Routes>
                  <Route path = "/demo_react_webapp" element={<Dashboard/>}/>
                  <Route path = "/demo_react_webapp/add-aboutus" element={<Addabout/>}/>
                  <Route path = "/demo_react_webapp/get-aboutus" element={<About/>}/>
              </Routes>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
