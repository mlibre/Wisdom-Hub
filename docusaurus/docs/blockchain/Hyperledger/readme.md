# Hyperledger Fabric

A `blockchain` is an immutable transaction ledger, maintained within a distributed network of `peer nodes`. Each node maintains a copy of the ledger and applies `transactions` that have been validated by a `consensus` protocol. Each block of transactions is then grouped into `blocks` that include a hash that `binds` each block to the `previous block`.

`Bitcoin` and `Ethereum` classify as `public permissionless` blockchain technology. Basically, these are public networks, open to anyone, where participants interact anonymously.

`Hyperledger Fabric` is an open-source, `permissioned blockchain`. It has a `modular` architecture that delivers high degrees of confidentiality, flexibility, resiliency, and scalability. It's designed to support pluggable implementations of different components.

In a `permissioned network`, participants are `identified` and `known` to each other, unlike with a `public permissionless` network where the participants remain anonymous.

* [Why Hyperledger Fabric?](#why-hyperledger-fabric)
* [Technology](#technology)
* [Consensus](#consensus)
* [Reference](#reference)

## Why Hyperledger Fabric?

For enterprise use, we need to consider the following requirements:

* Participants must be identified/identifiable
* Networks need to be permissioned
* High transaction throughput performance
* Low latency of transaction confirmation
* Privacy and confidentiality of transactions and data pertaining to business transactions

One of the most important of the `platform’s differentiators` is its support for `pluggable consensus protocols` that enable the platform to be more effectively customized to fit particular use cases and trust models.

`Fabric` can use consensus protocols that do not require a `native cryptocurrency` to motivate expensive mining or smart contract execution.

**Hyperledger Fabric** has been specifically architected to have a `modular` architecture. Whether it is `consensus`, `identity` management protocols, `key` management protocols or `cryptographic` libraries, the platform has been designed at its core to be configured to meet the diversity of enterprise use case requirements

## Consensus

Hyperledger Fabric offers `Raft crash fault tolerant (CFT)`, a `BFT` consensus and as of Version 3 `SmartBFT` consensus.
You can also write your own consensus algorithm. Consider using the `BFT` or `SmartBFT` if true decentralization is required.

## Chaincode

`chaincode` (Smart contracts) run within a container environment (e.g. Docker) for isolation. They can be written in standard programming languages.

In `Fabric`, an application-specific endorsement policy specifies which peer nodes, or how many of them, need to vouch for the correct execution of a given smart contract. Thus, each transaction need only be executed (endorsed) by the subset of the peer nodes necessary to satisfy the transaction’s endorsement policy. This allows for parallel execution increasing overall performance and scale of the system.

## Privacy and Confidentiality

Hyperledger Fabric, enables confidentiality through its `channel` architecture and private data feature. In channels, participants on a Fabric network establish a `sub-network` where every member has visibility to a `particular set` of transactions. Thus, only those nodes that participate in a channel have access to the chaincode and data transacted, preserving the privacy and confidentiality of both. Private data allows collections between members on a channel, allowing much of the same protection as channels without the maintenance overhead of creating and maintaining a separate channel.

## Technology

Hyperledger Fabric is written in `Go`. It uses `CouchDB` as its state database. and `etcd` as its key-value store.


## Reference

* <https://github.com/hyperledger/fabric>
* <https://wiki.hyperledger.org/>
* <https://www.youtube.com/channel/UC7_X0WkMtkWzaVUKF-PRBNQ>
* <https://hyperledger-fabric.readthedocs.io/en/latest/index.html>
