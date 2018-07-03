import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Input, Button, Label} from 'semantic-ui-react';
import { AxiosRequest } from "../helpers/axios";
import { RequestError } from "../helpers/error_handling";
import { changeUserEmail } from "../actions/index";
import { addFormError } from "../actions/index";
import FormError from './FormError';


const mapStateToProps = state =>{
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserEmail: email => dispatch(changeUserEmail(email)),
    addFormError: formError => dispatch(addFormError(formError)),
  };
};

class ConnectedUserProfileEmail extends Component{
  constructor(){
    super();
    this.state={
      changeEmail:false,
      email: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      email: this.props.userData.email
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      changeEmail: !this.state.changeEmail
    })
  }

  handleChange(event, state){
    this.setState({
      [state]: event.target.value,
    });
  }

  updateEmail(event){
    event.preventDefault();
    (this.props.userData.email === this.state.email)
    ? this.setState({ changeEmail: !this.state.changeEmail})
    : this.requestEmailUpdate();
  }

  requestEmailUpdate(){
    const requestParams = {
      method:  'put',
      url:     'https://tts-stt.herokuapp.com/api/v1/users/' + this.props.userData.id,
      headers: {'Authorization' :'Bearer ' + this.props.userData.jwt},
      data:    { 'email':`${this.state.email}`}
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        const email = response.data.email
        this.props.changeUserEmail(email)
        this.setState({
          changeEmail: !this.state.changeEmail
        })
      }
    ).catch((error) => {
      this.props.addFormError('signUp')
      RequestError(error)
    });
  }


  render(){
    const email = this.props.userData.email
    const change = this.state.changeEmail
    const userForm = (change === true)
      ? <Form><Form.Field onChange={(e)=>this.handleChange(e, 'email')}><label>Email</label><input placeholder={email} /></Form.Field><Form.Field control={Button} onClick={ this.updateEmail.bind(this) }>Submit New Email</Form.Field></Form>
      : <Form><Form.Field disabled={true}><label color={'black'}>Email</label><input placeholder={email} /></Form.Field><Form.Field control={Button} onClick={this.handleSubmit}>Change Email</Form.Field></Form>
    return(
      <Grid.Row centered>
        <Grid.Column width={6}>
          <div className='speech-conversion-list-container'>
            <FormError/>
            {userForm}
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const UserProfileEmail = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserProfileEmail)
export default UserProfileEmail
