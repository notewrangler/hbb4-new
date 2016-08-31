import React from 'react';
import { Component } from 'react';
import { SERIES_HEADER_STYLE } from '../helpers/styles';

const seriesImageUrl = '/img/theater/fort-stage-angle.jpg';

const styles = {
	splash: {
		position: 'fixed',
		top: 0,
		width: '100%',
		backgroundImage: 'url(' + seriesImageUrl + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		margin: 'auto',
		marginTop: '40px',
		height: '65em',
		zIndex: '-1'
	},
	title: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: '5em',
		color: '#EAE5E5',
		fontFamily: 'Federo',
		fontSize: '5em'
	},
	subtitle: {
		margin: 'auto',
		textAlign: 'center',
		color: '#EAE5E5',
		fontFamily: 'Federo',
		fontSize: '3.5em'
	},
	fortPic: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		width: '20%',
		borderRadius: '40%'
	},
	fortSignPic: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '20%',
		borderRadius: '40%'
	}
}

class SeriesSplash extends Component {
	render() {
		return (
				<div>
				<div style={styles.splash}>

						<img src='../img/theater/fort-hall-front.jpg' style={styles.fortPic}/>
						<img src='../img/theater/fort-sign.jpg' style={styles.fortSignPic}/>
				</div>
				<div>
					<h1 style={styles.title}>Swingin' at the Fort</h1>
					<h2 style={styles.subtitle}>Heartland Big Band 2016-2017 Concert Series</h2>
				</div>

   		</div>

		);
	}
}

export default SeriesSplash;
