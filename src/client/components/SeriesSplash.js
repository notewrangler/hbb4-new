import React from 'react';
import { Component } from 'react';

const seriesImageUrl = 'img/theater/fort-stage-angle.jpg';
const fortHallUrl = 'img/theater/fort-hall-front.jpg';
const fortSignUrl = 'img/theater/fort-sign.jpg';

const styles = {
	splash: {
		position: 'fixed',
		top: 0,
		// left: 6,
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
		marginTop: '5.6em',
		color: '#13AFAA',
		fontFamily: 'Federo',
		fontSize: '4.7em'
	},
	subtitle: {
		margin: 'auto',
		textAlign: 'center',
		color: '#85EAF2',
		fontFamily: 'Federo',
		fontSize: '3.5em',
		marginBottom: '2.5em'
	},
	fortImg: {
		position: 'absolute',
		right: 0,
		bottom: 60,
		width: '20%',
		borderRadius: '20%'
	},
	fortSignImg: {
		position: 'absolute',
		left: 0,
		bottom: 60,
		width: '20%',
		borderRadius: '20%'
	},
	line: {
		display: 'inline',
		width: '20px',
		color: 'white'
	}
}

class SeriesSplash extends Component {
	render() {
		return (
				<div className="container-fluid">
				<div style={styles.splash}>
						<img src={fortHallUrl} style={styles.fortImg}/>
						<img src={fortSignUrl} style={styles.fortSignImg}/>
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
