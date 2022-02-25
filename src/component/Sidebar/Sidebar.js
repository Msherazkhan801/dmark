import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Sidebar = () => {
  const [a, sa] = useState(false);

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <a
            data-toggle="collapse"
            href="#dashboard"
            aria-expanded="false"
            aria-controls="dashboard"
          >
            Dashboard
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="dashboard">
          <ul className="dropdown-container">
            <li>
              <Link to="/dashboard">Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/manager">Manager</Link>
            </li>
            <li>
              <Link to="/dashboard/user">User</Link>
            </li>
            <li>
              <Link to="/dashboard/parents">Emergency Relatives</Link>
            </li>
          </ul>
        </div>

        <li>
          <a
            data-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            Users
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="collapseExample1">
          <ul className="dropdown-container">
            <li>
              <Link to="/addstudent">Add User</Link>
            </li>
            <li>
              <Link to="/totalstudents">Total User</Link>
            </li>
            <li>
              <Link to="/studentdetail">User Detail</Link>
            </li>
          </ul>
        </div>

        <li>
          <a
            data-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            Manager
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="collapseExample2">
          <ul className="dropdown-container">
            <li>
              <Link to="/addteacher">Add Manager</Link>
            </li>
            <li>
              <Link to="/teachers">Total Manager</Link>
            </li>
          </ul>
        </div>
      
        <li>
          <a
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Assignments
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="collapseExample">
          <ul className="dropdown-container">
            <li>
              <Link to="/addclass">Add Assignment</Link>
            </li>
            <li>
              <Link to="/classes">Total Assignment</Link>
            </li>
          </ul>
        </div>
        <li>
          <Link to="#">Subject</Link>
        </li>
        <li>
          <Link to="#">Exam Paper</Link>
        </li>
        <li>
          <Link to="#">Research Assignment</Link>
        </li>
        <li>
          <Link to="#">Design Assignment </Link>
        </li>
        <li>
          <Link to="#">Account</Link>
        </li>
      </ul>
    </div>
  );
};
