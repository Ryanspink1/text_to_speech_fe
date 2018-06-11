import { ADD_USER_DATA } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";
import { ADD_USER_CONVERSION } from "../constants/action-types";
import { DELETE_CONVERSION } from "../constants/action-types";
import { ADD_LOGIN_BUTTON_STATUS } from "../constants/action-types";
import { CHANGE_USER_EMAIL } from "../constants/action-types";

const initialState = {
  loggedIn: false,
  userData: { email: null,
              jwt:   null,
              id:    null},
  conversions: [],
  loginButton: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: !state.loggedIn };
      case LOGOUT:
        return { ...state, loggedIn: !state.loggedIn, userData: { email: null, jwt: null, id: null }, conversions:[],loginButton:true };
    case ADD_USER_DATA:
      return { ...state, userData: { email: action.payload[0], jwt: action.payload[1] , id: action.payload[2]}};
    case ADD_USER_CONVERSION:
      return { ...state, conversions: state.conversions.concat(action.payload) };
    case DELETE_CONVERSION:
      return { ...state, conversions: state.conversions.filter(conversion => conversion != action.payload )};
    case ADD_LOGIN_BUTTON_STATUS:
      return { ...state, loginButton: action.payload };
    case CHANGE_USER_EMAIL:
      return { ...state, userData: {email: action.payload, jwt: state.userData.jwt, id: state.userData.id} };
    default:
     return state;
  }
};

export default rootReducer;
