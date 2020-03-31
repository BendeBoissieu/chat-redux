import React, { Component } from 'react';
import Message from '../components/message';
import MessageForm from './message_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages, selectChannel } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  //componentDidMount() {
  //  var refreshing = window.setInterval(this.props.setMessages, 5000)
  //}

  //componentWillUnmount() {
  //   clearInterval(this.refreshing)
  //}

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  setMessages = () => {
    this.props.setMessages(this.props.selectedChannel)
  }

  render(){
    console.log("currentUser_"+this.props.currentUser);
    return(
      <div>
        <div className="message_list" ref={(list) => { this.list = list; }}>
          <p>{this.props.selectedChannel}</p>
          <p>{this.props.currentUser}</p>
          {this.props.messages.map((message) => <Message message={message} key={message.created_at}/>)}
        </div>
        <div className="message_form">
          <MessageForm />
        </div>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages }, dispatch );
};

function mapStateToProps(state){
  return{
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
