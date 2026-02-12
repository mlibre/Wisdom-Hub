---
title: Swap DApp From Scratch
tags:
  - dex
  - near
---

# Building a simple swap DApp On The NEAR Blockchain

:::info

You can find the **codes** and **files** [`in the Github repo`](https://github.com/mlibre/blockchain/tree/master/Tutorials/NEAR/simple-exchange).

:::

In this tutorial, we will go through the process of building a token swap exchange on the `NEAR` blockchain.  
We start by writing **Token** and **Exchange** smart contracts in `Rust` and deploying the contracts on the `NEAR` testnet chain using `near-cli`.  
Then we make a simple **Web UI** to interact with the **Exchange**, using the `near-sdk-js` library.  
Finally, we host our DApp on `Skynet`.

## Table of Contents

- [Requirements](#requirements)
- [Setting up near-cli](#setting-up-near-cli)
- [Accounts & Wallet](#accounts--wallet)
- [Setting up rust](#setting-up-rust)
- [Getting started](#getting-started)
- [MLB1 contract](#mlb1-contract)
  - [Building MLB1 contract](#building-mlb1-contract)
  - [Deploying MLB1 contract](#deploying-mlb1-contract)
- [Exchange contract](#exchange-contract)
  - [Deploying the contract](#deploying-the-contract)
  - [Swap near to token](#swap-near-to-token)
- [Web UI](#web-ui)
- [Hosting On Skynet](#hosting-on-skynet)
- [References](#references)
- [About The Author](#about-the-author)
- [Donations](#donations)

## Requirements

We will use the following technologies:

- [**NEAR CLI**](https://github.com/near/near-cli) v2.2.0 or higher installed globally
- [**near-sdk**](https://docs.rs/near-sdk/3.1.0/near_sdk/) v3 or higher installed globally
- [**Nodejs and NPM**](https://nodejs.org/en/download/) v14.17.6 LTS or higher installed
- [**Rust**](https://www.rust-lang.org/) v1.56 or higher installed
- [**React**](https://reactjs.org/) v17.0.1 or higher installed
- [**near-api-js**](https://www.rust-lang.org/) v0.43.1 or higher installed
- [**parcel**](https://parceljs.org/) v2 or higher installed

## Setting up near-cli

**NEAR CLI** is a Node.js application that relies on `near-api-js` to connect to and interact with the `NEAR blockchain`. **Create accounts**, **access keys**, **sign & send transactions** with this command line interface tool.

```bash
sudo npm install -g near-cli
near login # Store testnet access keys locally
```

`near login` will open the browser, **testnet wallet** page. You will login to the **testnet** and **store** the access keys **locally**.

> Note: All the `near` commands work on the testnet chain (<https://rpc.testnet.near.org>), unless you specify the `NEAR_ENV` variable or provide the `--nodeUrl` flag.  

## Accounts & Wallet

In **NEAR**, accounts are `string`, like `mlibre.near`. Each account can have multiple keys-pair.  
If you use `near login`, near will save your **key-pair** from the wallet into your local computer. You can find them here:

```bash
cat .near-credentials/testnet/ACCOUNT_ID.near.json
```

You can also query an account's public keys by running:

```bash
near keys mlibre.testnet
```

Go ahead and create a `testnet` wallet.

> <https://wallet.testnet.near.org/>

## Setting up rust

Rust is a modern systems programming language, focused on safety, speed and concurrency. It is used to write high-performance, distributed systems. Rust also supports WebAssembly.  
it is currently, the preferred programming language for writing smart contracts on **NEAR**.

[install](https://rust-lang.github.io/rustup/installation/index.html) Rust, and add the `wasm` to the rust toolchain.

```bash
# https://www.rust-lang.org/
rustup target add wasm32-unknown-unknown
```

## Getting started

1. First, we write a fungible token (FT) named `MLB1` in rust, and will deploy it on the chain. We use it as the `near-token` swap pair.
2. We write an **Exchange Contract** that will handle the swap functionality. Each `token-near` pair, one exchange contract.
3. We make a simple `Web UI` to interact with the **Exchange Contract**, using `near-sdk-js` and `React` libraries.
4. We host our DApp on `Skynet`.

## MLB1 contract

**MLB1** is the symbol of the token we are going to deploy on the **NEAR testnet**. We will use the [official](https://github.com/near-examples/FT) template for the contract, which is based on the **NEP-141** standard.

> Note, In NEAR each account can only have one smart contract. And re-deploying contracts **DOES NOT** create a new state.

### Building MLB1 contract

```bash
git clone https://github.com/near-examples/FT.git MLB1 # cloning the FT template 
cd MLB1
./build.sh # Build
```

### Deploying MLB1 contract

From now we consider `mlibre.testnet` as the master account.

```bash
near create-account mlb1.mlibre.testnet --masterAccount mlibre.testnet # Create a sub account for mlb1 contract
near state mlb1.mlibre.testnet # checking the newly created account state
near deploy --wasmFile res/fungible_token.wasm --accountId mlb1.mlibre.testnet # Deploying the contract
```

Deploy output is something like this:

```text
Starting deployment. Account id: mlb1.mlibre.testnet, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: res/fungible_token.wasm
Transaction Id 8JJCqCXiwVCppQTExUXJBnnXkj4pzvqjNN2jJx5RPeGs
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/8JJCqCXiwVCppQTExUXJBnnXkj4pzvqjNN2jJx5RPeGs
Done deploying to mlb1.mlibre.testnet
```

You can check the account in the explorer, there you will find the actions that happened.

![mlb1.mlibre.testnet](./mlb1.png)

Now we should call the `new` method of the contract to initialize a token:

```bash
near call mlb1.mlibre.testnet new '{"owner_id": "mlb1.mlibre.testnet", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "MLB1", "symbol": "MLB1", "decimals": 8 }}' --accountId mlb1.mlibre.testnet
```

You can check the explorer for details, or query the account's state with cli:

```bash
near state mlb1.mlibre.testnet # Account status
# near view-state mlb1.mlibre.testnet --finality final # key-value status
# near view-state mlb1.mlibre.testnet --finality final --utf8 # key-value status in utf8
# near view mlb1.mlibre.testnet ft_metadata # Token metadata
```

Output is something like this:

```javascript
{
  amount: '100000262536618865600000010',
  block_hash: 'Br6C34jP4B587P7S4fXPocxfMYe85bzU252UH9KXjudf',
  block_height: 72853693,
  code_hash: '7Mjzf1s65QZ7aeh7xFjfoihrqpinVS7FaNmyh7kqupEN',
  locked: '0',
  storage_paid_at: 0,
  storage_usage: 226967,
  formattedAmount: '100.00026253661886560000001'
}
```

And for **MLB1** balance of the account:

```bash
near view mlb1.mlibre.testnet ft_balance_of '{"account_id": "mlb1.mlibre.testnet"}'
```

## Exchange contract

The exchange contract takes a `token address` parameter in its `new` method, which is the token that can be swapped for **NEAR** and vice versa. Follow the [official](https://docs.near.org/docs/develop/contracts/rust/intro) template to start a new contract.

```bash
cargo new exchange
# Follow the doc: https://docs.near.org/docs/develop/contracts/rust/intro
```

The folder structure looks like this:

```text
├── Cargo.toml
├── src
│   └── lib.rs
└── target
    └── exchange.wasm
```

Contract code is straightforward:

```rust
// lib.rs
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, log, near_bindgen, ext_contract, AccountId, Balance, PanicOnDefault, PromiseOrValue};

near_sdk::setup_alloc!();

#[ext_contract(mlb1)]
trait FungibleToken {
    fn ft_transfer(&mut self, receiver_id: String, amount: String, memo: Option<String>);
    fn ft_total_supply(&self) -> String;
    fn ft_balance_of(&self, account_id: String) -> String;
}

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct Exchange {
    token_address: AccountId,
    logo_url: String
}

#[near_bindgen]
impl Exchange {
    #[init]
    pub fn new(_token_address: AccountId) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner's method");
        Self {
            token_address: _token_address,
            logo_url: "".to_string()
        }
    }

    #[payable]
    pub fn near_to_token(&mut self) {
        let near = env::attached_deposit();
        let account = &env::signer_account_id();
        env::log(near.to_string().as_bytes());
        env::log(account.to_string().as_bytes());

        mlb1::ft_transfer(
            account.to_string(),
            near.to_string(),
            None,
            &self.token_address.to_string(), // mlb1 account id
            1, // yocto NEAR to attach
            5_000_000_000_000 // gas to attach
        );
    }

    pub fn get_token_address(self) -> AccountId {
        self.token_address
    }

    pub fn set_token_address(&mut self, _token_address: AccountId) {
        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner's method");
        self.token_address = _token_address
    }

    pub fn set_logo_url(&mut self, url: String) {
        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner's method");
        self.logo_url = url
    }

    pub fn get_logo_url(self) -> String {
        self.logo_url
    }
}
```

- `new` function is used to initialize the contract.
  - `assert!(&env::signer_account_id() == &env::current_account_id()` is used to check if the current account is the owner of the contract.
- `near_to_token` function is used to swap **NEAR** for tokens
- `set_token_address` function is used to set the token address.
- `get_token_address` function is used to get the token address.

And `Cargo.toml` is:

```javascript
[package]
name = "exchange"
version = "1.0.0"
authors = ["Mlibre <m.gh@linuxmail.org>"]
edition = "2021"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
near-sdk = "3.1.0"

[profile.release]
codegen-units = 1
# Tell `rustc` to optimize for small code size.
opt-level = "z"
lto = true
debug = false
panic = "abort"
overflow-checks = true
```

As you can see in `[dependencies]` section, we are using [near-sdk](https://docs.rs/near-sdk/3.1.0/near_sdk/) version 3.1.0 rust library.

### Deploying the contract

Lets create an account for the exchange contract, compile and deploy it:

```bash
# near delete exchange.mlibre.testnet mlibre.testnet
near create-account exchange.mlibre.testnet --masterAccount mlibre.testnet

cargo build --target wasm32-unknown-unknown --release
cp target/wasm32-unknown-unknown/release/*.wasm ./target
near deploy --wasmFile target/exchange.wasm --accountId exchange.mlibre.testnet
```

There is a `new` method in the exchange contract, we should call it to **initialize** the token:

```bash
near call exchange.mlibre.testnet new '{"_token_address": "mlb1.mlibre.testnet"}' --accountId exchange.mlibre.testnet

# near call exchange.mlibre.testnet set_token_address '{"_token_address": "mlb1.mlibre.testnet"}' --accountId exchange.mlibre.testnet
# near deploy exchange.mlibre.testnet --wasmFile target/exchange.wasm --initFunction 'new' --initArgs '{"_token_address": "mlb1.mlibre.testnet"}'

near view exchange.mlibre.testnet get_token_address --accountId exchange.mlibre.testnet
```

In order to deposit some **MLB1** to the exchange contract, we need to call the `storage_deposit` method:

```bash
near call mlb1.mlibre.testnet storage_deposit '' --accountId exchange.mlibre.testnet --amount 0.0125
near call mlb1.mlibre.testnet ft_transfer '{"receiver_id": "exchange.mlibre.testnet", "amount": "1900"}' --accountId mlb1.mlibre.testnet --amount 0.000000000000000000000001
near view mlb1.mlibre.testnet ft_balance_of '{"account_id": "mlb1.mlibre.testnet"}'
```

### Swap near to token

Now to swap some **NEAR** for **MLB1** as `mlibre.testnet`, we call the `near_to_token` method:

```bash
near call mlb1.mlibre.testnet storage_deposit '' --accountId mlibre.testnet --amount 0.0125
near call exchange.mlibre.testnet near_to_token --accountId mlibre.testnet --amount 0.000000000000000000000001
near view mlb1.mlibre.testnet ft_balance_of '{"account_id": "exchange.mlibre.testnet"}'
near view mlb1.mlibre.testnet ft_balance_of '{"account_id": "mlibre.testnet"}'
```

You can find the source codes [here](https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange)

## Web UI

Writing a web DApp for the exchange contract is easy. We can use the `npx create-near-app web-ui` tool to create a ready-to-use `react`, `rust`, `parcel` stack.  

```bash
npx create-near-app web-ui --frontend=react --contract=rust 
cd web-ui
yarn start # Installing dependencies and starting the app 
```

The folder structure should look like:

```text
|
├── babel.config.js
├── dist
├── package.json
├── src
│   ├── App.js
│   ├── assets
│   │   ├── favicon.ico
│   │   ├── mlogo-black.svg
│   │   └── mlogo-white.svg
│   ├── config.js
│   ├── global.css
│   ├── index.html
│   ├── index.js
│   ├── utils.js
│   └── wallet
│       └── login
│           └── index.html
```

To connect to a wallet, signing in and out, NEAR provides `near-api-js` library.  
It is imported in `utils.js`.

```javascript
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()
  window.account = await window.walletConnection.account();

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.account, nearConfig.contractName, {
    viewMethods: ['get_token_address'],
    changeMethods: ['near_to_token'],
    sender: window.account
  })
}
```

Every time the app starts, the `initContract` function is called. It initializes the connection to the NEAR testnet and creates an `Account`, `Wallet`, and `Contract` object. Then we call the `get_token_address` method to get the token address in `App.js`.

```javascript
export default function App() {
  const [token_address, set_token_address] = React.useState()
  const [showNotification, setShowNotification] = React.useState(false)

  React.useEffect(
    async () => {
      if (window.walletConnection.isSignedIn()) {
        try {
          let token_address = await window.contract.get_token_address();
          set_token_address(token_address)
        } catch (error) {
          console.log(error);
        }
      }
    },
    []
  )
  .
  .
  .
```

We also need to change the form action to:

```javascript
await window.contract.near_to_token({},
  300000000000000, // attached GAS (optional)
  token_address.value // attached deposit in yoctoNEAR (optional)
)
```

Before we start the app we are going to make some changes minor changes as well. Start by upgrading the `parcel` dependency to the latest version:

- Replace `parcel-bundler` with `parcel` in the `package.json`
  
  ```bash
  npm i parcel@latest
  ```
  
- Add `type="module"` to the `script` tag in the `src/index.html` file.
  
  ```html
  <script type="module" src="./index.js"></script>
  ```

- In `config.js` set the contract name to `exchange.mlibre.testnet`

  ```javascript
  function getConfig() {
    return {
      networkId: 'testnet',
      nodeUrl: 'https://rpc.testnet.near.org',
      contractName: 'exchange.mlibre.testnet',
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org',
      explorerUrl: 'https://explorer.testnet.near.org',
    }
  }

  ```

You can now run the app using the following command:

```bash
parcel src/index.html --open
```

![web-ui](./web-ui.png)

You can find the source codes [here](https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange)

## Hosting On Skynet

After running dapp using `parcel src/index.html --open`, copy the dist folder and upload it on [Skynet](https://siasky.net/).

## References

- <https://docs.near.org>
- <https://github.com/near/near-cli>
- <https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange>

## About The Author

I'm mlibre, a random guy from the solar galaxy. I am interested in blockchain tech and find it very useful for lots of things. Feel free to check my [Github](https://github.com/mlibre)

## Donations

ETH:
> 0xc9b64496986E7b6D4A68fDF69eF132A35e91838e

NEAR:
> mlibre.near