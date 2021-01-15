const SET_GROUPS = 'SET_GROUPS'
const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT'
const SWITCH_OPTION = 'SWITCH_OPTION'


const initialState = {
  groups: [],
  searchControl: {
    userInput: '',
    options: [
      { id: 1, name: 'option1', switched: true },
      { id: 2, name: 'option2', switched: false },
      { id: 3, name: 'option3', switched: false },
      { id: 4, name: 'option4', switched: true },
      { id: 5, name: 'option5', switched: false },
    ]
  }
}


const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_GROUPS:
      return {
        ...state,
        groups: [...action.groups]
      };


    case SUBSCRIBE:
      return {
        ...state,
        groups: state.groups.map((group) => {
          if (group.id === action.groupId) {
            return { ...group, subscribed: true };
          } else {
            return group;
          }
        })
      };


    case UNSUBSCRIBE:
      return {
        ...state,
        groups: state.groups.map((group) => {
          if (group.id === action.groupId) {
            return { ...group, subscribed: false };
          } else {
            return group;
          }
        })
      };


    case UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchControl: {
          userInput: action.update,
          ...state.searchControl,
        }
      };


    case SWITCH_OPTION:
      return {
        ...state,
        searchControl: state.searchControl.options.map(option => {
          if (option.id === action.optionId) {
            return { ...option, switched: !option.switched };
          } else {
            return option;
          }
        })
      };


    default:
      return state;
  }
}

export default subscriptionsReducer;


export const setGroupsAC = (groups) => {
  return { type: SET_GROUPS, groups: groups }
}
export const subscribeAC = (groupId) => {
  return { type: SUBSCRIBE, groupId }
}
export const unsubscribeAC = (groupId) => {
  return { type: UNSUBSCRIBE, groupId }
}
export const updateSearchInputAC = (update) => {
  return { type: UPDATE_SEARCH_INPUT, update: update }
}
export const switchOptionAC = (optionId) => {
  return { type: SWITCH_OPTION, option: optionId }
}