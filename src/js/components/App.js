import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import LoginPage from './LoginPage';
import TextToSpeechForm from './TextToSpeechForm';
import LoggedIn from './LoggedIn';
import ConversionList from './ConversionList';
import PrivateRoute from '../helpers/privateRoute';

const App = (props) => (
    <Switch>
      <Route exact path="/" component={ LoginPage} />
      <PrivateRoute path="/protected" component={ TextToSpeechForm } loggedIn={props.loggedIn}/>
    </Switch>
);

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
