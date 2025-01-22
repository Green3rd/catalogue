import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { PageHeader } from "shared/Component/PageHeader/PageHeader";
import "./InfoPage.scss";

type Props = RouteComponentProps;
const InfoPageComponent: React.FC<Props> = (props) => {
  return (
    <div className="InfoPage">
      <PageHeader text="Info" />
      Info
    </div>
  );
};

const InfoPage = withRouter(InfoPageComponent);
InfoPage.displayName = "InfoPage";

export { InfoPage };
