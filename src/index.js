import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="creas-crave-portal.us.auth0.com"
      clientId="A3LeKz5dCdycabJGPKADPi9X5iMox2oa"
      redirectUri={window.location.origin}
      audience="https://creas-crave-backend.herokuapp.com/"
      // audience="http://localhost:3001/"
      scope="read:current_user"
    >
      <App />
    </Auth0Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
