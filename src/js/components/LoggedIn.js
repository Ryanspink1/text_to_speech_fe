import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { userData: state.userData };
};

const LoggedInUser = ({ userData }) => (
  <h1>{userData}</h1>
);
const LoggedIn = connect(mapStateToProps)(LoggedInUser);
export default LoggedIn;
