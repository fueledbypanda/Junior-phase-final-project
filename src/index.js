import React from "react";
import ReactDom from "react-dom";

const root = document.querySelector("#root");

const App = () => {
  return <div>Hello world1</div>;
};
ReactDom.render(<App />, root);
