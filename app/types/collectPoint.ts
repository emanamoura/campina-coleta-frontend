type ISOSDateString = string;

export interface CollectPoint {
  id: number;
  name: string;
  embedCode: string;
  openAt: ISOSDateString;
  closeAt: ISOSDateString;
  phone: string;
  street: string;
  city: string;
  status: string;
  maxCapacity: number;
  aditionalInfo: string;
}