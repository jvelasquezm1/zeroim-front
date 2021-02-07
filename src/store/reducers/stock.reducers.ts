import { stockActions } from "../actions/stock.actions";

const initialState = {
  stock: [],
  isFetchingStock: false,
  fetchStockError: null,
};

const stockReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case stockActions.START_FETCH_STOCK:
      return { ...state, isFetchingStock: true };
    case stockActions.SUCCESS_FETCH_STOCK:
      return { ...state, stock: action.payload, isFetchingStock: false };
    case stockActions.ERROR_FETCH_STOCK:
      return {
        ...state,
        fetchStockError: action.payload,
        isFetchingStock: false,
      };
    case stockActions.CLEAR_STOCK:
      return { ...state, stock: [] };
    default:
      return state;
  }
};

export default stockReducer;
