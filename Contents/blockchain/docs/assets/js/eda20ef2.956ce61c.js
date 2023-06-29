"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=l,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const i={},r="LBRY",o={unversionedId:"LBRY/readme",id:"LBRY/readme",title:"LBRY",description:"A blockchain for content. A protocol for accessing and publishing digital content.",source:"@site/docs/LBRY/readme.md",sourceDirName:"LBRY",slug:"/LBRY/",permalink:"/blockchain/LBRY/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ganache & Truffle",permalink:"/blockchain/Ethereum/Truffle/"},next:{title:"NEAR",permalink:"/blockchain/NEAR/"}},s={},c=[{value:"Table of content",id:"table-of-content",level:2},{value:"introduction",id:"introduction",level:2},{value:"LBRY daemon",id:"lbry-daemon",level:2},{value:"Installation",id:"installation",level:3},{value:"commands",id:"commands",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Stakes",id:"stakes",level:3},{value:"Claims",id:"claims",level:3},{value:"Claim Operations",id:"claim-operations",level:4},{value:"Supports",id:"supports",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Claimtrie",id:"claimtrie",level:3},{value:"URL",id:"url",level:3},{value:"Channels",id:"channels",level:3},{value:"Data",id:"data",level:3},{value:"Network Discovery",id:"network-discovery",level:2},{value:"Communication",id:"communication",level:2},{value:"JSON-RPC",id:"json-rpc",level:3},{value:"Getting a content info",id:"getting-a-content-info",level:3},{value:"Adding new content",id:"adding-new-content",level:3},{value:"Tipping something",id:"tipping-something",level:3},{value:"References",id:"references",level:2},{value:"My LBC Wallet Address",id:"my-lbc-wallet-address",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lbry"},"LBRY"),(0,l.kt)("p",null,"A blockchain for content. A protocol for accessing and publishing digital content."),(0,l.kt)("h2",{id:"table-of-content"},"Table of content"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#introduction"},"introduction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lbry-daemon"},"LBRY daemon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#commands"},"commands")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#stakes"},"Stakes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#claims"},"Claims"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#claim-operations"},"Claim Operations")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#supports"},"Supports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#metadata"},"Metadata")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#claimtrie"},"Claimtrie")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#url"},"URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#channels"},"Channels")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#data"},"Data")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#network-discovery"},"Network Discovery")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#communication"},"Communication"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#json-rpc"},"JSON-RPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getting-a-content-info"},"Getting a content info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#adding-new-content"},"Adding new content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tipping-something"},"Tipping something")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#references"},"References")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#my-lbc-wallet-address"},"My LBC Wallet Address"))),(0,l.kt)("h2",{id:"introduction"},"introduction"),(0,l.kt)("p",null,'LBRY (pronounced "library") is a decentralized, open-source digital content platform that allows users to share, publish, and monetize their digital content without relying on centralized authorities. It is built on top of the LBRY blockchain, which is designed specifically for the distribution of digital content like videos, images, and documents.'),(0,l.kt)("p",null,"The LBRY network utilizes blockchain technology, similar to Bitcoin, to store an index of available content and how to download it, as well as financial transactions using the LBRY Credits (LBC) cryptocurrency. When a creator publishes content on LBRY, an entry is made on the LBRY blockchain, which serves as an announcement that the content is available for download from the peer-to-peer network"),(0,l.kt)("h2",{id:"lbry-daemon"},"LBRY daemon"),(0,l.kt)("p",null,"You can run the daemon either by installing the ",(0,l.kt)("inlineCode",{parentName:"p"},"lbry-daemon")," and running it from a command line.",(0,l.kt)("br",{parentName:"p"}),"\n","or installing and running the ",(0,l.kt)("inlineCode",{parentName:"p"},"LBRY")," app."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"APP\n",(0,l.kt)("a",{parentName:"li",href:"https://lbry.com/get"},"https://lbry.com/get")),(0,l.kt)("li",{parentName:"ul"},"SDK\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lbryio/lbry-sdk/releases"},"https://github.com/lbryio/lbry-sdk/releases"),"  ")),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pamac install lbrynet-bin\n")),(0,l.kt)("h3",{id:"commands"},"commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lbrynet start\nlbrynet commands\nlbrynet wallet --help\n")),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://lbry.tech/overview"},"https://lbry.tech/overview"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://lbry.tech/spec"},"https://lbry.tech/spec"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://lbry.tech/resources/setup-videos"},"https://lbry.tech/resources/setup-videos"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://lbry.tech/glossary"},"https://lbry.tech/glossary"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://lbry.tech/api/sdk"},"https://lbry.tech/api/sdk")),(0,l.kt)("h3",{id:"stakes"},"Stakes"),(0,l.kt)("p",null,"A stake is a a single entry in the blockchain that commits credits toward a name. The two types of stakes are claims and supports."),(0,l.kt)("p",null,"All stakes have these properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: A 20-byte hash, unique among all stakes. See Stake Identifier Generation"),(0,l.kt)("li",{parentName:"ul"},"amount: A quantity of tokens used to back the stake")),(0,l.kt)("h3",{id:"claims"},"Claims"),(0,l.kt)("p",null,"A claim is a stake that stores metadata. There are two types of claims. Stream claims declare the availability, access method, and publisher of a stream. Channel claims create a pseudonym that can be used as the publisher of stream claims."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "claimID": "6e56325c5351ceda2dd0795a30e864492910ccbf",\n  "amount": 1.0,\n  "name": "lbry",\n  "value": {\n    "stream": {\n      "title": "What is LBRY?",\n      "author": "Samuel Bryan",\n      "description": "What is LBRY? An introduction with Alex Tabarrok",\n      "language": "en",\n      "license": "Public Domain",\n      "thumbnail": "https://s3.amazonaws.com/files.lbry.io/logo.png",\n      "mediaType": "video/mp4",\n      "streamHash": "232068af6d51325c4821ac897d13d7837265812164021ec832cb7f18b9caf6c77c23016b31bac9747e7d5d9be7f4b752",\n    },\n  },\n  "meta": {\n "support_amount": "4900.021",\n  }\n}\n')),(0,l.kt)("h4",{id:"claim-operations"},"Claim Operations"),(0,l.kt)("p",null,"There are three claim operations: create, update, and abandon."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create: Makes a new claim."),(0,l.kt)("li",{parentName:"ul"},"update: Changes the value, amount, or channel of an existing claim. Does not change the claim's ID."),(0,l.kt)("li",{parentName:"ul"},"abandon: Withdraws a claim, freeing the associated credits to be used for other purposes.")),(0,l.kt)("h3",{id:"supports"},"Supports"),(0,l.kt)("p",null,"A support is a stake that lends its amount to bolster an existing claim."),(0,l.kt)("p",null,"Supports have one extra property in addition to the stake properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"claimID: The ID of the claim that this support is bolstering.")),(0,l.kt)("p",null,"Here is an example support for the above claim:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "supportID": "fbcc019294468e03a5970dd2adec1535c52365e6",\n  "amount": 45.12,\n  "claimID": "6e56325c5351ceda2dd0795a30e864492910ccbf",\n}\n')),(0,l.kt)("h3",{id:"metadata"},"Metadata"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stream": {\n    "title": "What is LBRY?",\n    "author": "Samuel Bryan",\n    "description": "What is LBRY? An introduction with Alex Tabarrok",\n    "language": "en",\n    "license": "Public Domain",\n    "thumbnail": "https://s3.amazonaws.com/files.lbry.io/logo.png",\n    "mediaType": "video/mp4",\n    "streamHash": "232068af6d51325c4821ac897d13d7837265812164021ec832cb7f18b9caf6c77c23016b31bac9747e7d5d9be7f4b752"\n  }\n}\n')),(0,l.kt)("h3",{id:"claimtrie"},"Claimtrie"),(0,l.kt)("p",null,"A claimtrie is a data structure used to store the set of all claims and prove the correctness of URL resolution."),(0,l.kt)("p",null,"The claimtrie is implemented as a Merkle tree that maps names to claims. Claims are stored as leaf nodes in the tree. Names are stored as the normalized path from the root node to the leaf node."),(0,l.kt)("p",null,"The root hash is the hash of the root node. It is stored in the header of each block in the blockchain. Nodes use the root hash to efficiently and securely validate the state of the claimtrie."),(0,l.kt)("p",null,"Multiple claims can exist for the same name. They are all stored in the leaf node for that name. See Claim Ordering"),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("p",null,"URLs are memorable references to claims. All URLs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"contain a name (see Claim Properties), and"),(0,l.kt)("li",{parentName:"ul"},"resolve to a single, specific claim for that name")),(0,l.kt)("p",null,"The ultimate purpose of much of the claim and blockchain design is to provide memorable URLs that can be provably resolved by clients without a full copy of the blockchain (e.g. Simplified Payment Verification wallets).\nComponents"),(0,l.kt)("p",null,"A URL is a name with one or more modifiers. A bare name on its own resolves to the controlling claim at the latest block height. Here are some common URL structures.\nStream Claim Name"),(0,l.kt)("p",null,"A controlling stream claim."),(0,l.kt)("p",null,"lbry://meet-lbry"),(0,l.kt)("p",null,"Channel Claim Name"),(0,l.kt)("p",null,"A controlling channel claim."),(0,l.kt)("p",null,"lbry://@lbry"),(0,l.kt)("p",null,"Channel Claim Name and Stream Claim Name"),(0,l.kt)("p",null,"A URL containing both a channel and a stream claim name. URLs containing both are resolved in two steps. First, the channel is resolved to its associated claim. Then the stream claim name is resolved to get the appropriate claim from among the claims in the channel."),(0,l.kt)("p",null,"lbry://@lbry/meet-lbry"),(0,l.kt)("p",null,"Claim ID"),(0,l.kt)("p",null,"A claim for this name with this claim ID. Partial prefix matches are allowed (see URL Resolution)."),(0,l.kt)("p",null,"lbry://meet-lbry:7a0aa95c5023c21c098\nlbry://meet-lbry:7a\nlbry://@lbry:3f/meet-lbry"),(0,l.kt)("p",null,"Note: in a previous version of this spec, the ## character was used to signify the claim ID portion of the url. This character is now deprecated and will stop being supported in the future.\nSequence"),(0,l.kt)("p",null,"The n_th accepted claim for this name. _n must be a positive number. This can be used to reference claims in the order in which they were made, rather than by the amount of credits backing a claim."),(0,l.kt)("p",null,"lbry://meet-lbry",(0,l.kt)("em",{parentName:"p"},"1\nlbry://@lbry"),"1/meet-lbry"),(0,l.kt)("h3",{id:"channels"},"Channels"),(0,l.kt)("p",null,"Channels are the unit of identity. A channel is a claim for a name beginning with @ that contains a metadata structure for identity rather than content. Included in the metadata is the channel\u2019s public key. Here\u2019s an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"claimID": "6e56325c5351ceda2dd0795a30e864492910ccbf",\n"name": "@lbry",\n"amount": 6.26,\n"value": {\n  "channel": {\n    "keyType": "SECP256k1",\n    "publicKey": "3056301006072a8648ce3d020106052b8104000a03420004180488ffcb3d1825af538b0b952f0eba6933faa6d8229609ac0aeadfdbcf49C59363aa5d77ff2b7ff06cddc07116b335a4a0849b1b524a4a69d908d69f1bcebb"\n  }\n}\n')),(0,l.kt)("p",null,"Claims published to a channel contain a signature made with the corresponding private key. A valid signature proves channel membership.\nThe purpose of channels is to allow content to be clustered under a single pseudonym or identity. This allows publishers to easily list all their content, maintain attribution, and build their brand."),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"Files published using LBRY are stored in a distributed fashion by the clients participating in the network. Each file is split into many small pieces. Each piece is encrypted and announced to the network. The pieces may also be uploaded to other hosts on the network that specialize in rehosting content."),(0,l.kt)("p",null,"The purpose of this process is to enable file storage and access without relying on centralized infrastructure, and to create a marketplace for data that allows hosts to be paid for their services."),(0,l.kt)("h2",{id:"network-discovery"},"Network Discovery"),(0,l.kt)("p",null,"The only problem is that the initial connection requires a DNSFeed. To retrieve a list of bitcoin nodes' IPs.",(0,l.kt)("br",{parentName:"p"}),"\n","IPV4 is also kinda centralized itself. Assigning, limited amounts, and ...",(0,l.kt)("br",{parentName:"p"}),"\n","These problems probably can be solved by IPV6 and some sort of new network protocol where every network card/program can broadcast their IPV6 to any connected neighbor. and retrieve the IPV6 blockchain-based table. the IPV6 table should be in blockchain so it can't be manipulated by governments, ISPs, or the neighbor card itself. (removing, changing an IP cause to rebuild the whole blockchain every time an IP is added to the blockchain, also every single IPV6 that you have got from the neighbor card, has to have the same manipulated table, same as 51% bitcoin attack)  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Network discovery in bitcoin, ETH:\n",(0,l.kt)("a",{parentName:"li",href:"https://medium.com/harmony-one/peer-discovery-in-harmony-network-6a07f9401c61"},"https://medium.com/harmony-one/peer-discovery-in-harmony-network-6a07f9401c61"))),(0,l.kt)("h2",{id:"communication"},"Communication"),(0,l.kt)("p",null,"LBRY daemon is the central point of communication between clients and the network."),(0,l.kt)("h3",{id:"json-rpc"},"JSON-RPC"),(0,l.kt)("p",null,"RPC: is not a network protocol like http. things like REST that defines how to interact with a server.  and just like REST works over http or ...",(0,l.kt)("br",{parentName:"p"}),"\n","JOSN-RPC: RPC that uses json as the data schema.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@ConsenSys/blockchain-underpinnings-2c43ba03ecc9"},"https://medium.com/@ConsenSys/blockchain-underpinnings-2c43ba03ecc9")),(0,l.kt)("h3",{id:"getting-a-content-info"},"Getting a content info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --header "Content-Type: application/json" --data \'{ "method": "resolve", "params": { "urls": "@mlibre:e/raspberry-pi-mining-guide:6" }}\' http://localhost:5279    \n{\n"jsonrpc": "2.0",\n"result": {\n "@mlibre:e/raspberry-pi-mining-guide:6": {\n  "address": "bSvwdAMw9bokK4e1ZeaMFZc8HnjY217eFU",\n  "amount": "5.0",\n  "canonical_url": "lbry://@mlibre#e/raspberry-pi-mining-guide#6",\n  "claim_id": "6faebe6745e0e4d42b44100cfcd11f86cd17cb52",\n  "meta": {\n   "effective_amount": "811.5",\n   "reposted": 0,\n   "support_amount": "806.5",\n  .\n  .\n  .\n  "permanent_url": "lbry://raspberry-pi-mining-guide#6faebe6745e0e4d42b44100cfcd11f86cd17cb52",\n  "short_url": "lbry://raspberry-pi-mining-guide#6",\n  "signing_channel": {\n   "address": "bRgZm5DdqoRiEH6JsYVnJSWkoynzvTkfH4",\n   "amount": "0.005",\n   "canonical_url": "lbry://@mlibre#e",\n   "claim_id": "e2b347558eec20aee84bf4657efa3832bb5a4ab9",\n   .\n   .\n   .\n  "txid": "e686fe8317b416c474f1f4985c0138746e07987500ac694de8b9bd19eda20072",\n  "type": "claim",\n  "value": {\n   "languages": [\n    "en"\n   ],\n   "license": "Public Domain",\n   "release_time": "1617295323",\n   "source": {\n    "hash": "a6ff0d82557ecc5e16fb75d0ea8e0f010b93dfee43ddf0d820543967ed126d83596380babaf255519f1f0a677793acdc",\n    "media_type": "text/markdown",\n    "name": "post.md",\n    "sd_hash": "38ce95698f7eea4306071c865b4af81bc76bdc8664055560b020c667d815eaa11a83eecc1e72632fee4a8b4e5693c90a",\n    "size": "9938"\n   },\n   "stream_type": "document",\n   "tags": [\n    "blockchain",\n    "mining",\n    "monero",\n    "raspberry pi",\n    "xmr"\n   ],\n   "thumbnail": {\n    "url": "https://spee.ch/a/2eef8b272d343bbf.jpg"\n   },\n   "title": "Ultimate Guide For Monero Mining with Raspberry Pi"\n  },\n  "value_type": "stream"\n }\n}\n')),(0,l.kt)("h3",{id:"adding-new-content"},"Adding new content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --header "Content-Type: application/json" --data \'{ "method": "publish", "params": { "name": "test", "file_path": "/home/mlibre/Downloads/tree.jpg", "bid": "0.001", "metadata": { "description": "Check out this test", "title": "test", "languages": "en", "license": "Public Domain", "tags": [] }}}\' http://localhost:5279\n\ncurl --header "Content-Type: application/json" --data \'{"method":"publish","params":{"name":"flower","title":"Flora, Bloom","description":"Flora, Bloom, Flower","locations":[],"bid":"0.00100000","languages":["en"],"tags":["flower","bloom","flora","nature"],"thumbnail_url":"https://spee.ch/2/06afc05c4adeca74.jpg","blocking":true,"preview":false,"license":"Public Domain","release_time":1617809791,"channel_id":"61514a4f83bb8671f6fcdb70fcf81fb3ce31e1dc","file_path":"/home/mlibre/Downloads/tree.jpg"}\' http://localhost:5279\n')),(0,l.kt)("h3",{id:"tipping-something"},"Tipping something"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --header "Content-Type: application/json" --data \'{ "method": "support_create", "params": { "amount": "0.001", "claim_id": "@mlibre#e2b347558eec20aee84bf4657efa3832bb5a4ab9", "--tip" }}\' http://localhost:5279\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lbry.tech/spec"},"https://lbry.tech/spec"))),(0,l.kt)("h2",{id:"my-lbc-wallet-address"},"My LBC Wallet Address"),(0,l.kt)("p",null,"bSbZzpNRSn6cPpc6nua6S9cCSckH4W72PD"))}d.isMDXComponent=!0}}]);