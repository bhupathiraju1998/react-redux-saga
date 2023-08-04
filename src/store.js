import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root.saga";
import thunk from "redux-thunk";
import actionReducer from "./album.reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhncers = compose(...enhancers);

const store = createStore(actionReducer, composedEnhncers);

sagaMiddleware.run(rootSaga);

export { store };
