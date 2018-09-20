import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';
import { Greeting } from './Greeting';
import store from '../store/index';
import LoginSignup from './LoginSignup';

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
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

  render() {
    if(this.state.loggedIn === false){
      return(
        <Grid>
          <Greeting/>
          <LoginSignup/>
        </Grid>
      )
    }else{
      return(
        <Redirect to='/text_to_speech_fe/convert' />
     )
    }
  }
}

const LoginPage = connect(mapStateToProps)(ConnectedLoginPage);

export default LoginPage;
