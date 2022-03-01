import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMoneyBill, faPaperPlane, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Admin = () => {
  return (
    <div className="wrapper">
      <div className="admin">
        <h4 style={{ margin: "20px 0" }}>Admin Dashboard</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#d1f3e0",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="green"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                <Link to="/dashboard/manager"><h5 style={{ color: "darkgray" }}>Managers</h5></Link>
                  <h5>150</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#e1f1ff",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="#3f7afc"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                <Link to="/dashboard/user"> <h5 style={{ color: "darkgray" }}>Users</h5></Link>
                  <h5>1500</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#fff2d8",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={ faNewspaper}
                    color="#ffa001"
                    fontSize="35px"
                  />
                </div>
               
                <div className="card-details">
          <Link to="/dashboard/addassignment">
                 <h5 style={{ color: "darkgray" }}>Assignment</h5>
                </Link>
                  <h5>1000</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#ffeaea",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    color="#ff0000"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                  <h5 style={{ color: "darkgray" }}>Earning</h5>
                  <h5>$500000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

 {/* admin work */}
 <div className="card mt-2">
          <div className="card-body">
            <h4 className="my-1" style={{ color: "darkgray" }}>
         Assignments      </h4>
            {/* <h4 className="my-4" style={{ color: "darkgray" }}></h4> */}
            <table
              className="table table-striped mx-auto"
              style={{ maxWidth: "850px" }}
            >
              <thead>
                <tr>
                <th scope="col">S.No</th>
                  <th scope="col" className="mx-5" >Assignments Topic</th>
                  <th scope="col">Assignments Discription</th>
                  <th scope="col"> Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Economy of Pakistan</td>
                  <td>economy of Pakistan ....</td>
                  <td>
                   <i className="fa fa-eye ml-2" aria-hidden="true"></i>
                  <i class="fa fa-pencil ml-2 "aria-hidden="true"></i>
                  <i className="fa fa-trash ml-2" aria-hidden="true"></i>
                  </td>


                </tr>
                <tr>
                  <td>2</td>
                  <td>Swot analytical</td>
                  <td>SWOT (strengths, weaknesses..</td>
                  <td>
                   <i className="fa fa-eye ml-2" aria-hidden="true"></i>
                  <i class="fa fa-pencil ml-2 "aria-hidden="true"></i>
                  <i className="fa fa-trash ml-2" aria-hidden="true"></i>
                  </td>


                </tr>
                {/* {totalClasses ? (
                  totalClasses.map((element, i) => {
                    return (
                      <tr key={i}> */}
                        {/* <Link to="/"> */}
{/* 
                        <Link to="/singleclass">
                          <td
                            onClick={() => showSingleClass(element.id)}
                            style={{ cursor: "pointer" }}
                          >
                            {element.classes}
                          </td>
                        </Link> */}
                        {/* </Link> */}
                      {/* </tr>
                    );
                  })
                ) : (
                  <h5>No Classes found</h5>
                )} */}
                {/* {totalSections ? (
                  totalSections.map((sectionData, i) => {
                    return (
                      <tr key={i}>
                        <td>{sectionData.sections}</td>
                      </tr>
                    );
                  })
                ) : (
                  <h5>No Classes found</h5>
                )} */}
              </tbody>
            </table>
          </div>
        </div>
{/* admin work end */}

      </div>
    </div>
  );
};
