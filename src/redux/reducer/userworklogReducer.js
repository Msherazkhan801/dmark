import {
    USERS_ERR,
    USERS_PENDING,
    USERS_SECCESS,
    FETCH_USERS_SUCCESS,

} from "../action/Constant";
  
  const initialState = {
    userwork: {},
    isError: false,
    err: null,
    alluserwork: [],
  };
  
  export const UserReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          isError: false,
          alluserwork: actions.payload,
        };
      case USERS_PENDING:
        return {
          ...state,
          isError: false,
        };
      case USERS_ERR:
        return {
          ...state,
          isError: true,
        };
      default:
        return state;
    }
  };
  