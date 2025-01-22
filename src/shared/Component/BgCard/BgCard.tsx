import React, { ReactElement } from "react";
import "./BgCard.scss";

interface Props {
  children?: ReactElement;
}

const BgCard: React.FC<Props> = (props) => {
  return (
    <div className="BgCard">
        {props.children}
    </div>
  );
};
BgCard.displayName = "BgCard";

export { BgCard };
