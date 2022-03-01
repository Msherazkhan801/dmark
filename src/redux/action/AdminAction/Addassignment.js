import {
    ADMIN_SUCCESS,
    ADMIN_PENDING,
    ADMIN_FAILED,
} from "../Constant";
import { db } from "../../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const addAssignmentRecord =
    ({topic,assignNo,wordcount,deadline,discrip,}) => async (dispatch) => {
        
        console.log("data", topic,assignNo,wordcount,deadline,discrip,);

        dispatch(worklog_pending());
        const collectionRef = collection(db, "Admin_Assignment");
        try {
            const sending = await addDoc(collectionRef, {
              topic,assignNo,wordcount,deadline,discrip,
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
    type:ADMIN_SUCCESS,
    
    };
};
const worklog_pending = () => {
    return {
type:    ADMIN_PENDING,

    };
};
const worklog_err = () => {
    return {
   type: ADMIN_FAILED,
    
    };
};




export { addAssignmentRecord, worklog_pending, worklog_success, worklog_err };
