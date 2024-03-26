import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Heading from './components/Heading';
import List from './components/List';
import Text from './components/Text';
import Webseries from "./components/Webseries";
import Calsi from "./components/Calsi";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Text />
    <Heading />
    <List />
    <Webseries />
    <Calsi />
  </>
);
