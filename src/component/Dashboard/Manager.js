import React from 'react'
import { Link } from 'react-router-dom';
import Charts from '../worklog/Manager/worklog/charts/Charts';
const Manager = () => {
  return  (
      <div className="wrapper">
        <div className="student-form">
          <div className="card">
            <div className="card-body">
              <h4 className="my-4" style={{ color: "darkgray" }}>
                Manager  Dashboard</h4>
              {/* <h4 className="my-4" style={{ color: "darkgray" }}></h4> */}
              <Link to="/dashboard/manager/addworklog"
                className="btn btn-success text-white">
                Add your WordCount
              </Link>
              <Link to=""
                className="btn btn-warning ml-3 text-white">
                Pick your Assignment              </Link>
              <table
                className="table table-striped mx-auto mt-3"
                style={{ maxWidth: "850px" }}
              >
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col" className="mx-5" >Assignments Topic</th>
                    <th scope="col">Assignments Discription</th>
                    <th scope="col">WordCount</th>
                    <th scope="col">Assignments date</th>
                    <th scope="col"> Action</th>
  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Economy of Pakistan</td>
                    <td>economy of Pakistan ....</td>
                    <td>2400</td>
                    <td>01/01/2022</td>
  
  
                    <td>
                      <i className="fa fa-eye ml-2" aria-hidden="true"></i>
                      <i class="fa fa-pencil ml-2 " aria-hidden="true"></i>
                      <i className="fa fa-trash ml-2" aria-hidden="true"></i>
                    </td>
  
  
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Swot analytical</td>
                    <td>SWOT (strengths, weaknesses..</td>
                      <td>2200</td>
                    <td>06/01/2022</td>
  
                    <td>
                      <i className="fa fa-eye ml-2" aria-hidden="true"></i>
                      <i class="fa fa-pencil ml-2 " aria-hidden="true"></i>
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
              <Charts/>
            </div>
          </div>
        </div>
      </div>
  
    
  )
}

export default Manager