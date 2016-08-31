import React from 'react';
import { Component } from 'react';
import { TITLE_STYLE, SUBTITLE_STYLE, TITLE_BLOCK_STYLE, SLOGAN_STYLE } from '../helpers/styles';

const splashImageUrl = '../img/bucket.jpg';
const styles = {
  splash: {
    position: 'fixed',
  	width: '100%',
  	backgroundImage: 'url(' + splashImageUrl + ')',
  	backgroundRepeat: 'no-repeat',
  	backgroundSize: 'cover',
  	backgroundPosition: 'top',
  	margin: -10,
  	height: '65em',
  	zIndex: '-2'
  }
}

class Splash extends Component {
  render() {
    return (
      <div style={styles.splash}>
        <div style={TITLE_BLOCK_STYLE}>
          <h1 style={TITLE_STYLE}>Heartland</h1>
          <h3 style={SUBTITLE_STYLE}>Big Band</h3>
          <h4 style={SLOGAN_STYLE}>Indiana's Premier Big Band Concert Experience</h4>
        </div>
      </div>
    );
  }
}

export default Splash;
