# How to write Smart Contracts on Polygon

In this example, we write a `Voter` contract, we will compile and then deploy it on the `Polygon testnet` using `Web3`. And then we interact with the blockchain using `Geth` and `web3js`.

Matic provides SDK and APIs for development.  

## Table of content

- [Requirements](#requirements)
- [Account](#account)
- [Installation](#installation)
- [Implementation](#implementation)
- [Deploying](#deploying)
- [Interacting with the blockchain](#interacting-with-the-blockchain)
  - [Geth](#geth)
  - [Web3](#web3)
- [MATIC](#matic)

## Requirements

- [Node.js 14](https://nodejs.org/)
- [ethereum-smart-contract-deployer 2.0.0](https://www.npmjs.com/package/ethereum-smart-contract-deployer)
  - `solc`: 0.8.9
  - `web3`: 1.6.0

## Account

First, create an Ethereum account if you don't have one. If you already have, you don't need another. You just need to send some credit to your account using Matic faucet. Click on the link below, and request for a fund.  
<https://faucet.polygon.technology/>  
now we need to communicate with the `Testnet`. Create an [Datahub](https://datahub.figment.io) account.

Now let's check if your account is funded.  

```bash
geth attach https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/YOURKEY/
> eth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
1987540120000000000
```

## Installation

If you are using Arch-based Linux, like **Manjaro** here are the commands. for other distributions, are also almost the same.  

```bash
sudo pacman -S nodejs npm geth
sudo npm install -g solc
solcjs --version
git clone https://github.com/mlibre/blockchain.git
cd blockchain/Polygon/Smart Contracts
npm install
```

## Implementation

You can find the `Voter` contract source code [here](<https://github.com/mlibre/blockchain/blob/master/Polygon/Smart Contracts/>).  
In this contract, you can simply add options to vote for, start a voting process, vote the options and get the result.

## Deploying

We use `ethereum-smart-contract-deployer` npm module to deploy the contract.

```bash
node main.js
```

The output is something like:

```java
Network Name:  private
Network Peers:  118

Solidity Version: 0.8.9
Compiling contract voter.sol

Deploying Contract Voter
Arguments:  [ [ 'mlibre', 'Good' ] ]

Transaction hash: 0x347177fb10ce9028e75bdb98885ac33f98fcd46ac67f0371d8dbac3d8e5ebe6d
Owner: 0xD8f24D419153E5D03d614C5155f900f4B5C8A65C
Contract Address: 0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8
```

Congratulations. you made your first contract in Polygon Network.  
You can find your contract address in the output log. Check it here: <https://mumbai.polygonscan.com/address/0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8>

## Interacting with the blockchain

The next step is to interact with the blockchain using `Geth` and `web3js`.

### Geth

```bash
geth attach  https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/a99e72c92474b4eaec9340d7c03f3b81/
eth.getCode("0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8")
# To load a contract using geth just need to put the abi we created, and the address
var abi = [{"inputs":[{"internalType":"string[]","name":"_options","type":"string[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOptions","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"options","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var voter = eth.contract(abi).at("0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8");
voter
```

### Web3

To interact with the blockchain using `web3js`, we need to create a `web3` instance. And have the contract `address` and the `abi`. So you need to keep the `abi` and the `address` in a file for later use.  
You can also use the deployer contract instance just after the deployment.

```javascript
const sender = "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C";
  const deployer = await new Deployer({
   contractFilePath: "voter.sol",
   input: [["mlibre" , "Good"]],
   sender,
   privateKey: secrets.privateKey,
   address: secrets.mumbai
  });
  const contract = await deployer.deploy();
  // let abi = deployer.contract.abi
  // let contract = deployer.contractInstance
  await contract.methods.addOption("new option").send({from: sender});
  const options = await contract.methods.getOptions().call();
  await contract.methods.startVoting().send({from: sender});
  await contract.methods.vote(0).send({from: sender});
  const votes = await contract.methods.getVotes().call({
   from: sender,
  });
  console.log(options, votes);
```

## MATIC

MATIC is the Polygon Network native token.  
The [MATIC](https://docs.polygon.technology/docs/develop/network-details/gas-token/) token will be used as the gas fee by default.  
Polygon network provides an [API](https://docs.polygon.technology/docs/develop/tools/matic-gas-station/) to get the recommended gas price.  
The javascript code would be something like this:

```javascript
fetch('https://gasstation-mainnet.matic.network')
  .then(response => response.json())
  .then(json => console.log(json))
```

and the result is like:

```javascript
{
    "safeLow": 1,
    "standard": 1,
    "fast": 5,
    "fastest": 7.5,
    "blockTime": 2,
    "blockNumber": 3091956
}
```
