import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImgUrl } from "../../ducks/reducer";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: this.props.imgUrl || ""
    };
  }
  imgInput = value => {
    this.setState({ imgUrl: value });
  };
  handleNextClick = () => {
    this.props.updateImgUrl(this.state.imgUrl);
  };
  render() {
    return (
      <div>
        <div>
          <h1>StepTwo/Add New Listing</h1>
          <h2>Image URL</h2>
          <input
            imgUrl={this.state.imgUrl}
            onChange={e => this.imgInput(e.target.value)}
            value={this.state.name}
          />
        </div>
        <div>
          <Link to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button onClick={this.handleNextClick}>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { imgUrl } = state;

  return { imgUrl };
}

export default connect(
  mapStateToProps,
  { updateImgUrl }
)(StepTwo);
