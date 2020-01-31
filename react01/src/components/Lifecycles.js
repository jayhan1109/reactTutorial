import React, { Component, Fragment } from "react";

export default class Lifecycles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Steve"
    };
    console.log("1-constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2-getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("x - getSnapshotBeforeUpdate");
    return null;
  }
  

  shouldComponentUpdate(nextProps, nextState, snapshot) {
    console.log("x - shouldComponentUpdate");
    if(nextState.name==='jay'){
      return false;
    }
    return true;
  }

  render() {
    console.log("3-render");
    return (
      <Fragment>
        Lifecycles
        {this.state.name}
        <div onClick={() => this.setState({ name: "Jay" })}>
          CLICK TO CHANGE
        </div>
      </Fragment>
    );
  }

  componentDidUpdate(prevProps, prevState){
    console.log('x - componentDidUpdate');
  }

  componentDidMount() {
    console.log("4-componentDidMount");
  }

  componentWillUnmount() {
    console.log("x-componentWillUnmount");
  }
}
