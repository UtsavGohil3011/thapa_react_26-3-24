import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Heading from './Heading';
import List from './List';
import Text from './Text';
import Webseries from "./Webseries";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Text />
    <Heading />
    <List />
    <Webseries />
  </>
);
