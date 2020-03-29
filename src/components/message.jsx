import React, { Component } from 'react';

class Message extends Component {
  render(){
    return(<div>
      <p>{this.props.message.author} - {this.props.message.created_at}</p>
      <p>{this.props.message.content}</p>
     </div>);
  }
}

// const Message = (props) => {
//   return(<div>{props.message.author} </div>);
// };

export default Message;
