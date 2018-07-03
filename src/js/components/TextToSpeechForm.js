import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Form, Dropdown, Button} from "semantic-ui-react";
import { voiceOptions } from "../helpers/voiceOptions"
import { addUserConversion } from "../actions/index";
import { AxiosRequest } from "../helpers/axios"
import { RequestError } from "../helpers/error_handling";
import store from "../store/index";
import FormError from './FormError';
import { addFormError } from "../actions/index";


const mapStateToProps = state => {
  return {
    jwt: state.userData.jwt,
    id: state.userData.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserConversion: userConversion => dispatch(addUserConversion(userConversion)),
    addFormError: formError => dispatch(addFormError(formError))
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
    event.preventDefault();
    ((this.state.voice === "" || this.state.text === ""))
      ? this.props.addFormError('blank')
      : this.sendText()
  }

  sendText(){
    const requestParams = {
      method:  'post',
      url:     'https://tts-stt.herokuapp.com/api/v1/users/conversions',
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
      <Grid.Row centered>
        <Grid.Column className="text-to-speech-component" width={10}>
          <div className='speech-conversion-list-container'>
            <FormError/>
            <Form className="text-to-speech-form">
              <Form.Group>
                <Form.Input onChange={ this.handleChange } value={this.state.text} id="text" placeholder='Text' width={6}></Form.Input>
                <Form.Field control={ Dropdown } width={4} onChange={this.handleChange} value={this.state.voice} id="voice" placeholder='Select voice' fluid search selection options={voiceOptions} />
                <Form.Field control={ Button } onClick={ this.handleSubmit.bind(this) } size='small' >Submit</Form.Field>
              </Form.Group>
            </Form>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const TextToSpeechForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedTextToSpeechForm);
export default TextToSpeechForm;
