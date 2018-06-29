import React, {Component} from 'react';
import { connect } from "react-redux";
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm'
import { addLoginButtonStatus } from '../actions/index'
import store from "../store/index"
import FormError from './FormError';


const mapDispatchToProps = dispatch => {
  return {
    addLoginButtonStatus: boolean => dispatch(addLoginButtonStatus(boolean))
  };
};

class ConnectedLoginSignup extends Component{
  constructor(){
    super();
    this.state={
      loginButton:true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, boolean) {
    this.setState({ [event.target.id]: boolean });
    this.props.addLoginButtonStatus(boolean);
  }

  render(){
    const loginStatus = this.state.login
    const bStyle = {
      fontWeight: 'bold',
      color: 'blue'
    };
    const buttons = (this.state.loginButton === true)
      ? <p>Please <span id="loginButton" onClick={(e)=>this.handleChange(e, true)}> login </span> or <span style={bStyle} id="loginButton" onClick={(e)=>this.handleChange(e, false)}> sign up </span>to continue.</p>
      : <p>Please <span id="loginButton" style={bStyle} onClick={(e)=>this.handleChange(e, true)}> login </span> or <span id="loginButton" onClick={(e)=>this.handleChange(e, false)}> sign up </span>to continue.</p>
    return (
      <Grid.Row centered>
        <Grid.Column width={4}>
          <div id="login-signup-selector">
            {buttons}
            <FormError/>
            <LoginForm/>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const LoginSignup = connect(mapDispatchToProps, { addLoginButtonStatus })(ConnectedLoginSignup)
export default LoginSignup
