import React from "react";
import ReactDom from "react-dom";
import AcmeSchool from "./Components";
// import Header from "./Components/header";
// import CreateStuff from "./Components/CreateStuff";
// import MainBody from "./Components/MainBody";
// import AcmeSchool from "./Components";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = document.querySelector("#root");

const App = () => {
  return (
    <div>
      <AcmeSchool />
    </div>
  );
};
ReactDom.render(<App />, root);
