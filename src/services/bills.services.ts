import { post, get } from "./api";
import { IBills, IDetailBills } from "src/types/bills.model";

export const addBills = async (
  id: string,
  date: Date,
  clientId: number,
  billDetail: string[],
  total: string
): Promise<{ data: object; status: number }> => {
  const result = await post<IBills>("bill", {
    id,
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
): Promise<{ data: object; status: number }> => {
  const result = await post<IDetailBills>("billDetail", {
    id,
    productId,
    quantity,
    value,
  });
  return result;
};

export const readDetailBills = async (): Promise<IDetailBills[]> => {
  return (await get<IDetailBills[]>("billDetail/getAll")).data;
};
