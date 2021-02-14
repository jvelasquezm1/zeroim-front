import { post, get } from "./api";
import { IClients } from "src/types/clients.model";

export const addClients = async (name: string, date: string, clientID: number, detailID: string, total: string): Promise<{data:object, status: number}> => {
  const result = await post<IClients>("addClients", { name, date, clientID, detailID, total });
  return result;
};

export const readClients = async (): Promise<IClients[]> => {
    return (await get<IClients[]>("readClients")).data;
};
