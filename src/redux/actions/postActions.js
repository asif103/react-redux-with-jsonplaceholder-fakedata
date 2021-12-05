import { ActionTypes } from "../constants/action-type";

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const setSinglePosts = (singlePost) => {
  return {
    type: ActionTypes.SET_SINGLE_POST,
    payload: singlePost,
  };
};

export const removePostFromSinglePostState = (singlePost) => {
  return {
    type: ActionTypes.REMOVE_SINGLE_POST_FROM_STATE,
    payload: singlePost,
  };
};
