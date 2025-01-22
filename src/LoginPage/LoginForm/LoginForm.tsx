import React from "react";
import { Form, FormikProps, withFormik } from "formik";
import { initLoginFormValue, validateLoginSchema } from "./validation";
import { withRouter, RouteComponentProps } from "react-router";
import { LoginFormValues } from "./types";
import { FormInput } from "shared/Component/FormInput/FormInput";
import { FormButton } from "shared/Component/FormButton/FormButton";
import "./LoginForm.scss";

interface OwnProps {
  errorText?: string;
  onFormError: (error: string) => void;
}

type Props = OwnProps & RouteComponentProps & FormikProps<LoginFormValues>;
const LoginFormComponent: React.FC<Props> = (props) => {
  const { isSubmitting, errorText } = props;

  return (
    <Form className="LoginForm">
      <FormInput
        label="Email"
        name="email"
        type="email"
        error={!!props.errors.email}
      />
      <FormButton text="Login" disabled={isSubmitting} errorText={errorText} />
    </Form>
  );
};

const LoginForm = withRouter(
  withFormik<OwnProps & RouteComponentProps, LoginFormValues>({
    mapPropsToValues: initLoginFormValue,
    validationSchema: validateLoginSchema,
    handleSubmit: (values: LoginFormValues, { props, setSubmitting }) => {
      // send a request to a server
      console.log("login");
      setSubmitting(false);
    },
    displayName: "LoginForm",
  })(LoginFormComponent)
);

LoginForm.displayName = "LoginForm";
export { LoginForm };
