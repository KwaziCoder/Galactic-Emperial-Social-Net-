let store = {
  _state: {
    profile: {
      posts: [
        { message: 'Oh, no! Our Death Star is destroyed!((((((', likes: 3 },
        { message: 'Haha! We have taken over the base of rebels on Hot! Suck, bitches!!!', likes: 15 },
        { message: 'REtreAAAt!!!! FFFFUUUUUCCCKKKKKK!!!!!', likes: 7 },
      ],
    },
    messanger: {
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
    },
  },
  getState() {
    return this._state;
  },
  setState() {
    alert('Колбэк не назначен!')
  },
  writeMessage() {
    this._state.messanger.messages.push(
      { message: this._state.messanger.inputMessage.textOfNewMessage }
    );
    this.changeInputMessage('');
  },
  changeInputMessage(update) {
    this._state.messanger.inputMessage.textOfNewMessage = update;
    this.setState();
  },
  subscribe(render) {
    this.setState = render;
  }

}

export default store;