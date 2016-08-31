import React from 'react';
import {Component} from 'react';

import { NEXT_CONCERT_CONTENT_STYLE, NEXT_CONCERT_PANEL_STYLE, O_N_LOGO_STYLE } from '../helpers/styles';


class NextConcert extends Component {

  render() {

    return (
			<div style={NEXT_CONCERT_PANEL_STYLE}>
				<div style={ NEXT_CONCERT_CONTENT_STYLE }>
						<h3>Our Next Concert...</h3>
						<p>Presented by: <img src="img/old_national_logo.jpg" style={O_N_LOGO_STYLE}/></p>

	          <h1>{this.props.nextC.title}</h1>
            <h3>{this.props.nextC.date1} -- {this.props.nextC.time}</h3>
            {this.props.nextC.date2 ?
            <h3>{this.props.nextC.date2} -- {this.props.nextC.time}</h3>
             : null}
            <p>{this.props.nextC.blurb}</p>
            <h4>{this.props.nextC.guests}</h4>

							<p>See concert details here.</p>
	      </div>
			</div>


    );
  }
}

export default NextConcert;

// <h2>{concert.title}</h2>
// <h4>{concert.dates[0]} -- {concert.time}</h4>
// {concert.dates[1] ? <h4>{concert.dates[1]} -- {concert.time}</h4> : null}
// <p>{concert.blurb}</p>
