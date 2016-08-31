import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavPanel from './NavPanel';
import Contact from './Contact';
import MailingList from './MailingList';

const styles = {
  navbar: {
    height: '50px',
    width: '100%',
    display: 'inline-block',
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    zIndex: 1
  },
  logo: {
    position: 'fixed',
    top: 7,
    fontFamily: 'Federo',
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#13AFAA'
  }
}

class App extends Component {
  render() {
    return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <div style={styles.navbar}>
            <NavPanel />
    				<Contact />
    				<MailingList />
            <div><Link to="/" style={styles.logo}>HeartlandBigBand</Link></div>
          </div>
          {this.props.children}
        </div>
		  </MuiThemeProvider>
    );
  }
}

export default App;
