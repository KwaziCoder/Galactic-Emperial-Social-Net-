const SET_NEWS = 'SET_NEWS'
const SET_POSTS = 'SET_POSTS'
const SET_GALLERY = 'SET_GALLERY'


const initialState = {
  header: {
    image: image,
    name: 'Star wars community',
    moto: 'Nothing is obstacle, everything is new experience.',
    description: 'dawdawd wadawdawfdwfawfawfawd dawdaw  daw awd  dwadwa  wdwaff awd aw wadf aw da d wa  dwaaw daw. d awdwada wda wdawdawddwa daw dwa',
    subscribersNumber: 114, 
    subscribed: false,
  },
  news: [
    {id: 1, image: newsImage, title: 'a piece of news'},
    {id: 2, image: newsImage, title: 'a piece of news'},
    {id: 3, image: newsImage, title: 'a piece of news'},
    {id: 4, image: newsImage, title: 'a piece of news'},
    {id: 5, image: newsImage, title: 'a piece of news'},
    {id: 6, image: newsImage, title: 'a piece of news'},
  ],
  posts: [
    {id: 1, avatar: avatar, groupName: 'Star wars community', date: '15 october 2020', image: image, text: 'text'},
    {id: 2, avatar: avatar, groupName: 'Star wars community', date: '15 october 2020', image: image, text: 'text'},
    {id: 3, avatar: avatar, groupName: 'Star wars community', date: '15 october 2020', image: image, text: 'text'},
    {id: 4, avatar: avatar, groupName: 'Star wars community', date: '15 october 2020', image: image, text: 'text'},
  ],
  gallery: [
    {id: 1, image: image},
    {id: 2, image: image},
    {id: 3, image: image},
    {id: 4, image: image},
    {id: 5, image: image},
    {id: 6, image: image},
    {id: 7, image: image},
  ]
}

const groupReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_NEWS:
      return {
        ...state,
        news: [...action.news]
      };

      case SET_POSTS:
      return {
        ...state,
        posts: [...action.posts]
      };

      case SET_GALLERY:
      return {
        ...state,
        gallery: [...action.images]
      };

    default:
      return state;
  }
}

export default groupReducer;

export const setNewsAC = (news) => {
  return { type: SET_NEWS, news }
}
export const setPostsAC = (posts) => {
  return { type: SET_POSTS, posts }
}
export const setGalleryAC = (images) => {
  return { type: SET_GALLERY, images }
}