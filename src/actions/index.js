//import messages from '../message_list_data'
// previous
// export function setMessages(){
//   return {
//     type: 'MESSAGE_LIST',
//     payload: messages
//   }
// }

const url='https://wagon-chat.herokuapp.com/general/messages.json'

export function setMessages(){
 return fetch(url)
 .then(response => response.json())
 .then((data) => {
 return {
  type: 'MESSAGE_LIST',
  payload: data
 };
 });
}

export function createMessage(channel, author, content) {
  const body = { "author":author,"content":content };
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


