import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
// all the array values above get fed to the middlewares below as their own argument
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
