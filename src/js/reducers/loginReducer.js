import { ADD_USER_DATA } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";

const initialState = {
  userData: "",
  loggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userData: action.payload };
    case ADD_USER_DATA:
      return { ...state, loggedIn: action.payload };
    default:
     return state;
  }
};

export default loginReducer;
