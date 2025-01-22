import { CakeType } from "constants/CakeType";
import React from "react";
import { getTypeForSummary } from "./mapper";
import "./SummaryItem.scss";
import { PriceComponent } from "../PriceComponent/PriceComponent";

export interface SummaryItemProps {
  name: string;
  quantity?: number;
  price: number;
  type?: CakeType;
}

const SummaryItem: React.FC<SummaryItemProps> = (props) => {
  const { name, quantity, type, price } = props;

  return (
    <div className="SummaryItem">
      <div className="SummaryItem__Details">
        <span className="SummaryItem__Name">{name} : </span>
        {quantity && <span>{quantity} </span>}
        {/* { type && <span>{getTypeForSummary(type)}</span>} */}
      </div>
      <PriceComponent
        price={{
          amount: price * (quantity || 1),
          currency: "฿",
        }}
        grey={true}
      />
    </div>
  );
};
SummaryItem.displayName = "SummaryItem";
export { SummaryItem };
