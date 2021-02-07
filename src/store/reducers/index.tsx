import { combineReducers } from "redux";
import clientsReducer from "./clients.reducers";
import stockReducer from "./stock.reducers";

export default combineReducers({
  clients: clientsReducer,
  stock: stockReducer,
});
