import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm'

class NonConnectedLoginSignup extends Component{
  constructor(){
    super();
    this.state={
      login: true
    }
  }


  render(){
    const loginStatus = this.state.login
    const LoginOrSignup = (loginStatus == true)
        ? <LoginForm/>
        : <h1>Fuck you</h1>
    return (
      <Grid.Row>
        <Grid.Column>
          {LoginOrSignup}
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const LoginSignup = NonConnectedLoginSignup

export default LoginSignup
