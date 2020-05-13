import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import { basicReducer } from "./basic";
import DataModule from "./data";

const composeEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enHancer = composeEnHancer(applyMiddleware(reduxThunk));

const reducer = combineReducers({
  basicReducer,
  ...DataModule.reducer,
});

export default createStore(reducer, enHancer);
