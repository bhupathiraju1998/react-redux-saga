import actionTypes from "./album.types";

const intialState = {
  albums: [],
  isFetching: false,
};

const actionReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ALBUMS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        albums: action.payload,
      };

    default:
      return state;
  }
};

export default actionReducer;
