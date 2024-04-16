# Shopify extension-only application - Cart validation

This Shopify application is an extension-only application, meaning it does not have its own page in the Shopify admin.

## Features

This Shopify application contains the following features:

- General rule for non logged in users: they can't add more than 2 items of the same product variant to their cart.
- Special rule for logged in users: they can't add more than 5 items of the same product variant to their cart.
- Localization of the error message (English and French)
- No coding required the update the rule: the maximum amount of items can be updated by the merchant, using a metafield on the Shop model.

## Running this application

To run this application locally:

1. Clone the repository.
1. Follow Shopify's [Work on an existing app tutorial](https://shopify.dev/docs/apps/tools/cli/existing) to install the project dependencies and preview the app.
1. Activate the app's checkout rule on your store. Go to your Shopify admin > Settings > Checkout > Checkout rules > Add rules > [NAME_OF_YOUR_APP] > Save > Turn on.

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [Extension-only apps](https://shopify.dev/docs/apps/app-extensions/extension-only-apps)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
