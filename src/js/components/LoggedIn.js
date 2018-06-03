import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'
import { logout } from "../actions/index"

const mapStateToProps = state => {
  return { userData: state.userData };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: loggedIn => dispatch(logout(loggedIn))
  };
};

class LoggedInUser extends Component {
  constructor() {
    super();
    this.state={
      userData: null
    };
  }

  componentDidMount(){
    this.setState({["userData"]: this.props.userData})
  }

  loggedOut(){
    console.log(this.state)
    this.props.logout()
  }

  render(){
    const userData = this.state.userData
    return(
      <div>
        <h1>{userData}</h1>
        <Button onClick={this.loggedOut.bind(this)}>Logout</Button>
      </div>
    )
  }
}

const LoggedIn = connect(mapStateToProps, mapDispatchToProps)(LoggedInUser);

export default LoggedIn;
