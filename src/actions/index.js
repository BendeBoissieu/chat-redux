//import messages from '../message_list_data'
// previous
// export function setMessages(){
//   return {
//     type: 'MESSAGE_LIST',
//     payload: messages
//   }
// }

const url_base='https://wagon-chat.herokuapp.com/';

export function setMessages(channel) {
  console.log("action");
  console.log("channel_action"+channel);
  const url = `${url_base}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: "MESSAGE_LIST",
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  console.log("createmsg_"+channel);
  const body = { "author":author,"content":content };
  const url = `${url_base}/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: "MESSAGE_POSTED",
    payload: promise
  };
}

export function selectChannel(channel){
  return {
    type: 'SELECTED_CHANNEL',
    payload: channel
  }
}


