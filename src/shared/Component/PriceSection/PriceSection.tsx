import React from "react";
import { PriceComponent } from "shared/Component/PriceComponent/PriceComponent";
import "./PriceSection.scss";

interface Props {
  price: number;
  percentDiscount: number;
  crossOutprice: number;
}

const PriceSection: React.FC<Props> = ({
  price,
  percentDiscount,
  crossOutprice,
}) => {
  return (
    <div className="PriceSection">
      <span>ราคา(รวมส่ง)</span>
      <div className="PriceSection__PriceContainer">
        <PriceComponent
          bold={true}
          crossOutprice={crossOutprice}
          price={{
            amount: price,
            currency: "฿",
          }}
          percentDiscount={percentDiscount}
        />
      </div>
    </div>
  );
};

PriceSection.displayName = "PriceSection";

export { PriceSection };
