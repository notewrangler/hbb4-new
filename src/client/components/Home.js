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

const styles = {
  titleBlock: {
    fontFamily: 'Federo',
    // marginLeft: '54%',
    marginBottom: '10%'
  },
  title: {
    paddingTop: '3em',
    paddingBottom: '0em',
    fontSize: '6em',
    fontWeight: 'bold',
    color: '#13AFAA'
    // color: '#725F5F'
  },
  subtitle: {
    // marginLeft: '1em',
    marginTop: '0em',
    paddingTop: '0em',
    letterSpacing: '1px',
    fontSize: '5em',
    fontWeight: 'bold',
    color: '#13AFAA'
    // color: '#725F5F'
  },
  slogan: {
    fontSize: '2em',
    marginLeft: '2em',
    fontWeight: 'bold',
    // paddingTop: '0.5em',
    color: '#33A1FF'
    // color: "#169692"
  },
  next: {
    marginBottom: '50px'
  }

}


const TitleBlock = () => (
  <div className="container-fluid">
    <div style={styles.titleBlock}>
      <div className='row'>
        <div className='col-md-3 col-md-offset-6'>
          <h1 style={styles.title}>Heartland</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 col-md-offset-7'>
          <h3 style={styles.subtitle}>Big Band</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-md-offset-6'>
          <h4 style={styles.slogan}>Indiana's Premier Big Band Concert Experience</h4>
        </div>
      </div>
    </div>
  </div>
);



class Home extends Component {
  render() {
    return (
      <div>
          <Splash />
          <TitleBlock />
          <div>
            <NextConcert nextC={nextGig} style={styles.next}/>
          </div>

      </div>

    );
  }
}

export default Home;
