import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Header from './components/Header';
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <NewsList/>
    </Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
