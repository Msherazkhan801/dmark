import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Admin } from "./component/Dashboard/Admin";
import Manager from "./component/Dashboard/Manager";
import User from "./component/Dashboard/User";
import Addassignment from "./component/worklog/AdminWork/Addassignment";
import Addworklog from "./component/worklog/Userworklog/addworklog";
import Addworklogs from "./component/worklog/Manager/worklog/Addworklogs";
// import Login from "./Auth/login";
import GetWorklog from "./component/worklog/Userworklog/GetWorklog"
// import Register from "./Auth/Regiter";
import { ToastContainer } from "react-bootstrap";
// import Login from "./Auth/login/index"
import 'react-toastify/dist/ReactToastify.css';
export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" autoClose={1000}/>
      <Routes>
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/dashboard/manager" element={<Manager />} />
        <Route path="/dashboard/user" element={<User />} />
         <Route path="/dashboard/addassignment" element={<Addassignment />} />
        <Route path="/dashboard/addworklog" element={<Addworklog />} />
        <Route path="/dashboard/manager/addworklog" element={<Addworklogs />} />
        <Route path="/dashboard/user/getworklog" element={<GetWorklog />} />

        {/* <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> */}

        {/*<Route path="/studentdetail" element={<StudentDetail />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/teachers" element={<TotalTeacher />} />
        <Route path="/addclass" element={<AddClasses />} />
        <Route path="/classes" element={<Clases />} />
        <Route path="/singleclass" element={<SingleClass />}  */}
      </Routes>
    </div>
  );
};
