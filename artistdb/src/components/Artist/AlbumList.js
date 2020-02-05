import React, { Fragment } from "react";

const AlbumList = ({ albumList }) => {
  const showlist = albums =>
    albums &&
    albums.map((item, i) => (
      <img key={i} alt="" src={`/images/albums/${item.cover}.jpg`}></img>
    ));

  return (
    <Fragment>
      <div className="albums_list">{showlist(albumList)}</div>
    </Fragment>
  );
};

export default AlbumList;
