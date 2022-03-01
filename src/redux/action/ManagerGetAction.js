import {
    FETCH_MANAGER_SUCCESS,
    FETCH_MANAGER_PENDING,
    FETCH_MANAGER_FAILED,
} from "./Constant";
  import { db } from "../../Firebase";
  import {
    collection,
    onSnapshot,
    
  } from "firebase/firestore";
  
  const fetchAllmanager = () => {
    const collectionRef = collection(db, "managerworklog");
    const unsub = (dispatch) => onSnapshot(
      collectionRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const updateSnap = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        //   console.log("data....",updateSnap);
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
    const collectionRef = collection(db, "managerworklog");
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
      type: FETCH_MANAGER_SUCCESS,
      payload: updateSnap,
    };
  };
  
  const getUserPending = () => {
    return {
      type: FETCH_MANAGER_PENDING,
    };
  };
  
  const getUserErr = () => {
    return {
      type: FETCH_MANAGER_FAILED,
    };
  };
  
  export { fetchAllmanager, getUser, getUserErr, getUserPending };
  