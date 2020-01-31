import React, { Fragment } from "react";
import {css} from 'glamor';

const NewsListItem = ({ item }) => {

  let news_item=css({
    padding:'20px',
    boxSizing:'border-box',
    borderBottom:'1px solid grey',
    ':hover':{
      color:'red'
    }
  })

  let item_back=css({
    background:'grey'
  })

  return (
    <Fragment>
      <div {...news_item} {...item_back}>
        <h1>{item.title}</h1>
        <h3>{item.feed}</h3>
      </div>
    </Fragment>
  );
};

export default NewsListItem;
