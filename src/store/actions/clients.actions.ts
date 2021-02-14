import * as ClientsService from "src/services/clients.services";

export const clientsActions = {
  START_FETCH_CLIENTS: "[CLIENTS] Start fetching clients",
  SUCCESS_FETCH_CLIENTS: "[CLIENTS] Success fetching clients",
  ERROR_FETCH_CLIENTS: "[CLIENTS] Error fetching clients",
  CLEAR_CLIENTS: "[CLIENTS] Clear clients",
};

export function startFetchClients() {
  return {
    type: clientsActions.START_FETCH_CLIENTS,
  };
}

export function successFetchClients(clients: any) {
  return {
    type: clientsActions.SUCCESS_FETCH_CLIENTS,
    payload: clients,
  };
}

export function errorFetchClients(error: any) {
  return {
    type: clientsActions.ERROR_FETCH_CLIENTS,
    payload: error,
  };
}

export function clearclients() {
  return {
    type: clientsActions.CLEAR_CLIENTS,
  };
}

export function fetchClients() {
  return (dispatch: any) => {
    dispatch(startFetchClients());
    return ClientsService.readClients()
      .then((clients) => dispatch(successFetchClients(clients)))
      .catch((error) => dispatch(errorFetchClients(error)));
  };
}
