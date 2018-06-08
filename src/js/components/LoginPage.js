import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { Grid } from 'semantic-ui-react';
import LoginForm from "./LoginForm"
import LoggedIn from "./LoggedIn"
import store from "../store/index";

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedLoginPage extends Component{
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
        <Grid>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
            <LoginForm/>
            <Link to="/protected">Protected</Link>
          </Grid.Row>
        </Grid>
      )
    }else{
      return(
        <LoggedIn/>
     )
    }
  }
}

const LoginPage = connect(mapStateToProps)(ConnectedLoginPage);

export default LoginPage;
