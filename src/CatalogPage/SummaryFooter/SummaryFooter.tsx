import React, { MouseEventHandler } from "react";
import { PriceComponent } from "shared/Component/PriceComponent/PriceComponent";
import "./SummaryFooter.scss";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { MooncakeAmount } from "OrderSummaryPage/type";
import { TotalAmount } from "shared/Component/TotalAmount/TotalAmount";
import { Footer } from "shared/Component/Footer/Footer";

export interface SummaryFooterProps {
  amount: MooncakeAmount;
  price: number;
  onClick?: MouseEventHandler;
}

const SummaryFooter: React.FC<SummaryFooterProps> = (props) => {
  const { amount, price, onClick } = props;

  return (
    <Footer spaceBetween={true} fixed={true}>
      <>
        <div>
          <TotalAmount amount={amount} />
          <span>Total Price </span>
          <PriceComponent price={{ amount: price, currency: "฿" }} />
        </div>
        <Button
          variant="contained"
          className="SummaryFooter__Button"
          endIcon={<NavigateNextIcon />}
          onClick={onClick}
        >
          Check Out
        </Button>
      </>
    </Footer>
  );
};
SummaryFooter.displayName = "SummaryFooter";
export { SummaryFooter };
