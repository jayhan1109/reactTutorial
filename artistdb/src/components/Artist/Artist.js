import React, { Fragment } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumList from "./AlbumList";

const URL_ARTISTS = "http://localhost:3004/artists";

const Artist = props => {
  const [artist, setArtist] = useState("");

  useEffect(() => {
    axios
      .get(`${URL_ARTISTS}/${props.match.params.artistId}`)
      .then(response => {
        setArtist(response.data);
      })
      .catch(err => {
        props.history.push("/home");
      });
  }, [props.history, props.match.params.artistId]);

  return (
    <Fragment>
      <div className="artist_bio">
        <div className="avatar">
          <span
            style={{
              background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
            }}
          ></span>
        </div>
        <div className="bio">
          <h3>{artist.name}</h3>
          <div className="bio_text">{artist.bio}</div>
        </div>
        <AlbumList albumList={artist.albums} />
      </div>
    </Fragment>
  );
};

export default Artist;
