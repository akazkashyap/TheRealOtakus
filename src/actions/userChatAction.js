import {
  CHANGE_PROFILE_PIC,
  CHANGE_USER_NAME,
  SET_INITIAL_USER_STATE,
} from '../constants';
import {getUniqueId} from 'react-native-device-info';
import {getRandomIntInclusive} from '../utils';

export const changeUsername = name => async dispatch => {
  dispatch({type: CHANGE_USER_NAME, payload: name});
};
export const changeProfilePic = uri => async dispatch => {
  dispatch({type: CHANGE_PROFILE_PIC, payload: uri});
};

export const fetchInitialState = () => (dispatch, getState) => {
  const state = getState().userChat;
  if (!state.profilePic || !state.username) {
    getUniqueId().then(id => {
      const profilePic = `https://randomuser.me/api/portraits/thumb/women/${getRandomIntInclusive(
        0,
        99,
      )}.jpg`;
      const initialState = {username: id, profilePic};
      dispatch({type: SET_INITIAL_USER_STATE, payload: initialState});
    });
  }
};
