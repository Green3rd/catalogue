import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { OrderSummaryPageProps } from "OrderSummaryPage/type";
import { AddressForm } from "./AddressForm/AddressForm";
import { goToHomePage } from "shared/utils/historyUtils";
import { CommonPage } from "shared/Component/CommonPage/CommonPage";
import "./AddressPage.scss";
import { GetPercentDiscountResponse } from "shared/utils/callServer/type";

type Props = RouteComponentProps;

export interface AddressPageProps extends OrderSummaryPageProps {
  smallBox: number;
  bigBox: number;
  percentDiscount: GetPercentDiscountResponse;
  finalPrice: number;
}

const AddressPageComponent: React.FC<Props> = (props: Props) => {
  const [pageProps, setPageProps] = React.useState<AddressPageProps>();
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const handleFormError = (error: string) => {
    setErrorMsg(error);
  };

  React.useEffect(() => {
    if (!props.location.state) {
      goToHomePage(props.history);
      return;
    }
    setPageProps(props.location.state as AddressPageProps);
  }, [props.location, props.history]);

  if (!pageProps) {
    return null;
  }

  return (
    <CommonPage headerText="Address">
      <AddressForm
        onFormError={handleFormError}
        errorText={errorMsg}
        pageProps={pageProps}
      />
    </CommonPage>
  );
};

const AddressPage = withRouter(AddressPageComponent);
AddressPage.displayName = "AddressPage";

export { AddressPage };
