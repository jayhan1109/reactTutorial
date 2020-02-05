import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ArtistList = ({ artists }) => {
  const list = artists =>
    artists &&
    artists.map(item => (
      <Link
        key={item.id}
        to={`/artists/${item.id}`}
        className="artist_item"
        style={{
          background: `url('/images/covers/${item.cover}.jpg')`
        }}
      >
        <div>{item.name}</div>
      </Link>
    ));

  return (
    <Fragment>
      <div className="artists_list">
        <h4>Browse the Artists</h4>
        <div className="artist_container">{list(artists)}</div>
      </div>
    </Fragment>
  );
};

export default ArtistList;
