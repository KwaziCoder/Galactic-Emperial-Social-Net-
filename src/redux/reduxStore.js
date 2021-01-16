import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';
import subscriptionsReducer from './subscriptions-reducer';
import groupReducer from './group-reducer';



let reducers = combineReducers({
  profile: profileReducer,
  messanger: messangerReducer,
  subscriptions: subscriptionsReducer,
  group: groupReducer,
});

let store = createStore(reducers);

export default store;