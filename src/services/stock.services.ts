import { post, get } from "./api";
import { IStock } from "src/types/stock.model";

export const addStock = async (name: string, date: string, clientID: number, detailID: string, total: string): Promise<{data:object, status: number}> => {
  const result = await post<IStock>("addStock", { name, date, clientID, detailID, total });
  return result;
};

export const readStock = async (): Promise<IStock[]> => {
    return (await get<IStock[]>("readStock")).data;
};
