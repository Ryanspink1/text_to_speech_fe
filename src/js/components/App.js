import React from 'react';
import { connect } from "react-redux";
import { Route , Switch} from "react-router-dom";
import LoginPage from './LoginPage';
import TextToSpeechForm from './TextToSpeechForm';
import ConversionList from './ConversionList';
import PrivateRoute from '../helpers/privateRoute';
import UserPage from './UserPage';
import { UserProfile } from './UserProfile';
import Recorder from './Recorder'

const App = (props) => (
    <Switch>
      <Route exact path="/text_to_speech_fe/" component={ LoginPage} />
      <PrivateRoute path="/text_to_speech_fe/convert" component={ UserPage } loggedIn={ props.loggedIn }/>
      <PrivateRoute path="/text_to_speech_fe/profile" component={ UserProfile } loggedIn={ props.loggedIn }/>
    </Switch>
);

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
