import { post, get } from "./api";
import { IBills, IDetailBills } from "src/types/bills.model";

export const addBills = async (
  name: string,
  date: Date,
  clientId: number,
  billDetail: string[],
  total: string
): Promise<{ data: object; status: number }> => {
  const result = await post<IBills>("bill", {
    name,
    date,
    clientId,
    billDetail,
    total,
  });
  return result;
};

export const readBills = async (): Promise<IBills[]> => {
  return (await get<IBills[]>("bill/getAll")).data;
};

export const addDetailBills = async (
  id: string,
  productId: string,
  quantity: string,
  value: number,
  billNumber: string
): Promise<{ data: object; status: number }> => {
  const result = await post<IDetailBills>("billDetail", {
    id,
    productId,
    quantity,
    value,
    billNumber
  });
  return result;
};

export const readDetailBills = async (): Promise<IDetailBills[]> => {
  return (await get<IDetailBills[]>("billDetail/getAll")).data;
};
