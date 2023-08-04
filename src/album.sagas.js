import { takeLatest, put } from "redux-saga/effects";
import { addSuccess } from "./album.actions";
import actionTypes from "./album.types";
import axios from "axios";

export function* addAlbumsAsync() {
  try {
    const users = yield axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data);
    yield put(addSuccess(users));
  } catch (error) {
    console.log("error saga", error);
  }
}

export default function* albumSaga() {
  yield takeLatest(actionTypes.ADD_ALBUMS, addAlbumsAsync);
}
