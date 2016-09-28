import React from 'react';
import { Component } from 'react';
import { Navbar, Alert, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import hbbk from '../data/wut'
// import Members from './Members';

const styles = {
	content: {
		position: 'relative',
		margin: 'auto',
		marginTop: '15px',
		paddingBottom: '30px'
	},
	social: {
		width: '2.5em',
		height: '2.5em',
		marginRight: '30px'
	},
	myLogo: {
		width: '120px',
		borderRadius: '8%',
		marginBottom: '3px'
	},
	footer: {
		position: 'absolute',
		marginTop: '5%',
		bottom: 0,
    color: 'white',
    width: '100%',
    height: '12em'
  }
}

const ButtonStyle = {
  position: 'relative',
	// backgroundColor: '#696969',
  color: 'white',
	left: '45%',
	bottom: 120,
  zIndex: 1
}

class Members extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			pVal: ""
		}
	}

	handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	handleSubmit = (e) => {
    e.preventDefault()

		if (this.state.pVal === hbbk.opt) {
			browserHistory.push('portal')
		} else {
			alert("Invalid Password")
		}

    this.setState({
      pVal: "",
      open: false
    });
  }


handlePwChange = (event) => {
		this.setState({
			pVal: event.target.value
		});
	}

render() {
		const actions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				onClick={this.handleSubmit}
			/>,
		];

		return (
			<div>
				<FlatButton
					style={ButtonStyle}
					backgroundColor="#000000"
					hoverColor="#B7E0E5"
					label="Band Member Portal"
					onClick={this.handleOpen} />

					<Dialog
						title="This Resource Requires a Password:"
						actions={actions}
						modal={true}
						open={this.state.open}
					>
					<TextField
						hintText="Password"
						floatingLabelText="Password"
						value={this.state.pVal}
						onChange={this.handlePwChange}
					/>
				</Dialog>

			</div>
		);
	}
}

export default class Footer extends Component {
	render() {
		return(
			<Navbar inverse staticBottom style={styles.footer}>
				<div className="container">

						<div style={styles.content} className="row">
							<div className="col-md-4 col-md-offset-3">
								<a href="https://www.facebook.com/Heartland-Big-Band-379400775573287/?fref=ts" target="_blank" title="Follow us on Facebook"><img src="../../img/social/1446098703_Facebook.png" style={styles.social}/></a>

								<a href="https://twitter.com/HeartlandBBand"  title="Follow us on Twitter" target="_blank"><img src="../../img/social/1446098714_Twitter.png" style={styles.social}/></a>
       				</div>
							<div className="col-md-1"></div>

						</div>

						<div className="row">
								<div className="col-md-4 col-md-offset-3">
								<p>&copy; 2016 Heartland Big Band, All Rights Reserved </p>
        				</div>

								<div className="col-md-4">
        					<p>Powered by <a href="http://notewrangler.com" target="_blank" title="Visit notewrangler.com"><img src='../../img/notewrangler.png' style={styles.myLogo}/></a></p>
        				</div>
     				</div>
							<Members />
    		</div>
   		</Navbar>
		)
	}
}
