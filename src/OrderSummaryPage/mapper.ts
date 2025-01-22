import { getRandomSatangFromStorage } from "shared/utils/localstorage";

export const getMaxBoxNumber = (
  totalAmount: number,
  currentlyHaveFromAnotherBox: number,
  boxSize: number
): number => {
  return (totalAmount - currentlyHaveFromAnotherBox) / boxSize;
};

export const getDiscountPrice = (price: number, percentDiscount: number) => {
  const randomSatang = getRandomSatangFromStorage();
  const result = (price * (100 - percentDiscount)) / 100 - randomSatang / 100;
  return  Number(result.toFixed(2));
};

export const getRandomSatang = (): number => {
  return getRandomSatangFromStorage() || random(98) + 1; // 1 - 99
};

const random = (n: number): number => {
  return Math.floor(Math.random() * (n + 1)); // 0 - n
};
