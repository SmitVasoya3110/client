import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import TagManager from 'react-gtm-module';
import { appBarClasses } from "@mui/material";


const tagManagerArgs = {
  gtmId: 'GTM-KCTM6QV'
}

/* const cors = require('cors');
App.use(cors()); 
 */
TagManager.initialize(tagManagerArgs)


/* dsfsdfsdf */


/* jhfkshfsdkfhdskjfh */




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
