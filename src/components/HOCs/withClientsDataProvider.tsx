import React from "react";
import ClientsDataProvider from "../Providers/ClientsDataProvider";

export default function withClientsDataProvider(WrappedComponent: any) {
  return class extends React.Component {
    render() {
      return (
        <ClientsDataProvider
          doRender={(additionalProps: any) => (
            <WrappedComponent {...this.props} {...additionalProps} />
          )}
        />
      );
    }
  };
}
