import React from 'react';
import Group from './Group'
import {connect} from 'react-redux';
import {setNewsAC, setPostsAC, setGalleryAC,  subscribeAC, unsubscribeAC, } from './../../redux/group-reducer'

const mapStateToProps = (state) => ({
  header: state.header,
  news: state.news,
  posts: state.posts,
  gallery: state.gallery
});

const mapDispatchToProps = (dispatch) => ({
  setNews: (news) => dispatch( setNewsAC(news) ),
  setPosts: (posts) => dispatch( setPostsAC(posts) ),
  setGallery: (images) => dispatch( setGalleryAC(images) ),
  subscribe: () => dispatch( subscribeAC() ),
  unsubscribe: () => dispatch( unsubscribeAC() ),
})

const Group_container = connect(mapStateToProps, mapDispatchToProps)(Group);


export default Group_container;