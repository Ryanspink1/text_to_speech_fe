import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSpeechConversion } from '../actions/index'
import store from "../store/index"
import { Grid, List, Icon, Button } from 'semantic-ui-react'
import { AxiosRequest } from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";

const mapStateToProps = state => {
  return {
    speech_conversions: state.speech_conversions,
    loggedIn: state.loggedIn,
    jwt: state.userData.jwt
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteSpeechConversion: speechConversion => dispatch(deleteSpeechConversion(speechConversion))
  };
};

class ConnectedSpeechConversionList extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    };
    this.deleteSpeechConversionItem = this.deleteSpeechConversionItem.bind(this)

  }

    deleteSpeechConversionItem(d){
      this.props.deleteSpeechConversion(d.d)
      const requestParams = {
        method:  'DELETE',
        headers: { 'content-type':'application/json' },
        url:     `https://tts-stt.herokuapp.com/api/v1/speech_conversions/${d.d.id}`,
        headers: {'Authorization' :'Bearer ' + this.props.jwt},
      }
      AxiosRequest(
        requestParams
      ).then(
        response => {

        }
      ).catch((error) => {
        RequestError(error)
      });

    }

  render(){
    if(this.props.loggedIn === true && this.props.speech_conversions.length >=1){
      const data = this.props.speech_conversions
      const listItems = data.map((d)=>
        <List.Item key={ d.id } className='speech-conversion-list-item'>
          <Icon name='delete' link={1} className='speech-conversion-list-item-icon' size='large' verticalAlign='middle' color='red' onClick={ () => this.deleteSpeechConversionItem({ d })}/>
          <List.Header className='speech-conversion-list-item-header' vertialAlign='top'>
            <q>{ d.text }</q><br/>
          </List.Header>
          <List.Description className='speech-conversion-list-item-description'>
            Confidence:  { d.confidence }
          </List.Description>
          <List.Content className='speech-conversion-list-item-content' verticalAlign='middle'>
            <audio id={ d.id } controls>
              <source
               type='audio/mpeg'
               src={ d.aws_location }/>
            </audio>
          </List.Content>
        </List.Item>
      )
      return(
        <Grid.Row centered>
          <Grid.Column width={8}>
            <div className='speech-conversion-list-container'>
              <List relaxed size="large" className='speech-conversion-list'>
                { listItems}
              </List>
            </div>
          </Grid.Column>
        </Grid.Row>
      )
    }else{
      return(
        <Grid.Row centered>
          <Grid.Column width={6}>
            <div className='speech-conversion-list-container'>
              <div id='no-conversions-list-text'>
                Press the <q>record</q> button,<br/> Speak into your microphone,<br/>Press the <q>stop</q> button. <br/><br/>
                Watch the visualizer interpret the sound waves as you speak!<Icon name='hand point up outline' size='large'/>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      )
    }
  }
}

const SpeechConversionList  = connect(mapStateToProps, mapDispatchToProps)(ConnectedSpeechConversionList);

export default SpeechConversionList
