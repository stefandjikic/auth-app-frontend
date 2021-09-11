import { REMOVE_USER, SET_USER } from '../types/authTypes';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};
