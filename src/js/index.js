import React from "react";
import { render } from "react-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import App from "./components/App";
import '../index.css';
import registerServiceWorker from '../registerServiceWorker';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
registerServiceWorker();
