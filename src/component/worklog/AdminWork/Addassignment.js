import React,{useState} from 'react'
// import { Calender } from '../AdminWork/Calender';
import {addAssignmentRecord} from "../../../redux/action/AdminAction/Addassignment"
import { useDispatch, useSelector } from 'react-redux';
// import { dbstorage } from '../../../../Firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Addassignment = () => {

    const[topic ,setTopic]=useState("")
    const[assignNo ,setAssignNo]=useState("")
    const[wordcount ,setWordcount]=useState("")
    const[deadline ,setDeadline]=useState("")
    // const[date ,setDate]=useState("")
    const[discrip ,setDiscrip]=useState("")
 
  const dispatch=useDispatch();
  const data=useSelector((state)=>state?.allAssignment?.admindata);
  // console.log(data ,"data test")

  const adduserwork = (e) => {
    e.preventDefault();
    toast.success("successfuly submited");
    alert("Are you sure to submit");
    dispatch(addAssignmentRecord({topic,assignNo,wordcount,deadline,discrip,}));
  };
  return (
  
    <div className="wrapper">

    <h4 className="my-4" style={{ color: "darkgoldenrod" }}>
   Assignments
    </h4>
    <div className="student-form">
      <div className="card">
      <Link to="/dashboard">
        <i className="fa fa-arrow-circle-o-left " aria-hidden="true" style={{ fontSize: "52px", color: "#597759" }}>
          </i></Link>
        <div
          className="card-body"
          style={{ boxShadow: "0px 10px 20px 0px rgb(229 229 229 / 75%)" }}
        >
          <h4 className="my-4" style={{ color: "darkgray" }}>
            Add New Assignment Detail
          </h4>
          <div className="row">
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
          </div>
          <div className="row">
            <div className="col-md-5 form-group">
              <label htmlFor="">Instruction</label>
              <br />
              <textarea
                name="Discription"
                placeholder='Instruction....'
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

export default Addassignment;