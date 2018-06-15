import React from 'react';
import { connect } from 'react-redux'
import { TextToSpeechPage } from './TextToSpeechPage'
import { SpeechToTextPage } from './SpeechToTextPage'

const mapStateToProps = state => {
  return{
    speechToText: state.speechToText
  };
};

const ConnectedUserPage = ({ speechToText }) => (
  (speechToText === false)
    ? <TextToSpeechPage/>
    : <SpeechToTextPage/>
)

const UserPage = connect(mapStateToProps)(ConnectedUserPage);
export default UserPage;
