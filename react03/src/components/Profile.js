import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

const Profile = props => {
  const redirectUser = () => {
    // const userRedirect = false;

    // if(userRedirect){
    //   return(
    //     <Redirect to="/"/>
    //   )
    // }
    props.history.push("/");
  };

  return (
    <Fragment>
      <Link
        to={{
          pathname: `${props.match.url}/posts`
        }}
      >
        Go to posts
      </Link>
    </Fragment>
  );
};

export default Profile;
