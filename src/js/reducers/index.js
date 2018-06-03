import { ADD_USER_DATA } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";

const initialState = {
  loggedIn: false,
  userData: null

}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: !state.loggedIn };
    case 'LOGOUT':
      return { ...state, loggedIn: !state.loggedIn };
    case ADD_USER_DATA:
      return { ...state, userData: action.payload };
    default:
     return state;
  }
};

export default rootReducer;
