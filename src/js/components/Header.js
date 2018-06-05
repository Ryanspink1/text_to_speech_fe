import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm"
import LoggedIn from "./LoggedIn"
import store from "../store/index";

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedHeader extends Component{
  constructor() {
    super();

    this.state={
      loggedIn: false
    };
  }

  componentWillReceiveProps(){
    this.setState(
      { loggedIn: store.getState().loggedIn }
    )
  }

  render() {
    if(this.state.loggedIn === false){
      return(
        <LoginForm/>
      )
    }else{
      return(
        <LoggedIn/>
     )
    }
  }
}

const Header = connect(mapStateToProps)(ConnectedHeader);

export default Header;
