import { GetShippingDateResponse } from "shared/utils/callServer/type";

export interface MooncakeData {
  id: number;
  name: string;
  type: CakeType;
  value: number;
  price: number;
}

export interface MooncakeAmount {
  piece: number;
  smallPiece: number;
  set: number;
}

export interface OrderSummaryPageProps {
  mooncakeData: MooncakeData[];
  amount: MooncakeAmount;
  price: number;
  shippingFee: number;
  shippingDate?: GetShippingDateResponse;
}
