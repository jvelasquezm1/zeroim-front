import { post, get, remove } from "./api";
import { IBills } from "src/types/bills.model";

export const addBills = async (
  billNumber: string,
  date: Date,
  clientId: number,
  billDetail: string[],
  total: string
): Promise<{ data: object; status: number }> => {
  const result = await post<IBills>("bill", {
    billNumber,
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

export const deleteBill = async (id: string): Promise<IBills[]> => {
  return (await remove<IBills[]>(`bill/delete/${id}`)).data;
};
