import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Card from "../hoc/Card";
import Auth from "../hoc/Auth";

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
      <Auth>
        <Card>
          <Link
            to={{
              pathname: `${props.match.url}/posts`
            }}
          >
            Go to posts
          </Link>
        </Card>
      </Auth>
    </Fragment>
  );
};

export default Profile;
