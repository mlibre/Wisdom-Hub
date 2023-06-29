---
title: Simple implementation
tags:
  - Bitcoin
---

# Simple implementation of POW

:::info

You can find the **codes** and **files** [`in the Github repo`](https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/POW-Example).

:::

[This code](https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/POW-Example) implements a simple `blockchain` in JavaScript using the `Node.js` platform. It uses the `crypto` and `fs` libraries provided by `Node.js`.

When the blockchain application is run, it initializes a `Blockchain` object and creates a genesis block if the blockchain file is empty. `Miners` can then mine blocks by adding transactions to the transaction pool and calling the `mine` method on a block. Transactions are verified by checking the balance of the sending address and the transaction number of the wallet. The transaction pool is also regularly updated to remove confirmed transactions and prevent it from becoming too large. Lets explain each class separately.

## Block

The `Block` class represents a block in the blockchain, with properties such as block number, timestamp, transactions, previous hash, miner, hash, and nonce. It has methods for calculating the hash of the block, updating the transactions, and mining the block by repeatedly updating the nonce until the resulting hash starts with a certain number of zeros (determined by the difficulty level). The class also has a static method for validating a block.

* `blockNumber`: A unique number for the block.
* `timestamp`: The timestamp of the block creation.
* `transactions`: An array of transactions.
* `previousHash`: The hash of the previous block.
* `miner`: The public key of the miner who mined the block.
* `hash`: The hash of the block.
* `nonce`: The nonce used to mine the block.
* `signature`: The digital signature of the block.

The class has the following methods:

* `calculateHash()`: Calculates the hash of the block using the SHA-256 algorithm.
* `updateTransactions(transactions)`: Updates the transactions in the block.
* `mine(difficulty)`: Mines the block by finding a hash that satisfies a given difficulty level.
* `signBlock(privateKey)`: Signs the block using the private key of the miner.
* `static verifySignature(publicKey, signature, block)`: Verifies the digital signature of the block using the public key of the miner.

## Chain

The class `Chain` represents a chain of blocks in the blockchain. The chain can be stored on the file system and loaded from it. The class also provides methods to get, add, and retrieve the latest block in the chain, as well as the length of the chain.

* `getBlock(blockNumber)`: Gets the block at the given block number.
* `addBlock(block)`: Adds a block to the blockchain.
* `getLatestBlock()`: Gets the latest block in the blockchain.
* `getBlockChainLength()`: Gets the length of the blockchain.
* `isBlockChainEmpty()`: Checks if the blockchain is empty.
* `update()`: Updates the blockchain in the file system.

## Wallet

The class `Wallet` represents a user's wallet. A user can have multiple wallets, each with its own balance and transaction number. The wallets can be stored on the file system and loaded from it. The class also provides methods to get, add, or subtract balance, get the transaction number, check if a wallet address exists, and update the wallet data on the file system.

* `static createKeyPair()`: Creates a new key pair (public and private) for the wallet.
* `static signTransaction(privateKey, transaction)`: Signs a transaction using the private key of the wallet.
* `static verifySignature(publicKey, signature, data)`: Verifies the digital signature of a transaction using the public key of the wallet.
* `get(address)`: Gets the balance and transaction number for the given wallet address.
* `incrementTN(address)`: Increments the transaction number for the given wallet address.
* `balance(address)`: Gets the balance for the given wallet address.
* `addBalance(address, amount)`: Adds the given amount to the balance of the given wallet address.
* `minusBalance(address, amount)`: Subtracts the given amount from the balance of the given wallet address.
* `transactionNumber(address)`: Gets the transaction number for the given wallet address.
* `checkWalletAddresses(address)`: Creates a new wallet address if it doesn't exist in the collection.
* `update()`: Updates the wallet collection in the file system.

## Blockchain

Finally, the `Blockchain` class ties everything together, representing the overall blockchain system. It has properties such as the transaction pool, mining reward, and max transactions per block. It also has methods for creating the genesis block, adding transactions to the transaction pool, and mining a new block if the transaction pool is full.

## Usage

You can simply run the program like this:

```js
const Blockchain = require( "./main" ).Blockchain;
const Wallet = require( "./main" ).Wallet;
const crypto = require( "crypto" );

const userKeysPairs = Wallet.createKeyPair();
const minerKeyPairs = Wallet.createKeyPair();
const blockchain = new Blockchain( "blockchain.json", "wallets.json", userKeysPairs );
 
let trx = 
{
 from: userKeysPairs.publicKey,
 to: "user2",
 amount: 1,
 fee: 0,
 transaction_number: 2
}
trx.signature = Wallet.signTransaction( userKeysPairs.privateKey, trx );

blockchain.addTransaction(trx);

let trx2 = {
 from: userKeysPairs.publicKey,
 to: "user3",
 amount: 5,
 fee: 0.3,
 transaction_number: 3
}
trx2.signature = Wallet.signTransaction( userKeysPairs.privateKey, trx2 );
blockchain.addTransaction(trx2);

blockchain.mineBlock( minerKeyPairs );
console.log( blockchain.validateChain() );
console.log( "Latest Block :", blockchain.chain.getLatestBlock() );
console.log( "Wallets : ", blockchain.wallet );
```
