import actionTypes from "./album.types";

export const addAlbums = () => {
  return {
    type: actionTypes.ADD_ALBUMS,
  };
};

export const addSuccess = (payload) => {
  return {
    type: actionTypes.ADD_SUCCESS,
    payload,
  };
};
