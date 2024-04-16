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
  const configMetafield = JSON.parse(input.shop.metafield.value);
  const LoggedInMaxQuantity = configMetafield?.LoggedInMaxQuantity;
  const LoggedOutMaxQuantity = configMetafield?.LoggedOutMaxQuantity;
  let maxAmount;

  const errors = input.cart.lines
    .filter(({ quantity }) => {
      if (currentBuyerEmail) {
        maxAmount = LoggedInMaxQuantity;
        if (quantity > maxAmount) {
          return true;
        }
      } else {
        maxAmount = LoggedOutMaxQuantity;
        if (quantity > maxAmount) {
          return true;
        }
      }
    })
    .map(() => ({
      localizedMessage: lang[locale].message.replace("{{ maxAmount }}", maxAmount),
      target: "cart",
    }));

  return {
    errors
  }
};
