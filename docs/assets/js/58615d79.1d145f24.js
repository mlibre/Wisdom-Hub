"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Using MetaMask",tags:["MetaMask","Ethereum"]},i="Connecting To MetaMask Browser Extension and Injecting Web3",s={unversionedId:"blockchain/Tutorials/Ethereum/MetaMask/readme",id:"blockchain/Tutorials/Ethereum/MetaMask/readme",title:"Using MetaMask",description:"You can find the codes and files in the Github repo.",source:"@site/docs/blockchain/Tutorials/Ethereum/MetaMask/readme.md",sourceDirName:"blockchain/Tutorials/Ethereum/MetaMask",slug:"/blockchain/Tutorials/Ethereum/MetaMask/",permalink:"/cheat-sheet/blockchain/Tutorials/Ethereum/MetaMask/",draft:!1,tags:[{label:"MetaMask",permalink:"/cheat-sheet/tags/meta-mask"},{label:"Ethereum",permalink:"/cheat-sheet/tags/ethereum"}],version:"current",frontMatter:{title:"Using MetaMask",tags:["MetaMask","Ethereum"]},sidebar:"tutorialSidebar",previous:{title:"ERC-721 From Scratch",permalink:"/cheat-sheet/blockchain/Tutorials/Ethereum/ERC721/"},next:{title:"Crowd Funding With Deadline Contract",permalink:"/cheat-sheet/blockchain/Tutorials/Ethereum/More Simple Smart Contracts/crowd-funding-using-library/"}},c={},l=[],u={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-to-metamask-browser-extension-and-injecting-web3"},"Connecting To MetaMask Browser Extension and Injecting Web3"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find the ",(0,a.kt)("strong",{parentName:"p"},"codes")," and ",(0,a.kt)("strong",{parentName:"p"},"files")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Ethereum/MetaMask"},(0,a.kt)("inlineCode",{parentName:"a"},"in the Github repo")),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"index.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n\n<head>\n <meta charset="utf-8">\n <title>Untitled Document</title>\n <script src="https://code.jquery.com/jquery-3.6.0.min.js"\n  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"><\/script>\n <script src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"><\/script>\n <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.0/web3.min.js"\n  integrity="sha512-+BhnLgfzIDDjssoEWHPmdgWRvbwIEdj0Xfiys7uSqfQWpMEOJ4ymJ88O6B1cB0j+4zjb5GhO+sb/kEicggvUQQ=="\n  crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n <script src="./index.js"><\/script>\n</head>\n\n<body>\n</body>\n\n</html>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"index.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/* eslint-disable no-undef */\n\n$(window).on("load", async function() {\n const provider = await detectEthereumProvider()\n if (typeof window.ethereum !== "undefined")\n {\n  console.log("MetaMask is installed!")\n  if (provider) {\n   if (provider !== window.ethereum) {\n    console.error("Do you have multiple wallets installed?")\n   }\n   else\n   {\n    console.log("MetaMask is ready")\n    const accounts = await ethereum.request({ method: "eth_requestAccounts" })\n    const account = accounts[0]\n    const chainId = await ethereum.request({ method: "eth_chainId" })\n    console.log(chainId, accounts, account)\n    \n    window.web3 = new Web3(window.ethereum)\n   }\n  }\n  else {\n   console.log("Please install MetaMask!")\n  }\n }\n else \n {\n  console.log("MetaMask is not installed!")\n }\n})\n')))}p.isMDXComponent=!0}}]);