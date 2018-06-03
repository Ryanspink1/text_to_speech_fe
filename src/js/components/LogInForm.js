import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Icon} from 'semantic-ui-react';
import { addUserData } from "../actions/index"
import { login } from "../actions/index"
import store from "../store/index"
import { AxiosFunc } from "../helpers/axios";

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

class LoggedInForm extends Component{
  constructor() {
    super();
    this.state={
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value})
    console.log(event.target.value)
  }


  handleSubmit(event){
    event.preventDefault();
    this.setState({ title: ""})
  }

  logIn(event){
    event.preventDefault();
    this.postUserLogin()
    // console.log({userData})
    // this.props.addUserData({ userData.email, userData.id});
  }

  signUp(event){
    event.preventDefault();
    console.log("cheese")
  }

  postUserLogin() {
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/user_token',
      headers: { 'content-type':'application/json' },
      data:    { 'auth': { 'email': this.state.email,'password':this.state.password }}
    }
    AxiosFunc(
      requestParams
    ).then(
      response => {
        this.getUserData(response.data["jwt"])
      }
      )
  }

  getUserData(jwt) {
    const requestParams = {
      method:  'get',
      url:     'http://localhost:3001/api/v1/users',
      headers: {'Authorization' :'Bearer ' + jwt},
      data:    null
    }
    AxiosFunc(
      requestParams
    )
    .then(
      response => {
        const user = response.data
        this.props.addUserData(user.email)
        this.props.login()
        console.log(this.props)
      }
      )
  }
  render(ham) {
    const { email, password } = this.state
    return(
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid value={email} onChange={ this.handleChange } id="email" placeholder='Email'></Form.Input>
          <Form.Input fluid value={password} onChange={ this.handleChange} id="password" type='password' placeholder='Password'></Form.Input>
        </Form.Group>
        <Form.Field control={Button} onClick={ this.logIn.bind(this) }>Log In</Form.Field>
        <Form.Field control={Button} onClick={ this.signUp}>Sign Up</Form.Field>
      </Form>
    )
  }
};

const LogInForm = connect(mapStateToProps, mapDispatchToProps)(LoggedInForm);
export default LogInForm;
