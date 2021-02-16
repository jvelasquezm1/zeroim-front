import { combineReducers } from "redux";
import clientsReducer from "./clients.reducers";
import stockReducer from "./stock.reducers";
import billsReducer from "./bills.reducers";

export default combineReducers({
  clients: clientsReducer,
  stock: stockReducer,
  bills: billsReducer,
});
