import * as React from "react";
import { connect, useDispatch } from "react-redux";

import Table from "src/containers/Table";
import * as ClientsActions from "src/store/actions/clients.actions";
import { mockedRows, columns, rowSelected } from "./config";

function Client(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ClientsActions.fetchClients());
  }, []);

  return (
    <div className="table-container">
      <div className="flex-container space-between">
        <h2>Clientes</h2>
        <button className="add-button" onClick={() => console.log(rowSelected)}>
          Agregar
        </button>
      </div>
      <Table rows={mockedRows} columns={columns} pageSize={10} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  clients: state.clients,
});

export default connect(mapStateToProps)(Client);
