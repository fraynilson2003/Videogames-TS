import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;