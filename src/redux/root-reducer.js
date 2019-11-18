import { combineReducers } from "redux";

import { UserActionTypes } from "./user/user.types";
import userReducer from "./user/user.reducer";

export default combineReducers({ user: userReducer });
