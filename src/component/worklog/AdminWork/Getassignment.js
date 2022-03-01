import React, { useEffect, useState } from "react";
// import "./Worklog.css";
import {fetchAllassignment} from "../../../redux/action/AdminAction/GetAssingment"
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
 const Getassignment = () => {
  const dispatch = useDispatch();
  const totalUsers=useSelector((state)=>state?.admindata?.allAssignment);

  console.log("totalUsers...........", totalUsers);
  const [filterStudent, setFilterStudent] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchAllassignment());
  }, []);

  useEffect(() => {
    setData(totalUsers);
    // console.log(data,"data....")
  }, [totalUsers]);

  const filterRecord = (e) => {
    const value = e.target.value;
    let arr = [];
    if (value.length >= 3) {
      arr = filterStudent.filter((data) => {
        return data.name.toLowerCase().startsWith(value.toLowerCase());
      });
      setFilterStudent(arr);
    } 
    else setFilterStudent(totalUsers);
  };
  return (
      
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              {" "}
              Active Assignment
            </h4>
            <div className="row no-gutters">
              <div className="col-md-3 form-group px-2">
              <label htmlFor=""><b>Search by Assignment No</b></label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Search by Assignment No ..."
                />
              </div>
              <div className="col-md-4 form-group px-2">
                  <label htmlFor=""><b>Search by Topic</b></label>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by Topic ..."
                  onChange={filterRecord}
                />
              </div>
              <div className="col-md-3 form-group px-2">
              <label htmlFor=""><b>Search by Deadline</b></label>

                <input
                  type="date"
                  className="form-control"
                  placeholder="Search by Deadline ..."
                />
              </div>
              <div className="col-md-2">     
                  <button type="button" className="btn btn-labeled btn-secondary"     style={{ width: "90px", height: "50px", marginTop:"30px", color: "white" }}>
                    <span class="btn-label"><i class="fa fa-search"></i></span> Search </button>
              </div>
            </div>
            <table
              className="table table-striped mx-auto"
              style={{  marginTop: "30px" ,maxWidth:"1000px"}}
            >
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Assignment Topic</th>
                  <th scope="col">Assignment No</th>
                  <th scope="col">WordCount</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Discription</th>
                  <th scope="col">Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {data?.map((user, i ) => {
                    
                  return (
                    <tr key={i} className="tabrow">
                      <td>{i+1}</td>
                      <td>{user.topic}</td>
                      <td>{user.assignNo}</td>
                      <td>{user.wordcount}</td>
                      <td>{user.deadline}</td>
                      <td >{user.discrip}</td>
                      <td>
                      <Link to={`/dashboard/admin/getassignment/${user.id}`} style={{color:"black"}}> <i className="fa fa-eye ml-2" aria-hidden="true"></i></Link>
                    <i class="fa fa-pencil ml-2 " aria-hidden="true"></i>
                    <i className="fa fa-trash ml-2" aria-hidden="true"></i>
                  </td>
                    </tr>
                  );
                })}
                <tr></tr>
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export  default Getassignment;