import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const ids = [
    { id: 1, name: "Post 1" },
    { id: 2, name: "Post 2" },
    { id: 3, name: "Post 3" }
  ];

  return (
    <Fragment>
      {ids.map(item => (
        <span key={item.id}>
          <Link to={`posts/${item.id}`}>{item.name}</Link>
        </span>
      ))}
    </Fragment>
  );
};

export default Posts;
