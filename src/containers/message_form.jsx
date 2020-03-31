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
  };

  handleSubmit = (event) => {
    //event.preventDefault();
    createMessage(this.props.selectedChannel, "ben", this.state.value);
    this.setState({ value: '' });
    this.props.setMessages(this.props.selectedChannel)
  };

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
    selectedChannel: state.selectedChannel
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { handleSubmit: createMessage, setMessages}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps) (MessageForm);
