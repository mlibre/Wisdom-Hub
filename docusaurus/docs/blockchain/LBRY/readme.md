# LBRY

A blockchain for content. A protocol for accessing and publishing digital content.

## Table of content

- [introduction](#introduction)
- [LBRY daemon](#lbry-daemon)
- [Installation](#installation)
- [commands](#commands)
- [Concepts](#concepts)
  - [Stakes](#stakes)
  - [Claims](#claims)
    - [Claim Operations](#claim-operations)
  - [Supports](#supports)
  - [Metadata](#metadata)
  - [Claimtrie](#claimtrie)
  - [URL](#url)
  - [Channels](#channels)
  - [Data](#data)
- [Network Discovery](#network-discovery)
- [Communication](#communication)
  - [JSON-RPC](#json-rpc)
  - [Getting a content info](#getting-a-content-info)
  - [Adding new content](#adding-new-content)
  - [Tipping something](#tipping-something)
- [References](#references)

## introduction

LBRY (pronounced "library") is a decentralized, open-source digital content platform that allows users to share, publish, and monetize their digital content without relying on centralized authorities. It is built on top of the LBRY blockchain, which is designed specifically for the distribution of digital content like videos, images, and documents.

The LBRY network utilizes blockchain technology, similar to Bitcoin, to store an index of available content and how to download it, as well as financial transactions using the LBRY Credits (LBC) cryptocurrency. When a creator publishes content on LBRY, an entry is made on the LBRY blockchain, which serves as an announcement that the content is available for download from the peer-to-peer network

## LBRY daemon

You can run the daemon either by installing the `lbry-daemon` and running it from a command line.  
or installing and running the `LBRY` app.

- APP
 <https://lbry.com/get>
- SDK
 <https://github.com/lbryio/lbry-sdk/releases>  

### Installation

```bash
pamac install lbrynet-bin
```

### commands

```bash
lbrynet start
lbrynet commands
lbrynet wallet --help
```

## Concepts

<https://lbry.tech/overview>
<https://lbry.tech/spec>
<https://lbry.tech/resources/setup-videos>
<https://lbry.tech/glossary>
<https://lbry.tech/api/sdk>

### Stakes

A stake is a a single entry in the blockchain that commits credits toward a name. The two types of stakes are claims and supports.

All stakes have these properties:

- id: A 20-byte hash, unique among all stakes. See Stake Identifier Generation
- amount: A quantity of tokens used to back the stake

### Claims

A claim is a stake that stores metadata. There are two types of claims. Stream claims declare the availability, access method, and publisher of a stream. Channel claims create a pseudonym that can be used as the publisher of stream claims.

```json
{
  "claimID": "6e56325c5351ceda2dd0795a30e864492910ccbf",
  "amount": 1.0,
  "name": "lbry",
  "value": {
    "stream": {
      "title": "What is LBRY?",
      "author": "Samuel Bryan",
      "description": "What is LBRY? An introduction with Alex Tabarrok",
      "language": "en",
      "license": "Public Domain",
      "thumbnail": "https://s3.amazonaws.com/files.lbry.io/logo.png",
      "mediaType": "video/mp4",
      "streamHash": "232068af6d51325c4821ac897d13d7837265812164021ec832cb7f18b9caf6c77c23016b31bac9747e7d5d9be7f4b752",
    },
  },
  "meta": {
 "support_amount": "4900.021",
  }
}
```

#### Claim Operations

There are three claim operations: create, update, and abandon.

- create: Makes a new claim.
- update: Changes the value, amount, or channel of an existing claim. Does not change the claim's ID.
- abandon: Withdraws a claim, freeing the associated credits to be used for other purposes.

### Supports

A support is a stake that lends its amount to bolster an existing claim.

Supports have one extra property in addition to the stake properties:

- claimID: The ID of the claim that this support is bolstering.

Here is an example support for the above claim:

```json
{
  "supportID": "fbcc019294468e03a5970dd2adec1535c52365e6",
  "amount": 45.12,
  "claimID": "6e56325c5351ceda2dd0795a30e864492910ccbf",
}
```

### Metadata

```json
{
  "stream": {
    "title": "What is LBRY?",
    "author": "Samuel Bryan",
    "description": "What is LBRY? An introduction with Alex Tabarrok",
    "language": "en",
    "license": "Public Domain",
    "thumbnail": "https://s3.amazonaws.com/files.lbry.io/logo.png",
    "mediaType": "video/mp4",
    "streamHash": "232068af6d51325c4821ac897d13d7837265812164021ec832cb7f18b9caf6c77c23016b31bac9747e7d5d9be7f4b752"
  }
}
```

### Claimtrie

A claimtrie is a data structure used to store the set of all claims and prove the correctness of URL resolution.

The claimtrie is implemented as a Merkle tree that maps names to claims. Claims are stored as leaf nodes in the tree. Names are stored as the normalized path from the root node to the leaf node.

The root hash is the hash of the root node. It is stored in the header of each block in the blockchain. Nodes use the root hash to efficiently and securely validate the state of the claimtrie.

Multiple claims can exist for the same name. They are all stored in the leaf node for that name. See Claim Ordering

### URL

URLs are memorable references to claims. All URLs:

- contain a name (see Claim Properties), and
- resolve to a single, specific claim for that name

The ultimate purpose of much of the claim and blockchain design is to provide memorable URLs that can be provably resolved by clients without a full copy of the blockchain (e.g. Simplified Payment Verification wallets).
Components

A URL is a name with one or more modifiers. A bare name on its own resolves to the controlling claim at the latest block height. Here are some common URL structures.
Stream Claim Name

A controlling stream claim.

lbry://meet-lbry

Channel Claim Name

A controlling channel claim.

lbry://@lbry

Channel Claim Name and Stream Claim Name

A URL containing both a channel and a stream claim name. URLs containing both are resolved in two steps. First, the channel is resolved to its associated claim. Then the stream claim name is resolved to get the appropriate claim from among the claims in the channel.

lbry://@lbry/meet-lbry

Claim ID

A claim for this name with this claim ID. Partial prefix matches are allowed (see URL Resolution).

lbry://meet-lbry:7a0aa95c5023c21c098
lbry://meet-lbry:7a
lbry://@lbry:3f/meet-lbry

Note: in a previous version of this spec, the ## character was used to signify the claim ID portion of the url. This character is now deprecated and will stop being supported in the future.
Sequence

The n_th accepted claim for this name. _n must be a positive number. This can be used to reference claims in the order in which they were made, rather than by the amount of credits backing a claim.

lbry://meet-lbry*1
lbry://@lbry*1/meet-lbry

### Channels

Channels are the unit of identity. A channel is a claim for a name beginning with @ that contains a metadata structure for identity rather than content. Included in the metadata is the channel’s public key. Here’s an example:

```json
"claimID": "6e56325c5351ceda2dd0795a30e864492910ccbf",
"name": "@lbry",
"amount": 6.26,
"value": {
  "channel": {
    "keyType": "SECP256k1",
    "publicKey": "3056301006072a8648ce3d020106052b8104000a03420004180488ffcb3d1825af538b0b952f0eba6933faa6d8229609ac0aeadfdbcf49C59363aa5d77ff2b7ff06cddc07116b335a4a0849b1b524a4a69d908d69f1bcebb"
  }
}
```

Claims published to a channel contain a signature made with the corresponding private key. A valid signature proves channel membership.
The purpose of channels is to allow content to be clustered under a single pseudonym or identity. This allows publishers to easily list all their content, maintain attribution, and build their brand.

### Data

Files published using LBRY are stored in a distributed fashion by the clients participating in the network. Each file is split into many small pieces. Each piece is encrypted and announced to the network. The pieces may also be uploaded to other hosts on the network that specialize in rehosting content.

The purpose of this process is to enable file storage and access without relying on centralized infrastructure, and to create a marketplace for data that allows hosts to be paid for their services.

## Network Discovery

The only problem is that the initial connection requires a DNSFeed. To retrieve a list of bitcoin nodes' IPs.  
IPV4 is also kinda centralized itself. Assigning, limited amounts, and ...  
These problems probably can be solved by IPV6 and some sort of new network protocol where every network card/program can broadcast their IPV6 to any connected neighbor. and retrieve the IPV6 blockchain-based table. the IPV6 table should be in blockchain so it can't be manipulated by governments, ISPs, or the neighbor card itself. (removing, changing an IP cause to rebuild the whole blockchain every time an IP is added to the blockchain, also every single IPV6 that you have got from the neighbor card, has to have the same manipulated table, same as 51% bitcoin attack)  

- Network discovery in bitcoin, ETH:
<https://medium.com/harmony-one/peer-discovery-in-harmony-network-6a07f9401c61>

## Communication

LBRY daemon is the central point of communication between clients and the network.

### JSON-RPC

RPC: is not a network protocol like http. things like REST that defines how to interact with a server.  and just like REST works over http or ...  
JOSN-RPC: RPC that uses json as the data schema.  
<https://medium.com/@ConsenSys/blockchain-underpinnings-2c43ba03ecc9>

### Getting a content info

```json
curl --header "Content-Type: application/json" --data '{ "method": "resolve", "params": { "urls": "@mlibre:e/raspberry-pi-mining-guide:6" }}' http://localhost:5279    
{
"jsonrpc": "2.0",
"result": {
 "@mlibre:e/raspberry-pi-mining-guide:6": {
  "address": "bSvwdAMw9bokK4e1ZeaMFZc8HnjY217eFU",
  "amount": "5.0",
  "canonical_url": "lbry://@mlibre#e/raspberry-pi-mining-guide#6",
  "claim_id": "6faebe6745e0e4d42b44100cfcd11f86cd17cb52",
  "meta": {
   "effective_amount": "811.5",
   "reposted": 0,
   "support_amount": "806.5",
  .
  .
  .
  "permanent_url": "lbry://raspberry-pi-mining-guide#6faebe6745e0e4d42b44100cfcd11f86cd17cb52",
  "short_url": "lbry://raspberry-pi-mining-guide#6",
  "signing_channel": {
   "address": "bRgZm5DdqoRiEH6JsYVnJSWkoynzvTkfH4",
   "amount": "0.005",
   "canonical_url": "lbry://@mlibre#e",
   "claim_id": "e2b347558eec20aee84bf4657efa3832bb5a4ab9",
   .
   .
   .
  "txid": "e686fe8317b416c474f1f4985c0138746e07987500ac694de8b9bd19eda20072",
  "type": "claim",
  "value": {
   "languages": [
    "en"
   ],
   "license": "Public Domain",
   "release_time": "1617295323",
   "source": {
    "hash": "a6ff0d82557ecc5e16fb75d0ea8e0f010b93dfee43ddf0d820543967ed126d83596380babaf255519f1f0a677793acdc",
    "media_type": "text/markdown",
    "name": "post.md",
    "sd_hash": "38ce95698f7eea4306071c865b4af81bc76bdc8664055560b020c667d815eaa11a83eecc1e72632fee4a8b4e5693c90a",
    "size": "9938"
   },
   "stream_type": "document",
   "tags": [
    "blockchain",
    "mining",
    "monero",
    "raspberry pi",
    "xmr"
   ],
   "thumbnail": {
    "url": "https://spee.ch/a/2eef8b272d343bbf.jpg"
   },
   "title": "Ultimate Guide For Monero Mining with Raspberry Pi"
  },
  "value_type": "stream"
 }
}
```

### Adding new content

```json
curl --header "Content-Type: application/json" --data '{ "method": "publish", "params": { "name": "test", "file_path": "/home/mlibre/Downloads/tree.jpg", "bid": "0.001", "metadata": { "description": "Check out this test", "title": "test", "languages": "en", "license": "Public Domain", "tags": [] }}}' http://localhost:5279

curl --header "Content-Type: application/json" --data '{"method":"publish","params":{"name":"flower","title":"Flora, Bloom","description":"Flora, Bloom, Flower","locations":[],"bid":"0.00100000","languages":["en"],"tags":["flower","bloom","flora","nature"],"thumbnail_url":"https://spee.ch/2/06afc05c4adeca74.jpg","blocking":true,"preview":false,"license":"Public Domain","release_time":1617809791,"channel_id":"61514a4f83bb8671f6fcdb70fcf81fb3ce31e1dc","file_path":"/home/mlibre/Downloads/tree.jpg"}' http://localhost:5279
```

### Tipping something

```json
curl --header "Content-Type: application/json" --data '{ "method": "support_create", "params": { "amount": "0.001", "claim_id": "@mlibre#e2b347558eec20aee84bf4657efa3832bb5a4ab9", "--tip" }}' http://localhost:5279
```

## References

- <https://lbry.tech/spec>
