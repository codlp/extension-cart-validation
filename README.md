# Shopify extension-only application - Cart validation

This Shopify application is an extension-only application, meaning it does not have its own page in the Shopify admin.

## Features

This Shopify application contains the following features:

- Logged in users can't add more than 3 items of the same product variant to their cart.
- Non logged in users can't add more than 1 item of the same product variant to their cart.
- Localization of the error message.

## Getting started

### Requirements

1. [Download and install Node.js](https://nodejs.org/en/download/).
1. [Create a Shopify partner account](https://partners.shopify.com/signup).
1. Create a store for testing, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Steps

Once the application is installed on your development store, launch your app server:
```shell
npm run dev
```

And activate the application:
Settings > Checkout > Checkout rules > Add rules > [NAME_OF_YOUR_APP] > Save > Turn on.

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)
