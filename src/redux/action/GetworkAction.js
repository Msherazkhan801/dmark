import {
    FETCH_USERS_PENDING,
    FETCH_USERS_ERR,
    FETCH_USERS_SUCCESS,
    DELETE_SUCCESS,DELETE_PENDING,DELETE_ERR
  } from "./Constant";
  import { db } from "../../Firebase";
import { toast } from "react-toastify";

  import {
    collection,
    onSnapshot,
    deleteDoc ,
    doc
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

  // /////////useparams//////////
  
  //  export const getUsers = () => {
  //   const collectionRef = collection(db, "userworklog");
  //   const unsub = (dispatch) => onSnapshot(
  //     collectionRef,
  //     (snapshot) => {
  //       if (!snapshot.empty) {
  //         const updateSnap = snapshot.docs.map((doc) => {
  //           return { ...doc.data(), id: doc.id };
  //         });
  //         dispatch(getUser(updateSnap));
  //       }
  //     },
  //     (error) => {
  //       dispatch(getUserErr());
  //       console.log(error);
  //     }
  //   );
  //   return (dispatch) => unsub(dispatch);
  // };
  ////////////////////////
  ///////////////////delet functionality//////////////////////////////////
export const deletUserRecord =(id) => async (dispatch) => {
  console.log(id,'id')
        
  dispatch(delete_pending());
  const collectionRef = collection(db, "userworklog");
  console.log(collectionRef,'collectionRef')
  try {
      const sending = await deleteDoc(doc(collectionRef, id));
      console.log("sending", sending);
      dispatch(delete_success());
 
      toast.notify("successfully submited");
  } catch (error) {
      console.log("error in colection", error);
  }
  // emptyState();
};
////////////////////////////////////////////
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
  