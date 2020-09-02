# Blockset API - Hello, World!

A simple API which demonstrates how easy it is to use the [Blockset API](https://docs.blockset.com) to get data.

This API exposes a single endpoint (`GET /the-pizza-tx`), which acts as a proxy to the
Blockset API, and returns back the full Bitcoin transaction of the infamous
[Pizza Transaction](https://bitcoinpizzaindex.net/).

## Setup

### Install dependencies

```sh
$ npm install
```

### Create an `.env` file

```sh
$ cp .env.example .env
```

### Set your Blockset API User JWT

Edit `.env` and set the `BLOCKSET_API_USER_JWT` variable to a valid User JWT.

If you don't have one, or don't know what this is, refer to the [Blockset Authentication guide](https://docs.blockset.com/getting-started/authentication).

### Run the API

```sh
$ npm start
```

### View the blockchain data!

Navigate to http://localhost:3000/the-pizza-tx in your browser, and see the transaction that made history.
