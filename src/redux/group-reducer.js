const SET_GROUP = 'SET_GROUP'
const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'


const initialState = {
  start: true,
  header: {},
  news: [],
  posts: [],
  gallery: [],
}

const groupReducer = (state = initialState, action) => {
  switch (action.type) {

      case SET_GROUP:
      return {
        ...action.group,
        header: {...action.group.header},
        news: [...action.group.news],
        posts: action.group.posts.map( p => {
          return p;
        }),
        gallery: action.group.gallery.map( img => {
          return img;
        }),
      };


      case SUBSCRIBE:
      return {
        ...state,
        header: {...state.header, subscribed: true}
      };
    

    case UNSUBSCRIBE:
      return {
        ...state,
        header: {...state.header, subscribed: false}
      };
     

    default:
      return state;
  }
}

export default groupReducer;


export const setGroupAC = (group) => {
  return { type: SET_GROUP, group };
}
export const subscribeAC = () => {
  return { type: SUBSCRIBE };
}
export const unsubscribeAC = () => {
  return { type: UNSUBSCRIBE };
}