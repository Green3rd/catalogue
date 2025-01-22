import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { PageHeader } from "shared/Component/PageHeader/PageHeader";
import "./ContactUsPage.scss";

type Props = RouteComponentProps;
const ContactUsPageComponent: React.FC<Props> = (props) => {
  return (
    <div className="ContactUsPage">
      <PageHeader text="Contact Us" />
      Info
    </div>
  );
};

const ContactUsPage = withRouter(ContactUsPageComponent);
ContactUsPage.displayName = "ContactUsPage";

export { ContactUsPage };
