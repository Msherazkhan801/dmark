import {
    FETCH_MANAGER_SUCCESS,
    FETCH_MANAGER_PENDING,
    FETCH_MANAGER_FAILED,
    
    DELETE_SUCCESS,DELETE_PENDING,DELETE_ERR
} from "./Constant";
  import { db } from "../../Firebase";
  import {
    collection,
    onSnapshot,
    doc,
    deleteDoc
    
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

  
  
///////////////////delet functionality//////////////////////////////////
export const deletManagerRecord =(id) => async (dispatch) => {
  console.log(id,'id')
  dispatch(delete_pending());
  const collectionRef = collection(db, "managerworklog");
  console.log(collectionRef,'collectionRef')
  try {
      const sending = await deleteDoc(doc(collectionRef, id));
      // console.log("sending", sending);
      dispatch(delete_success());
  } catch (error) {
      console.log("error in colection", error);
  }
};
//////////DELETE ITEM////////////////
export const delete_success = () => {
  return {
      type: DELETE_SUCCESS,
  };
};
export const delete_pending = () => {
  return {
      type: DELETE_PENDING,
  };
};
export const delete_err = () => {
  return {
      type: DELETE_ERR,
  };
};


  ////////////////////
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
  