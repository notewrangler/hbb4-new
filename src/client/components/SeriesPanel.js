import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import seriesList from '../data/seriesList';
import { CONCERTS_PANEL_STYLE, CONCERTS_CONTENT_STYLE } from '../helpers/styles';

const styles = {
	bckg: {
		margin: 'auto',
		background: "#DDD9D9",
		width: '100%',
		marginTop: '30em'
	},
	cardTitle: {
		fontSize: '3em'
	},
	cardSubTitle: {
		fontSize: '1.7em'
	},
	cardText: {
		fontSize: '1.5em'
	},
	cardDate: {
		fontSize: '2em'
	},
	buttonLabel: {
		fontSize: '1.2em',
		fontWeight: 'bold'
	}
};


class SeriesPanel extends Component {
	render() {
		return (
			<div style={styles.bckg}>
				<div style={CONCERTS_PANEL_STYLE}>
						{ seriesList.map(function(concert){
							let cDates = "";
							let concertUrl = `concert-detail/${concert.cid}`
							if (concert.date2) {
								cDates = `${concert.date1} & ${concert.date2} -- ${concert.time}`;
							} else {
								cDates = `${concert.date1} -- ${concert.time}`;
							}

							return (
								<Card key={concert.cid}>
								    <CardMedia
								      overlay={<CardTitle
											title={concert.title}
											titleStyle={styles.cardTitle}
											subtitle={concert.subtitle ? concert.subtitle : null} />}
								    >
								      <img src={concert.picUrl}/>
								    </CardMedia>
								    <CardTitle
											title={cDates}
											titleStyle={styles.cardDate}
											subtitleStyle={styles.cardSubTitle}
											subtitle={concert.guests} />
								    <CardText
											style={styles.cardText}>
								      {concert.blurb}
								    </CardText>
								    <CardActions>
								      <Link to={concertUrl}>
											<FlatButton
											label="Order Tickets"
											labelStyle={styles.buttonLabel} />
											</Link>
								    </CardActions>
								  </Card>
							)
						})}
				</div>
			</div>
		)
	}
}

export default SeriesPanel;
