import { numberWithCommas } from "./priceHelper";

describe('numberWithCommas', () => {
  it.each`
  input                   | result
  ${1}                    | ${'1'}
  ${0}                    | ${'0'}
  ${14541153456468}       | ${'14,541,153,456,468'}
  ${1554645.145564654}    | ${'1,554,645.15'}
  ${11.111}               | ${'11.11'}
  ${11.000}               | ${'11'}
  `('should return $result for input $input', ({ input, result }) => {
    expect(numberWithCommas(input)).toEqual(result);
  });

});
