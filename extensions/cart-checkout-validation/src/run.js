import en from "../locales/en.default.json";
import fr from "../locales/fr.json";

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
  const locale = input.localization?.language.isoCode.toLowerCase();
  const lang = { "en": en, "fr": fr };

  const errors = input.cart.lines
    .filter(({ quantity }) => {
      if (currentBuyerEmail && quantity > 3) {
        return true;
      } else if (!currentBuyerEmail && quantity > 1) {
        return true;
      }
    })
    .map(() => ({
      localizedMessage: lang[locale].message,
      target: "cart",
    }));

  return {
    errors
  }
};
