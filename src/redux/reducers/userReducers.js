import { ActionTypes } from "../constants/action-type";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    case ActionTypes.REMOVE_USERS:
      return {};

    default:
      return state;
  }
};
