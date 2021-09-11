import { REMOVE_USER, SET_USER } from "../types/authTypes";

export const setUserAuthAction = (user) => {
  return {
    type: SET_USER,
    payload: user,
  }
}

export const removeUserAuthAction = () => {
  return {
    type: REMOVE_USER,
  }
}