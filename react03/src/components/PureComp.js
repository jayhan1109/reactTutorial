import React, { Fragment } from "react";
import { PureComponent } from "react";

export default class PureComp extends PureComponent {
  state = {
    name: "Francis"
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.name === this.state.name) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log("render");

    return (
      <Fragment>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.setState({ name: "Steve" })}>
          Click to change
        </button>
      </Fragment>
    );
  }
}
