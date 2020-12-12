import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';


let reducers = combineReducers({
  profile: profileReducer,
  messanger: messangerReducer,
});

let store = createStore(reducers);

export default store;