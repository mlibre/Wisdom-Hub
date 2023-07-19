# Ethereum

`Ethereum` is a decentralized blockchain. It uses proof-of-stake (PoS) consensus mechanism.  
One of the key features of `Ethereum` is the ability to create and execute `smart contracts`. `Smart contracts` are simply programs written and can be executed on the blockchain.

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
* [Ethereum Explorer](#ethereum-explorer)
* [References](#references)
* [My ETH Address](#my-eth-address)

## A visual representation of how Ethereum works - detailed diagram

A mind map of how Ethereum works:

![Ethereum](./overview.png)

You can find the `Pencil` project file here: [pencil-file](./eth.epgz)

## Proof-of-stake protocol

Proof-of-stake means the following:

* Validating nodes have to stake 32 ETH into a deposit contract as collateral against bad behavior. This helps protect the network because provably dishonest activity leads to some or all of that stake being destroyed.
* In every slot (spaced twelve seconds apart) a validator is randomly selected to be the block proposer. They bundle transactions together, execute them and determine a new 'state'. They wrap this information into a block and pass it around to other validators.
* Other validators who hear about the new block re-execute the transactions to ensure they agree with the proposed change to the global state. Assuming the block is valid, they add it to their own database.
* If a validator hears about two conflicting blocks for the same slot they use their fork-choice algorithm to pick the one supported by the most staked ETH.

## Ether

Ether (ETH) is the cryptocurrency used for many things on the Ethereum network. Fundamentally, it is the only acceptable form of payment for transaction fees, and is required to validate and propose blocks on Mainnet

## Gas

What happens when we run out of gas in the middle of an Ethereum transaction?

If we run out of gas in the middle of an Ethereum transaction, the transaction will fail and the state of the blockchain will revert to what it was before. However, we will still have to pay for the gas that was consumed up to that

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

## Smart Contracts

For this more advance feature, a more sophisticated analogy than a distributed ledger (like bitcoin) introduced.  
Instead of a **distributed ledger**, **Ethereum** is a **distributed state machine**. Ethereum's state is a large data structure which holds not only all accounts and balances, but a machine state, which can change from block to block according to a pre-defined set of rules, and which can execute arbitrary machine code

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
