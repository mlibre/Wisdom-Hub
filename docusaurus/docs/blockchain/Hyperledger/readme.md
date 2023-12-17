# Hyperledger Fabric

A `blockchain` is an immutable transaction ledger, maintained within a distributed network of `peer nodes`. Each node maintains a copy of the ledger and applies `transactions` that have been validated by a `consensus` protocol. Each block of transactions is then grouped into `blocks` that include a hash that `binds` each block to the `previous block`.

`Bitcoin` and `Ethereum` classify as `public permissionless` blockchain technology. Basically, these are public networks, open to anyone, where participants interact anonymously.

`Hyperledger Fabric` is an open-source, `permissioned blockchain`. It has a `modular` architecture that delivers high degrees of confidentiality, flexibility, resiliency, and scalability. It's designed to support pluggable implementations of different components.

In a `permissioned network`, participants are `identified` and `known` to each other, unlike with a `public permissionless` network where the participants remain anonymous.

## Table of Contents

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

`Fabric` can leverage consensus protocols that do not require a native cryptocurrency to incent costly mining or to fuel smart contract execution

## Technology

Hyperledger Fabric is written in `Go`. It uses `CouchDB` as its state database. and `etcd` as its key-value store.

## Consensus

Hyperledger Fabric uses `BFT` consensus. Version 3 is implementing `SmartBFT` consensus.
You can also write your own consensus algorithm.

## Reference

* <https://github.com/hyperledger/fabric>
* <https://wiki.hyperledger.org/>
* <https://www.youtube.com/channel/UC7_X0WkMtkWzaVUKF-PRBNQ>
* <https://hyperledger-fabric.readthedocs.io/en/latest/index.html>
