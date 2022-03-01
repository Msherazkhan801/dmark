// import "./ClassStyle.css";
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Charts from "../worklog/Userworklog/charts/Charts"
import { fetchAllusers } from "../../redux/action/GetworkAction"
import { useDispatch, useSelector } from "react-redux";
import { color } from '@mui/system';
const User = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.userworkdata?.alluserwork);
 const navigate= useNavigate()
   useEffect(() => {
    dispatch(fetchAllusers());
  }, []);

  useEffect(() => {
    setData(totalUsers);
    // console.log(data,"data....")
  }, [totalUsers]);

  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              User  Dashboard</h4>
            {/* <h4 className="my-4" style={{ color: "darkgray" }}></h4> */}
            <Link to="/dashboard/addworklog"
              className="btn btn-success text-white">
              Add your WordCount
            </Link>

            <Link to=""
              className="btn btn-warning ml-3 text-white">
              Pick your Assignment</Link>
            <table
              className="table table-striped mx-auto my-3"
              style={{ maxWidth: "1000px" }}
            >
              <thead style={{ background: "black", color: "white" }}>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Assignment Topic</th>
                  <th scope="col">Assignment No</th>
                  <th scope="col">WordCount</th>
                  <th scope="col">Submission Date</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Discription</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>

                {data?.map((user, i) => {

                  // console.log(totalUsers,"data///")
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td><Link to={`/dashboard/user/${user.id}`} style={{color:"black"}}>{user.username}</Link></td>
                      <td>{user.topic}</td>
                      <td>{user.assignNo}</td>
                      <td>{user.wordcount}</td>
                      <td>{user.date}</td>
                      <td>{user.deadline}</td>
                      <td>{user.discrip}</td>
                      <td>
                        <i className="fa fa-eye ml-2" aria-hidden="true"></i>
                        <i class="fa fa-pencil ml-2 " aria-hidden="true"></i>
                        <i className="fa fa-trash ml-2" aria-hidden="true"></i>
                      </td>
                    </tr>
                  );
                })}
                <tr></tr>
              </tbody>
            </table>

            <Charts />
          </div>
        </div>
      </div>
    </div>

  )
}

export default User
////////////////
