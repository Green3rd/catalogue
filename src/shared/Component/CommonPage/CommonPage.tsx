import React, { ReactElement } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { PageHeader } from "shared/Component/PageHeader/PageHeader";
import { goToHomePage, goToPreviousPage } from "shared/utils/historyUtils";
import { Footer } from "../Footer/Footer";
import { BgCard } from "../BgCard/BgCard";
import "./CommonPage.scss";

interface OwnProps {
  headerText: string;
  goToHomePage?: boolean;
  children?: ReactElement;
}

type Props = RouteComponentProps & OwnProps;

const CommonPageComponent: React.FC<Props> = (props) => {
  return (
    <div className="CommonPage">
      <PageHeader
        text={props.headerText}
        showBackButton={true}
        onBackButtonClick={() => props.goToHomePage ? goToHomePage(props.history) : goToPreviousPage(props.history)}
      />
      <div
        className="CommonPage__ContentContainer"
      >
        <BgCard>
         {props.children}
        </BgCard>
      </div>
      <Footer/>
    </div>
  );
};

const CommonPage = withRouter(CommonPageComponent);
CommonPage.displayName = "CommonPage";

export { CommonPage };
