export interface IBills {
  id: string;
  date: Date;
  clientId: string;
  billDetail: string[];
  total: number;
}

export interface IDetailBills {
  id: string;
  productId: string;
  quantity: string;
  value: number;
  billNumber: string;
}
