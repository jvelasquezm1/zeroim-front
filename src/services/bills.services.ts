import { post, get } from "./api";
import { IBills, IDetailBills } from "src/types/bills.model";

export const addBills = async (name: string, date: string, clientID: number, detailID: string, total: string): Promise<{data:object, status: number}> => {
  const result = await post<IBills>("addBills", { name, date, clientID, detailID, total });
  return result;
};

export const readBills = async (): Promise<IBills[]> => {
    return (await get<IBills[]>("readBills")).data;
};


export const addDetailBills = async (name: string, date: string, clientID: number, detailID: string, total: string): Promise<{data:object, status: number}> => {
  const result = await post<IDetailBills>("addDetailBills", { name, date, clientID, detailID, total });
  return result;
};

export const readDetailBills = async (): Promise<IDetailBills[]> => {
    return (await get<IDetailBills[]>("readDetailBills")).data;
};
