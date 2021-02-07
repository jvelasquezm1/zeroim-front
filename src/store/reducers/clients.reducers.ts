import { clientsActions } from "../actions/clients.actions";

const initialState = {
  clients: [],
  isFetchingClients: false,
  fetchClientsError: null,
};

const clientsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case clientsActions.START_FETCH_CLIENTS:
      return { ...state, isFetchingClients: true };
    case clientsActions.SUCCESS_FETCH_CLIENTS:
      return { ...state, clients: action.payload, isFetchingClients: false };
    case clientsActions.ERROR_FETCH_CLIENTS:
      return {
        ...state,
        fetchClientsError: action.payload,
        isFetchingClients: false,
      };
    case clientsActions.CLEAR_CLIENTS:
      return { ...state, clients: [] };
    default:
      return state;
  }
};

export default clientsReducer;
