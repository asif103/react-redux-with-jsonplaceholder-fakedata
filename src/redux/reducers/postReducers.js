import { ActionTypes } from "../constants/action-type";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};
export const singlePostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SINGLE_POST:
      return { ...state, post: payload };
    case ActionTypes.REMOVE_SINGLE_POST_FROM_STATE:
      return {};

    default:
      return state;
  }
};
