import React from 'react';
import {actionCreator} from '../../../redux/messanger-reducer'
import Messages from './Messages'
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  messages: state.messanger.messages,
  inputState: state.messanger.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  writeMessage: () => {dispatch(actionCreator.writeMessage())},
  changeInputMessage: (update) => {dispatch(actionCreator.changeInputMessage(update))},
});



const Messages_container = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default Messages_container;