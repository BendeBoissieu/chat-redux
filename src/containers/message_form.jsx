import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';
import { setMessages } from '../actions';

class MessageForm extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    console.log("USER_"+this.props.currentUser)
    createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    setMessages(this.props.selectedChannel);
    this.setState({ value: '' });
  }

  render(){
    return(
      <div>
          Add a new message: <input id='message' type='text' value={this.state.value} onChange={this.handleChange}></input>
          <button onClick={() => this.handleSubmit(this.props.selectedChannel)}> Submit </button>
      </div>
      );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { createMessage, setMessages}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps) (MessageForm);
