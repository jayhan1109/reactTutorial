import React, { Fragment } from "react";

const UserHOC = (WrappedComponent, arg1) => {
  return props => (
    <Fragment>
      {console.log(props)}
      <WrappedComponent />
    </Fragment>
  );
};

export default UserHOC;
