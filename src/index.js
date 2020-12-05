import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  {message: 'Oh, no! Our Death Star is destroyed!((((((', likes: 3},
  {message: 'Haha! We have taken over the base of rebels on Hot! Suck, bitches!!!', likes: 15},
  {message: 'REtreAAAt!!!! FFFFUUUUUCCCKKKKKK!!!!!', likes: 7},
];

let dialogs = [
  {id: 1, person: 'LT334'},
  {id: 2, person: 'FN753'},
  {id: 1, person: 'IG439'},
];

let messages = [
  {message: 'Hi there!'},
  {message: 'Hi! How are you, bro?'},
  {message: 'Not so bad! My congragts to you with the victory on Hot!'},
  {message: 'Thanks! It was a hard battle!'},
  {message: 'Yes, I’ve heard of it!'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
