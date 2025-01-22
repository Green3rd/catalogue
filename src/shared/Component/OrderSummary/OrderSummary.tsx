import { MooncakeAmount, MooncakeData } from "OrderSummaryPage/type";
import React from "react";
import { TotalAmount } from "shared/Component/TotalAmount/TotalAmount";
import { SummaryItem } from "shared/Component/SummaryItem/SummaryItem";
import "./OrderSummary.scss";

interface Props {
  mooncakeData: MooncakeData[];
  amount: MooncakeAmount;
  shippingFee: number;
}

const OrderSummary: React.FC<Props> = (props) => {
  const { mooncakeData, amount, shippingFee } = props;
  const orderSummary = mooncakeData?.map((item) => {
    if (item.value <= 0) return null;
    return (
      <SummaryItem
        key={item.id}
        name={item.name}
        type={item.type}
        quantity={item.value}
        price={item.price}
      />
    );
  });

  return (
    <div className="OrderSummary">
      {orderSummary}
      <SummaryItem
        name={"ค่าส่ง"}
        price={shippingFee}
      />
      <div className="OrderSummary__Amount">
        <TotalAmount amount={amount} color={true} />
      </div>
    </div>
  );
};
OrderSummary.displayName = "OrderSummary";
export { OrderSummary };
