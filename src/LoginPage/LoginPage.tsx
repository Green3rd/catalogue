import React from "react";
import { CommonPage } from "shared/Component/CommonPage/CommonPage";
import { LoginForm } from "./LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage: React.FC<{}> = () => {
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const handleFormError = (error: string) => {
    setErrorMsg(error);
  };

  return (
    <CommonPage headerText="Subscribe">
      <LoginForm onFormError={handleFormError} errorText={errorMsg} />
    </CommonPage>
  );
};

LoginPage.displayName = "LoginPage";

export { LoginPage };
