import { post, get } from "./api";
import { IClients } from "src/types/clients.model";

export const addClients = async (idNumber: number, idType: number, name: string, address: string, phone: string): Promise<{data:object, status: number}> => {
  const result = await post<IClients>("buyer", { idNumber, idType, name, address, phone });
  return result;
};

export const readClients = async (): Promise<IClients[]> => {
  return (await get<IClients[]>("buyer/getAll")).data;
};
