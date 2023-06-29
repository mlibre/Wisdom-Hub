"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||l;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const l={title:"Simple implementation",tags:["Bitcoin"]},r="Simple implementation of POW",o={unversionedId:"Bitcoin/POW-Example/readme",id:"Bitcoin/POW-Example/readme",title:"Simple implementation",description:"You can find the codes and files in the Github repo.",source:"@site/docs/Bitcoin/POW-Example/readme.md",sourceDirName:"Bitcoin/POW-Example",slug:"/Bitcoin/POW-Example/",permalink:"/blockchain/Bitcoin/POW-Example/",draft:!1,tags:[{label:"Bitcoin",permalink:"/blockchain/tags/bitcoin"}],version:"current",frontMatter:{title:"Simple implementation",tags:["Bitcoin"]},sidebar:"tutorialSidebar",previous:{title:"Bitcoin",permalink:"/blockchain/Bitcoin/"},next:{title:"Cryptography",permalink:"/blockchain/Cryptography/"}},s={},c=[{value:"Block",id:"block",level:2},{value:"Chain",id:"chain",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simple-implementation-of-pow"},"Simple implementation of POW"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can find the ",(0,i.kt)("strong",{parentName:"p"},"codes")," and ",(0,i.kt)("strong",{parentName:"p"},"files")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/POW-Example"},(0,i.kt)("inlineCode",{parentName:"a"},"in the Github repo")),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/POW-Example"},"This code")," implements a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain")," in JavaScript using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," platform. It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"crypto")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fs")," libraries provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js"),"."),(0,i.kt)("p",null,"When the blockchain application is run, it initializes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Blockchain")," object and creates a genesis block if the blockchain file is empty. ",(0,i.kt)("inlineCode",{parentName:"p"},"Miners")," can then mine blocks by adding transactions to the transaction pool and calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"mine")," method on a block. Transactions are verified by checking the balance of the sending address and the transaction number of the wallet. The transaction pool is also regularly updated to remove confirmed transactions and prevent it from becoming too large. Lets explain each class separately."),(0,i.kt)("h2",{id:"block"},"Block"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," class represents a block in the blockchain, with properties such as block number, timestamp, transactions, previous hash, miner, hash, and nonce. It has methods for calculating the hash of the block, updating the transactions, and mining the block by repeatedly updating the nonce until the resulting hash starts with a certain number of zeros (determined by the difficulty level). The class also has a static method for validating a block."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockNumber"),": A unique number for the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": The timestamp of the block creation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transactions"),": An array of transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previousHash"),": The hash of the previous block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"miner"),": The public key of the miner who mined the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash"),": The hash of the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce"),": The nonce used to mine the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature"),": The digital signature of the block.")),(0,i.kt)("p",null,"The class has the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"calculateHash()"),": Calculates the hash of the block using the SHA-256 algorithm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateTransactions(transactions)"),": Updates the transactions in the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mine(difficulty)"),": Mines the block by finding a hash that satisfies a given difficulty level."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signBlock(privateKey)"),": Signs the block using the private key of the miner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static verifySignature(publicKey, signature, block)"),": Verifies the digital signature of the block using the public key of the miner.")),(0,i.kt)("h2",{id:"chain"},"Chain"),(0,i.kt)("p",null,"The class ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain")," represents a chain of blocks in the blockchain. The chain can be stored on the file system and loaded from it. The class also provides methods to get, add, and retrieve the latest block in the chain, as well as the length of the chain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getBlock(blockNumber)"),": Gets the block at the given block number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addBlock(block)"),": Adds a block to the blockchain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getLatestBlock()"),": Gets the latest block in the blockchain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getBlockChainLength()"),": Gets the length of the blockchain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isBlockChainEmpty()"),": Checks if the blockchain is empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update()"),": Updates the blockchain in the file system.")),(0,i.kt)("h2",{id:"wallet"},"Wallet"),(0,i.kt)("p",null,"The class ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet")," represents a user's wallet. A user can have multiple wallets, each with its own balance and transaction number. The wallets can be stored on the file system and loaded from it. The class also provides methods to get, add, or subtract balance, get the transaction number, check if a wallet address exists, and update the wallet data on the file system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static createKeyPair()"),": Creates a new key pair (public and private) for the wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static signTransaction(privateKey, transaction)"),": Signs a transaction using the private key of the wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static verifySignature(publicKey, signature, data)"),": Verifies the digital signature of a transaction using the public key of the wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get(address)"),": Gets the balance and transaction number for the given wallet address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"incrementTN(address)"),": Increments the transaction number for the given wallet address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"balance(address)"),": Gets the balance for the given wallet address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addBalance(address, amount)"),": Adds the given amount to the balance of the given wallet address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minusBalance(address, amount)"),": Subtracts the given amount from the balance of the given wallet address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transactionNumber(address)"),": Gets the transaction number for the given wallet address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"checkWalletAddresses(address)"),": Creates a new wallet address if it doesn't exist in the collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update()"),": Updates the wallet collection in the file system.")),(0,i.kt)("h2",{id:"blockchain"},"Blockchain"),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blockchain")," class ties everything together, representing the overall blockchain system. It has properties such as the transaction pool, mining reward, and max transactions per block. It also has methods for creating the genesis block, adding transactions to the transaction pool, and mining a new block if the transaction pool is full."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can simply run the program like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Blockchain = require( "./main" ).Blockchain;\nconst Wallet = require( "./main" ).Wallet;\nconst crypto = require( "crypto" );\n\nconst userKeysPairs = Wallet.createKeyPair();\nconst minerKeyPairs = Wallet.createKeyPair();\nconst blockchain = new Blockchain( "blockchain.json", "wallets.json", userKeysPairs );\n \nlet trx = \n{\n from: userKeysPairs.publicKey,\n to: "user2",\n amount: 1,\n fee: 0,\n transaction_number: 2\n}\ntrx.signature = Wallet.signTransaction( userKeysPairs.privateKey, trx );\n\nblockchain.addTransaction(trx);\n\nlet trx2 = {\n from: userKeysPairs.publicKey,\n to: "user3",\n amount: 5,\n fee: 0.3,\n transaction_number: 3\n}\ntrx2.signature = Wallet.signTransaction( userKeysPairs.privateKey, trx2 );\nblockchain.addTransaction(trx2);\n\nblockchain.mineBlock( minerKeyPairs );\nconsole.log( blockchain.validateChain() );\nconsole.log( "Latest Block :", blockchain.chain.getLatestBlock() );\nconsole.log( "Wallets : ", blockchain.wallet );\n')))}m.isMDXComponent=!0}}]);