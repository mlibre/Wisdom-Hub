"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i="How to write Smart Contracts on Polygon",l={unversionedId:"Polygon/Smart Contracts/readme",id:"Polygon/Smart Contracts/readme",title:"How to write Smart Contracts on Polygon",description:"In this example, we write a Voter contract, we will compile and then deploy it on the Polygon testnet using Web3. And then we interact with the blockchain using Geth and web3js.",source:"@site/docs/Polygon/Smart Contracts/readme.md",sourceDirName:"Polygon/Smart Contracts",slug:"/Polygon/Smart Contracts/",permalink:"/blockchain/Polygon/Smart Contracts/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to transfer ERC-721 tokens to the Polygon (Matic) chain",permalink:"/blockchain/Polygon/PoS Bridge/erc721-pos-bridge"}},p={},s=[{value:"Table of content",id:"table-of-content",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Account",id:"account",level:2},{value:"Installation",id:"installation",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Interacting with the blockchain",id:"interacting-with-the-blockchain",level:2},{value:"Geth",id:"geth",level:3},{value:"Web3",id:"web3",level:3},{value:"MATIC",id:"matic",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-write-smart-contracts-on-polygon"},"How to write Smart Contracts on Polygon"),(0,o.kt)("p",null,"In this example, we write a ",(0,o.kt)("inlineCode",{parentName:"p"},"Voter")," contract, we will compile and then deploy it on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Polygon testnet")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"Web3"),". And then we interact with the blockchain using ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web3js"),"."),(0,o.kt)("p",null,"Matic provides SDK and APIs for development.  "),(0,o.kt)("h2",{id:"table-of-content"},"Table of content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#account"},"Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#implementation"},"Implementation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#deploying"},"Deploying")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#interacting-with-the-blockchain"},"Interacting with the blockchain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geth"},"Geth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#web3"},"Web3")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#matic"},"MATIC"))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js 14")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethereum-smart-contract-deployer"},"ethereum-smart-contract-deployer 2.0.0"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"solc"),": 0.8.9"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"web3"),": 1.6.0")))),(0,o.kt)("h2",{id:"account"},"Account"),(0,o.kt)("p",null,"First, create an Ethereum account if you don't have one. If you already have, you don't need another. You just need to send some credit to your account using Matic faucet. Click on the link below, and request for a fund.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"https://faucet.polygon.technology/"),(0,o.kt)("br",{parentName:"p"}),"\n","now we need to communicate with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Testnet"),". Create an ",(0,o.kt)("a",{parentName:"p",href:"https://datahub.figment.io"},"Datahub")," account."),(0,o.kt)("p",null,"Now let's check if your account is funded.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'geth attach https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/YOURKEY/\n> eth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")\n1987540120000000000\n')),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"If you are using Arch-based Linux, like ",(0,o.kt)("strong",{parentName:"p"},"Manjaro")," here are the commands. for other distributions, are also almost the same.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S nodejs npm geth\nsudo npm install -g solc\nsolcjs --version\ngit clone https://github.com/mlibre/blockchain.git\ncd blockchain/Polygon/Smart Contracts\nnpm install\n")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Voter")," contract source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/blob/master/Polygon/Smart%20Contracts/"},"here"),".",(0,o.kt)("br",{parentName:"p"}),"\n","In this contract, you can simply add options to vote for, start a voting process, vote the options and get the result."),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereum-smart-contract-deployer")," npm module to deploy the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node main.js\n")),(0,o.kt)("p",null,"The output is something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Network Name:  private\nNetwork Peers:  118\n\nSolidity Version: 0.8.9\nCompiling contract voter.sol\n\nDeploying Contract Voter\nArguments:  [ [ 'mlibre', 'Good' ] ]\n\nTransaction hash: 0x347177fb10ce9028e75bdb98885ac33f98fcd46ac67f0371d8dbac3d8e5ebe6d\nOwner: 0xD8f24D419153E5D03d614C5155f900f4B5C8A65C\nContract Address: 0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8\n")),(0,o.kt)("p",null,"Congratulations. you made your first contract in Polygon Network.",(0,o.kt)("br",{parentName:"p"}),"\n","You can find your contract address in the output log. Check it here: ",(0,o.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8"},"https://mumbai.polygonscan.com/address/0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8")),(0,o.kt)("h2",{id:"interacting-with-the-blockchain"},"Interacting with the blockchain"),(0,o.kt)("p",null,"The next step is to interact with the blockchain using ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web3js"),"."),(0,o.kt)("h3",{id:"geth"},"Geth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'geth attach  https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/a99e72c92474b4eaec9340d7c03f3b81/\neth.getCode("0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8")\n# To load a contract using geth just need to put the abi we created, and the address\nvar abi = [{"inputs":[{"internalType":"string[]","name":"_options","type":"string[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOptions","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"options","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]\n\nvar voter = eth.contract(abi).at("0xeaFEAf1e75B89DabfAf4E8C41858AFBe51c291B8");\nvoter\n')),(0,o.kt)("h3",{id:"web3"},"Web3"),(0,o.kt)("p",null,"To interact with the blockchain using ",(0,o.kt)("inlineCode",{parentName:"p"},"web3js"),", we need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"web3")," instance. And have the contract ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"abi"),". So you need to keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"abi")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," in a file for later use.",(0,o.kt)("br",{parentName:"p"}),"\n","You can also use the deployer contract instance just after the deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const sender = "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C";\n  const deployer = await new Deployer({\n   contractFilePath: "voter.sol",\n   input: [["mlibre" , "Good"]],\n   sender,\n   privateKey: secrets.privateKey,\n   address: secrets.mumbai\n  });\n  const contract = await deployer.deploy();\n  // let abi = deployer.contract.abi\n  // let contract = deployer.contractInstance\n  await contract.methods.addOption("new option").send({from: sender});\n  const options = await contract.methods.getOptions().call();\n  await contract.methods.startVoting().send({from: sender});\n  await contract.methods.vote(0).send({from: sender});\n  const votes = await contract.methods.getVotes().call({\n   from: sender,\n  });\n  console.log(options, votes);\n')),(0,o.kt)("h2",{id:"matic"},"MATIC"),(0,o.kt)("p",null,"MATIC is the Polygon Network native token.",(0,o.kt)("br",{parentName:"p"}),"\n","The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.polygon.technology/docs/develop/network-details/gas-token/"},"MATIC")," token will be used as the gas fee by default.",(0,o.kt)("br",{parentName:"p"}),"\n","Polygon network provides an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.polygon.technology/docs/develop/tools/matic-gas-station/"},"API")," to get the recommended gas price.",(0,o.kt)("br",{parentName:"p"}),"\n","The javascript code would be something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch('https://gasstation-mainnet.matic.network')\n  .then(response => response.json())\n  .then(json => console.log(json))\n")),(0,o.kt)("p",null,"and the result is like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "safeLow": 1,\n    "standard": 1,\n    "fast": 5,\n    "fastest": 7.5,\n    "blockTime": 2,\n    "blockNumber": 3091956\n}\n')))}m.isMDXComponent=!0}}]);