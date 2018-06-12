import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteConversion } from '../actions/index'
import { Grid, List, Icon, Button } from 'semantic-ui-react'
import { AxiosRequest } from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";

const mapStateToProps = state => {
  return { conversions: state.conversions,
           loggedIn: state.loggedIn,
           jwt: state.userData.jwt};
}

const mapDispatchToProps = dispatch => {
  return {
    deleteConversion: conversion => dispatch(deleteConversion(conversion))
  };
};

class ConnectedConversionList extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      conversions: []
    };
    this.deleteConversionItem = this.deleteConversionItem.bind(this)
  }

  deleteConversionItem(d){
    this.props.deleteConversion(d.d)
    const requestParams = {
      method:  'DELETE',
      headers: { 'content-type':'application/json' },
      url:     `http://localhost:3001/api/v1/conversions/${d.d.id}`,
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
  if(this.props.loggedIn === true && this.props.conversions.length >=1){
    const data = this.props.conversions
      const listItems = data.map((d)=>
       <List.Item key={d.id}>
         <List.Icon name='delete' link={1} className='speech-conversion-list-item-icon' size='large' verticalAlign='middle' color='red' onClick={ () => this.deleteConversionItem({ d })}/>
         <List.Header className='speech-conversion-list-item-header' verticalAlign='top'>
           <Icon name='headphones' size='small'/> {d.text}
         </List.Header>
         <List.Description className='speech-conversion-list-item-description'>
           <Icon name='microphone' size='small'/> {d.voice}
         </List.Description>
         <List.Content className='speech-conversion-list-item-content' verticalAlign='middle'>
           <audio id={d.id} controls>
             <source
              type='audio/mpeg'
              src={d.aws_location}/>
          </audio>
        </List.Content>
      </List.Item>
    );
  return(
    <Grid.Row centered>
      <Grid.Column width={8}>
        <div className='speech-conversion-list-container'>
          <List relaxed size='large' className='speech-conversion-list'>
            {listItems}
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
              Enter a phrase, select a voice, and click submit!<Icon name='hand point up outline' size='large'/>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

    )
  }
  }
}

const ConversionList  = connect(mapStateToProps, mapDispatchToProps)(ConnectedConversionList);

export default ConversionList
