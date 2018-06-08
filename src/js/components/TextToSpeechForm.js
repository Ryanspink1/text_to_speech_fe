import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Button} from "semantic-ui-react";
import { voiceOptions } from "../helpers/voiceOptions"
import { addUserConversion } from "../actions/index";
import { AxiosRequest } from "../helpers/axios"
import { RequestError } from "../helpers/error_handling";
import store from "../store/index";

const mapStateToProps = state => {
  return {
    jwt: state.userData.jwt,
    id: state.userData.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserConversion: userConversion => dispatch(addUserConversion(userConversion))
  };
};

class ConnectedTextToSpeechForm extends Component {
  constructor(){
    super();
    this.state={
      jwt:   "",
      voice: "",
      text: "",
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
    console.log(this.props)
    event.preventDefault();
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/users/conversions',
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    {voice: this.state.voice, text: this.state.text, id: this.props.id}
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.props.addUserConversion(response.data);
        this.setState({ voice: "",
                        text: ""})
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    return(
      <div className="text-to-speech-component">
        <Form className="text-to-speech-form">
          <Form.Group>
            <Form.Input onChange={ this.handleChange } value={this.state.text} id="text" placeholder='Text' width={6}></Form.Input>
            <Form.Field control={ Dropdown } width={4} onChange={this.handleChange} value={this.state.voice} id="voice" placeholder='Select voice' fluid search selection options={voiceOptions} />
            <Form.Field control={ Button } onClick={ this.handleSubmit.bind(this) } size='small' >Submit</Form.Field>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const TextToSpeechForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedTextToSpeechForm);
export default TextToSpeechForm;
