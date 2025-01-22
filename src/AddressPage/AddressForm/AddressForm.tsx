import React, { KeyboardEvent } from "react";
import { Form, FormikProps, withFormik } from "formik";
import {
  isSameUserData as isSameAddress,
  validateAddressSchema,
} from "./validation";
import { FormInput } from "shared/Component/FormInput/FormInput";
import { FormButton } from "shared/Component/FormButton/FormButton";
import { withRouter, RouteComponentProps } from "react-router";
import { AddressFormValues, AddressFormValuesKeys as Keys } from "./types";
import { submitOrder } from "shared/utils/callServer/callServer";
import { useState } from "react";
import { routeName } from "config/routeConfig";
import InputAddress from "react-thailand-address-autocomplete";
import {
  getAddress,
  setAddressToStorage,
  setOrderNumberToStorage,
  setEmailToStorage,
  setIsSubmitToStorage,
  getIsSubmitFromStorage,
  getOrderNumber,
  setQrCodeToStorage,
  setExtraCostToStorage,
  getQrCode,
  getExtraCost,
} from "shared/utils/localstorage";
import { ErrorMessage } from "shared/utils/message";
import { isMockMode } from "shared/utils/configurationsHelper";
import "./AddressForm.scss";
import { AddressPageProps } from "AddressPage/AddressPage";

interface OwnProps {
  pageProps: AddressPageProps;
  errorText?: string;
  onFormError: (error: string) => void;
}

interface FullAddress {
  subdistrict: string;
  district: string;
  province: string;
  zipcode: string;
}

type Props = OwnProps & RouteComponentProps & FormikProps<AddressFormValues>;
const AddressFormComponent: React.FC<Props> = (props) => {
  const { isSubmitting, errorText } = props;
  const [subdistrict, setSubdistrict] = useState<string>(
    props.values.subdistrict
  );
  const [district, setDistrict] = useState<string>(props.values.district);
  const [province, setProvince] = useState<string>(props.values.province);
  const [zipCode, setZipCode] = useState<string>(props.values.zipCode);

  const onChange = (e: KeyboardEvent) => {
    const target = e.target as any;
    switch (target.name) {
      case Keys.subdistrict:
        props.setFieldValue(target.name, target.value);
        setSubdistrict(target.value);
        break;
      case Keys.district:
        props.setFieldValue(target.name, target.value);
        setDistrict(target.value);
        break;
      case Keys.province:
        props.setFieldValue(target.name, target.value);
        setProvince(target.value);
        break;
      case Keys.zipCode.toLowerCase():
        props.setFieldValue(Keys.zipCode, target.value);
        setZipCode(target.value);
        break;
    }
  };

  const onSelect = (fullAddress: FullAddress) => {
    setSubdistrict(fullAddress.subdistrict);
    setDistrict(fullAddress.district);
    setProvince(fullAddress.province);
    setZipCode(fullAddress.zipcode);
    props.setValues((value: AddressFormValues) => {
      return {
        ...value,
        subdistrict: fullAddress.subdistrict,
        district: fullAddress.district,
        province: fullAddress.province,
        zipCode: fullAddress.zipcode,
      };
    });
  };

  return (
    <div>
      <Form className="AddressForm">
        <FormInput
          label="ชื่อผู้รับ"
          name={Keys.name}
          type="text"
          error={!!props.errors.name}
        />
        <FormInput
          label="เบอร์โทร"
          name={Keys.number}
          type="tel"
          error={!!props.errors.number}
        />
        <FormInput
          label="อีเมล"
          name={Keys.email}
          type="email"
          error={!!props.errors.email}
        />
        <FormInput
          label="ที่อยู่"
          name={Keys.address}
          type="text"
          error={!!props.errors.address}
        />

        <FormInput
          label="แขวง / ตำบล"
          name={Keys.subdistrict}
          type="text"
          error={!!props.errors.subdistrict}
        >
          <InputAddress
            address={Keys.subdistrict}
            value={subdistrict}
            onChange={onChange}
            onSelect={onSelect}
          />
        </FormInput>

        <FormInput
          label="เขต / อำเภอ"
          name={Keys.district}
          type="text"
          error={!!props.errors.district}
        >
          <InputAddress
            address={Keys.district}
            value={district}
            onChange={onChange}
            onSelect={onSelect}
          />
        </FormInput>

        <FormInput
          label="จังหวัด"
          name={Keys.province}
          type="text"
          error={!!props.errors.province}
        >
          <InputAddress
            address={Keys.province}
            value={province}
            onChange={onChange}
            onSelect={onSelect}
          />
        </FormInput>

        <FormInput
          label="รหัสไปรษณีย์"
          name={Keys.zipCode}
          type="text"
          error={!!props.errors.zipCode}
        >
          <InputAddress
            address={Keys.zipCode.toLowerCase()}
            value={zipCode}
            onChange={onChange}
            onSelect={onSelect}
          />
        </FormInput>

        <FormInput label="คำขอเพิ่มเติม" name={Keys.note} type="textarea" />

        <FormButton
          text={"ชำระเงิน"}
          disabled={isSubmitting}
          errorText={errorText}
        />
      </Form>
    </div>
  );
};

const AddressForm = withRouter(
  withFormik<OwnProps & RouteComponentProps, AddressFormValues>({
    mapPropsToValues: getAddress,
    validationSchema: validateAddressSchema,
    handleSubmit: (values: AddressFormValues, { props, setSubmitting }) => {
      const goToNextPage = (
        orderNumber: string,
        qrCode: string,
        extraCost: number
      ) => {
        setSubmitting(false);
        setOrderNumberToStorage(orderNumber);

        props.history.push({
          pathname: routeName.PaymentPage,
        });
      };

      // Address's not change and not going back to the previous page.
      if (isSameAddress(values, getAddress()) && getIsSubmitFromStorage()) {
        goToNextPage(getOrderNumber(), getQrCode(), getExtraCost());
      } else {
        // send a request to a server
        setAddressToStorage(values);
        setIsSubmitToStorage(true);
        if (isMockMode()) {
          goToNextPage("#GreenOrder", "mockQR", 0);
          return;
        }
        submitOrder({
          userData: values,
          mooncakeData: props.pageProps,
        }).then(
          (result) => {
            if (!result || !result.data || !result.data.orderNumber) {
              props.onFormError(ErrorMessage.cannotGetData);
              setSubmitting(false);
              return;
            }
            // Set email for tracking page.
            setEmailToStorage(values.email);
            setQrCodeToStorage(result.data.qrCodePayload);
            setExtraCostToStorage(result.data.extraCost);
            goToNextPage(
              result.data.orderNumber,
              result.data.qrCodePayload,
              result.data.extraCost
            );
          },
          (error) => {
            props.onFormError(error && error.message);
            setSubmitting(false);
          }
        );
      }
    },
    displayName: "AddressForm",
  })(AddressFormComponent)
);

AddressForm.displayName = "AddressForm";
export { AddressForm };
