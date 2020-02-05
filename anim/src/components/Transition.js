import React, { Component, Fragment } from "react";
import { Transition } from "react-transition-group";
import "../css/App.css";

class TransitionComp extends Component {
  state = {
    show: true
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <Fragment>
        <Transition
          in={this.state.show}
          timeout={2000}
          exit={false}
          enter={false}
          onEntered={node => {
            console.log("Enter");
          }}
          onExit={node => {
            console.log("Exit");
          }}
        >
          {state => <div className={`square square-${state}`}>{state}</div>}
        </Transition>
        <div className="showDiv" onClick={this.showDiv}>
          show/hide
        </div>
      </Fragment>
    );
  }
}

export default TransitionComp;
