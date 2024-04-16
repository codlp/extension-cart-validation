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
  const locale = (input.localization?.language.isoCode || 'en').toLowerCase();
  const lang = { "en": en, "fr": fr };
  const configMetafield = JSON.parse(input.shop.metafield.value);
  const loggedInMaxQuantity = configMetafield?.loggedInMaxQuantity || 5;
  const loggedOutMaxQuantity = configMetafield?.loggedOutMaxQuantity || 2;
  const maxAmount = currentBuyerEmail ? loggedInMaxQuantity : loggedOutMaxQuantity;

  const errors = input.cart.lines
  .filter(({ quantity }) => quantity > maxAmount)
  .map(() => ({
    localizedMessage: lang[locale].message.replace("{{ maxAmount }}", maxAmount),
    target: "cart",
  }));

  return {
    errors
  }
};
