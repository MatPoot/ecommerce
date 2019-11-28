// import { combineReducers } from "redux";

// import { UserActionTypes } from "./user/user.types";
// import userReducer from "./user/user.reducer";

// export default combineReducers({ user: userReducer });

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
