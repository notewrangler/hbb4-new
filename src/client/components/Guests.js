import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import  GuestArtists  from '../data/guests';
import {GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';



const guestImageUrl = '../../img/unsplash/solo-spot.jpeg';

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
	photoCredit: {
		position: 'fixed',
		right: 0,
		top: 60,
		color: '#CCCCCC'
	},
	titleBlock: {
		marginBottom: '22%'
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
	gridTile: {
		margin: 0,
		padding: 0,
		width: '100%',
		height: 500
	},
	gridBody: {
		marginBottom: '6%'
	}
}


class PhotoGrid extends Component {
	constructor(props){
		super(props)
	}

 	render() {
		var newBlock = []
		var makeRows = (guestList) => {
			var gList = guestList
				if (gList.length > 0) {
					var guestChunk = gList.splice(0,3)
					newBlock.push(guestChunk);
					return makeRows(gList);
				} else {
					return newBlock;
				}
			};

		var newRows = makeRows(GuestArtists)

		return (
			<div className="container" style={styles.gridBody}>
				{newRows.map(function(blockRow){
					return <div className="row" key={blockRow[0].gid}>
     					{blockRow.map(function(tile){
								return (
									<div className="col-md-4" key={tile.gid}>
									<GridTile
										style={styles.gridTile}
										title={tile.name}
										subtitle={<span>{tile.date}--{tile.concert}</span>}
										actionIcon={<Link to={`guest-detail/${tile.gid}`}><RaisedButton label="Bio" primary={true}></RaisedButton></Link>}
									>
										<img src={tile.photoUrl} />
									</GridTile>
									</div>
								)
							})}
     			</div>
					})}
			</div>

		)
	}
}

class Guests extends Component {
  render() {
    return (
			<div className="container-fluid">
				<div style={styles.splash}>
					<p style={styles.photoCredit}>Photo Credit: <a href="https://unsplash.com/@devilcoders">Alexey Topolyanskiy</a></p>
    		</div>
				<div style={styles.titleBlock}>
					<h2 style={styles.title}>Heartland Big Band</h2>
					<h1 style={styles.subtitle}>Special Guests</h1>
				</div>
    			<PhotoGrid />
    	</div>

    );
  }
}

export default Guests;


//  }
