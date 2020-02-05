import React from "react";
import UserHOC from "./UserHOC";

const User = () => {
  return <div>user</div>;
};

export default UserHOC(User, "Hello i am");
