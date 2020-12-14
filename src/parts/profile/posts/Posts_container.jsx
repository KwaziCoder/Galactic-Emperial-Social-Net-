import React from 'react';
import { connect } from 'react-redux';

import Posts from './Posts'


const mapStateToProps = (state) => ({
  posts: state.profile.posts,
});

const mapDispatchToProps = (dispatch) => ({
  
});

const Posts_container = connect(mapStateToProps, mapDispatchToProps)(Posts);
  

export default Posts_container;