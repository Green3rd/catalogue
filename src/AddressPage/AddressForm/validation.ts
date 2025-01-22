import {
  validateEmail,
  validatePhoneNumber,
  validateRequiredField,
} from "shared/utils/yupValidation";
import * as yup from "yup";
import { AddressFormValues } from "./types";

export const validateAddressSchema = () => {
  return yup.object().shape({
    name: validateRequiredField("กรุณาระบุชื่อ"),
    number: validatePhoneNumber(),
    email: validateEmail("กรุณาใส่อีเมล"),
    address: validateRequiredField("กรุณาใส่ที่อยู่"),
    subdistrict: validateRequiredField("กรุณาใส่แขวง"),
    district: validateRequiredField("กรุณาใส่เขต"),
    province: validateRequiredField("กรุณาใส่จังหวัด"),
    zipCode: validateRequiredField("กรุณาใส่รหัสไปรษณีย์"),
  });
};

export const isSameUserData = (a: AddressFormValues, b: AddressFormValues): boolean => {
  return (
    a.address === b.address
    && a.district === b.district
    && a.email === b.email
    && a.name === b.name
    && a.note === b.note
    && a.number === b.number
    && a.province === b.province
    && a.subdistrict === b.subdistrict
    && a.zipCode === b.zipCode
  )
}
