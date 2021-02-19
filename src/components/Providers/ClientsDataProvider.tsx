import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as clientsActions from "src/store/actions/clients.actions";

export default function BillsDataProvider(props: any) {
  const dispatch = useDispatch();
  const clientsProps = useSelector((state: any) => state.clients.clients);

  React.useEffect(() => {
    dispatch(clientsActions.fetchClients());
  }, []);

  return props.doRender({ clientsData: { clientsProps } });
}
