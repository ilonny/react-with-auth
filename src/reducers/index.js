import { combineReducers } from "redux";
const initialState = {
  user: {
    login: "",
    token: "",
    list: []
  }
};
const mainReducer = function(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("LOGIN_ACTION reducer");
      console.log(action);
      return {
        ...state,
        user: {
          login: action.responseFromServer.login,
          token: action.responseFromServer.token
        }
      };
    case "GET_LIST_ACTION":
      console.log("GET_LIST_ACTION reducer");
      console.log(action);
      return { ...state, list: [].concat(action.listFromServer.data) };
    case "REQUEST":
      console.log("REQUEST action reducer");
      return state;
    case "SUCCESS":
      console.log("SUCCESS action reducer");
      return state;
    case "FAILURE":
      console.log("FAILURE action reducer");
      return state;
    default:
      return state;
  }
};

// export default mainReducer

const appReducer = combineReducers({
  mainReducer
  //some reducers here....
});

export default appReducer;
