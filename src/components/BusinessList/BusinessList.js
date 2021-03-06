import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';


function BusinessList(props) {

  if (!props.businesses.length && props.hasRun) {
    return (
      <div className="BusinessList">
        There are no search results to display.
      </div>
    );
  }
  
  return (
    <div className="BusinessList">
      {props.businesses.map(business =>
        <Business business={business} key={business.id}/>)}
    </div>
  );
}

export default BusinessList;
