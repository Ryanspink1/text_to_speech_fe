import { ADD_USER_DATA } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";
import { ADD_USER_CONVERSION } from "../constants/action-types";

const initialState = {
  loggedIn: false,
  userData: { email: null,
              jwt:   null,
              id:    null},
  conversions: []

}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: !state.loggedIn };
    case 'LOGOUT':
      return { ...state, loggedIn: !state.loggedIn };
    case ADD_USER_DATA:
      return { ...state, userData: { email: action.payload[0], jwt: action.payload[1] , id: action.payload[2]}};
    case ADD_USER_CONVERSION:
      return { ...state, conversions: [...state.conversions, action.payload] };
    default:
     return state;
  }
};

export default rootReducer;
