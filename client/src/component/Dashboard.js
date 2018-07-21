import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      listOfHouses: []
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: BASE_URL + "/api/property"
    }).then(response => {
      this.setState({ listOfHouses: response.data });
    });
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
        <House houses={this.state.listOfHouses} />
        <div>
          <Link to="/wizard/step1">
            <button>Add A New Property</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
