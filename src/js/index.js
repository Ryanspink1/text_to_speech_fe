import React from "react";
import { render } from "react-dom";
import store from "./store/index";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import App from "./components/App";
import '../index.css';
import registerServiceWorker from '../registerServiceWorker';


render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
registerServiceWorker();
