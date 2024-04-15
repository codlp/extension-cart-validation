// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const currentBuyerEmail = input.cart.buyerIdentity?.customer?.email;
  const locale = input.localization?.language.isoCode;
  
  const errors = input.cart.lines
    .filter(({ quantity }) => {
      if (currentBuyerEmail && quantity > 3) {
        return true;
      } else if (!currentBuyerEmail && quantity > 1) {
        return true;
      }
    })
    .map(() => ({
      localizedMessage: 'You can only buy 3 items at a time.',
      target: "cart",
    }));

    console.log('currentBuyerEmail', currentBuyerEmail);
    console.log('locale', locale);
  return {
    errors
  }
};