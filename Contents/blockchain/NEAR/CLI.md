# NEAR CLI

`near` is a command line interface for interacting with the `NEAR` blockchain. It is a node.js application.

Features:

* Create accounts
* access keys management
* sign & send transactions
* ...

All the `near` commands will be sent to the testnet chain (<https://rpc.testnet.near.org>), unless you specify the `NEAR_ENV` variable or provide the `--nodeUrl` flag.  
For example: `export NEAR_ENV=testnet`. Or `--nodeUrl "https://rpc.testnet.near.org"`.  
By default `Near` will use `testnet` accounts, unless you provide the `--accountId` flag.  

## Table of content

* [NEAR CLI](#near-cli)
  * [Table of content](#table-of-content)
  * [Installation](#installation)
  * [Accounts](#accounts)
    * [State](#state)
    * [Keys](#keys)
    * [Named Account](#named-account)
  * [Smart Contracts](#smart-contracts)
* [Wallet](#wallet)

## Installation

```bash
sudo npm install -g near-cli

# Get the current version of `NEAR`
near --version
```

## Transactions

Let dig [this transaction](https://explorer.testnet.near.org/transactions/v3eawe5UJmMBvNQe2rgoKEuS92HfXMtM5BLLRcBix39#HwQXncGsoE9PHcFgUUvYbM1ZVnpkgdj7gG9kH8A8HBLS)

```bash
near tx-status mlibre.testnet:v3eawe5UJmMBvNQe2rgoKEuS92HfXMtM5BLLRcBix39
```

The output is:

```js
{
  status: { SuccessValue: '' },
  transaction: {
    actions: [
      'CreateAccount',
      { Transfer: { deposit: '100000000000000000000000000' } },
      {
        AddKey: {
          access_key: { nonce: 0, permission: 'FullAccess' },
          public_key: 'ed25519:8C69kVzUfrVL9Lv4jeQkM7th2zhpstGxn8yFmKRk1QmS'
        }
      }
    ],
    hash: 'v3eawe5UJmMBvNQe2rgoKEuS92HfXMtM5BLLRcBix39',
    nonce: 129288971000001,
    public_key: 'ed25519:6rCWntAc1qVDrnA95MwphWduqnzULbcR3CiBGQhzS9s7',
    receiver_id: 'salamslamslamsalmslsamlasmlsmsalamslam',
    signature: 'ed25519:4bLvSkYMn2uEQQLGfrkvY3V5YL4HfBv8fUpP94wR14TMxkAF5j2q7dBTYm9GzX973rX2nCP1sXgHRVW6Psz4YQCh',
    signer_id: 'mlibre.testnet'
  },
  transaction_outcome: {
    block_hash: 'oXRtxuibGRNXAVVcGwYRjcmXcvhGEKzgkQiiEPiQTby',
    id: 'v3eawe5UJmMBvNQe2rgoKEuS92HfXMtM5BLLRcBix39',
    outcome: {
      executor_id: 'mlibre.testnet',
      gas_burnt: 4174947687500,
      logs: [],
      metadata: { gas_profile: null, version: 1 },
      receipt_ids: [ 'HwQXncGsoE9PHcFgUUvYbM1ZVnpkgdj7gG9kH8A8HBLS' ],
      status: {
        SuccessReceiptId: 'HwQXncGsoE9PHcFgUUvYbM1ZVnpkgdj7gG9kH8A8HBLS'
      },
      tokens_burnt: '417494768750000000000'
    },
    proof: [
      {
        direction: 'Right',
        hash: 'B7J2nAGp5ies9kYmQ63RcJwybJevqZsEsNPzKyZ4NfVE'
      },
      {
        direction: 'Right',
        hash: 'Ee4sGA83vAzTQhkx3vybEA883gR2iNMnkRY4J6hv3nho'
      },
      {
        direction: 'Right',
        hash: 'HVYx7kbGPoHsvKvpHMMTT6QYYyBZKE6T8xAtrFr2NFxY'
      }
    ]
  },
  receipts_outcome: [
    {
      block_hash: '96w8NkjiWmYU6iHuEvcrDfWEHiqmNiiWCAhWAYNMhz4M',
      id: 'HwQXncGsoE9PHcFgUUvYbM1ZVnpkgdj7gG9kH8A8HBLS',
      outcome: {
        executor_id: 'salamslamslamsalmslsamlasmlsmsalamslam', // executor_id is Receiver ID
        // Predecessor ID is not mentioned in the output. it is the signer_id in transaction object
        gas_burnt: 4174947687500,
        logs: [],
        metadata: { gas_profile: [], version: 3 },
        receipt_ids: [ 'EXNe4EKTFSm75TrGnvtUhMTqxsoUPDPYw7jEoDi3LweL' ], // the receipts created by this receipt
        // in this example it is the refund receipt which is always is there and is the last receipt
        status: { SuccessValue: '' },
        tokens_burnt: '417494768750000000000'
      },
      proof: [
        {
          direction: 'Right',
          hash: 'Dsnj6at4baCf2ztbHmaecMY6xH41YXjAVf1dFAioV185'
        },
        {
          direction: 'Left',
          hash: '8vYcbcJWApM8MvAoBVrjrp3KGhYBiZMccmUNuBnT9G9'
        },
        {
          direction: 'Right',
          hash: '4U5cjwU49zwi5owZRUyyCdCnosGZh86Je5GWfpQUNQa4'
        }
      ]
    },
    {
      // it is the refund receipt which is always is there and is the last receipt
      block_hash: 'BXkhJFVsWcDgaFznMTwk674WvzokS62pfPL879EbrmAN',
      id: 'EXNe4EKTFSm75TrGnvtUhMTqxsoUPDPYw7jEoDi3LweL',
      outcome: {
        executor_id: 'mlibre.testnet', // // executor_id is Receiver ID
        // Predecessor ID for the refund receipt is system itself
        gas_burnt: 223182562500,
        // This contains the gas "burnt" for refund receipts. Even though we don't actually
        // charge any gas for refund receipts, we still count the gas use towards the block gas
        // https://github.com/near/nearcore/pull/4405/files
        logs: [],
        metadata: { gas_profile: [], version: 3 },
        receipt_ids: [],
        status: { SuccessValue: '' },
        tokens_burnt: '0'
      },
      proof: [
        {
          direction: 'Right',
          hash: '97J5UUmsVCKeThLf2RxQ4ZkjySdNvVzaUsRrh1YJQZEn'
        },
        {
          direction: 'Left',
          hash: '5HqirRFCGCpNF3A8bE9v9xLX8ZzaByPsiGPdoWraEZPU'
        },
        {
          direction: 'Right',
          hash: 'HU97NYSfmXZftzDakJmcYc9xy4ZS2m8LWpmPSuG9asZ9'
        }
      ]
    }
  ]
}
```

## Accounts

### State

```bash
near state mlibre.testnet # Account State
near view-state mlibre.testnet --finality final --utf8 true # Contract State
```

### Keys

When you use the command `near login` in the `NEAR` blockchain, you are essentially creating a new access key for your NEAR account. When you use the `near login` command, it asks the `full-access key` in the `NEAR Wallet` to use the `AddKey Action` to `create` another `full-access key locally` on your computer. `NEAR CLI` uses that new key to deploy, make function calls, etc

```bash
# export NEAR_ENV=<network> (use guildnet / testnet / mainnet)

near login # Download, Import and Store your testnet account's access keys locally
NEAR_ENV=mainnet near login # Import mainnet accounts


ls -R ~/.near-credentials # Keys Folder

near keys mlibre.testnet # Show all the keys for a given account

near state mlibre.near --nodeUrl https://rpc.mainnet.near.org # Account information on mainnet
near state mlibre.testnet # Account information on testnet
```

### Named Account

```bash
near create-account salamslamslamsalmslsamlasmlsmsalamslam --masterAccount mlibre.testnet
```

## Smart Contracts

```bash
near deploy # Deploys a smart contract with default options and a testnet account on the testnet chain, unless `--accountId`, `NEAR_ENV` or `--nodeUrl` is provided

near deploy --nodeUrl "https://rpc.testnet.near.org" --seedPhrase "radar hammer reopen black suspect olympic mountain imitate slogan lend science advice" --accountId mlibre.testnet --wasmFile ./out/main.wasm
```

# Wallet

In **NEAR** accounts are string, like `mlibre.near`. Each account can have multiple keys-pair.  
If you use `near login`, near will will save your key-pair from the wallet locally. you can find them here:

```bash
cat .near-credentials/mainnet/mlibre.near.json
```

You can query an account's keys by running:

```bash
near keys mlibre.near --nodeUrl https://rpc.mainnet.near.org
```

You can create wallet in mainnet and testnet here:

Testnet:
<https://wallet.testnet.near.org/>

Mainnet:
<https://wallet.near.org/>
