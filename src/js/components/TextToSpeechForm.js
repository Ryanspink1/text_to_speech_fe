import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Button} from "semantic-ui-react";
import { voiceOptions } from "../helpers/voiceOptions"
import store from "../store/index";
import AxiosRequest from "../helpers/axios"

const mapStateToProps = state => {
  return {
    jwt: state.userData.jwt
  };
};

class TTSForm extends Component {
  constructor(){
    super();
    this.state={
      jwt:   null,
      voice: null,
      text: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(){
    this.setState(
      { jwt: store.getState().userData.jwt }
    )
  }

  handleChange(event, {id, value}){
    event.preventDefault();
    this.setState({ [id]: value});
  }


  handleSubmit(event){
    event.preventDefault();
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/users/conversions',
      headers: { 'content-type':'application/json' },
      data:    { 'email': this.state.email, 'password':this.state.password }
    }
  }

  requestConversion(){

  }



  render(){
    return(
      <Form>
        <Form.Group>
          <Form.Input onChange={ this.handleChange } id="text" placeholder='Text' width={4}></Form.Input>
          <Form.Field control={ Dropdown } onChange={this.handleChange} id="voice" placeholder='Select voice' fluid search selection options={voiceOptions} />
          <Form.Field control={ Button } onClick={ this.handleSubmit.bind(this) } size='small' >Submit</Form.Field>
        </Form.Group>
      </Form>
    )
  }
}

const TextToSpeechForm = connect(mapStateToProps)(TTSForm);

export default TextToSpeechForm;
