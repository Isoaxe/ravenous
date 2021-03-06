import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import searchYelp from '../../util/searchYelp.js';


function App() {
  const [businesses, setBusinesses] = useState([]);
  const [hasRun, setHasRun] = useState(false);

  function yelpBusinesses(term, location, priceString, sortBy) {
    searchYelp(term, location, priceString, sortBy).then(businesses => {
      setBusinesses(businesses);
      setHasRun(true);
    });
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar yelpBusinesses={yelpBusinesses} hasRun={hasRun}/>
      <BusinessList businesses={businesses} hasRun={hasRun}/>
    </div>
  );
}

export default App;
