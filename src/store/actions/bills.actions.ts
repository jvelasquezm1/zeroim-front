import BillsService from "src/services/bills.services";

export const billsActions = {
  START_FETCH_BILLS: "[BILLS] Start fetching bills",
  SUCCESS_FETCH_BILLS: "[BILLS] Success fetching bills",
  ERROR_FETCH_BILLS: "[BILLS] Error fetching bills",
  CLEAR_BILLS: "[BILLS] Clear bills",
};

export function startFetchBills() {
  return {
    type: billsActions.START_FETCH_BILLS,
  };
}

export function successFetchBills(bills: any) {
  return {
    type: billsActions.SUCCESS_FETCH_BILLS,
    payload: bills,
  };
}

export function errorFetchBills(error: any) {
  return {
    type: billsActions.ERROR_FETCH_BILLS,
    payload: error,
  };
}

export function clearbills() {
  return {
    type: billsActions.CLEAR_BILLS,
  };
}

export function fetchBills() {
  return (dispatch: any) => {
    dispatch(startFetchBills());
    return BillsService.readBills()
      .then((bills) => dispatch(successFetchBills(bills)))
      .catch((error) => dispatch(errorFetchBills(error)));
  };
}
