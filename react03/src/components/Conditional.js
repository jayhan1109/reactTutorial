import React, { Component, Fragment } from "react";

export default class Conditional extends Component {
  state = {
    loading: true
  };
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <div>Conditional</div>
        </Fragment>
      );
    }
  }
}
