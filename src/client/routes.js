import React from 'react';
import { Component } from 'react';
import { browserHistory } from 'react-router';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import App from './components/App';
import BandRoster from './components/BandRoster';
import Guests from './components/Guests';
import Series from './components/Series';
import ConcertDetail from './components/ConcertDetail';
import GuestDetail from './components/GuestDetail';


class Routes extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
						<Route path="roster" component={BandRoster} />
						<Route path="guests" component={Guests} />
						<Route path="series" component={Series} />
						<Route path="concert-detail/:id" component={ConcertDetail} />
						<Route path="guest-detail/:id" component={GuestDetail} />
				</Route>
			</Router>
		);
	}
}

export default Routes;
