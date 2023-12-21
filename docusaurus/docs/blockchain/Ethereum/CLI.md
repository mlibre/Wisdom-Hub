# CLI

:::info

it is not possible to run an execution client on its own anymore. After The Merge, **both execution and consensus clients** must be run together in order for a user to gain access to the Ethereum network.

:::

## Table of content

* [Online APIs](#online-apis)
  * [getblock.io](#getblockio)
* [Run your own node](#run-your-own-node)
  * [Geth](#geth)
    * [Installation](#installation)
    * [Features](#features)
    * [Starting](#starting)
    * [Importing accounts](#importing-accounts)
    * [Interacting With Geth](#interacting-with-geth)
* [Transaction Info](#transaction-info)
* [Block info](#block-info)
* [MetaMask](#metamask)
* [Infura](#infura)

You can either run your `own` ethereum `layers` (node) or use `free providers`.

## Online APIs

### getblock.io

```bash
geth attach https://eth.getblock.io/token/mainnet/
```

## Self Host Node

### Geth, Clef, consensus client

> `Geth` is Official implementation of the Ethereum execution layer in [Go](https://geth.ethereum.org/)

`Geth` is a command-line interface for the Ethereum blockchain. `Geth` is an Ethereum client written in Go. This means running `Geth` turns a computer into an `Ethereum node`. Ethereum is a `peer-to-peer` network where information is shared directly between nodes rather than being managed by a central server. Every 12 seconds one node is randomly selected to generate a new block containing a list of transactions that nodes receiving the block should execute. This `block proposer` node sends the new block to its peers. On receiving a new block, each node checks that it is `valid` and adds it to their database. The sequence of discrete blocks is called a `blockchain`. The information provided in each block is used by Geth to `update` its `state`.  
`Clef` is an account management tool external to `Geth` itself that allows users to sign transactions.  
`Geth` also needs to be connected to a `consensus client` in order to function as an Ethereum node.  

### Installation

These commands will intall `geth`, `clef`, `devp2p`, `abigen`, `bootnode`, `evm`, `rlpdump` and `puppeth`

```bash
# Ubuntu
sudo add-apt-repository -y ppa:ethereum/ethereum

# Arch
sudo pacman -Syyuu geth nodejs
```

### Features

* Running an Ethereum node
* Communicating with Ethereum network
* Signing & Sending transactions
* Interacting with Smart Contracts
* Accounts Management
* Wallet Functionality
* Validating and ...

### Starting

Creat a new account with `Clef`:

```bash
mkdir enode
clef newaccount --keystore enode/keystore
```

To start `Clef`, run the `Clef` executable passing as arguments the `keystore` file location, config directory location and a `chain ID`. The config directory was automatically created inside the geth-tutorial directory during the previous step. The chain ID is an integer that defines which Ethereum network to connect to. Ethereum mainnet has `chain ID 1`. In this tutorial `Chain ID 11155111` is used which is that of the `Sepolia` testnet

```bash
clef --keystore enode/keystore --configdir enode/clef --chainid 11155111
```

By default, `Geth` uses `snap-sync` which download blocks sequentially from a `relatively recent block`, not the genesis block

```bash
geth --sepolia --datadir enode --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --authrpc.jwtsecret enode/jwtsecret --http --http.api eth,net,admin --signer enode/clef/clef.ipc

# geth --sepolia --datadir enode --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --authrpc.jwtsecret enode/jwtsecret --ws --ws.api="eth,net,web3,personal,txpool,,admin" --ws.origins '*' --http --http.corsdomain "*" --http.api eth,net,web3,personal,txpool,admin --signer enode/clef/clef.ipc --allow-insecure-unlock

# Make sure 8545, 8551, 3334, 30311, 30303 and 37608 ports are open
sudo iptables -I INPUT -p tcp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 30303 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30303 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 37608 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 37608 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8546 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 8546 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8551 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 8551 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 3334 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 3334 -j ACCEPT
```

Get some Sepolia ETH from `https://www.infura.io/faucet/sepolia`.  
Connet to your `geth` node

```bash
geth attach http://127.0.0.1:8545
```

Check if `geth` has connected to the network

```bash
admin.peers
```

To manullay add static peers to the netwrok, first find the `enode` address of the peer you want to connect to. for example, for `sepolia` you can find some [here](https://github.com/eth-clients/sepolia)

```bash
admin.addPeer("enode://ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7@52.14.151.177:30303")
admin.addPeer("enode://9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066@18.168.182.86:30303")
```

Get connected accounts

```bash
eth.accounts;
```

The console will hang, because `Clef` is waiting for approval. approve it.  
Check the account balance

```bash
web3.fromWei(eth.getBalance('0x7e932ab056a3dce4bcdd73092430c3f967e1bea3'), 'ether');
```

Get latest block number:

```bash
eth.blockNumber
```

Make sure `8545`, `3334`, `30311` and `37608` ports are open

```bash
sudo iptables -I INPUT -p tcp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 37608 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 37608 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8546 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 8546 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8551 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 8551 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 3334 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 3334 -j ACCEPT
```

* Data folder: `~/.ethereum/`.  
* IPC file is: `~/.ethereum/geth.ipc`.
* Accounts and Private Keys are stored: `~/.ethereum/keystore/`.  
* For Testnet it: `~/.ethereum/testnet/`.

```bash
cd ~/.ethereum/rinkeby/
rm PRIVATE_KEYS, Account
```

#### Importing accounts

```bash
geth account import ~/Data/myself/cryptocurrency-info-recovery/metamask/mforgood/D8_private_key
```

#### Interacting With Geth

```bash
geth attach http://127.0.0.1:3334
web3.personal.importRawKey("111111111PRIVATEKEY1111111111", "password")
personal.unlockAccount("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
personal.listAccounts
eth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
eth.getBalance(eth.accounts[1])
net.peerCount
eth.getCode("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC")
var voter = eth.contract([{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOptions","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"options","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"optionName","type":"string"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]).at("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC");
voter
voter.addOption("mlibre" , {from: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"})
```

## Transaction Info

```bash
eth.getTransaction("0x43ad3737b39356024aa13bc396237208e66b73bc5f99ab33e08c60731b8a14a9")
```

A transaction in ETH-2 looks like this:

```js
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

## Block info

```bash
geth attach https://eth.getblock.io/token/mainnet/

web3.eth.getBlock(eth.blockNumber)
```

A block in eth2 looks like this:

```js
{
  baseFeePerGas: 14387282490,
  difficulty: 0,
  extraData: "0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465",
  gasLimit: 30000000,
  gasUsed: 13371853,
  hash: "0x424483e1970781103b9f4f22b2d906eeb25ebab5d417b8d706802fec10b4197d",
  logsBloom: "0xd16bc008ef900be8452b8128845c1b3014251b90402259020c4520c4746a88b301a403c34060b54ef2109a3663e0190546c33a9afa22bd0c1bf0e41478ac02195e861a2af47429380824635a81592064f249714300451d5840d45737c4209822b7c84e003690d517bd74340044902e33101a0e3022900444e5c52a94594f61500211a451d00c590740e611031b6c5c2d21c5a89b4f558f38b70548730a314da0f6ad9256363d20034acbece6c972458ec7c4d4b3d27689de906aaca44c88847c08d02c3285884c47a0824503a7f5103652f5200e0748a0f64b7178a68d74f1048f39a7ccdf4ea0be044870a028497f86c170de301fe3f44580c99137f49eef2b",
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
  transactions: ["0x43ad3737b39356024aa13bc396237208e66b73bc5f99ab33e08c60731b8a14a9", "0xe2588a39acfb64ede45f2372954952b69a0effc9d953b6ff954e624ec9ef7e7a", "0x10a61db4c6b065cf91de037fbb5eb30717c97b9857c26a42028ab9d0704256e8", "0x4e0c96c3d942f79384fef9498d022b76ebae4b1097606996d0a4c77abfc2d5b4", "0xe2a973235b5563490b2b4edbc77f9d98bebad087b70b8238a4476a7ac86d6aa5", "0xde5c258214c7710836d7315fd443033fa3bb3fb697fae9744cad65a5c9300ba1", "0x78f1bd662c5e629e14aa4390b15834529790077053ab44b5d896a7416093f152", "0x7265d060a654e108691b8bd8e4aabb5a6afc78dde302160221b787b76663d4fd", "0x08d6b6b02e4146808049bfe8257cef85ebf11d045dec48c7a39e1214aa0a459a", "0xe5aeda0f4cbd47f70e5aada52a867a83eceeb653b0e81b97d13725ada29ab51d", "0x13c768714925b8b52a5e4b50017cc7873345f0e91081908f77df12e5f25d98f6", "0x12c4f9a9aa910dab6df1465062bae064722b9da67c1839f4423ac6aca787d5bb", "0xa750c27929a4f91c613808fca7576b823bb9537c33d012d72192aa751c454be1", "0x4adc76b7e31c97e84dc705c79042ecc6b4e53cbe751a586f1f5b13496f0e5968", "0x0656b67f8bddbfac490c114f2e5ea5e09b3256b5d242649546b9184c65f989fd", "0xbc2b9acc05f0b01b2311c438243d5bcf6120981672c014f76e5cdb62b8158dc4"],
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
  }, {
      address: "0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f",
      amount: "0xd806d5",
      index: "0x8e9d54",
      validatorIndex: "0x82c4a"
  }, {
      address: "0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f",
      amount: "0xd772ad",
      index: "0x8e9d55",
      validatorIndex: "0x82c4b"
  }, {
      address: "0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f",
      amount: "0xd73366",
      index: "0x8e9d56",
      validatorIndex: "0x82c4c"
  }],
  withdrawalsRoot: "0x4915e375cb0b2df0dfb9115fab5c0acef3abebd037cdc693edc065f3a8da44b0"
}
```

## MetaMask

There are several ways to interact with the Ethereum blockchain.

* Running a local node with `Geth` for example
* Calling web APIs. for example [blockcypher](https://www.blockcypher.com/)
* ...

> **Metamask** is a client-side browser extension that provides a high-level javascript library to interact with the Ethereum network. [metamask.io](https://metamask.io/)

It is also a crypto wallet.  
On the backend side, it uses **infura** or other API providers to comminute with Ethereum blockchain.  
So basically you as a **developer** don't have to worry about making/signing/sending transactions, ...  
And as a **user**, it makes things much easier. for example, you don't have to sign a proof message to prove you are the owner of an address  
`MetaMask` is also offering other features custom network, ...

## Infura

> Ethereum & IPFS APIs [infura.io](https://infura.io/)

As it says they are providing APIs, so we can easily communicate with the Ethereum network. in the background, they probably have `geth` nodes or other kinds of nodes running.
