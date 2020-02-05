import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <Link to="/">Music DB</Link>
      </header>
    </Fragment>
  );
};

export default Header;
