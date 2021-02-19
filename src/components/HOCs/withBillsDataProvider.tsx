import React from "react";
import BillsDataProvider from "../Providers/BillsDataProvider";

export default function withBillsDataProvider(WrappedComponent: any) {
  return class extends React.Component {
    render() {
      return (
        <BillsDataProvider
          doRender={(additionalProps: any) => (
            <WrappedComponent {...this.props} {...additionalProps} />
          )}
        />
      );
    }
  };
}
