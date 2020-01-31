import React, { Fragment, Component } from "react";
import ReactDom from "react-dom";
import "./styles/styles.css";
import JSON from "./db.json";

import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import Lifecycles from "./components/Lifecycles";

class App extends Component {
  state = {
    news: JSON,
    name: "Jay",
    footerText: `Hello I'm footer`,
    visible: true
  };

  getKeywords = e => {
    console.log(e.target.value);
  };

  render() {

    return (
      <Fragment>
        <Header keywords={this.getKeywords} />
        <NewsList news={this.state.news}>I am news List</NewsList>
        <br />
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          Toggle It
        </button>
        <br />
        {this.state.visible && <Lifecycles />}
        <Footer footerText={this.state.footerText} />
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
