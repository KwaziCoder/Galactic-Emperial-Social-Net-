const WRITE_MESSAGE = 'WRITE_MESSAGE';
const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';


const messangerReducer = (state, action) => {
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