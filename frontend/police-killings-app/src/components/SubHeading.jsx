import React from 'react';
import '../styles/SubHeading.css';

const SubHeading = ({ items }) => {
  return (
    <div className="subheading-container" id={items}>
      {items}
    </div>
  );
};

export default SubHeading;