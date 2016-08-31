import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {addContact} from '../api/api'

const ButtonStyle = {
  position: 'fixed',
  color: 'white',
  left: 260,
  zIndex: 1,
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nameVal: 'Name',
			emailVal: 'Email',
			messageVal: 'Message'
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = (e) => {
    e.preventDefault()
    addContact({
      name:this.state.nameVal,
      email:this.state.emailVal,
      message:this.state.messageVal
    }).catch(function(err){
      console.log(err);
    });
    this.setState({open: false});
  }

  handleNameChange = (event) => {
      this.setState({
        nameVal: event.target.value
      });
    };

  handleEmailChange = (event) => {
      this.setState({
        emailVal: event.target.value
      });
    };

  handleMessageChange = (event) => {
    this.setState({
      messageVal: event.target.value
    });
  };

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
          label="Contact Us"
          onClick={this.handleOpen} />

        <Dialog
          title="Contact Us"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <form action="http://formspree.io/noiseartist@gmail.com" method="POST">
				<TextField
          hintText="Name"
          floatingLabelText="Name"
          nameVal={this.state.nameVal}
          onChange={this.handleNameChange}
    		/>
				<TextField
          hintText="Email"
          floatingLabelText="Email"
          emailVal={this.state.emailVal}
          onChange={this.handleEmailChange}
    		/>
        <TextField
          hintText="Message"
          floatingLabelText="Message"
          multiLine={true}
          rows={2}
          rowsMax={8}
          messageVal={this.state.messageVal}
          onChange={this.handleMessageChange}
        />
      <input type="text" name="_gotcha" style={{display:"none"}} />
        </form>
        </Dialog>

      </div>
    );
  }
}
