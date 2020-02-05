import React, { Fragment } from "react";

const Postitem = props => {
  console.log(props);

  return (
    <Fragment>
      <div>{props.match.params.id}</div>
    </Fragment>
  );
};

export default Postitem;
