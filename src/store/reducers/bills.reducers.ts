import { billsActions } from "../actions/bills.actions";

const initialState = {
  bills: [],
  isFetchingBills: false,
  fetchBillsError: null,
};

const billsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case billsActions.START_FETCH_BILLS:
      return { ...state, isFetchingBills: true };
    case billsActions.SUCCESS_FETCH_BILLS:
      return { ...state, bills: action.payload, isFetchingBills: false };
    case billsActions.ERROR_FETCH_BILLS:
      return {
        ...state,
        fetchBillsError: action.payload,
        isFetchingBills: false,
      };
    case billsActions.CLEAR_BILLS:
      return { ...state, bills: [] };
    default:
      return state;
  }
};

export default billsReducer;
