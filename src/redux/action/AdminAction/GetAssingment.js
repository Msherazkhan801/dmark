import {
    ADMIN_SUCCESS,
    ADMIN_PENDING,
    ADMIN_FAILED,
} from "../Constant";
  import { db } from "../../../Firebase";
  import {
    collection,
    onSnapshot,
    
  } from "firebase/firestore";
  
  const fetchAllassignment = () => {
    const collectionRef = collection(db, "Admin_Assignment");
    const unsub = (dispatch) => onSnapshot(
      collectionRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const updateSnap = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
     
          dispatch(getUser(updateSnap));
        }
      },
      (error) => {
        dispatch(getUserErr());
        console.log(error);
      }
    );
    return (dispatch) => unsub(dispatch);
  };

  /////////useparams//////////
  
   export const getUsers = () => {
    const collectionRef = collection(db, "Admin_Assignment");
    const unsub = (dispatch) => onSnapshot(
      collectionRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const updateSnap = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          dispatch(getUser(updateSnap));
        }
      },
      (error) => {
        dispatch(getUserErr());
        console.log(error);
      }
    );
    return (dispatch) => unsub(dispatch);
  };
  ////////////////////////
  
  const getUser = (updateSnap) => {
    return {
      type: ADMIN_SUCCESS,
      payload: updateSnap,
    };
  };
  
  const getUserPending = () => {
    return {
      type: ADMIN_PENDING,
    };
  };
  
  const getUserErr = () => {
    return {
      type: ADMIN_FAILED,
    };
  };
  
  export { fetchAllassignment, getUser, getUserErr, getUserPending };
  