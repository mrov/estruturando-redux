import { applyMiddleware, createStore } from 'redux';
import reducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

/* middlewares instalados com npm install, tanto o redux-logger quando redux-thunk */
const middleware = applyMiddleware(thunk, logger);

export default createStore(reducers, middleware);