import React,{useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import {fetchAllusers} from "../../../redux/action/GetworkAction"
import { useDispatch,useSelector } from "react-redux";
import pic from "../../../Asset/manager.png"
import Charts from "../Userworklog/charts/Charts";
import "./Worklog.css"
export const UserworkDetail = () => {
    const {id}=useParams();

   const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.userworkdata?.alluserwork);
  // console.log("data" ,totalUsers);
  
  const findObj = totalUsers && totalUsers.length > 0 && totalUsers.find(item => {
    return item.id === id
  })
  // console.log("obj" ,findObj);

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
       {/* <Link tp="/dashboard/manager/getmanagerworklog">  */}
     <Link to="/dashboard/user/getworklog"> <i class="fa fa-arrow-circle-o-left "  aria-hidden="true" style={{fontSize: "52px", color:"#595959"}}></i></Link> 
       {/* </Link>   */}
            <h4 className="my-4" style={{ color: "darkgray" ,textAlign:"center"}}>
              User Work Details
            </h4>
            <div className="row">
              <div className="col-md-4 col-lg-10 ">
                <img src={pic} alt="manager"  className="pic"/>
                {/* <i
                  className="fa fa-user"
                  style={{
                    fontSize: "222px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                ></i> */}
              </div>
              <div className="col-md-4 col-lg-12">
                <div className="card-details">
                  <ul className="student-data">
                    <li>
                      <span className="student-property">assignNo:</span>
                      <h6 className="student-value">{findObj.assignNo}</h6>
                    </li>
                    <li>
                      <span className="student-property">Name:</span>
                      <h6 className="student-value">{findObj.username}</h6>
                    </li>
                    <li>
                      <span className="student-property">Assignment Topic:</span>
                      <h6 className="student-value">{findObj.topic}</h6>
                    </li>
                    <li>
                      <span className="student-property"style={{color:"#ff7100" }}>WordCount:</span>
                      <h6 className={findObj.wordcount < 1200 ? "backgred" : "student-value" } >{findObj.wordcount}</h6>
                    </li>
                    <li>
                      <span className="student-property"style={{color:"green" }}>Submition Date</span>
                      <h6 className="student-value">{findObj.date}</h6>
                    </li>
                    <li>
                      <span className="student-property" style={{color:"red" }}>Deadline:</span>
                      <h6 className="student-value" style={{color:"red" }} >{findObj.deadline}</h6>
                    </li>
                    <li>
                      <span className="student-property">Discription:</span>
                      <h6 className=" fontchange  ">{findObj.discrip}</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 mx-auto" style={{textAlign:"center" }}> <Charts wordcount="wordcount"/></div>
            </div>
          </div>
        </div>
      </div>
    </div> );
};
