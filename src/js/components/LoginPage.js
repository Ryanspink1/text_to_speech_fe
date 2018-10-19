import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';
import { Greeting } from './Greeting';
import store from '../store/index';
import LoginSignup from './LoginSignup';
import { login } from "../actions/index";
import { addUserData } from "../actions/index";
import {PoweredByWatson} from "./PoweredByWatson";


const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch(addUserData(userData)),
    login: loggedIn => dispatch(login(loggedIn))
  };
};

class ConnectedLoginPage extends Component{
  constructor(){
    super();

    this.state={
      loggedIn: false,
      login: true,
      signup: false
    };
  }

  componentWillReceiveProps(){
    this.setState(
      { loggedIn: store.getState().loggedIn }
    )
    document.body.id = 'app-body';
  }

  componentDidMount(){
    if(sessionStorage.getItem("loginTime")){
      this.checkLogin()
    }
  }

  checkLogin(){
    let d = Date.now() - sessionStorage.getItem("loginTime");
    (d >= 600000)
    ? sessionStorage.clear()
    : this.autoLogin()
  }

  autoLogin(){
    this.props.login()
    this.props.addUserData([sessionStorage.getItem("email"), sessionStorage.getItem("jwt"), sessionStorage.getItem("id")])

  }

  render() {
    if(this.state.loggedIn === false){
      return(
        <Grid>
          <Greeting/>
          <LoginSignup/>
          <PoweredByWatson/>
        </Grid>
      )
    }else{
      return(
        <Redirect to='/text_to_speech_fe/convert' />
     )
    }
  }
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginPage);

export default LoginPage;
