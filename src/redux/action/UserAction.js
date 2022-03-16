import {
    USERS_ERR,
    USERS_PENDING,
    USERS_SECCESS,
   
} from "./Constant";
import { db,dbstorage } from "../../Firebase";
import { addDoc, collection} from "firebase/firestore";
import { toast } from "react-toastify";

const addUserRecord =
    ({topic,assignNo,wordcount,deadline,date,discrip,username}) => async (dispatch) => {
        
        // console.log("data", topic,assignNo,wordcount,deadline,date,discrip,image);

        dispatch(worklog_pending());
        const collectionRef = collection(db, "userworklog");
        try {
            const sending = await addDoc(collectionRef, {
              topic,assignNo,wordcount,deadline,date,discrip,username
            });
            dispatch(worklog_success());
            console.log("sending", sending);
            toast.notify("successfully submited");
        } catch (error) {
            console.log("error in colection", error);
        }
        // emptyState();
    };




const worklog_success = () => {
    return {
        type: USERS_SECCESS,
    };
};
const worklog_pending = () => {
    return {
        type: USERS_PENDING,
    };
};
const worklog_err = () => {
    return {
        type: USERS_ERR,
    };
};


export { addUserRecord, worklog_pending, worklog_success, worklog_err };
