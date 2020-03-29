import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageFrom extends Component {
  handleChange = () => {
    let newMessage = document.getElementById('message').value;
    this.props.handleSubmit("general", "Ben", newMessage);
  };

  render(){
    return(
      <div>
          Add a new message: <input id='message' type='text'></input>
          <button onClick={this.handleChange}> Submit </button>
      </div>
      );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { handleSubmit: createMessage }, dispatch);
};


export default connect(null, mapDispatchToProps) (MessageFrom);
