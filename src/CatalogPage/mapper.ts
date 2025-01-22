import { CakeType } from "constants/CakeType";
import { ServerCakeType } from "constants/ServerCakeType";
import {
  MooncakeAmount,
  MooncakeData,
  OrderSummaryPageProps,
} from "OrderSummaryPage/type";
import {
  MooncakeModel,
} from "shared/utils/callServer/type";

const baseShippingFee = Number(process.env.REACT_APP_BASE_SHIPPING_FEE) || 49
const amountFreeShipping = Number(process.env.REACT_APP_AMOUNT_FREE_SHIPPING) || 20

export const getDataSendingToAnotherPage = (
  items: MooncakeModel[],
  orderNumber: number[],
  amount: MooncakeAmount,
  price: number,
): OrderSummaryPageProps => {
  const mappedItems: MooncakeData[] = items
    .filter((item) => orderNumber[item.id] > 0)
    .map((item) => {
      return {
        id: item.id,
        name: item.name,
        type: item.type,
        value: orderNumber[item.id],
        price: item.price
      };
    });

  return {
    mooncakeData: mappedItems,
    amount: amount,
    price: price,
    shippingFee: getShippingFee(amount),
  };
};

const getShippingFee = (amount: MooncakeAmount): number => {
  if (amount.piece >= amountFreeShipping) {
    return 0;
  }

  const sum = amount.piece + amount.smallPiece + amount.set * 3;
  if (sum <= 4) {
    return baseShippingFee;
  }

  if (sum >= 20) {
    return 0;
  }

  return baseShippingFee + (sum - 4) * 5;
};

export const getClientCakeType = (type: ServerCakeType): CakeType => {
  switch (type) {
    case ServerCakeType.SmallPiece:
      return CakeType.SmallPiece;
    case ServerCakeType.Set:
      return CakeType.Set;
    case ServerCakeType.Piece:
    default:
      return CakeType.Piece;
  }
};
