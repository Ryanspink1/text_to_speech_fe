import { ADD_USER_DATA } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";
import { ADD_USER_CONVERSION } from "../constants/action-types";
import { DELETE_CONVERSION } from "../constants/action-types";
import { ADD_LOGIN_BUTTON_STATUS } from "../constants/action-types";
import { CHANGE_USER_EMAIL } from "../constants/action-types";
import { CHANGE_APP_STATE } from "../constants/action-types";
import { ADD_USER_SPEECH_CONVERSION } from "../constants/action-types";
import { DELETE_SPEECH_CONVERSION } from "../constants/action-types";
import { ADD_FORM_ERROR } from "../constants/action-types";
import { CLEAR_FORM_ERROR } from "../constants/action-types";

export const addUserData = userData => ({ type: ADD_USER_DATA, payload: userData });
export const login = loggedIn => ({ type: LOGIN, payload: loggedIn});
export const logout = loggedOut => ({ type: LOGOUT, payload: loggedOut})
export const addUserConversion = userConversion => ({ type: ADD_USER_CONVERSION, payload: userConversion });
export const deleteConversion = conversion => ({ type: DELETE_CONVERSION, payload: conversion });
export const addLoginButtonStatus = boolean => ({ type: ADD_LOGIN_BUTTON_STATUS, payload: boolean });
export const changeUserEmail = email => ({ type: CHANGE_USER_EMAIL, payload: email });
export const changeAppState = boolean => ({ type: CHANGE_APP_STATE, payload: null });
export const addUserSpeechConversion = userConversion => ({ type: ADD_USER_SPEECH_CONVERSION, payload: userConversion });
export const deleteSpeechConversion = speechConversion => ({ type: DELETE_SPEECH_CONVERSION, payload: speechConversion });
export const addFormError = formError => ({ type: ADD_FORM_ERROR, payload: formError });
export const clearFormError = formError => ({ type: CLEAR_FORM_ERROR, payload: formError });
