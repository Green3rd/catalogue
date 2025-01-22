import { CakeType } from "constants/CakeType";
import React from "react";
import { QuantitySelector } from "shared/Component/QuantitySelector/QuantitySelector";
import InfoIcon from "@mui/icons-material/Info";
import { InfoBox } from "CatalogPage/InfoBox/InfoBox";
import { useState } from "react";
import { generateClassName } from "shared/utils/reactClassName";
import { PriceComponent } from "shared/Component/PriceComponent/PriceComponent";
import "./ItemCard.scss";
import { MooncakeModel } from "shared/utils/callServer/type";
import { isMobile } from "shared/utils/deviceHelper";

export interface ItemCardProps extends MooncakeModel {
  value?: number;
  maxValue?: number;
  disablePlus?: boolean;
  fourColumns?: boolean;
  disable?: boolean;
  onQuantityChange?: (num: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = (props) => {
  const {
    name,
    imageUrl,
    price,
    itemAvailable,
    info,
    type,
    disablePlus,
    maxValue,
    onQuantityChange,
    value,
    fourColumns,
    disable
  } = props;
  const [showInfo, setShowInfo] = useState(false);

  const itemAvailableText =
    itemAvailable <= 0 ? (
      <span className="ItemCard__ItemSoldOut">
        สินค้าหมด
      </span>
    ) : itemAvailable < 25 ? (
      <span className="ItemCard__ItemAvailable">
        มีสินค้าทั้งหมด {itemAvailable} {type === CakeType.Set ? type : "ลูก"}
      </span>
    ) : null;
  return (
    <div
      className={generateClassName(
        "ItemCard",
        fourColumns ? "fourColumns" : ""
      )}
    >
      <img className={generateClassName("ItemCard__Image", itemAvailable <= 0 ? "grey" : "")} src={imageUrl} alt="mooncake" />
      <div className="ItemCard__ContentContainer">
        <div className="ItemCard__Info">
          <div className="ItemCard__Name">{name}</div>
          <InfoIcon
            className="ItemCard__InfoIcon"
            onMouseEnter={() => !isMobile() && setShowInfo(true)}
            onMouseLeave={() => !isMobile() && setShowInfo(false)}
            onClick={() => setShowInfo((value) => !value)}
          />
          {showInfo && info && <InfoBox text={info} />}
        </div>
        <div className="ItemCard__InfoContainer">
          <div className="ItemCard__Info ItemCard__Info--quantity">
            <PriceComponent price={{ amount: price, currency: "฿" }} />
            {!disable &&
              <QuantitySelector
                onClick={onQuantityChange}
                value={value}
                maxValue={maxValue}
                disablePlus={disablePlus}
              />}
          </div>
          {itemAvailableText}
        </div>
      </div>
    </div>
  );
};
ItemCard.displayName = "ItemCard";
export { ItemCard };
