import React, { Fragment } from "react";
import NewsListItem from "./NewsListItem";

const NewsList = props => {
  const news = props.news.map(item => (
    <NewsListItem item={item} key={item.id} />
  ));

  return (
    <Fragment>
      {news}
      {props.children}
    </Fragment>
  );
};

export default NewsList;
