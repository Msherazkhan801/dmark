import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Sidebar } from "../Sidebar/Sidebar";
import logo from "../../Asset/logo.png"
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md p-0">
        <Link
          className="navbar  navbar-brand p-0 "
          to="/"
          style={{ 
             fontSize: "26px", fontWeight: "600",
            color: "#fff" ,
          }}
        >
          {/* <img src={logo} alt="logo"     style={{width:"80px",height:"50px"  }}/> */}
                <h3 style={{marginLeft:"30px"}}>D-mark </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"   
          style={{  color: "#fff" }}>
                (Admin)  
                  <i className="fa fa-user ml-2" aria-hidden="true"></i> </Link>
                
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar />
    </div>
  );
};
