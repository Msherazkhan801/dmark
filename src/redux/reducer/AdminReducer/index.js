import {
    ADMIN_SUCCESS,
    ADMIN_PENDING,
    ADMIN_FAILED,
} from "../../action/Constant";
  
  const initialState = {
    sigleAssignment: {},
    isError: false,
    err: null,
    allAssignment: [],
  };
  
  export const AdminReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case ADMIN_SUCCESS:
        return {
          ...state,
          isError: false,
          allAssignment: actions.payload,
        };
      case ADMIN_PENDING:
        return {
          ...state,
          isError: false,
        };
      case ADMIN_FAILED:
        return {
          ...state,
          isError: true,
        };
      default:
        return state;
    }
  };
  