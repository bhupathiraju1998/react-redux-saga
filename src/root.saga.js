import actionReducer from "./album.reducer";
import { all, call } from "redux-saga/effects";
import albumSaga from "./album.sagas";
export default function* rootSaga() {
  yield all([call(albumSaga)]);
}
