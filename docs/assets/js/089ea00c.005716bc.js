"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r="Bitcoin",l={unversionedId:"blockchain/Bitcoin/readme",id:"blockchain/Bitcoin/readme",title:"Bitcoin",description:"A blockchain is a list of records, called blocks, which are linked and secured using cryptography.",source:"@site/docs/blockchain/Bitcoin/readme.md",sourceDirName:"blockchain/Bitcoin",slug:"/blockchain/Bitcoin/",permalink:"/Tutorials/blockchain/Bitcoin/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blockchain",permalink:"/Tutorials/"},next:{title:"Simple implementation",permalink:"/Tutorials/blockchain/Bitcoin/POW-Example/"}},s={},c=[{value:"Table of content",id:"table-of-content",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Incentives",id:"incentives",level:2},{value:"Addresses And Wallets",id:"addresses-and-wallets",level:2},{value:"Transaction",id:"transaction",level:2},{value:"Longest chain",id:"longest-chain",level:2},{value:"Double Spending",id:"double-spending",level:2},{value:"Where do bitcoins come from?",id:"where-do-bitcoins-come-from",level:2},{value:"Simple POW Blockchain in nodejs",id:"simple-pow-blockchain-in-nodejs",level:2},{value:"References",id:"references",level:2},{value:"My Bitcoin Address",id:"my-bitcoin-address",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitcoin"},"Bitcoin"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain")," is a list of records, called blocks, which are linked and secured using cryptography.",(0,i.kt)("br",{parentName:"p"}),"\n","Each block contains a cryptographic hash of the previous block, a timestamp, and a list of transactions.",(0,i.kt)("br",{parentName:"p"}),"\n","A blockchain is simply a public distributed ledger, and ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoin")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain"),".  "),(0,i.kt)("p",null,"I have also implemented a simple Proof-of-Work (POW) blockchain like bitcoin, you can find it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/POW-Example"},"here")),(0,i.kt)("h2",{id:"table-of-content"},"Table of content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#consensus"},"Consensus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incentives"},"Incentives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#addresses-and-wallets"},"Addresses And Wallets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#transaction"},"Transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#longest-chain"},"Longest chain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#double-spending"},"Double Spending")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#where-do-bitcoins-come-from"},"Where do bitcoins come from?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#simple-pow-blockchain-in-nodejs"},"Simple POW Blockchain in nodejs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#my-bitcoin-address"},"My Bitcoin Address"))),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bitcoin")," consists of a network of nodes that all run Bitcoin's code and store its blockchain. The nodes connect to each other via the Internet, and they all validate transactions and add them to the blockchain via a process called ",(0,i.kt)("inlineCode",{parentName:"p"},"mining"),".  "),(0,i.kt)("h2",{id:"consensus"},"Consensus"),(0,i.kt)("p",null,"Bitcoin achieves consensus through a process called ",(0,i.kt)("inlineCode",{parentName:"p"},"proof-of-work mining"),". Miners spend computational resources to find a solution to a cryptographic puzzle, and whichever miner finds the solution is able to create the next block."),(0,i.kt)("h2",{id:"incentives"},"Incentives"),(0,i.kt)("p",null,"The Bitcoin protocol offers two main incentives for mining:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Block rewards: New bitcoins are minted with each block, and the miner who finds the block receives the block reward"),(0,i.kt)("li",{parentName:"ul"},"Transaction fees: Each transaction on the Bitcoin network includes a transaction fee, paid to the miner who includes that transaction in a block")),(0,i.kt)("h2",{id:"addresses-and-wallets"},"Addresses And Wallets"),(0,i.kt)("p",null,"There is no such thing as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet")," in the Bitcoin network. It is ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract"),".  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address")),(0,i.kt)("p",null,"An address is a hash of a bitcoin public-key wallet.",(0,i.kt)("br",{parentName:"p"}),"\n","You can use an address as many as you want to send and receive Bitcoin.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wallet")),(0,i.kt)("p",null,"A wallet is a software program that stores ",(0,i.kt)("inlineCode",{parentName:"p"},"key-pairs"),", created ",(0,i.kt)("inlineCode",{parentName:"p"},"addresses"),", and other information needed to access and manage your ",(0,i.kt)("inlineCode",{parentName:"p"},"Bitcoins"),".  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key-pairs")),(0,i.kt)("p",null,"Key-pairs are a public key of an address to which some amount bitcoin was previously sent and the corresponding unique private key, which authorizes the bitcoin previously sent to the above public key (address) to be sent elsewhere."),(0,i.kt)("h2",{id:"transaction"},"Transaction"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Bitcoin")," ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," is a transfer of Bitcoins from one user to another. It is a data structure that contains several fields, including inputs, outputs, and other metadata.",(0,i.kt)("br",{parentName:"p"}),"\n","When a ",(0,i.kt)("inlineCode",{parentName:"p"},"Bitcoin")," transaction is created, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcast")," to the Bitcoin network and propagated to all ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," on the network. Each node verifies the transaction by checking that the digital signatures in the inputs field are valid. Once the transaction is verified by the nodes, it is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mempool"),", which is a pool of ",(0,i.kt)("inlineCode",{parentName:"p"},"unconfirmed transactions")," ",(0,i.kt)("inlineCode",{parentName:"p"},"waiting")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"included")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"next block"),"."),(0,i.kt)("p",null,"A transaction components are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inputs - Information about the Bitcoin previously sent to Mark's address. For example, imagine Mark previously received 0.6 BTC from Alice and 0.6 BTC from Bob. Now, in order to send 1 BTC to Jessica, there might be two inputs: one input of 0.6 BTC previously from Alice and one input of 0.6 BTC previously from Bob."),(0,i.kt)("li",{parentName:"ul"},"Amount - The amount being sent, In this case Mark wants to send 1 BTC."),(0,i.kt)("li",{parentName:"ul"},"Outputs - The destination addresses of the Bitcoins. The first is 1.2 BTC (0.6 BTC + 0.6 BTC) to Jessica\u2019s public address. The second is 0.2 BTC returned as 'change' to Mark.")),(0,i.kt)("h2",{id:"longest-chain"},"Longest chain"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"longest chain")," refers to the chain of blocks that the majority of nodes on the network agree to and adopt as the authoritative blockchain. The longest chain is not determined by the number of blocks but by the amount of computational power or energy used to mine the blocks in the chain."),(0,i.kt)("h2",{id:"double-spending"},"Double Spending"),(0,i.kt)("p",null,"Double spending is when someone (A) tries spending the same bitcoin twice. Bitcoin network prevents this.",(0,i.kt)("br",{parentName:"p"}),"\n","When A broadcast the two transactions, they will go in unconfirmed transactions' pools. From there when a miner (X) validates the first transaction, the bitcoin will be sent to the new owner. so X will invalidate the second transaction because A is not the owner of the bitcoin anymore. But if the two transactions gets validated and mined by two different miners and gets added to the next block. it means there are two different blockchains now. (one with the first transaction and one with the second transaction). Now longest chain algorithm comes into play. miners will always accept the longest chain.  "),(0,i.kt)("h2",{id:"where-do-bitcoins-come-from"},"Where do bitcoins come from?"),(0,i.kt)("p",null,"As an incentive to use processing power to try and add new blocks of transactions on to the blockchain, each new block makes available a fixed amount of bitcoins that did not previously exist. Therefore, if you are able to successfully mine a block, you are able to \u201csend\u201d yourself these new bitcoins as a reward for your effort."),(0,i.kt)("h2",{id:"simple-pow-blockchain-in-nodejs"},"Simple POW Blockchain in nodejs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/POW-Example"},"Here you can find a simple complete POW blockchain written in nodejs")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bitcoin.com/get-started/"},"https://www.bitcoin.com/get-started/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/double-spending-explained"},"https://academy.binance.com/en/articles/double-spending-explained")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=phLSjZdDc5A"},"https://www.youtube.com/watch?v=phLSjZdDc5A")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learnmeabitcoin.com/technical/longest-chain"},"https://learnmeabitcoin.com/technical/longest-chain"))),(0,i.kt)("h2",{id:"my-bitcoin-address"},"My Bitcoin Address"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"bc1qgwu903shgs4fse3s8u2vsufrsaxhnz26skqmzu")))}h.isMDXComponent=!0}}]);