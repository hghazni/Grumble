import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { Provider } from "react-redux";

import store from "../runtime/store/store";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const client = new ApolloClient({
  uri: "https://grumbleapi.herokuapp.com/graphql"
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
