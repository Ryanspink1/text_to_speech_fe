import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactMic } from 'react-mic';
import { Grid, Icon } from 'semantic-ui-react'
import { AxiosRequest } from "../helpers/axios"
import { RequestError } from "../helpers/error_handling";
import { addUserSpeechConversion } from "../actions/index";

const mapStateToProps = state => {
  return {
    jwt: state.userData.jwt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserSpeechConversion: userSpeechConversion => dispatch(addUserSpeechConversion(userSpeechConversion)),
  };
};


class ConnectedRecorder extends Component{
  constructor(){
    super();
    this.state={
      record: false,
      confidence: "",
      text: ""
    };
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onStop(recordedBlob) {
    let fd = new FormData;
    fd.append('audio', recordedBlob.blob);
    this.setData(fd);
  }

  setData(fd){
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/speech_conversions',
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    fd
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        let speech_conversion = response.data
        this.props.addUserSpeechConversion(response.data)
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    let text = this.state.text
    let record = this.state.record
    let recordButton = (record === false)
      ? <Icon id="record-speech-inactive" aria-label={ "Record" } className="record-speech-icon" name="dot circle outline" size={ "huge" } onClick={ this.startRecording.bind(this) } />
    : <Icon id="record-speech-active" aria-label={ "Stop Recording" } className="record-speech-icon" name="stop circle outline" size={ "huge" } onClick={ this.stopRecording.bind(this) } />

    return(
      <Grid.Row centered>
        <Grid.Column width={16}>
          <div id="react-mic-container">
            <ReactMic
              record={this.state.record}
              className="recorder-sound-wave"
              onStop={this.onStop.bind(this)}
              strokeColor="#2A18AA"
              backgroundColor="white" />
            <br/>
          </div>
          <div id="react-mic-button-container">
            {recordButton}
          </div>
        </Grid.Column>
      </Grid.Row>

    )
  }
}

const Recorder = connect(mapStateToProps, mapDispatchToProps)(ConnectedRecorder)

export default Recorder
