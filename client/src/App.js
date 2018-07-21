import React, { Component } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard";
import Wizard from "./component/Wizard/Wizard";
import Header from "./component/Header";
import route from "./route";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
