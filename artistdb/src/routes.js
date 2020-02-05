import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Artist from "./components/Artist/Artist";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/artists/:artistId" component={Artist} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
