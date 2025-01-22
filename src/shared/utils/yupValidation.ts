import * as yup from "yup";

const emailRegEx = new RegExp(
  "^([a-zA-Z_0-9]+([-+.'][a-zA-Z_0-9]+)*@[a-zA-Z_0-9]+([-.][a-zA-Z_0-9]+)*\\.[a-zA-Z_0-9]+([-.][a-zA-Z_0-9]+)*)$"
)

export const validateEmail = (requiredText?: string) => {
  return yup
    .string()
    .matches(
      emailRegEx,
      "ข้อความที่ใส่ไม่ตรง email format"
    )
    .required(requiredText ?? "Please fill in your email.");
};

export const validateEmailNotRequired = (requiredText?: string) => {
  return yup
    .string()
    .matches(
      emailRegEx,
      "ข้อความที่ใส่ไม่ตรง email format"
    )
};

export const validatePassword = (requiredText?: string) => {
  return yup
    .string()
    .matches(
      new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"),
      "Password must have minimum eight characters, at least one letter and one number."
    )
    .required(requiredText ?? "Please fill in your password.");
};

export const validateRequiredField = (requiredText?: string) => {
  return yup.string().required(requiredText ?? "Please fill in this field.");
};

export const validateConfirmPassword = (fieldName: string) => {
  return yup
    .string()
    .equals([yup.ref(fieldName)], "Password and confirmation do not match.")
    .required("Please fill in your password.");
};

export const validateCheckbox = (requiredText?: string) => {
  return yup
    .boolean()
    .oneOf([true], requiredText ?? "Must Accept Terms and Conditions.");
};

export const validateText = (minSize: number, minErrorText?: string) => {
  return yup
    .string()
    .required("Please fill in the name.")
    .min(
      minSize,
      minErrorText ?? `Please fill at least ${minSize} characters.`
    );
};

export const validateTextNotRequired = (
  minSize: number,
  minErrorText?: string
) => {
  return yup
    .string()
    .min(
      minSize,
      minErrorText ?? `Please fill at least ${minSize} characters.`
    );
};

export const validateNumber = (
  minNum: number,
  maxNum: number,
  fieldName: string
) => {
  return yup
    .number()
    .required("Please fill in the number.")
    .min(minNum, `The ${fieldName} can't be less than ${minNum}.`)
    .max(maxNum, `The ${fieldName} can't be greater than ${maxNum}.`);
};

export const validatePhoneNumber = () => {
  return yup
    .string()
    .matches(
      new RegExp(
        "^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$"
      ),
      "เบอร์โทรไม่ถูกต้อง ลองใส่เฉพาะตัวเลข"
    )
    .required("กรุณาใส่เบอร์โทรผู้รับ");
};

export const validatePhoneNumberNotRequired = () => {
  return yup
    .string()
    .matches(
      new RegExp(
        "^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$"
      ),
      "เบอร์โทรไม่ถูกต้อง ลองใส่เฉพาะตัวเลข"
    );
};
