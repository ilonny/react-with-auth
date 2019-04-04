import { createStore, applyMiddleware, compose } from "redux";
import { apiMiddleware } from 'redux-api-middleware'
import apiAuthInjector from './apiAuthInjector'
import thunk from "redux-thunk";
import appReducer from "../reducers";

export default function configureStore() {
  return createStore(
    appReducer,
    compose(
      applyMiddleware(apiAuthInjector, apiMiddleware, thunk)
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
