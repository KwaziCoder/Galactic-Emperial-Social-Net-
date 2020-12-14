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
      return {
      ...state,
      messages: [...state.messages, { message: state.inputMessage.textOfNewMessage }],
      inputMessage: {
        textOfNewMessage: '',
      },
      
      }

    case CHANGE_INPUT_MESSAGE:
      return {
      ...state,
      inputMessage: {
        textOfNewMessage: action.update,
      },
      }

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