---
title: DEX from scratch
tags:
  - DEX
  - Ethereum
---

# Creating a decentralized exchange from scratch - Ethereum

:::info

You can find the **codes** and **files** [`in the Github repo`](https://github.com/mlibre/blockchain/tree/master/Tutorials/Ethereum/Build%20a%20DEX%20from%20scratch).

:::

In this tutorial, we will go through the process of building a simple decentralized exchange (DEX) on `Ganache`, a Ethereum blockchain simulator.

## Table of Contents

- [Requirements and Technologies](#requirements-and-technologies)
- [Setting up Ganache](#setting-up-ganache)
- [Getting started](#getting-started)
- [Exchange contract](#exchange-contract)
- [Factory contract](#factory-contract)
- [MLB1 and MLB2 ERC-20 Contracts](#mlb1-and-mlb2-erc-20-contracts)
- [Deploying DEX on Ganache](#deploying-dex-on-ganache)
- [References](#references)
- [About The Author](#about-the-author)
- [Donate 💗](#donate-)

## Requirements and Technologies

We will use the following technologies:

- [Ganache](https://www.trufflesuite.com/ganache) as the blockchain.  
- [Solidity](https://docs.soliditylang.org/en/latest/) as the programming language.  
- [OpenZeppelin](https://openzeppelin.github.io/) framework for ERC-20 tokens.  
- [Web3.js](https://github.com/ChainSafe/web3.js) as the nodejs API which connects to `JSON-RPC` providers.
- [Nodejs and NPM](https://nodejs.org/en/download/) v14.17.6 LTS or higher installed

## Setting up Ganache

Install **Ganache**

```bash
sudo pamac install ganache-bin
```

Open it and use the following configuration to start a `new workspace`

- **HOSTNAME:** 0.0.0.0
- **PORT:** 7545
- **AUTOMINE:** true
- **GAS LIMIT:** 10000000000000000
- **GAS PRICE:** 200000000000

## Getting started

1. First, we write an **Exchange contract** that will be used to swap a token and ether. for each `token-ether` pair one exchange contract will be deployed
2. Then we write a **Factory contract** that is for creating and deploying Exchange contracts. It will also keep track of the deployed Exchange contracts
3. We compile and deploy **MLB1 and MLB2 ERC-20 contracts**
4. We compile and deploy the **Factory contract** on **Ganache**
5. We call `CreateExchange` function of the **Factory contract** to create two new **exchange contracts** for `MLB1` and `MLB2`

## Exchange contract

The exchange contract takes a `token address` parameter in the `constructor`. The token can be swapped for ether and vice versa.  
It also `inherits` from the `ERC-20` contract to create a `reward token`. This token (MLBReward) will be distributed to the Liquidity Providers.  
So exchange contract has also all the functionality of an `ERC-20` contract.

```javascript
import "./node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IExchange {
    function ethToTokenSwap(uint256 _minTokens) external payable;

    function ethToTokenTransfer(uint256 _minTokens, address _recipient)
        external
        payable;
}

interface IFactory {
    function getExchange(address _tokenAddress) external returns (address);
}

contract Exchange is ERC20 {
    address public tokenAddress;
    address public factoryAddress; // The factory contract address that created this exchange contract

    constructor(address _token) ERC20("MLBReward", "MLBR") {
        require(_token != address(0), "invalid token address");

        tokenAddress = _token;
        factoryAddress = msg.sender;
    }
```

`addLiquidity` function is used to add liquidity to the exchange. It is a payable function. We send ether and token to this function. This function also mints `MLBReward` to the `LP` based on the amount of ETH `LP` has sent.  

`removeLiquidity` function is used to remove liquidity from the exchange. It takes an amount of ether and token `LP` wants to withdraw. This function also burns `MLBReward` from the `LP`.

`ethToToken` function is used to swap ether to the token. It takes an amount of ether `LP` wants to swap. and the minimum amount of tokens `LP` wants to receive.

## Factory contract

Factory contract is used to create and deploy Exchange contracts. It also `keeps track` of the deployed exchange contracts. It has a `createExchange` function that takes a token address and creates and deploys an exchange contract.

```javascript
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "./exchange.sol";

// Factory is a contract that creates exchange contracts. and keep track of what it has created.
contract Factory {
    mapping(address => address) public tokenToExchange; // map of token address to exchange address
    int256 public numExchanges; // number of exchanges created
    address[] public tokenList; // list of token addresses

    function createExchange(address _tokenAddress) public returns (address) {
        require(_tokenAddress == address(_tokenAddress), "Not a valid address");
        require(_tokenAddress != address(0), "Zero token address is not valid");
        // tokenToExchange[_tokenAddress] returns "zero address" if _tokenAddress is not in the map
        require(
            tokenToExchange[_tokenAddress] == address(0),
            "Exchange already exists"
        );

        Exchange exchange = new Exchange(_tokenAddress);

        // Tracking
        tokenToExchange[_tokenAddress] = address(exchange);
        numExchanges++;
        tokenList.push(_tokenAddress);

        return address(exchange);
    }

    function getExchange(address _tokenAddress) public view returns (address) {
        return tokenToExchange[_tokenAddress];
    }

    function getTokens() public view returns (address[] memory) {
        return tokenList;
    }
}
```

## MLB1 and MLB2 ERC-20 Contracts

`MLB1` and `MLB2` are tokens we will deploy, and create two exchange contracts for.

## Deploying DEX on Ganache

We use `ethereum-smart-contract-deployer` npm package to deploy the contracts on `Ganache`.  

Following this scenario:

1. Deploying `MLB1` and `MLB2` tokens
2. Deploying `Factory` contract
3. Creating two exchanges for `MLB1-ether` and `MLB2-ether`

```bash
git clone https://github.com/mlibre/blockchain.git
cd blockchain/Ethereum/Build\ a\ DEX\ from\ scratch/
npm i
node main.js
```

`main.js` code is as follows:

```javascript
let MLB1Deployer = await new Deployer({
   contractFilePath: "./MLB1.sol",
   input: [200],
   sender: LP,
   mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature",
   address: "http://127.0.0.1:7545",
   compilerOptimize: true,
   compileOutput: "combined",
   combineFolder: 'combined',
   combined: true,
   setGas: true,
   confirmations: false
  })
  let MLB1 = await MLB1Deployer.deploy();
  let MLB1Decimals = await MLB1.methods.decimals().call();

  // ABI & Contract address of the token which can be exchanged for ETH
  let MLB1ContractAddress = MLB1.options.address; // Contract address of a sample deployed ERC-20 token
  let MLB1Abi = MLB1Deployer.contract.abi;

  let MLB2Deployer = await new Deployer({
   contractFilePath: "./MLB2.sol",
   input: [200],
   sender: LP,
   mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature",
   address: "http://127.0.0.1:7545",
   compilerOptimize: true,
   compileOutput: "combined",
   combineFolder: 'combined',
   combined: true,
   setGas: true,
   confirmations: false
  })
  let MLB2 = await MLB2Deployer.deploy();
  let MLB2Decimals = await MLB2.methods.decimals().call();

  // ABI & Contract address of the token which can be exchanged for ETH
  let MLB2ContractAddress = MLB2.options.address; // Contract address of a sample deployed ERC-20 token
  let MLB2Abi = MLB2Deployer.contract.abi

  const factory = await new Deployer({
   contractFilePath: "./factory.sol",
   sender: owner,
   mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature", // Ganache mnemonic
   address: "http://127.0.0.1:7545", // Ganache address
   compilerOptimize: true,
   compileOutput: "combined",
   combineFolder: 'combined',
   setGas: true,
   confirmations: false
  });
  const FactoryInstance = await factory.deploy();
  web3 = factory.web3;
  let toWei = web3.utils.toWei;

  await FactoryInstance.methods.createExchange(MLB1ContractAddress)
  .send({
   from: owner
  })
  await FactoryInstance.methods.createExchange(MLB2ContractAddress)
  .send({
   from: owner
  })

 
  MLB1ExchangeAddress = await FactoryInstance.methods.getExchange(MLB1ContractAddress).call();
  MLB2ExchangeAddress = await FactoryInstance.methods.getExchange(MLB2ContractAddress).call();
```

Our DEX is now deployed and ready to use. Lets add some liquidity to the `MLB1-Ether` exchange.

```javascript
  let LPMLB1TokenToSend = (20 * 10 ** MLB1Decimals).toString();
  await MLB1.methods.approve(MLB1Exchange.options.address, LPMLB1TokenToSend)
  .send(
   {
    from: LP
   });
  await MLB1Exchange.methods.addLiquidity(LPMLB1TokenToSend) // Token Amount to send for liquidity
  .send({
   from: LP,
   value: toWei("1.5") // Ether amount to send for liquidity
  });
```

Or swap `MLB1` for `Ether`.

```javascript
  await MLB1.methods.approve(MLB1Exchange.options.address, LPMLB1TokenSwap).send({from: LP});
  let tokenToEthSwap = await MLB1Exchange.methods.tokenToEthSwap(LPMLB1TokenSwap, ethOut)
  .send({
   from: LP,
  });
```

You can find the full example and source codes under this directory.

## References

- <https://jeiwan.net/posts/programming-defi-uniswap-1/>
- <https://jeiwan.net/posts/programming-defi-uniswap-2/>
- <https://medium.com/coinmonks/programming-defi-uniswap-part-3-791005c6238e>

## About The Author

I'm mlibre, a random guy from the solar galaxy. I am interested in blockchain tech and find it very useful for lots of things. Feel free to check my [Github](https://github.com/mlibre)

## Donate 💗

ETH:
> 0xc9b64496986E7b6D4A68fDF69eF132A35e91838e
