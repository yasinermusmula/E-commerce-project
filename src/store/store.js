import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { storeReducer } from "./reducers/storeReducer";
import { userReducers } from "./reducers/userReducer";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger/src";

const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  storeData: storeReducer,
  user: userReducers,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
