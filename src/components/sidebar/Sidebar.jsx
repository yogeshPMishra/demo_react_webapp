import  {React, useState, useContext} from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import {SidebarArr} from './sidebarlists';
function Sidebar() {
  const [toggle,setToggle] = useState('');
  const [uid,setuId] = useState();
  const [show,setShow] = useState('');
  const handleleftArrowKey = () =>{
        setToggle(toggle == 'toggled' ? "": "toggled");
  }

  const handleClickComponents = (status,mid)=>{
    setuId(mid);
    setShow(show == '' ? status : '');
    return ()=>{
        setShow('');
        setuId(undefined);
    }
  }
  

  return (
  <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggle}`} id="accordionSidebar" >

    {/* <!-- Sidebar - Brand --> */}
    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Soulaca</div>
    </Link>
    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <Link className="nav-link" to="">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"/>

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        Admin
    </div>
    {
        SidebarArr.map((elem)=>{
              return  (
                <li className="nav-item" key={elem.id}>
                    <Link className={`nav-link ${show != "" ? (uid != undefined ?(uid == elem.id ? '' : show.collapse):""): "collapsed"}`} to="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls={`collapseUtilities${elem.id}`} onClick={()=>handleClickComponents(elem.show,elem.id)} >
                        <i className={`${elem.fontawsome}`}></i>
                        <span>{elem.title}</span>
                    </Link>
                    <div id={`collapseUtilities${elem.id}`} className={`collapse ${show != "" ?(uid != undefined ?(uid == elem.id ? show.components : ""):""): ''}`} aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">{elem.title}</h6>
                            {
                                elem.links.map((ele,index)=>{
                                   return <Link className="collapse-item" to={ele.route} key={index}>{ele.title}</Link>
                                })
                            }
                        </div>
                    </div>
                </li>
            )
        })
    }

    {/* <!-- Nav Item - Contact Queries --> */}
    
    <li className="nav-item">
        <Link className="nav-link"  to=''>
            <i className="fa fa-users"></i>
            <span>Contact Queries</span>
        </Link>
    </li>
    {/* <!-- Nav Item - Enquiry --> */}
    <li className="nav-item ">
        <Link className="nav-link" to="">
            <i className="fa fa-question-circle"></i>
            <span>Enquiry</span></Link>
    </li>
   

    {/* <!-- Nav Item - Company Profile --> */}
    <li className="nav-item ">
        <Link className="nav-link" to="">
            <i className="fa fa-calculator"></i>
            <span>Company Profile</span></Link>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider d-none d-md-block"/>

    {/* <!-- Sidebar Toggler (Sidebar) --> */}
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={handleleftArrowKey}></button>
    </div>
  </ul>
  )
}

export default Sidebar
