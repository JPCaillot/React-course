import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( //the wrapping could be done in other components if less elements need this providing
  <Provider store={store}> 
    <App />
  </Provider>
);
