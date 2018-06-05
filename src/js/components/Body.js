import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/index"
import TextToSpeechForm from "./TextToSpeechForm"

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class The_Body extends Component {
  constructor(){
    super();
    this.state={
      loggedIn: false
    };
  }

  componentWillReceiveProps(){
    this.setState(
      { loggedIn: store.getState().loggedIn }
    )
  }

  render(){
    if(this.state.loggedIn === true){
      return(
          <TextToSpeechForm/>
      )
    }else{
      return(
        <div>
          <h1>Log In or Sign up!</h1>
        </div>
      )
    }
  }
}

const Body = connect(mapStateToProps)(The_Body);

export default Body;
