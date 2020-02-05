import React, { Fragment } from "react";

const Card = props => {
  const style = {
    background: "lightgrey"
  };
  return (
    <Fragment>
      <div className="card" style={style}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Card;
