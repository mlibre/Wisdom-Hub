"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2008],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Ethereum",s={unversionedId:"blockchain/Ethereum/readme",id:"blockchain/Ethereum/readme",title:"Ethereum",description:"Ethereum is a decentralized blockchain. A platform for smart contracts. Smart contracts are applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.",source:"@site/docs/blockchain/Ethereum/readme.md",sourceDirName:"blockchain/Ethereum",slug:"/blockchain/Ethereum/",permalink:"/Tutorials/blockchain/Ethereum/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cryptography",permalink:"/Tutorials/blockchain/Cryptography/"},next:{title:"DEX from scratch",permalink:"/Tutorials/blockchain/Ethereum/Build a DEX from scratch/"}},l={},c=[{value:"Table of content",id:"table-of-content",level:2},{value:"Accounts vs UTXOs",id:"accounts-vs-utxos",level:2},{value:"Merkle Patricia Trees",id:"merkle-patricia-trees",level:3},{value:"Gas",id:"gas",level:2},{value:"MetaMask",id:"metamask",level:2},{value:"Infura",id:"infura",level:2},{value:"Ethereum Explorer",id:"ethereum-explorer",level:2},{value:"References",id:"references",level:2},{value:"My ETH Address",id:"my-eth-address",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ethereum"},"Ethereum"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ethereum")," is a decentralized blockchain. A platform for smart contracts. Smart contracts are applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference."),(0,r.kt)("h2",{id:"table-of-content"},"Table of content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-content"},"Table of content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#accounts-vs-utxos"},"Accounts vs UTXOs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#merkle-patricia-trees"},"Merkle Patricia Trees")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gas"},"Gas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#geth"},"Geth"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#features"},"Features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#starting"},"Starting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#importing-accounts"},"Importing accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interacting-with-ethereum"},"Interacting with Ethereum")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#metamask"},"MetaMask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#infura"},"Infura")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ethereum-explorer"},"Ethereum Explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#references"},"References")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#my-eth-address"},"My ETH Address"))),(0,r.kt)("h2",{id:"accounts-vs-utxos"},"Accounts vs UTXOs"),(0,r.kt)("p",null,"Bitcoin, along with many of its derivatives, stores data about users\u2019 balances in a structure based on unspent transaction outputs (UTXOs): the entire state of the system consists of a set of \u201cunspent outputs\u201d (think, \u201ccoins\u201d), such that each coin has an owner and a value, and a transaction spends one or more coins and creates one or more new coins, subject to the validity constraints:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Every referenced input must be valid and not yet spent"),(0,r.kt)("li",{parentName:"ol"},"The transaction must have a signature matching the owner of the input for every input"),(0,r.kt)("li",{parentName:"ol"},"The total value of the inputs must equal or exceed the total value of the outputs")),(0,r.kt)("p",null,"A user\u2019s \u201cbalance\u201d in the system is thus the total value of the set of coins for which the user has a private key capable of producing a valid signature."),(0,r.kt)("p",null,"Triple-entry bookkeeping example\n(Image from ",(0,r.kt)("a",{parentName:"p",href:"https://bitcoin.org/en/developer-guide"},"https://bitcoin.org/en/developer-guide"),")"),(0,r.kt)("p",null,"Ethereum jettisons this scheme in favor of a simpler approach: the state stores a list of accounts where each account has a balance, as well as Ethereum-specific data (code and internal storage), and a transaction is valid if the sending account has enough balance to pay for it, in which case the sending account is debited and the receiving account is credited with the value. If the receiving account has code, the code runs, and internal storage may also be changed, or the code may even create additional messages to other accounts which lead to further debits and credits."),(0,r.kt)("p",null,"The benefits of UTXOs are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Higher degree of privacy: if a user uses a new address for each transaction that they receive then it will often be difficult to link accounts to each other. This applies greatly to currency, but less to arbitrary dapps, as arbitrary dapps often necessarily involve keeping track of complex bundled state of users and there may not exist such an easy user state partitioning scheme as in currency."),(0,r.kt)("li",{parentName:"ol"},"Potential scalability paradigms: UTXOs are more theoretically compatible with certain kinds of scalability paradigms, as we can rely on only the owner of some coins maintaining a Merkle proof of ownership, and even if everyone including the owner decides to forget that data then only the owner is harmed. In an account paradigm, everyone losing the portion of a Merkle tree corresponding to an account would make it impossible to process messages that affect that account at all in any way, including sending to it. However, non-UTXO-dependent scalability paradigms do exist.")),(0,r.kt)("p",null,"The benefits of accounts are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Large space savings: for example, if an account has 5 UTXO, then switching from a UTXO model to an account model would reduce the space requirements from (20 + 32 + 8) * 5 = 300 bytes (20 for the address, 32 for the txid and 8 for the value) to 20 + 8 + 2 = 30 bytes (20 for the address, 8 for the value, 2 for a nonce(see below)). In reality savings are not nearly this massive because accounts need to be stored in a Patricia tree (see below) but they are nevertheless large. Additionally, transactions can be smaller (eg. 100 bytes in Ethereum vs. 200-250 bytes in Bitcoin) because every transaction need only make one reference and one signature and produces one output."),(0,r.kt)("li",{parentName:"ol"},"Greater fungibility: because there is no blockchain-level concept of the source of a specific set of coins, it becomes less practical, both technically and legally, to institute a redlist/blacklisting scheme and to draw a distinction between coins depending on where they come from."),(0,r.kt)("li",{parentName:"ol"},"Simplicity: easier to code and understand, especially once more complex scripts become involved. Although it is possible to shoehorn arbitrary decentralized applications into a UTXO paradigm, essentially by giving scripts the ability to restrict what kinds of UTXO a given UTXO can be spent to, and requiring spends to include Merkle tree proofs of change-of-application-state-root that scripts evaluate, such a paradigm is much more complicated and ugly than just using accounts."),(0,r.kt)("li",{parentName:"ol"},"Constant light client reference: light clients can at any point access all data related to an account by scanning down the state tree in a specific direction. In a UTXO paradigm, the references change with each transaction, a particularly burdensome problem for long-running dapps that try to use the above mentioned state-root-in-UTXO propagation mechanism.")),(0,r.kt)("p",null,"We have decided that, particularly because we are dealing with dapps containing arbitrary state and code, the benefits of accounts massively outweigh the alternatives. Additionally, in the spirit of the We Have No Features principle, we note that if people really do care about privacy then mixers and coinjoin can be built via signed-data-packet protocols inside of contracts."),(0,r.kt)("p",null,"One weakness of the account paradigm is that in order to prevent replay attacks, every transaction must have a \u201cnonce\u201d, such that the account keeps track of the nonces used and only accepts a transaction if its nonce is 1 after the last nonce used. This means that even no-longer-used accounts can never be pruned from the account state. A simple solution to this problem is to require transactions to contain a block number, making them un-repayable after some period of time, and reset nonces once every period. Miners or other users will need to \u201cping\u201d unused accounts in order to delete them from the state, as it would be too expensive to do a full sweep as part of the blockchain protocol itself. We did not go with this mechanism only to speed up development for 1.0; 1.1 and beyond will likely use such a system."),(0,r.kt)("h3",{id:"merkle-patricia-trees"},"Merkle Patricia Trees"),(0,r.kt)("p",null,"The Merkle Patricia tree/trie, previously envisioned by Alan Reiner and implemented in the Ripple protocol, is the primary data structure of Ethereum, and is used to store all account state, as well as transactions and receipts in each block."),(0,r.kt)("h2",{id:"gas"},"Gas"),(0,r.kt)("p",null,"What happens when we run out of gas in the middle of an Ethereum transaction?"),(0,r.kt)("p",null,"If we run out of gas in the middle of an Ethereum transaction, the transaction will fail and the state of the blockchain will revert to what it was before. However, we will still have to pay for the gas that was consumed up to that point. This is because gas is used to pay validators for the resources needed to conduct transactions."),(0,r.kt)("h2",{id:"metamask"},"MetaMask"),(0,r.kt)("p",null,"There are several ways to interact with the Ethereum blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Running a local node with ",(0,r.kt)("inlineCode",{parentName:"li"},"Geth")," for example"),(0,r.kt)("li",{parentName:"ul"},"Calling web APIs. for example ",(0,r.kt)("a",{parentName:"li",href:"https://www.blockcypher.com/"},"blockcypher")),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Metamask")," is a client-side browser extension that provides a high-level javascript library to interact with the Ethereum network. ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"metamask.io"))),(0,r.kt)("p",null,"It is also a crypto wallet.",(0,r.kt)("br",{parentName:"p"}),"\n","On the backend side, it uses ",(0,r.kt)("strong",{parentName:"p"},"infura")," or other API providers to comminute with Ethereum blockchain.",(0,r.kt)("br",{parentName:"p"}),"\n","So basically you as a ",(0,r.kt)("strong",{parentName:"p"},"developer")," don't have to worry about making/signing/sending transactions, ...",(0,r.kt)("br",{parentName:"p"}),"\n","And as a ",(0,r.kt)("strong",{parentName:"p"},"user"),", it makes things much easier. for example, you don't have to sign a proof message to prove you are the owner of an address",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMask")," is also offering other features custom network, ..."),(0,r.kt)("h2",{id:"infura"},"Infura"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ethereum & IPFS APIs ",(0,r.kt)("a",{parentName:"p",href:"https://infura.io/"},"infura.io"))),(0,r.kt)("p",null,"As it says they are providing APIs, so we can easily communicate with the Ethereum network. in the background, they probably have ",(0,r.kt)("inlineCode",{parentName:"p"},"geth")," nodes or other kinds of nodes running."),(0,r.kt)("h2",{id:"ethereum-explorer"},"Ethereum Explorer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"https://etherscan.io/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/CONTRACT_ADDRESS"},"https://rinkeby.etherscan.io/address/CONTRACT_ADDRESS")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/"},"https://ethereum.org/en/developers/docs/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.infura.io/networks/ethereum"},"https://docs.infura.io/networks/ethereum")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/"},"https://eips.ethereum.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},"https://github.com/web3/web3.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3-js-docs.pages.dev/"},"https://web3-js-docs.pages.dev/"))),(0,r.kt)("h2",{id:"my-eth-address"},"My ETH Address"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"0xc9b64496986E7b6D4A68fDF69eF132A35e91838e")))}h.isMDXComponent=!0}}]);