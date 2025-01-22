import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./OrderSummaryPage.scss";
import { OrderSummaryPageProps } from "./type";
import { FormButton } from "shared/Component/FormButton/FormButton";
import { ItemCard } from "shared/Component/ItemCard/ItemCard";
import { CakeType } from "constants/CakeType";
import { routeName } from "config/routeConfig";
import { getDiscountPrice, getMaxBoxNumber, getRandomSatang } from "./mapper";
import {
  getBoxNumber,
  setBoxNumberToStorage,
  setIsSubmitToStorage,
  setRandomSatangToStorage,
} from "shared/utils/localstorage";
import { goToHomePage } from "shared/utils/historyUtils";
import { OrderSummary } from "shared/Component/OrderSummary/OrderSummary";
import { CommonPage } from "shared/Component/CommonPage/CommonPage";
import { AddressPageProps } from "AddressPage/AddressPage";
import { GetPercentDiscountResponse } from "shared/utils/callServer/type";

type Props = RouteComponentProps;

const AMOUNT_IN_BOX = {
  small: 2,
  big: 4,
};

const OrderSummaryPageComponent: React.FC<Props> = (props) => {
  const [pageProps, setPageProps] = React.useState<OrderSummaryPageProps>();
  const [boxNumber, setBoxNumber] = React.useState(getBoxNumber());
  const [totalPieceInBox, setTotalPieceInBox] = React.useState(0);
  const [percentDiscount, setPercentDiscount] =
    React.useState<GetPercentDiscountResponse>({
      id: 0,
      discount: 0,
    });
  const [finalPrice, setFinalPrice] = React.useState(0);

  React.useEffect(() => {
    if (!props.location.state) {
      goToHomePage(props.history);
      return;
    }
    setPageProps(props.location.state as OrderSummaryPageProps);
    setRandomSatangToStorage(getRandomSatang());
  }, []);

  React.useEffect(() => {
    if (!pageProps) {
      return;
    }
    setFinalPrice(
      getDiscountPrice(pageProps.price, percentDiscount.discount) +
        pageProps.shippingFee
    );
  }, [pageProps, percentDiscount.discount]);

  if (!pageProps) {
    return null;
  }

  const goToNextPage = () => {
    setBoxNumberToStorage(boxNumber);
    setIsSubmitToStorage(false);
    const nextPageProps: AddressPageProps = {
      ...pageProps,
      percentDiscount,
      finalPrice,
      smallBox: boxNumber[0],
      bigBox: boxNumber[1],
    };
    props.history.push({
      pathname: routeName.AddressPage,
      state: nextPageProps,
    });
  };

  return (
    <CommonPage headerText="Order Summary">
      <>
        <OrderSummary
          mooncakeData={pageProps.mooncakeData}
          amount={pageProps.amount}
          shippingFee={pageProps.shippingFee}
        />
        <FormButton text="Order Now" onClick={goToNextPage} />
      </>
    </CommonPage>
  );
};

const OrderSummaryPage = withRouter(OrderSummaryPageComponent);
OrderSummaryPage.displayName = "OrderSummaryPage";

export { OrderSummaryPage };
