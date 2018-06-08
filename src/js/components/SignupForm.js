import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button} from 'semantic-ui-react';
import { AxiosRequest } from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";
import store from "../store/index"

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
      password: "",
      jwt:""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value});
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
        this.logIn(event, )
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
