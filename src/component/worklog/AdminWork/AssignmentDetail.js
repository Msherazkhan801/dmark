import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllassignment } from "../../../redux/action/AdminAction/GetAssingment"

import { useDispatch, useSelector } from "react-redux";
import assignmentpic from "../../../Asset/assignment.jpg"


export const AssignmentDetail = () => {
    const [pick,setPick]=useState("white")
    const [picktext,setPicktext]=useState("Assignment Details")


    const { id } = useParams();

    const dispatch = useDispatch();
    const totalUsers = useSelector((state) => state?.admindata?.allAssignment);




    const findObj = totalUsers && totalUsers.length > 0 && totalUsers.find(item => {
        return item.id === id
    })
    useEffect(() => {
        dispatch(fetchAllassignment());
    }, []);
    ///////////////////////
    const bgchange=()=>{
        alert("Are you Sure to Pick This Assignment");
        setPick(" #ffff00")
        setPicktext("Assignment Picked ✔️")
    }

    return (
        <div className="wrapper">
            <div className="student-form">
                <div className="card" style={{background: pick}}>
                    <div className="card-body">
                        <Link to="/dashboard/admin/getassignment">
                            <i className="fa fa-arrow-circle-o-left " aria-hidden="true" style={{ fontSize: "52px", color: "#595959" }}>
                        </i></Link>


                        <h4 className="my-4" style={{ color: "darkgray", textAlign: "center" }}>
                            {picktext}
                        </h4>
                        <div className="row">
                            <div className="col-md-4 col-lg-10 ">
                                <img src={assignmentpic} alt="manager" className="pic" />

                            </div>
                            <div className="col-md-4 col-lg-12">
                                <div className="card-details">
                                    <ul className="student-data">
                                        <li>
                                            <span className="student-property">assignNo:</span>
                                            <h6 className="student-value">{findObj.assignNo}</h6>
                                        </li>

                                        <li>
                                            <span className="student-property">Assignment Topic:</span>
                                            <h6 className="student-value">{findObj.topic}</h6>
                                        </li>
                                        <li>
                                            <span className="student-property" style={{ color: "#ff7100" }}> Total WordCount:</span>
                                            <h6 className="student-value">{findObj.wordcount}</h6>
                                        </li>
                                        <li>
                                            <span className="student-property" style={{ color: "green" }}>Submition Date</span>
                                            <h6 className="student-value">{findObj.date}</h6>
                                        </li>
                                        <li>
                                            <span className="student-property" style={{ color: "red" }}>Deadline:</span>
                                            <h4 className="student-value" style={{ color: "red" }} >{findObj.deadline}</h4>
                                        </li>
                                        <li>
                                            <span className="student-property">Instruction:</span>
                                            <h6 className=" fontchange  ">{findObj.discrip}</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 mx-auto" style={{textAlign:"center" }}>
                        <i className="fa fa-plus-circle "
                         aria-hidden="true" style={{ fontSize: "52px", color: "#595959" , }} 
                        onClick={bgchange}
                        ></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
