import React from "react";

const Auth = props => {
  const pass = "password123";
  if (pass != "password123") {
    return <h3>Your are not authorized</h3>;
  } else {
    return <h3>{props.children}</h3>;
  }
};

export default Auth;
