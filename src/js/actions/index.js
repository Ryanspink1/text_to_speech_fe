import { ADD_USER_DATA } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";

export const addUserData = userData => ({ type: ADD_USER_DATA, payload: userData });
export const login = loggedIn => ({ type: LOGIN, payload: loggedIn});
export const logout = loggedOut => ({ type: LOGOUT, payload: loggedOut})
