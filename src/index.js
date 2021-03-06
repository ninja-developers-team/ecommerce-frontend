import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
ReactDOM.render(
  <Auth0Provider
    domain="dev-66ba7bfd.us.auth0.com"
    clientId="WHoBDWlliw58jCXa2wxavQwBFDPp2aAL"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
