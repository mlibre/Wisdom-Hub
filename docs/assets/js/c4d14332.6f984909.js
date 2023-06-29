"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="Crowd Funding With Deadline Contract",l={unversionedId:"blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-with-deadline/readme",id:"blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-with-deadline/readme",title:"Crowd Funding With Deadline Contract",description:"Simple Crowd Funding Contract. Allows to create and manage a crowdfunding campaign.",source:"@site/docs/blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-with-deadline/readme.md",sourceDirName:"blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-with-deadline",slug:"/blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-with-deadline/",permalink:"/cheat-sheet/blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-with-deadline/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Crowd Funding With Deadline Contract",permalink:"/cheat-sheet/blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-using-library/"},next:{title:"Multi Signature Wallet",permalink:"/cheat-sheet/blockchain/Tutorials/Ethereum/More Simple Smart Contracts/multi-sig-wallet/"}},c={},u=[{value:"Compiling SCs using solcjs",id:"compiling-scs-using-solcjs",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crowd-funding-with-deadline-contract"},"Crowd Funding With Deadline Contract"),(0,a.kt)("p",null,"Simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Crowd Funding")," Contract. Allows to create and manage a crowdfunding campaign."),(0,a.kt)("h1",{id:"installation-and-running"},"Installation and running"),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"ganache")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\nnode main.js\n")),(0,a.kt)("h2",{id:"compiling-scs-using-solcjs"},"Compiling SCs using solcjs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"solcjs crowd-funding-with-deadline.sol -o ./bin/ --pretty-json --optimize  --abi --bin\n")))}p.isMDXComponent=!0}}]);