import './semantic/dist/semantic.min.css';
import React from "react";
import { render } from "react-dom";
import store from "./js/store/index";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import App from "./js/components/App";
import './index.css';
import registerServiceWorker from './registerServiceWorker';


render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
registerServiceWorker();

console.log(`Started`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
