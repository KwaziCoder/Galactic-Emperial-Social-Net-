const WRITE_MESSAGE = 'WRITE_MESSAGE';
const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';



const initialState = {
  dialogs: [
    { id: 1, person: 'LT334' },
    { id: 2, person: 'FN753' },
    { id: 1, person: 'IG439' },
  ],
  messages: [
    { message: 'Hi there!' },
    { message: 'Hi! How are you, bro?' },
    { message: 'Not so bad! My congragts to you with the victory on Hot!' },
    { message: 'Thanks! It was a hard battle!' },
    { message: 'Yes, I’ve heard of it!' },
  ],
  inputMessage: {
    textOfNewMessage: '',
  },
};

const messangerReducer = (state = initialState, action) => {
  switch(action.type) {

    case WRITE_MESSAGE:
      let text = state.inputMessage.textOfNewMessage;
      state.messages.push({ message: text });
      state.inputMessage.textOfNewMessage= '';
      return state;

    case CHANGE_INPUT_MESSAGE:
      state.inputMessage.textOfNewMessage = action.update;
      return state;

    default:
      return state;
  } 
}

export default messangerReducer;


export const actionCreator = {
  writeMessage() {
    return {type: WRITE_MESSAGE}
  },
  changeInputMessage(update) {
    return {type: CHANGE_INPUT_MESSAGE, update: update}
  },
}