import * as BillsService from "src/services/bills.services";

export const billsActions = {
  START_FETCH_BILLS: "[BILLS] Start fetching bills",
  SUCCESS_FETCH_BILLS: "[BILLS] Success fetching bills",
  ERROR_FETCH_BILLS: "[BILLS] Error fetching bills",
  CLEAR_BILLS: "[BILLS] Clear bills",
};

export const detailBillsActions = {
  START_FETCH_DETAIL_BILLS: "[DETAIL_BILLS] Start fetching detailBills",
  SUCCESS_FETCH_DETAIL_BILLS: "[DETAIL_BILLS] Success fetching detailBills",
  ERROR_FETCH_DETAIL_BILLS: "[DETAIL_BILLS] Error fetching detailBills",
  CLEAR_DETAIL_BILLS: "[DETAIL_BILLS] Clear detailBills",
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

export function startFetchDetailBills() {
  return {
    type: detailBillsActions.START_FETCH_DETAIL_BILLS,
  };
}

export function successFetchDetailBills(detailBills: any) {
  return {
    type: detailBillsActions.SUCCESS_FETCH_DETAIL_BILLS,
    payload: detailBills,
  };
}

export function errorFetchDetailBills(error: any) {
  return {
    type: detailBillsActions.ERROR_FETCH_DETAIL_BILLS,
    payload: error,
  };
}

export function cleardetailBills() {
  return {
    type: detailBillsActions.CLEAR_DETAIL_BILLS,
  };
}

export function fetchDetailBills() {
  return (dispatch: any) => {
    dispatch(startFetchDetailBills());
    return BillsService.readDetailBills()
      .then((detailBills) => dispatch(successFetchDetailBills(detailBills)))
      .catch((error) => dispatch(errorFetchDetailBills(error)));
  };
}
