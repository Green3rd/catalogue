import React from "react";
import { generateClassName } from "shared/utils/reactClassName";
import { numberWithCommas } from "./priceHelper";
import "./PriceComponent.scss";

interface Props {
  price: Money;
  crossOutprice?: number;
  bold?: boolean;
  grey?: boolean;
  percentDiscount?: number;
}

const PriceComponent = (props: Props) => {
  const { price, bold, grey, crossOutprice, percentDiscount } = props;
  const crossOut = crossOutprice && (
    <span className="PriceComponent__CrossOutContainer">
      <span className="PriceComponent__CrossOut">
        {numberWithCommas(crossOutprice)}
      </span>
    </span>
  );

  const discount = percentDiscount && (
    <span className="PriceComponent__Discount">ลด {percentDiscount}%</span>
  );


  return (
    <span className={generateClassName("PriceComponent", [bold ? "bold" : "", grey ? "grey" : ""])}>
      {discount === 0 ? '' : discount}
      <span className={generateClassName("PriceComponent__PriceContainer", [percentDiscount ? "block" : ""])}>
        {crossOut}
        <span className="PriceComponent__Price">
          {numberWithCommas(price.amount)}
        </span>
        <span className="PriceComponent__Currency">{price.currency}</span>
      </span>
    </span>
  );
};

PriceComponent.displayName = "PriceComponent";
export { PriceComponent };
