export interface IBills {
  id: string;
  billNumber: string;
  date: Date;
  clientId: string;
  billDetail: string[];
  total: number;
}