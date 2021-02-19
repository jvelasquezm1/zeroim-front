import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as stockActions from "src/store/actions/stock.actions";

export default function BillsDataProvider(props: any) {
  const dispatch = useDispatch();
  const stockProps = useSelector((state: any) => state.stock.stock);

  React.useEffect(() => {
    dispatch(stockActions.fetchStock());
  }, []);

  return props.doRender({ stockData: { stockProps } });
}
