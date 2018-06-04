import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button} from 'semantic-ui-react';
import { addUserData } from "../actions/index";
import { login } from "../actions/index";
import { AxiosRequest} from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";

const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch(addUserData(userData)),
    login: loggedIn => dispatch(login(loggedIn))
  };
};

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

class LoggingInForm extends Component{
  constructor() {
    super();
    this.state={
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value});
  }

  //LOGIN***

  logIn(event){
    event.preventDefault();
    this.postUserLogin();
  }

  postUserLogin() {
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/user_token',
      headers: { 'content-type':'application/json' },
      data:    { 'auth': { 'email': this.state.email,'password':this.state.password }}
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.getUserData(response.data["jwt"])
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  getUserData(jwt) {
    const requestParams = {
      method:  'get',
      url:     'http://localhost:3001/api/v1/users',
      headers: {'Authorization' :'Bearer ' + jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const user = response.data

        this.props.addUserData([user.email, jwt])
        this.props.login()
        console.log(this.props)
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  //SIGN UP***

  signUp(event){
    event.preventDefault();
    this.createUser(event);
  }

  createUser(event){
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/users',
      headers: { 'content-type':'application/json' },
      data:    { 'email': this.state.email, 'password':this.state.password }
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        this.logIn(event)
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render() {
    return(
      <Form>
        <Form.Group inline>
          <Form.Input onChange={ this.handleChange } id="email" placeholder='Email' width={4} ></Form.Input>
          <Form.Input onChange={ this.handleChange} id="password" type='password' placeholder='Password' width={4}></Form.Input>
          <Form.Field control={Button} onClick={ this.logIn.bind(this) } size='small' >Log In</Form.Field>
          <Form.Field control={Button} onClick={ this.signUp.bind(this)} size='small' >Sign Up</Form.Field>
        </Form.Group>
      </Form>
    )
  }
};

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoggingInForm);

export default LoginForm;
