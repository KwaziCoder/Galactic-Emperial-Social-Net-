import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';
import subscriptionsReducer from './subscriptions-reducer';



let reducers = combineReducers({
  profile: profileReducer,
  messanger: messangerReducer,
  subscriptions: subscriptionsReducer,
});

let store = createStore(reducers);

export default store;