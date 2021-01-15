import React from 'react';
import Subscriptions from './Subscriptions'
import {connect} from 'react-redux';
import {setGroupsAC, subscribeAC, unsubscribeAC, updateSearchInputAC, switchOptionAC} from './../../redux/subscriptions-reducer'

const mapStateToProps = (state) => ({
  groups: state.subscriptions.groups,
  searchControl: state.subscriptions.searchControl,
});

const mapDispatchToProps = (dispatch) => ({
  setGroups: (groups) => dispatch( setGroupsAC(groups) ),
  subscribe: (groupId) => dispatch( subscribeAC(groupId) ),
  unsubscribe: (groupId) => dispatch( unsubscribeAC(groupId) ),
  updateSearchInput: (update) => dispatch( updateSearchInputAC(update) ),
  switchOption: (optionId) => dispatch( switchOptionAC(optionId) ),
})

const Subsriptions_container = connect(mapStateToProps, mapDispatchToProps)(Subscriptions);


export default Subsriptions_container;