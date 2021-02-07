import StockService from "src/services/stock.services";

export const stockActions = {
  START_FETCH_STOCK: "[STOCK] Start fetching stock",
  SUCCESS_FETCH_STOCK: "[STOCK] Success fetching stock",
  ERROR_FETCH_STOCK: "[STOCK] Error fetching stock",
  CLEAR_STOCK: "[STOCK] Clear stock",
};

export function startFetchStock() {
  return {
    type: stockActions.START_FETCH_STOCK,
  };
}

export function successFetchStock(stock: any) {
  return {
    type: stockActions.SUCCESS_FETCH_STOCK,
    payload: stock,
  };
}

export function errorFetchStock(error: any) {
  return {
    type: stockActions.ERROR_FETCH_STOCK,
    payload: error,
  };
}

export function clearstock() {
  return {
    type: stockActions.CLEAR_STOCK,
  };
}

export function fetchStock() {
  return (dispatch: any) => {
    dispatch(startFetchStock());
    return StockService.readStock()
      .then((stock) => dispatch(successFetchStock(stock)))
      .catch((error) => dispatch(errorFetchStock(error)));
  };
}
