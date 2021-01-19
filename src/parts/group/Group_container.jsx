import React from 'react';
import Group from './Group'
import {connect} from 'react-redux';
import {setGroupAC, subscribeAC, unsubscribeAC, } from './../../redux/group-reducer'

const mapStateToProps = (state) => ({
  start: state.group.start,
  header: state.group.header,
  news: state.group.news,
  posts: state.group.posts,
  gallery: state.group.gallery
});

const mapDispatchToProps = (dispatch) => ({
  setGroup: (group) => dispatch ( setGroupAC(group) ),
  subscribe: () => dispatch( subscribeAC() ),
  unsubscribe: () => dispatch( unsubscribeAC() ),
})

const Group_container = connect(mapStateToProps, mapDispatchToProps)(Group);


export default Group_container;