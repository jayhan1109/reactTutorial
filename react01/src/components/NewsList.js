import React, { Fragment } from 'react';
import NewsListItem from './NewsListItem';

const NewsList = () => {
  return (
    <Fragment>
      <h1>News List</h1>
      <NewsListItem/>
      <NewsListItem/>
      <NewsListItem/>
    </Fragment>    
      
  );
};

export default NewsList;