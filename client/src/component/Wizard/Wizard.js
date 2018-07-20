import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { connect } from "react-redux";
import { cancelForm } from "../../ducks/reducer";

class Wizard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Wizard/Add New Listing</h1>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2" />
          <Route component={StepThree} path="/wizard/step3" />
        </Switch>
        <Link to="/">
          <button onClick={this.props.cancelForm}>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { cancelForm }
)(Wizard);
