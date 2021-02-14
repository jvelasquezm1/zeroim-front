import { detailBillsActions } from "../actions/bills.actions";

const initialState = {
  detailBills: [],
  isFetchingBills: false,
  fetchBillsError: null,
};

const detailBillsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case detailBillsActions.START_FETCH_DETAIL_BILLS:
      return { ...state, isFetchingBills: true };
    case detailBillsActions.SUCCESS_FETCH_DETAIL_BILLS:
      return { ...state, detailBills: action.payload, isFetchingBills: false };
    case detailBillsActions.ERROR_FETCH_DETAIL_BILLS:
      return {
        ...state,
        fetchBillsError: action.payload,
        isFetchingBills: false,
      };
    case detailBillsActions.CLEAR_DETAIL_BILLS:
      return { ...state, detailBills: [] };
    default:
      return state;
  }
};

export default detailBillsReducer;
