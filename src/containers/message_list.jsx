import React, { Component } from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages();
  }

  render(){
    return(<div className="message_list">
      <p>this.props.channel</p>
      {this.props.messages.map((message) => <Message message={message} key={message.created_at}/>)}
    </div>);
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages }, dispatch );
};

function mapStateToProps(state){
  return{
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
