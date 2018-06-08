import React, {Component} from 'react';
import { connect } from "react-redux";
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm'
import { addLoginButtonStatus } from '../actions/index'
import store from "../store/index"


const mapDispatchToProps = dispatch => {
  return {
    addLoginButtonStatus: boolean => dispatch(addLoginButtonStatus(boolean))
  };
};

class ConnectedLoginSignup extends Component{
  constructor(){
    super();
    this.state={
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, boolean) {
    this.props.addLoginButtonStatus(boolean);
    console.log(this.props)
  }

  render(){
    const loginStatus = this.state.login
    const LoginOrSignup = (loginStatus === true)
        ? <LoginForm/>
        : <h1>Fuck you</h1>
    return (
      <Grid.Row centered>
        <Grid.Column width={4}>
          <div id="login-signup-selector">
            <p>
              Please
              <span id="loginButton" onClick={(e)=>this.handleChange(e, true)}> login </span>
              or
              <span id="loginButton" onClick={(e)=>this.handleChange(e, false)}> sign up </span>
              to continue.
            </p>
            <LoginForm/>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const LoginSignup = connect(mapDispatchToProps, { addLoginButtonStatus })(ConnectedLoginSignup)
export default LoginSignup
