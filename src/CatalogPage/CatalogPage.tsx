import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Toast } from "shared/Component/Toast/Toast";
import { getItems } from "shared/utils/callServer/callServer";
import { ItemCard } from "shared/Component/ItemCard/ItemCard";
import { mockData } from "./mockData";
import { PageHeader } from "shared/Component/PageHeader/PageHeader";
import { SummaryFooter } from "./SummaryFooter/SummaryFooter";
import {
  getOrder,
  setBoxNumberToStorage,
  setOrderToStorage,
} from "shared/utils/localstorage";
import { routeName } from "config/routeConfig";
import { getClientCakeType, getDataSendingToAnotherPage } from "./mapper";
import { MooncakeAmount } from "OrderSummaryPage/type";
import { ErrorMessage } from "shared/utils/message";
import { isMockMode, isWebOpen } from "shared/utils/configurationsHelper";
import { CakeType } from "constants/CakeType";
import { MooncakeModel } from "shared/utils/callServer/type";
import "./CatalogPage.scss";
import { generateClassName } from "shared/utils/reactClassName";
import { Overlay } from "shared/Component/Overlay/Overlay";

type Props = RouteComponentProps;
const CatalogPageComponent: React.FC<Props> = (props) => {
  const [itemCards, setItemCards] = React.useState<MooncakeModel[]>([]);
  const [waitingMessage, setWaitingMessage] =
    React.useState<string>("กรุณารอซักครู่...");
  const [toastMessage, setToastMessage] = React.useState<string>();
  const [orderNumber, setOrderNumber] = React.useState(getOrder());

  const [itemsPrice, setItemsPrice] = React.useState(0);
  const [amount, setAmount] = React.useState<MooncakeAmount>({
    piece: 0,
    smallPiece: 0,
    set: 0,
  });

  React.useEffect(() => {
    if (isMockMode()) {
      setItemCards(mockData);
    } else {
      getItems().then();
    }
  }, []);

  React.useEffect(() => {
    if (itemCards.length <= 0) return;
    var countPiece = 0;
    var countSmallPiece = 0;
    var countSet = 0;
    var price = 0;
    itemCards.forEach((item) => {
      const quantity = orderNumber[item.id];
      if (quantity !== 0) {
        price += quantity * item.price;
        if (item.type === CakeType.Piece) {
          // Text from server
          countPiece += quantity;
        } else if (item.type === CakeType.SmallPiece) {
          // Text from server
          countSmallPiece += quantity;
        } else {
          countSet += quantity;
        }
      }
    });
    setItemsPrice(price);
    setAmount({
      piece: countPiece,
      smallPiece: countSmallPiece,
      set: countSet,
    });
  }, [orderNumber, itemCards]);

  const onNumberChange = (num: number, cardId: number) => {
    const newOrderNumber = { ...orderNumber };
    newOrderNumber[cardId] = num;
    setOrderNumber(newOrderNumber);
  };

  const goToNextPage = () => {
    if (amount.piece + amount.smallPiece + amount.set <= 0) {
      setToastMessage("กรุณาเลือกสินค้า");
      return;
    }
    setOrderToStorage(orderNumber);
    setBoxNumberToStorage(Array(2).fill(0)); // reset box number
    props.history.push({
      pathname: routeName.OrderSummaryPage,
      state: getDataSendingToAnotherPage(
        itemCards,
        orderNumber,
        amount,
        itemsPrice
      ),
    });
  };

  const sellItems = itemCards.filter((item) => item.isSellOnWeb);
  const notSellItems = itemCards.filter((item) => !item.isSellOnWeb);
  const renderItems =
    sellItems.length > 0 ? (
      sellItems.map((card) => {
        return (
          <ItemCard
            key={card.id}
            {...card}
            value={orderNumber[card.id]}
            maxValue={card.itemAvailable}
            onQuantityChange={(num: number) => onNumberChange(num, card.id)}
            fourColumns={true}
            disablePlus={orderNumber[card.id] >= card.itemAvailable}
            disable={card.itemAvailable <= 0}
          />
        );
      })
    ) : (
      <div className="CatalogPage__Message">{waitingMessage}</div>
    );

  const renderNotSellItems = notSellItems.map((card) => {
    return (
      <ItemCard key={card.id} {...card} disable={true} fourColumns={true} />
    );
  });

  const nosellSection =
    notSellItems.length > 0 ? (
      <>
        <div className="CatalogPage__TextContainer">
          <div>รายการพิเศษ</div>
          <div className="CatalogPage__SubText">{`สินค้า ${notSellItems?.length} รายการนี้ จัดส่งทาง messenger เท่านั้น ติดต่อทางเพจเพื่อสั่งซื้อได้เลยค่ะ`}</div>
        </div>
        <div className="CatalogPage__ItemContainer CatalogPage__ItemContainer--last">
          {renderNotSellItems}
        </div>
      </>
    ) : null;

  return (
    <div className="CatalogPage">
      <PageHeader text="Dummy Catalogue" />
      <div
        className={generateClassName(
          "CatalogPage__ItemContainer",
          notSellItems.length <= 0 ? "last" : ""
        )}
      >
        {renderItems}
      </div>
      {nosellSection}
      <SummaryFooter
        amount={amount}
        price={itemsPrice}
        onClick={goToNextPage}
      />

      {!isWebOpen() && <Overlay text="เปิดรับ order 31 กรกฎาคม" />}

      {toastMessage && (
        <Toast text={toastMessage} clearTextFunction={setToastMessage} />
      )}
    </div>
  );
};

const CatalogPage = withRouter(CatalogPageComponent);
CatalogPage.displayName = "CatalogPage";

export { CatalogPage };
