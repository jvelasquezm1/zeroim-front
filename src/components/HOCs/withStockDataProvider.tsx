import React from "react";
import StockDataProvider from "../Providers/StockDataProvider";

export default function withStockDataProvider(WrappedComponent: any) {
  return class extends React.Component {
    render() {
      return (
        <StockDataProvider
          doRender={(additionalProps: any) => (
            <WrappedComponent {...this.props} {...additionalProps} />
          )}
        />
      );
    }
  };
}
