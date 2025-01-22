// Not support negative number.
export const numberWithCommas = (x: number) => {
  let result = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(x);
  if (result.slice(-2) === "00") result = result.substring(0, result.length - 3); // Remove '.00'
  return result.substring(1); // Remove a currency symbol;
};
