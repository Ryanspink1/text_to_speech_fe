import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const PrivateRoute = ({component: Component, loggedIn, ...rest}) => (

    <Route {...rest} render={props => (
      loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: {from: props.location}
        }}/>
      )
    )}
   />
)

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(PrivateRoute)
