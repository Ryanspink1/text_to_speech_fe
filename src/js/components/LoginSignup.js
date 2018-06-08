import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm'

class NonConnectedLoginSignup extends Component{
  constructor(){
    super();
    this.state={
      login: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, boolean) {
    this.setState({ [event.target.id]: boolean});
  }

  render(){
    const loginStatus = this.state.login
    const LoginOrSignup = (loginStatus === true)
        ? <LoginForm/>
        : <h1>Fuck you</h1>
    return (
      <Grid.Row>
        <Grid.Column>
          <div>
            <p>
              Please
              <span id="login"onClick={(e)=>this.handleChange(e, true)}> login </span>
              or
              <span id="login" onClick={(e)=>this.handleChange(e, false)}> sign up </span>
              to continue.
            </p>
            { LoginOrSignup }
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const LoginSignup = NonConnectedLoginSignup
export default LoginSignup
