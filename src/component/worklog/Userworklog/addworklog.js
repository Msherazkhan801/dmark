import React,{useState} from 'react'
// import { Calender } from '../AdminWork/Calender';
import {addUserRecord} from "../../../redux/action/UserAction"
import { useDispatch, useSelector } from 'react-redux';
// import { dbstorage } from '../../../Firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import "./Worklog.css"

const Addworklog = () => {
    const[username ,setUsername]=useState("")
    const[topic ,setTopic]=useState("")
    const[assignNo ,setAssignNo]=useState("")
    const[wordcount ,setWordcount]=useState("")
    const[deadline ,setDeadline]=useState("")
    const[date ,setDate]=useState("")
    const[discrip ,setDiscrip]=useState("")
    // const[image,setImage]=useState(null)
 
  const dispatch=useDispatch();
  useSelector((state)=>state?.alluserwork?.userworkdata);
  // console.log(data ,"data test")

  const adduserwork = (e) => {
    e.preventDefault();
    toast.success("successfuly submited");
    dispatch(addUserRecord({topic,assignNo,wordcount,deadline,date,discrip,username}));
  };
  return (
  
    <div className="wrapper">
    <h4 className="my-4" style={{ color: "darkgoldenrod" }}>
  User Assignments
    </h4>
    <div className="student-form">
      <div className="card">
        <div
          className="card-body"
          style={{ boxShadow: "0px 10px 20px 0px rgb(229 229 229 / 75%)" }}
        ><Link to="/dashboard/manager/getmanagerworklog">
        <i className="fa fa-arrow-circle-o-left " aria-hidden="true" style={{ fontSize: "52px", color: "#597759" }}>
          </i></Link>
          
          <h4 className="my-4" style={{ color: "darkgray" }}>
            Add WordCount
          </h4>
          <div className="row">
          <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                placeholder='Employee Name..'
                className="form-control"
                name="username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Assignment Topic</label>
              <input
                type="text"
                placeholder='Assignment Topic...'
                className="form-control"
                name="AssignmentTopic"
                value={topic}
                onChange={(e)=>{ setTopic(e.target.value)}}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Assignment No</label>
              <input
                type="number"
                className="form-control"
                name="AssignmentNo"
                value={assignNo}
                onChange={(e)=>{setAssignNo(e.target.value)}}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">WordCount</label>
              <input
                type="number"
                className="form-control"
                name="WordCount"
                value={wordcount}
                onChange={(e)=>{setWordcount(e.target.value)}}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Deadline</label>
              <input
                type="date"
                placeholder='Instruction about assignment..'
                className="form-control"
                name="instruction"
                value={deadline}
                onChange={(e)=>{setDeadline(e.target.value)}}
              />
            </div>
            
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Submission Date</label>
              <input
                type="date"
                placeholder='Instruction about assignment..'
                className="form-control"
                name="instruction"
                value={date}
                onChange={(e)=>{setDate(e.target.value)}}
              />
            </div>
            {/* <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Subimistion Date</label>

              <Calender />
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-5 form-group">
              <label htmlFor="">Discription</label>
              <br />
              <textarea
                name="Discription"
                placeholder='Discription....'
                value={discrip}
                onChange={(e)=>{setDiscrip(e.target.value)}}
                id=""
                cols="50"
                rows="6"
              ></textarea>
            </div>
            
          </div>
          <button
            className="btn btn-success text-white btnhover"
            onClick={adduserwork}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Addworklog;