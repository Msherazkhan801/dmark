import {
    FETCH_MANAGER_SUCCESS,
    FETCH_MANAGER_PENDING,
    FETCH_MANAGER_FAILED,
} from "./Constant";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const addManagerRecord =
    ({topic,assignNo,wordcount,deadline,date,discrip,username}) => async (dispatch) => {
        
        console.log("data", topic,assignNo,wordcount,deadline,date,discrip,);

        dispatch(worklog_pending());
        const collectionRef = collection(db, "managerworklog");
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
    type:FETCH_MANAGER_SUCCESS,
    
    };
};
const worklog_pending = () => {
    return {
type:    FETCH_MANAGER_PENDING,

    };
};
const worklog_err = () => {
    return {
   type: FETCH_MANAGER_FAILED,
    
    };
};


// const imgUpload=({image})=>{
//     const uploadtask= dbstorage.ref(`images/${image.name}`).put(image);
//     uploadtask.on(
//         "state changed",
//         snapshot=>{},
//         error=>{console.log(error)},
//         ()=>{
//             dbstorage.ref("images")
//             .child(image.name)
//             .getDownloadURL().then(url=>{console.log("url",url);
//         })
//         }

//     )
// }



export { addManagerRecord, worklog_pending, worklog_success, worklog_err };
