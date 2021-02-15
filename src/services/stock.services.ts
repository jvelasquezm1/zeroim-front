import { post, get } from "./api";
import { IProduct } from "src/types/stock.model";

export const addStock = async (id: string, name: string, price: number, sku: string): Promise<{data:object, status: number}> => {
  const result = await post<IProduct>("product/new", { id, name, price, sku });
  return result;
};

export const readStock = async (): Promise<IProduct[]> => {
    return (await get<IProduct[]>("products")).data;
};
