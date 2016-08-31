import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import  GuestArtists  from '../data/guests';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';



const guestImageUrl = '/img/guests/unsplash/solo-spot.jpeg';

const styles = {
	splash: {
		position: 'fixed',
		margin: 'auto',
		backgroundImage: 'url('+ guestImageUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		top: 0,
		backgroundPosition: 'top',
		height: '70em',
		zIndex: '-1'
	},
	title: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: '6em',
		fontFamily: 'Federo',
		fontSize: '4em',
		color: '#13AFAA',
		zIndex: '-1'
	},
	subtitle: {
		margin: 'auto',
		textAlign: 'center',
		fontFamily: 'Federo',
		fontSize: '4em',
		color: '#85EAF2',
		zIndex: '-1'
	},
	root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100%',
    height: 2000,
    overflowY: 'auto',
    marginTop: 250
  },
}

const PictureGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={500}
			cols={3}
      style={styles.gridList}
    >
      <Subheader></Subheader>
      {GuestArtists.map((tile) => (
        <GridTile
          key={tile.gid}
          title={tile.name}
					subtitle={<span>{tile.date}--{tile.concert}</span>}
          actionIcon={<Link to={`guest-detail/${tile.gid}`}><RaisedButton label="Bio" primary={true}></RaisedButton></Link>}
        >
          <img src={tile.photoUrl} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

class Guests extends Component {
  render() {
    return (
			<div>
				<div style={styles.splash}>
    		</div>
				<div>
					<h2 style={styles.title}>Heartland Big Band</h2>
					<h1 style={styles.subtitle}>Special Guests</h1>
				</div>
					<PictureGrid />
  		</div>

    );
  }
}

export default Guests;


// https://unsplash.com/@devilcoders Alexey Topolyanskiy}
