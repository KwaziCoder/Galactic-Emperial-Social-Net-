

let state = {
  profile: {
    posts: [
      {message: 'Oh, no! Our Death Star is destroyed!((((((', likes: 3},
      {message: 'Haha! We have taken over the base of rebels on Hot! Suck, bitches!!!', likes: 15},
      {message: 'REtreAAAt!!!! FFFFUUUUUCCCKKKKKK!!!!!', likes: 7},
    ],
  },
  messanger: {
    dialogs: [
      {id: 1, person: 'LT334'},
      {id: 2, person: 'FN753'},
      {id: 1, person: 'IG439'},
    ],
    messages: [
      {message: 'Hi there!'},
      {message: 'Hi! How are you, bro?'},
      {message: 'Not so bad! My congragts to you with the victory on Hot!'},
      {message: 'Thanks! It was a hard battle!'},
      {message: 'Yes, I’ve heard of it!'},
    ],
    inputMessage:{
      textOfNewMessage: '',
      writeMessage: writeMessage,
      changeInputMessage: changeInputMessage,

    }
    
  },
}

function writeMessage() {
  state.messanger.messages.push(
    {message: state.messanger.inputMessage.textOfNewMessage}
  );
  changeInputMessage('');
}

function changeInputMessage(update) {
  state.messanger.inputMessage.textOfNewMessage = update;
  renderFullApp(state);
}


let renderFullApp;

export function subscribe(eventListener) {
  renderFullApp = eventListener;
}

export default state;