import { AddressFormValues } from "AddressPage/AddressForm/types";

const orderKey = "ORDER";
const randomSatangKey = "RANDOM_SATANG";
const boxKey = "BOX";
const addressKey = "ADDRESS";
const orderNumberKey = "ORDER_NUMBER";
const emailKey = "EMAIL";
const tokenKey = "TOKEN";
const isSubmit = "IS_SUBMIT";
const qrCode = "QR_CODE";
const extraCost = "EXTRA_COST";

export const setOrderToStorage = (order: number[]): void => {
  localStorage.setItem(orderKey, JSON.stringify(order));
};

export const getOrder = (): number[] => {
  const item = localStorage.getItem(orderKey);
  if (item) return JSON.parse(item);
  return Array(30).fill(0); // must be >= the highest key in the returned response.
};

export const setIsSubmitToStorage = (value: boolean): void => {
  localStorage.setItem(isSubmit, value.toString());
};

export const getIsSubmitFromStorage = (): boolean => {
  return (localStorage.getItem(isSubmit) || "false") === "true";
};

export const setRandomSatangToStorage = (randomDiscount: number): void => {
  localStorage.setItem(randomSatangKey, randomDiscount.toString());
};

export const getRandomSatangFromStorage = (): number => {
  try {
    return parseInt(localStorage.getItem(randomSatangKey) || "0") || 0;
  } catch (e: any) {
    return 0;
  }
};

export const setBoxNumberToStorage = (box: number[]): void => {
  localStorage.setItem(boxKey, JSON.stringify(box));
};

export const getBoxNumber = (): number[] => {
  const item = localStorage.getItem(boxKey);
  if (item) return JSON.parse(item);
  return Array(2).fill(0);
};

export const setAddressToStorage = (address: AddressFormValues): void => {
  localStorage.setItem(addressKey, JSON.stringify(address));
};

export const getAddress = (): AddressFormValues => {
  const item = localStorage.getItem(addressKey);
  if (item) return JSON.parse(item);
  return {
    name: "",
    number: "",
    email: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipCode: "",
    note: "",
  };
};

export const setOrderNumberToStorage = (orderNumber: string): void => {
  localStorage.setItem(orderNumberKey, orderNumber);
};

export const getOrderNumber = (): string => {
  return localStorage.getItem(orderNumberKey) || "";
};

export const setEmailToStorage = (phoneNumber: string): void => {
  localStorage.setItem(emailKey, phoneNumber);
};

export const getEmail = (): string => {
  return localStorage.getItem(emailKey) || "";
};

export const setTokenToStorage = (token: string): void => {
  localStorage.setItem(tokenKey, token);
};

export const getToken = (): string => {
  return localStorage.getItem(tokenKey) || "";
};

export const setQrCodeToStorage = (qr: string): void => {
  localStorage.setItem(qrCode, qr);
};

export const getQrCode = (): string => {
  return localStorage.getItem(qrCode) || "";
};

export const setExtraCostToStorage = (cost: number): void => {
  localStorage.setItem(extraCost, cost.toString());
};

export const getExtraCost = (): number => {
  try {
    return parseInt(localStorage.getItem(extraCost) || "0") || 0;
  } catch (e: any) {
    return 0;
  }
};
