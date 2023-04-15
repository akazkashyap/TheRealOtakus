import {
  CHANGE_PROFILE_PIC,
  CHANGE_USER_NAME,
  SET_INITIAL_USER_STATE,
} from '../constants';

const initialState = {};
export const userChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_USER_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case CHANGE_PROFILE_PIC:
      return {
        ...state,
        profilePic: action.payload,
      };
    default:
      return state;
  }
};
