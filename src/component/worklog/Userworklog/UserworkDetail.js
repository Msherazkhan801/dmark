import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import {fetchAllusers} from "../../../redux/action/GetworkAction"
import { useDispatch,useSelector } from "react-redux";

export const UserworkDetail = () => {
    const {id}=useParams();

   const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.userworkdata?.alluserwork);
  
 
const findObj = totalUsers && totalUsers.length > 0 && totalUsers.find(item => {
    return item.id === id
})
  useEffect(() => {
    dispatch(fetchAllusers());
  }, []);

  // useEffect(() => {
    // setData(totalUsers);
  // }, [totalUsers]);
  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              EMPLOYEE Work Details
            </h4>
            <div className="row">
              <div className="col-md-4">
                <img src="" alt="" />
                <i
                  className="fa fa-user"
                  style={{
                    fontSize: "222px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                ></i>
              </div>
              <div className="col-md-4">
                <div className="card-details">
                  <ul className="student-data">
                    <li>
                      <span className="student-property">assignNo:</span>
                      <span className="student-value">{findObj.assignNo}</span>
                    </li>
                    <li>
                      <span className="student-property">Name:</span>
                      <span className="student-value">{findObj.username}</span>
                    </li>
                    <li>
                      <span className="student-property">Assignment Topic:</span>
                      <span className="student-value">{findObj.topic}</span>
                    </li>
                    <li>
                      <span className="student-property">WordCount:</span>
                      <span className="student-value">{findObj.wordcount}</span>
                    </li>
                    <li>
                      <span className="student-property">Submition Date</span>
                      <span className="student-value">{findObj.date}</span>
                    </li>
                    <li>
                      <span className="student-property">Deadline:</span>
                      <span className="student-value">{findObj.deadline}</span>
                    </li>
                    <li>
                      <span className="student-property">Discription:</span>
                      <span className="student-value">{findObj.discrip}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
