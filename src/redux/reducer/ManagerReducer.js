import {
    FETCH_MANAGER_SUCCESS,
    FETCH_MANAGER_PENDING,
    FETCH_MANAGER_FAILED,

} from "../action/Constant";
  
  const initialState = {
    managerwork: {},
    isError: false,
    err: null,
    allmanagerwork: [],
  };
  
  export const ManagerReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case FETCH_MANAGER_SUCCESS:
        return {
          ...state,
          isError: false,
          allmanagerwork: actions.payload,
        };
      case FETCH_MANAGER_PENDING:
        return {
          ...state,
          isError: false,
        };
      case FETCH_MANAGER_FAILED:
        return {
          ...state,
          isError: true,
        };
      default:
        return state;
    }
  };
  