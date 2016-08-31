import React from 'react';
import { Component } from 'react';
import seriesList from '../data/seriesList';
import Splash from './Splash';
import NextConcert from './NextConcert';

const today = new Date();

const nextGig = seriesList.reduce(function(a,b){
  if (Date.parse(a.date1) >= today || Date.parse(a.date2) >= today) {
    return a
  } else {
    return b
  }
})

class Home extends Component {
  render() {
    return (
      <div>
          <Splash />
          <div className="container">
            <NextConcert nextC={nextGig}/>
          </div>

      </div>

    );
  }
}

export default Home;
