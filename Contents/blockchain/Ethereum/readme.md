# Ethereum

`Ethereum` is a decentralized blockchain. It uses proof-of-stake (PoS) consensus mechanism.  
One of the key features of `Ethereum` is the ability to create and execute `Smart Contracts`. `Smart contracts` are programs written and can be executed on the blockchain.

## Table of content

* [Table of content](#table-of-content)
* [A visual representation of how Ethereum works - detailed diagram](#a-visual-representation-of-how-ethereum-works---detailed-diagram)
* [Proof-of-stake protocol](#proof-of-stake-protocol)
* [Ether](#ether)
* [Gas](#gas)
* [Accounts](#accounts)
  * [Accounts vs UTXOs](#accounts-vs-utxos)
* [Blocks](#blocks)
* [Merkle Patricia Trees](#merkle-patricia-trees)
* [Smart Contracts](#smart-contracts)
* [Etehreum Structure](#etehreum-structure)
  * [Transactions Types](#transactions-types)
  * [Block info](#block-info)
* [Ethereum Explorer](#ethereum-explorer)
* [References](#references)
* [My ETH Address](#my-eth-address)

## Basic Concepts

A `blockchain` is a `public database` that is updated and shared across many computers in a network.

`Blocks` are data structures within the blockchain database, where transactions are stored. If you send ETH to someone else, the `transaction` data needs to be `added to a block` to be successful. each block contains number of `transactions`.

`Chain` refers to the fact that each block cryptographically references its parent. In other words, blocks get chained together. The data in a block cannot change without changing all subsequent blocks..

Every computer in the network `must agree` upon `each new block` and `the chain as a whole`. These computers are known as `nodes`. `Nodes` ensure everyone interacting with the blockchain has the `same data`. To accomplish this `distributed agreement`, blockchains need a `consensus mechanism`.

## A visual representation of how Ethereum works - detailed diagram

A mind map of how Ethereum works:

![Ethereum](./assets/eth.png)

You can find the `Pencil` project file here: [pencil-file](./assets/eth.epgz)

## Proof-of-stake protocol

`Ethereum` uses a `proof-of-stake-based` consensus mechanism.  

* `Validators` can then be randomly selected to propose blocks that other validators check and add to the blockchain
* Validating nodes have to stake 32 ETH into a deposit contract as collateral against bad behavior. This helps protect the network because provably dishonest activity leads to some or all of that stake being destroyed
* In every slot (spaced twelve seconds apart) a validator is randomly selected to be the block proposer. They bundle transactions together, execute them and determine a new 'state'. They wrap this information into a block and pass it around to other validators
* Other validators who hear about the new block re-execute the transactions to ensure they agree with the proposed change to the global state. Assuming the block is valid, they add it to their own database
* If a validator hears about two conflicting blocks for the same slot they use their fork-choice algorithm to pick the one supported by the most staked ETH

## Ether

Ether (ETH) is the cryptocurrency used for many things on the Ethereum network. Fundamentally, it is the only acceptable form of payment for `transaction fees`, and is required to `validate` and `propose` blocks. `ETH` also being used to secure the network in 3 ways:

1. It is used as a means to reward validators who propose blocks or call out dishonest behavior by other validators
2. It is staked by validators, acting as collateral against dishonest behavior—if validators attempt to misbehave their ETH can be destroyed
3. It is used to weigh `votes` for newly proposed blocks, feeding into the fork-choice part of the consensus mechanism

## Gas

What happens when we run out of gas in the middle of an Ethereum transaction?

If we run out of gas in the middle of an Ethereum transaction, the transaction will fail and the state of the blockchain will revert to what it was before. However, we will still have to pay for the gas that was consumed up to that

## Smart Contracts

A reusable code (a program) which someone publishes into `Ethereum network`. Anyone can request that the `smart contract` code be executed by making a `transaction request`. `Smart Contracts` exceution can result a `state changes`.

## Accounts

Ethereum has two account types:

* Externally-owned account (EOA) – controlled by anyone with the private keys
  * Creating an account costs nothing
  * Can initiate transactions
  * Transactions between externally-owned accounts can only be ETH/token transfers
  * Made up of a cryptographic pair of keys: public and private keys that control account activities
* Contract account – a smart contract deployed to the network, controlled by code. Learn about smart contracts
  * Creating a contract has a cost because you're using network storage
  * Can only send transactions in response to receiving a transaction
  * Transactions from an external account to a contract account can trigger code which can execute many different actions, such as transferring tokens or even creating a new contract
  * Contract accounts don't have private keys. Instead, they are controlled by the logic of the smart contract code

Both account types have the ability to:

* Receive, hold and send ETH and tokens
* Interact with deployed smart contracts

### Accounts vs UTXOs

`Bitcoin`, along with many of its derivatives, stores data about users’ balances in a structure based on `unspent transaction outputs (UTXOs)`.  
The entire state of the system consists of a set of “unspent outputs” (think, “coins”), such that each coin has an owner and a value, and a transaction spends one or more coins and creates one or more new coins, subject to the validity constraints:

1. Every referenced input must be valid and not yet spent
2. The transaction must have a signature matching the owner of the input for every input
3. The total value of the inputs must equal or exceed the total value of the outputs

A user’s “balance” in the system is thus the total value of the set of coins for which the user has a private key capable of producing a valid signature.

Triple-entry bookkeeping example
(Image from <https://bitcoin.org/en/developer-guide>)

Ethereum jettisons this scheme in favor of a simpler approach: the state stores a list of accounts where each account has a balance, as well as Ethereum-specific data (code and internal storage), and a transaction is valid if the sending account has enough balance to pay for it, in which case the sending account is debited and the receiving account is credited with the value. If the receiving account has code, the code runs, and internal storage may also be changed, or the code may even create additional messages to other accounts which lead to further debits and credits.

The benefits of UTXOs are:

1. Higher degree of privacy: if a user uses a new address for each transaction that they receive then it will often be difficult to link accounts to each other. This applies greatly to currency, but less to arbitrary dapps, as arbitrary dapps often necessarily involve keeping track of complex bundled state of users and there may not exist such an easy user state partitioning scheme as in currency.
2. Potential scalability paradigms: UTXOs are more theoretically compatible with certain kinds of scalability paradigms, as we can rely on only the owner of some coins maintaining a Merkle proof of ownership, and even if everyone including the owner decides to forget that data then only the owner is harmed. In an account paradigm, everyone losing the portion of a Merkle tree corresponding to an account would make it impossible to process messages that affect that account at all in any way, including sending to it. However, non-UTXO-dependent scalability paradigms do exist.

The benefits of accounts are:

1. Large space savings: for example, if an account has 5 UTXO, then switching from a UTXO model to an account model would reduce the space requirements from (20 + 32 + 8) * 5 = 300 bytes (20 for the address, 32 for the txid and 8 for the value) to 20 + 8 + 2 = 30 bytes (20 for the address, 8 for the value, 2 for a nonce(see below)). In reality savings are not nearly this massive because accounts need to be stored in a Patricia tree (see below) but they are nevertheless large. Additionally, transactions can be smaller (eg. 100 bytes in Ethereum vs. 200-250 bytes in Bitcoin) because every transaction need only make one reference and one signature and produces one output.
2. Greater fungibility: because there is no blockchain-level concept of the source of a specific set of coins, it becomes less practical, both technically and legally, to institute a redlist/blacklisting scheme and to draw a distinction between coins depending on where they come from.
3. Simplicity: easier to code and understand, especially once more complex scripts become involved. Although it is possible to shoehorn arbitrary decentralized applications into a UTXO paradigm, essentially by giving scripts the ability to restrict what kinds of UTXO a given UTXO can be spent to, and requiring spends to include Merkle tree proofs of change-of-application-state-root that scripts evaluate, such a paradigm is much more complicated and ugly than just using accounts.
4. Constant light client reference: light clients can at any point access all data related to an account by scanning down the state tree in a specific direction. In a UTXO paradigm, the references change with each transaction, a particularly burdensome problem for long-running dapps that try to use the above mentioned state-root-in-UTXO propagation mechanism.

We have decided that, particularly because we are dealing with dapps containing arbitrary state and code, the benefits of accounts massively outweigh the alternatives. Additionally, in the spirit of the We Have No Features principle, we note that if people really do care about privacy then mixers and coinjoin can be built via signed-data-packet protocols inside of contracts.

One weakness of the account paradigm is that in order to prevent replay attacks, every transaction must have a **nonce**, such that the account keeps track of the nonces used and only accepts a transaction if its nonce is 1 after the last nonce used. This means that even no-longer-used accounts can never be pruned from the account state. A simple solution to this problem is to require transactions to contain a block number, making them un-repayable after some period of time, and reset nonces once every period. Miners or other users will need to “ping” unused accounts in order to delete them from the state, as it would be too expensive to do a full sweep as part of the blockchain protocol itself. We did not go with this mechanism only to speed up development for 1.0; 1.1 and beyond will likely use such a system.

## Blocks

Blocks are batches of transactions with a hash of the previous block in the chain. This links blocks together (in a chain) because hashes are cryptographically derived from the block data

## Merkle Patricia Trees

The Merkle Patricia tree/trie, previously envisioned by Alan Reiner and implemented in the Ripple protocol, is the primary data structure of Ethereum, and is used to store all account state, as well as transactions and receipts in each block.

## Etehreum Structure

### Transactions Types

A transaction in ETH-2 looks like this:

```js
eth.getTransaction("0x43ad3737b39356024aa13bc396237208e66b73bc5f99ab33e08c60731b8a14a9")
{
  accessList: [],
  blockHash: "0x24635aee8638d9c34f01fdc3a6a80b39dc081df59d33550be92a0badff0c93bb",
  blockNumber: 17641198,
  chainId: "0x1",
  from: "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5",
  gas: 21000,
  gasPrice: 22310851574,
  hash: "0xa78d2e8e676ad408ad75399c36946ee27968beec36fe38f4c284ffd2c39f20af",
  input: "0x",
  maxFeePerGas: 22310851574,
  maxPriorityFeePerGas: 0,
  nonce: 383610,
  r: "0x16bb14d65b1e768d6671e69c7ee6189ca070b90a8519c34e97169a4fe0e72865",
  s: "0x3107edfd2b4a1cf2d03ce305b74323486e70e9ee0c29ee02c61ed74376e88298",
  to: "0xe688b84b23f322a994a53dbf8e15fa82cdb71127",
  transactionIndex: 168,
  type: "0x2",
  v: "0x0",
  value: 44186254496743523
}

// OR

{
  accessList: [],
  blockHash: "0x424483e1970781103b9f4f22b2d906eeb25ebab5d417b8d706802fec10b4197d",
  blockNumber: 17619068,
  chainId: "0x1",
  from: "0xbc0f14d6bdd2f46ab1d56bfd5f28eb6c2a2d2777",
  gas: 274223,
  gasPrice: 24387282490,
  hash: "0x43ad3737b39356024aa13bc396237208e66b73bc5f99ab33e08c60731b8a14a9",
  input: "0x3593564c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000002890df158d76e584877a1d17a85fea3aeeb85aa600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
  maxFeePerGas: 31580923735,
  maxPriorityFeePerGas: 10000000000,
  nonce: 3895,
  r: "0x5b7f1d328c3c85b0c74e23511938817f338066f34dabaa2f72fe161c187dac3e",
  s: "0x6583f2d3db02c51e9acbfb700f6dd28fac62108a58e397306871e5769d3b7443",
  to: "0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b",
  transactionIndex: 0,
  type: "0x2",
  v: "0x1",
  value: 0
}
```

### Block info

A block in `Ethereum` looks like this:

```js
web3.eth.getBlock(eth.blockNumber)
{
  baseFeePerGas: 14387282490,
  difficulty: 0,
  extraData: "0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465",
  gasLimit: 30000000,
  gasUsed: 13371853,
  hash: "0x424483e1970781103b9f4f22b2d906eeb25ebab5d417b8d706802fec10b4197d",
  logsBloom: "0xd16bc008ef900be8452b8128845c1b3014251b90402259020c4520c4746a88b301a403c34060b54ef2109a3663e0190546c195e861a2af47429380824635a81439a7ccdf4ea0be044870a028497f86c170de301fe3f44580c99137f49eef2b",
  miner: "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5",
  mixHash: "0xfc5ce5faa47e9198054791dff0372514fb876038b605b02abd82fa3b510adbeb",
  nonce: "0x0000000000000000",
  number: 17619068,
  parentHash: "0x8afcef307dfe111676d5baa35ab148131fd4918b499c807c657c6291429f8be0",
  receiptsRoot: "0xc04575fad7649ea33ec114a2626e6ad87d902c1bea0ac51ef47e5aeb03aadafb",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 162982,
  stateRoot: "0x9fce67ea0ac4c8e9bb310e538663203544ed2f9216a5562ca389f66e154a8af3",
  timestamp: 1688455619,
  totalDifficulty: 5.8750003716598352816469e+22,
  transactions: ["0x43ad3737b39356024aa13bc396237208e66b73bc5f99ab33e08c60731b8a14a9", "0xe2588a39acfb64ede45f2372954952b69a0effc9d953b6ff954e624ec9ef7e7a", "0x10a61db4c6b065cf91de037fbb5eb30717c97b9857c26a42028ab9d0704256e8", "0x4e0c96c3d942f79384fef9498d022b76ebae4b1097606996d0a4c77abfc2d5b4", "0xe2a973235b5563490b2b4edbc77f9d98bebad087b70b8238a4476a7ac86d6aa5", "0x4adc76b7e31c97e84dc705c79042ecc6b4e53cbe751a586f1f5b13496f0e5968", "0x0656b67f8bddbfac490c114f2e5ea5e09b3256b5d242649546b9184c65f989fd", "0xbc2b9acc05f0b01b2311c438243d5bcf6120981672c014f76e5cdb62b8158dc4"],
  transactionsRoot: "0x5113e5b9bb408a7b82ad324135d75543333ada8276bb13a2b8dca6f38b58edac",
  uncles: [],
  withdrawals: [{
      address: "0x210b3cb99fa1de0a64085fa80e18c22fe4722a1b",
      amount: "0xd827da",
      index: "0x8e9d47",
      validatorIndex: "0x82c3d"
  }, {
      address: "0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f",
      amount: "0xd87c41",
      index: "0x8e9d4f",
      validatorIndex: "0x82c45"
  },
  withdrawalsRoot: "0x4915e375cb0b2df0dfb9115fab5c0acef3abebd037cdc693edc065f3a8da44b0"
}
```

## Ethereum Explorer

* <https://etherscan.io/>
* <https://rinkeby.etherscan.io/address/CONTRACT_ADDRESS>

## References

* <https://ethereum.org/en/developers/docs/>
* <https://docs.infura.io/networks/ethereum>
* <https://eips.ethereum.org/>
* <https://github.com/web3/web3.js>
* <https://web3js.org>

## My ETH Address

> 0xc9b64496986E7b6D4A68fDF69eF132A35e91838e
