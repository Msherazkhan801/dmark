import React,{useState,useEffect} from 'react'
import { Calender } from '../../AdminWork/Calender';

const Addworklog = () => {
    
  const [classData, setClassData] = useState("");
  const [sectionData, setSectionData] = useState("");
  const [classObj, setClassObj] = useState({});
  const [sectionObj, setSectionObj] = useState({});

  const [state, setState] = useState({
    AssignmentTopic: "",
    AssignmentNo: "",
    WordCount: "",

    instruction: "",
    date: "",
    Discription: "",
  });
  const emptyState = () => {
    setState({
        AssignmentTopic: "",
        AssignmentNo: "",
    WordCount: "",

        instruction: "",
         date: "",
         Discription: "",

    
    });
  };

  const onHandleChange = (e) => {
    if (e.target.name === "Assignment") setClassData(e.target.value);
    if (e.target.name === "sections") setSectionData(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // setClassObj(totalClasses.find((x) => x.classes === classData));
  }, [classData]);

  useEffect(() => {
    // setSectionObj(totalSections.find((x) => x.sections === sectionData));
  }, [sectionData]);

  const addNewStudent = () => {
    // dispatch(addStudentRecord(state, classObj, sectionObj, emptyState));
  };
  return (
  
    <div className="wrapper">
    <h4 className="my-4" style={{ color: "darkgoldenrod" }}>
   Assignments
    </h4>
    <div className="student-form">
      <div className="card">
        <div
          className="card-body"
          style={{ boxShadow: "0px 10px 20px 0px rgb(229 229 229 / 75%)" }}
        >
          <h4 className="my-4" style={{ color: "darkgray" }}>
            Add WordCount
          </h4>
          <div className="row">
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Assignment Topic</label>
              <input
                type="text"
                placeholder='Assignment Topic...'
                className="form-control"
                name="AssignmentTopic"
                value={state.AssignmentTopic}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Assignment No</label>
              <input
                type="number"
                className="form-control"
                name="AssignmentNo"
                value={state.AssignmentNo}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">WordCount</label>
              <input
              placeholder='2400'
                type="number"
                className="form-control"
                name="WordCount"
                value={state.WordCount}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Instruction</label>
              <input
                type="text"
                placeholder='Instruction about assignment..'
                className="form-control"
                name="instruction"
                value={state.instruction}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-lg-3 col-md-4 form-group">
              <label htmlFor="">Assignment Date</label>

              <Calender />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 form-group">
              <label htmlFor="">Discription</label>
              <br />
              <textarea
                name="Discription"
                placeholder='Discription....'
                value={state.Discription}
                onChange={onHandleChange}
                id=""
                cols="50"
                rows="6"
              ></textarea>
            </div>
            <div
              className="col-md-7 form-group"
              style={{ marginTop: "30px" }}
            >
              <input
                type="file"
                className="form-control"
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <button
            className="btn btn-success text-white"
            onClick={addNewStudent}
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