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
// import Login from "./Auth/login/index"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {UserworkDetail} from "./component/worklog/Userworklog/UserworkDetail"
import Getmanagerwork from "./component/worklog/Manager/worklog/Getmangerwork";
import {ManagerkDetail} from "./component/worklog/Manager/worklog/ManagerDetail"
import Getassignment from "./component/worklog/AdminWork/Getassignment";
import { AssignmentDetail } from "./component/worklog/AdminWork/AssignmentDetail";

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
        <Route path="/dashboard/manager/getmanagerworklog" element={<Getmanagerwork />} />
        <Route path="/dashboard/admin/getassignment" element={<Getassignment />} />

        <Route path="/dashboard/user/:id" element={<UserworkDetail />} />
        <Route path="/dashboard/manager/getmanagerworklog/:id" element={<ManagerkDetail />} />
        <Route path="/dashboard/admin/getassignment/:id" element={<AssignmentDetail />} />


      </Routes>
    </div>
  );
};
