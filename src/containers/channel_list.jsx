import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';
import { setMessages } from '../actions';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.setMessages(channel);
  };

  renderChannel = (channel) => {
    return(
      <div key={channel} onClick={() => this.handleClick(channel)} className={channel === this.props.selectedChannel ? 'active' : null}>
        {channel}
      </div>
    );
  }

  render(){
    return(<div className="channel_list">{this.props.channels.map(channel => this.renderChannel(channel))} </div>);
  }
}

function mapStateToProps(state){
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, setMessages }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
