import { AddressFormValues } from "AddressPage/AddressForm/types";
import { AddressPageProps } from "AddressPage/AddressPage";
import { CakeType } from "constants/CakeType";
import { OrderStatus } from "constants/OrderStatus";
import { ServerCakeType } from "constants/ServerCakeType";

export interface MyServerReponse<T> {
  data: T;
}

export interface BlankRequest {}

export interface MooncakeModel extends MooncakeModelBase {
  type: CakeType;
}

interface MooncakeModelBase {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  itemAvailable: number;
  info: string;
  isSellOnWeb?: boolean;
}

interface MooncakeModelResponse extends MooncakeModelBase {
  type: ServerCakeType;
}

export interface GetItemsResponse {
  data: MooncakeModelResponse[];
}

export interface GetPercentDiscountResponse {
  id: number;
  discount: number;
}
export interface SubmitOrderRequest {
  userData: AddressFormValues;
  mooncakeData: AddressPageProps;
}

export interface SubmitOrderResponse {
  orderNumber: string;
  shippingDate: string;
  qrCodePayload: string;
  extraCost: number;
  errorMessage: string;
}

export interface PaymentCompleteRequest {
  orderNumber: string;
}

export interface PaymentCompleteResponse {
  orderNumber: string;
  errorMessage: string;
}

export interface TrackingRequest {
  orderNumber?: string;
  email?: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}

export interface TrackingResponse {
  data: TrackingResponseData[];
  error: string;
}

export interface LoginResponse {
  token: string;
}

export interface TrackingResponseData {
  orderNumber: string;
  status: string;
}

export interface GetPaidOrderRequest {
  name?: string;
  price?: number;
  status?: OrderStatus;
  page: number;
}

export interface UpdateOrderRequest {
  orderNumber: string;
  action: number;
  trackingNumber?: string;
}

export interface UpdateShipDateRequest {
  orderNumber: string;
  date: Date;
}

export interface GetPaidOrderBase {
  price: PriceDetail;
  amount: AmountDetail;
  smallBox: number;
  bigBox: number;
}

export interface AdminOrderStatusResponse {
  order: AdminOrderStatus[];
  allItemCount: number;
  itemPerPage: number;
}

export interface ExportDataResponse {
  data: ExportData[];
  mooncakeName: string[];
  errorMessage?: string;
}

export interface ExportData extends ExportDataQueryResult {
  mooncakeAmount: number[];
  orderNumber: string;
  numberPiece: number;
  numberSmallPiece: number;
  numberSet: number;
  basePrice: number;
  shippingFee: number;
  finalPrice: number;
  trackingNumber?: string;
  status: OrderStatus;
  mappedStatus: string;
  bigBox: string; // 0 + 2
  smallBox: string; // 5
  percentDiscount: number;
  note: string;
  name: string;
  address: string;
  shipDate?: Date;
  shipDateString: string;
}

export interface StatusResponse {
  success: boolean;
  errorMessage?: string;
}

interface AdminOrderStatus {
  orderNumber: string;
  name: string;
  basePrice: number;
  shippingFee: number;
  finalPrice: number;
  status: OrderStatus;
  shipDate?: string;
  tracking?: string;
  createdAt: Date;
}

export interface GetPaidOrder extends GetPaidOrderBase {
  orderDetails: OrderDetails[];
}

export interface OrderDetails {
  name: string;
  quantity: number;
  type: CakeType;
}

interface OrderDetailsResponse {
  name: string;
  quantity: number;
  type: ServerCakeType;
}

interface PriceDetail {
  fullPrice: number;
  capital: number;
}

export interface AmountDetail {
  piece: number;
  smallPiece: number;
  set: number;
}
