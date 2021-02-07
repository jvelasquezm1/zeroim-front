import { combineReducers } from "redux";
import clientsReducer from "./clients.reducers";

export default combineReducers({
  clients: clientsReducer,
});
