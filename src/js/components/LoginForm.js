import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button} from 'semantic-ui-react';
import { addUserData } from "../actions/index";
import { login } from "../actions/index";
import { AxiosRequest } from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";
import { addFormError } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch(addUserData(userData)),
    login: loggedIn => dispatch(login(loggedIn)),
    addFormError: formError => dispatch(addFormError(formError))
  };
};

const mapStateToProps = state => {
  return {
    login: state.login,
    loginButton: state.loginButton
  }
}

class ConnectedLoginForm extends Component{
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

  //LOGIN***

  logIn(event){
    event.preventDefault();
    ((this.state.email === "" || this.state.password === ""))
      ? this.props.addFormError('blank')
      : this.postUserLogin()
  }

  postUserLogin() {
    const requestParams = {
      method:  'post',
      url:     'https://tts-stt.herokuapp.com/api/v1/user_token',
      headers: { 'content-type':'application/json' },
      data:    { 'auth': { 'email': this.state.email,'password':this.state.password }}
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.getUserData(response.data.jwt)
        this.setState({jwt:response.data.jwt})
      }
    ).catch((error) => {
      RequestError(error)
      this.props.addFormError('login')
    });
  }

  getUserData(jwt) {
    const requestParams = {
      method:  'get',
      url:     'https://tts-stt.herokuapp.com/api/v1/users',
      headers: {'Authorization' :'Bearer ' + jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const user = response.data

        this.props.addUserData([user.email, jwt, user.id])
        this.props.login()
        sessionStorage.setItem('email', user.email)
        sessionStorage.setItem('jwt', jwt)
        sessionStorage.setItem('id', user.id.toString())
        sessionStorage.setItem('loginTime', Date.now().toString())
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  //SIGN UP***

  signUp(event){
    event.preventDefault();
    ((this.state.email === "" || this.state.password === ""))
      ? this.props.addFormError('blank')
      : this.createUser(event)
  }

  createUser(event){
    const requestParams = {
      method:  'post',
      url:     'https://tts-stt.herokuapp.com/api/v1/users',
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
      this.props.addFormError('signUp')
    });
  }

  render() {
    let LoginOrSignupButton = (this.props.loginButton === true)
        ? <Form.Field control={ Button } onClick={ this.logIn.bind(this) } size='small' >Login</Form.Field>
        : <Form.Field control={ Button } onClick={ this.signUp.bind(this)} size='small' >Sign Up</Form.Field>

    return(
      <Form className="login-signup-form">
        <Form.Input onChange={ this.handleChange } id="email" placeholder='Email' width={16} ></Form.Input>
        <Form.Input onChange={ this.handleChange } id="password" type='password' placeholder='Password' width={16}></Form.Input>
        { LoginOrSignupButton }
      </Form>
    )
  }
};

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginForm);

export default LoginForm;
