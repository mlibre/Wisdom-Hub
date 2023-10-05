# Bitcoin

A `blockchain` is a list of records, called blocks, which are linked and secured using cryptography.  
Each block contains a cryptographic hash of the previous block, a timestamp, and a list of transactions.  
A blockchain is simply a public distributed ledger, and `bitcoin` is a `blockchain`.  

I have also implemented a simple Proof-of-Work (POW) blockchain like bitcoin, you can find it [here](https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/pow-from-scratch)

## Table of content

- [Architecture](#architecture)
- [Consensus](#consensus)
- [Incentives](#incentives)
- [Addresses And Wallets](#addresses-and-wallets)
- [Transaction](#transaction)
- [Longest chain](#longest-chain)
- [Double Spending](#double-spending)
- [Where do bitcoins come from?](#where-do-bitcoins-come-from)
- [Simple POW Blockchain in nodejs](#simple-pow-blockchain-in-nodejs)
- [References](#references)
- [My Bitcoin Address](#my-bitcoin-address)

## Architecture

The `Bitcoin` network is a `decentralized peer-to-peer` network, meaning that it operates without a central authority or server. Nodes, connect to each other directly, allowing data to be shared and stored.  

Bitcoin combines its **network**, **cryptocurrency**, and **blockchain** to record transactions transparently, prevent double spending, and ensure consensus via a process called **proof-of-work**

### Network Discovery

**Network Discovery** or **Peer Discovery** in Bitcoin refers to the process by which nodes in the Bitcoin network find and connect with each other. When a new node joins the network, it starts to discover other nodes to connect with in order to participate in the network. This is typically done through a process called `bootstrapping`.

1. When started for the first time, programs don’t know the **IP addresses** of any active full **nodes**. In order to **discover** some IP addresses, they **query** one or more `DNS seeds` hardcoded into `Bitcoin Core` and `BitcoinJ`. The response to the lookup should include one or more DNS A records with the IP addresses of full nodes that may accept new incoming connections. For example, using the `dig` command:

   ```bash
   dig seed.bitcoin.sipa.be

   ;; ANSWER SECTION:
   seed.bitcoin.sipa.be.   3600    IN      A       185.14.30.25
   seed.bitcoin.sipa.be.   3600    IN      A       18.213.155.196
   seed.bitcoin.sipa.be.   3600    IN      A       176.9.150.253
   seed.bitcoin.sipa.be.   3600    IN      A       79.137.224.63
   seed.bitcoin.sipa.be.   3600    IN      A       76.138.214.41
   ```

   > DNS seed: A DNS server which returns IP addresses of full nodes on the Bitcoin network to assist in peer discovery.

2. Once a program has connected to the network, its `peers` can begin to send it `addr` (address) messages with the `IP addresses` and `port numbers of other peers` on the network, providing a fully decentralized method of peer discovery. `Bitcoin Core` keeps a record of known peers in a **persistent on-disk database** which usually allows it to connect directly to those peers on subsequent startups without having to use DNS seeds

## Consensus

Bitcoin achieves consensus through a process called `proof-of-work mining`. Miners spend computational resources to find a solution to a cryptographic puzzle, and whichever miner finds the solution is able to create the next block.

## Incentives

The Bitcoin protocol offers two main incentives for mining:

- Block rewards: New bitcoins are minted with each block, and the miner who finds the block receives the block reward
- Transaction fees: Each transaction on the Bitcoin network includes a transaction fee, paid to the miner who includes that transaction in a block

## Addresses And Wallets

There is no such thing as a `Wallet` in the Bitcoin network. It is `abstract`.  

- Address

An address is a hash of a bitcoin public-key wallet.  
You can use an address as many as you want to send and receive Bitcoin.  

- Wallet

A wallet is a software program that stores `key-pairs`, created `addresses`, and other information needed to access and manage your `Bitcoins`.  

- Key-pairs

Key-pairs are a public key of an address to which some amount bitcoin was previously sent and the corresponding unique private key, which authorizes the bitcoin previously sent to the above public key (address) to be sent elsewhere.

## Transaction

A `Bitcoin` `transaction` is a transfer of Bitcoins from one user to another. It is a data structure that contains several fields, including inputs, outputs, and other metadata.  
When a `Bitcoin` transaction is created, it is `broadcast` to the Bitcoin network and propagated to all `nodes` on the network. Each node verifies the transaction by checking that the digital signatures in the inputs field are valid. Once the transaction is verified by the nodes, it is added to the `mempool`, which is a pool of `unconfirmed transactions` `waiting` to be `included` in the `next block`.

A transaction components are:

- Inputs - Information about the Bitcoin previously sent to Mark's address. For example, imagine Mark previously received 0.6 BTC from Alice and 0.6 BTC from Bob. Now, in order to send 1 BTC to Jessica, there might be two inputs: one input of 0.6 BTC previously from Alice and one input of 0.6 BTC previously from Bob.
- Amount - The amount being sent, In this case Mark wants to send 1 BTC.
- Outputs - The destination addresses of the Bitcoins. The first is 1.2 BTC (0.6 BTC + 0.6 BTC) to Jessica’s public address. The second is 0.2 BTC returned as 'change' to Mark.

## Longest chain

The **longest chain** refers to the chain of blocks that the majority of nodes on the network agree to and adopt as the authoritative blockchain. The longest chain is not determined by the number of blocks but by the amount of computational power or energy used to mine the blocks in the chain.

## Double Spending

Double spending is when someone (A) tries spending the same bitcoin twice. Bitcoin network prevents this.  
When A broadcast the two transactions, they will go in unconfirmed transactions' pools. From there when a miner (X) validates the first transaction, the bitcoin will be sent to the new owner. so X will invalidate the second transaction because A is not the owner of the bitcoin anymore. But if the two transactions gets validated and mined by two different miners and gets added to the next block. it means there are two different blockchains now. (one with the first transaction and one with the second transaction). Now longest chain algorithm comes into play. miners will always accept the longest chain.  

## Where do bitcoins come from?

As an incentive to use processing power to try and add new blocks of transactions on to the blockchain, each new block makes available a fixed amount of bitcoins that did not previously exist. Therefore, if you are able to successfully mine a block, you are able to “send” yourself these new bitcoins as a reward for your effort.

## Simple POW Blockchain in nodejs

[Here you can find a simple complete POW blockchain written in nodejs](https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/pow-from-scratch)

## References

- <https://www.bitcoin.com/get-started/>
- <https://academy.binance.com/en/articles/double-spending-explained>
- <https://www.youtube.com/watch?v=phLSjZdDc5A>
- <https://learnmeabitcoin.com/technical/longest-chain>

## My Bitcoin Address

> bc1qgwu903shgs4fse3s8u2vsufrsaxhnz26skqmzu
