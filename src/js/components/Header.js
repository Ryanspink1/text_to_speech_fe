import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Icon} from 'semantic-ui-react';
import LogInForm from "./LogInForm"
import LoggedIn from "./LoggedIn"
import axios from "axios";
import store from "../store/index";

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class Heading extends Component{
  constructor() {
    super();

    this.state={
      loggedIn: false
    };
  }

  componentWillReceiveProps(){
    this.setState(
      {loggedIn: store.getState().loggedIn}
    )
  }

  render() {
    if(this.state.loggedIn === false){
      return(
        <LogInForm></LogInForm>
      )
    }else{
      return(
      <LoggedIn></LoggedIn>
     )
    }
  }
}

const Header = connect(mapStateToProps)(Heading);

export default Header;
