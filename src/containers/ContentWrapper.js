import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

function ContentWrapper(props) {
  return (
    <div className={props.className}>
      <Sidebar className="flex-section sidebar" />
      <Content className="flex-section content" />
    </div>
  );
}

export default ContentWrapper;