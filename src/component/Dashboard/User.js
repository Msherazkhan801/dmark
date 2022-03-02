// import "./ClassStyle.css";
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Charts from "../worklog/Userworklog/charts/Charts"
import { fetchAllusers } from "../../redux/action/GetworkAction"
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { bgcolor } from '@mui/system';
import "./Dashboard.css"
const User = () => {
  const [data, setData] = useState([]);
  const Navigate=useNavigate();
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(),
      color:"white",
      // background:"",
   
      
    },
  }));
const classes = useStyles();
////////////////
const columns = [
  // { field: 'id', headerName: '', width: 0 },
  { field: 'fullName', headerName: 'Employee Name', 
  renderCell: ({value,id}) => {
    // console.log(cellValues);
    return(
    <Link to={`/dashboard/user/${id}`}> 
    <p className="value" style={{color:"black", }} >{value}</p>
    </Link>
    )
  },
  
  width: 250 },
  
  { field: 'AssignmentTopic', headerName: 'Assignment Topic', width: 250 },
  // { field: 'AssignmentNo', headerName: 'AssignmentNo', width: 250 },
  { field: 'WordCount', headerName: 'WordCount',
  renderCell: ({value,id}) => {
    // console.log(cellValues);
    return(
     
    <p className={value < 1200 ? "bgred" : "bgwhite" }  >{value}</p>
    
    )},
  width: 100 },
  { field: 'Submission', headerName: 'Submission Date', width: 150 },
  // { field: 'deadline', headerName: 'Deadline', width: 150 },
  // { field: 'description', headerName: 'Descripotion', width: 200 },





  
  {
    field: "Action",  width: 200,
    renderCell: (cellValues) => {
      return (
        <>        <IconButton
        aria-label="view" size="large"
          // variant="contained"
          color="default"
          onClick={() => Navigate(`/dashboard/user/${cellValues.id}`)}
          fontSize="inherit"  
        >
        <VisibilityIcon fontSize="inherit" />
        </IconButton>
        
        <IconButton
        aria-label="delete" size="large"
          // variant="contained"
          color="error"
          // onClick={() => deletHandle(cellValues.id)}
          fontSize="inherit"  
        >
         <DeleteIcon fontSize="inherit" />
        </IconButton>
 
        <IconButton
        aria-label="Edit" size="large"
          // variant="contained"
          color="default"
          // onClick={() => deletHandle(cellValues.id)}
          fontSize="inherit"  
        >
         <EditIcon fontSize="inherit" />
        </IconButton>


        </>

      );
    }
  }
  
  
  ]

  const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.userworkdata?.alluserwork);
  const rows =totalUsers?.map((row,ind)=>({
    id:row.id,
   fullName:row.username,
   AssignmentTopic:row.topic,
   WordCount:row.wordcount,
   Submission: row.date,  
 }))
   useEffect(() => {
    dispatch(fetchAllusers());
  }, []);

  useEffect(() => {
    setData(totalUsers);
    
  }, [totalUsers]);

  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-2" style={{ color: "darkgray" }}>
              User  Dashboard</h4>
              <div style={{ height: 450, width: '100%' ,marginTop:"5px" }}>
     <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    // onSelectionModelChange={(id)=>{
    //   setMail(id)
    
    // }}

      
    />
  </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default User
///////////////////////////////////



            



      

// const deletHandle = (id) => {
//   dispatch(DeleteMail(id));
//   alert("Are you sure to delete Mail");
//   dispatch(LeaveInbox());

// }
// ///////////////
// const deletCustomerbyIds=()=>{
// dispatch(bulkDelete(mail));
// alert("Are you sure to delete");

// }


