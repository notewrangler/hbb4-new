import React from 'react';
import { Component } from 'react';
import Guests from '../data/guests';

const bkgPhotoUrl = "../img/guests/unsplash/dark-stage-copy.jpg"

const styles = {
	splash: {
		position: 'relative',
		margin: 'auto',
		backgroundImage: 'url('+ bkgPhotoUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		marginTop: 0,
		backgroundPosition: 'top',
		maxHeight: '180em',
		zIndex: '-1'
	},
	photo: {
		minWidth: "60%",
		maxWidth: "90%",
		marginTop: "15%"
	},
	blurb: {
		color: "white",
		marginBottom: "300px"

	},
	ptag: {
		fontSize: "2rem"
	}
}

class GuestDetail extends Component {
	render() {
		let artisti = []
		let artist = {}
		const gID = this.props.params.id;
		artisti = Guests.filter(function(art){
			if (art.gid === gID) {
				return true
			}else {
				return false
			}
		});
		artist = artisti[0]
		return (

				<div style={styles.splash}>
					<div className="container">
						<div className="row">
							<div className="col-md-5">
			    			<img src={artist.detailPhotoUrl} style={styles.photo}/>
			    		</div>
							<div className="col-md-7" style={styles.blurb}>
									<h1 style={{marginTop: "100px"}}>{artist.name}</h1>
									<h2>{artist.instrument}</h2>
									<h3>{artist.concert}: {artist.date}</h3>
									{artist.content.map(function(paragraph){
										let pKey = artist.content.indexOf(paragraph);
										return(
											<p style={styles.ptag} key={pKey}>{paragraph} </p>
										)
									})}
			    		</div>
						</div>
					</div>
			</div>

		)
	}
}

export default GuestDetail;
