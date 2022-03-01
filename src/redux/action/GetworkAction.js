import {
    FETCH_USERS_PENDING,
    FETCH_USERS_ERR,
    FETCH_USERS_SUCCESS,
  } from "./Constant";
  import { db } from "../../Firebase";
  import {
    collection,
    onSnapshot,
    
  } from "firebase/firestore";
  
  const fetchAllusers = () => {
    const collectionRef = collection(db, "userworklog");
    // const q = query(collectionRef, orderBy("createdAt", "asc"));
    const unsub = (dispatch) => onSnapshot(
      collectionRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const updateSnap = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        //   console.log("udpatedSnap of User", updateSnap);
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
  
  const getUser = (updateSnap) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: updateSnap,
    };
  };
  
  const getUserPending = () => {
    return {
      type: FETCH_USERS_PENDING,
    };
  };
  
  const getUserErr = () => {
    return {
      type: FETCH_USERS_ERR,
    };
  };
  
  export { fetchAllusers, getUser, getUserErr, getUserPending };
  