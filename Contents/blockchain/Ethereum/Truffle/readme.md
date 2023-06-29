---
title: Ganache & Truffle
tags:
  - Ganache
  - Truffle
  - Ethereum
---

# Ganache & Truffle

:::info

You can find the **codes** and **files** [`in the Github repo`](https://github.com/mlibre/blockchain/tree/master/Tutorials/Ethereum/Truffle).

:::

# Ganache & Truffle

Ganache and Truffle are a set of tools for building and running test networks.

# Table of content

- [Installation](#installation)
- [New Workspace Configuration](#new-workspace-configuration)
- [Starting a Truffle Project](#starting-a-truffle-project)
- [Running a Truffle Project](#running-a-truffle-project)

# Installation

```bash
sudo pamac install ganache-bin
sudo npm install -g truffle@latest
```

# New Workspace Configuration

Open **Ganache** and use the following configuration to start a new workspace

- HOSTNAME: 0.0.0.0
- PORT: 7545
- AUTOMINE: true
- GAS LIMIT 10000000000000000
- GAS PRICE: 200000000000

# Starting a Truffle Project

```bash
truffle init
```

Edit the `truffle-config.js` file:

```javascript
module.exports = {
 networks: {
  ganache:
  {
   host: "127.0.0.1",     // Localhost (default: none)
   port: 7545,            // Standard Ethereum port (default: none)
   gas: 5000000,           // Gas sent with each transaction (default: ~6700000)
   network_id: "*",       // Any network (default: none)
  }
 },
 mocha: {
  // timeout: 100000
 },
 compilers: {
  solc: {
   version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
  },
 },
 db: {
  enabled: false
 }
}
```

# Running a Truffle Project

Put your contracts in the `contracts` directory. and compile them with `truffle compile`

```bash
truffle compile
```

Deploy your contracts with `truffle migrate`

```bash
truffle migrate --network ganache --reset
```

It is done, now if you link the project folder to Ganache, you can see the deployed contracts.

You can also run the tests with `truffle test`

```bash
truffle test
```
