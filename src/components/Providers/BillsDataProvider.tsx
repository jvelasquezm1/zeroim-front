import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as billsActions from "src/store/actions/bills.actions";

export default function BillsDataProvider(props: any) {
  const dispatch = useDispatch();
  const billsProps = useSelector((state: any) => state.bills.bills);

  React.useEffect(() => {
    dispatch(billsActions.fetchBills());
  }, [dispatch]);

  return props.doRender({ billsData: { billsProps } });
}
