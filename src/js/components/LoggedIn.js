import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from 'semantic-ui-react'
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
      userData: { email: null,
                  jwt:   null}
    };
  }

  componentDidMount(){
    this.setState({userData: this.props.userData})
    console.log(this.state)
  }

  loggedOut(){
    this.props.logout()
  }

  render(){
    let userData = this.state.userData
    return(
      <div className="logged-in">
        <Icon style={{ display: "inline" }} name='user' size='large'></Icon>
        <span className="logged-in-user-email" style={{ display: "inline" }}> {userData.email}</span>
        <Button style={{ display: "inline" }} id='logoutButton' onClick={this.loggedOut.bind(this)} size='small'>Logout</Button>
      </div>
    )
  }
}

const LoggedIn = connect(mapStateToProps, mapDispatchToProps)(LoggedInUser);

export default LoggedIn;
