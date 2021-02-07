import * as React from "react";
import { connect, useDispatch } from "react-redux";

import Table from "src/containers/Table";
import { rows, columns } from "./config";
import * as ClientsActions from "src/store/actions/clients.actions";

function Client(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ClientsActions.fetchClients());
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  clients: state.clients,
});

export default connect(mapStateToProps)(Client);
