import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TextToSpeechPage } from './TextToSpeechPage'
import { SpeechToTextPage } from './SpeechToTextPage'
import { AxiosRequest } from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";
import { addUserConversion } from "../actions/index";
import { addUserSpeechConversion } from "../actions/index";

const mapStateToProps = state => {
  return{
    speechToText: state.speechToText,
    userData: state.userData,
    conversions: state.conversions,
    speech_conversions: state.speech_conversions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserConversion: userConversion => dispatch(addUserConversion(userConversion)),
    addUserSpeechConversion: userSpeechConversion => dispatch(addUserSpeechConversion(userSpeechConversion)),
  };
};

class ConnectedUserPage extends Component{
  constructor(){
    super();
    this.state={}
  }

  componentDidMount(){
    this.props.conversions.length === 0
    ? this.getConversions()
    : null

    this.props.speech_conversions.length === 0
    ? this.getSpeechConversions()
    : null
  }

  getConversions(){
    const requestParams = {
      method:  'get',
      url:     `https://tts-stt.herokuapp.com/api/v1/conversions`,
      headers: {'Authorization' :'Bearer ' + this.props.userData.jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const conversions = response.data
        this.props.addUserConversion(conversions);
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  getSpeechConversions(){
    const requestParams = {
      method:  'get',
      url:     `https://tts-stt.herokuapp.com/api/v1/speech_conversions`,
      headers: {'Authorization' :'Bearer ' + this.props.userData.jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const speech_conversions = response.data
        this.props.addUserSpeechConversion(speech_conversions);
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    let textOrSpeech = (this.props.speechToText === false)
      ? <TextToSpeechPage/>
      : <SpeechToTextPage/>
    return(
       <div>{ textOrSpeech }</div>
    )
  }
}

const UserPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserPage);
export default UserPage;
