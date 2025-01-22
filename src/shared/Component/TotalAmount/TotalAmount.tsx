import { CakeType } from "constants/CakeType";
import { MooncakeAmount } from "OrderSummaryPage/type";
import React from "react";
import { generateClassName } from "shared/utils/reactClassName";
import "./TotalAmount.scss";

export interface TotalAmountProps {
  amount?: MooncakeAmount;
  color?: boolean;
}

const TotalAmount: React.FC<TotalAmountProps> = (props) => {
  const { amount, color } = props;
  if (!amount) return null;
  let totalAmount = "";
  totalAmount += amount.piece > 0 ? `${amount.piece} ` : "";
  totalAmount +=
    amount.smallPiece > 0
      ? `${totalAmount !== "" ? "," : ""} ${amount.smallPiece} ${
          CakeType.SmallPiece
        }`
      : "";
  totalAmount +=
    amount.set > 0
      ? `${totalAmount !== "" ? "," : ""} ${amount.set} ${CakeType.Set}`
      : "";
  return (
    <div className={generateClassName("TotalAmount", color ? "color" : "")}>
      <span className="TotalAmount__Title">Total Amount :</span>
      <span>{totalAmount}</span>
    </div>
  );
};
TotalAmount.displayName = "TotalAmount";
export { TotalAmount };
