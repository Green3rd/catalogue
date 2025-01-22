import { getDiscountPrice } from "./mapper";

describe("getDiscountPrice", () => {
  it.each`
    price  | discount | result
    ${100} | ${94}    | ${6}
    ${100} | ${50}    | ${50}
    ${100} | ${10}    | ${90}
    ${150} | ${10}    | ${135}
  `(
    "should return $result for price $price and discount $discount",
    ({ price, discount, result }) => {
      expect(getDiscountPrice(price, discount)).toBe(result);
    }
  );
});
