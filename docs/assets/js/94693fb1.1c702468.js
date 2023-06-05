"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:5,tags:["Docusaurus"]},o="Docusaurus",u={unversionedId:"docusaurus",id:"docusaurus",title:"Docusaurus",description:"Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation.",source:"@site/docs/docusaurus.md",sourceDirName:".",slug:"/docusaurus",permalink:"/cheat-sheet/docusaurus",draft:!1,tags:[{label:"Docusaurus",permalink:"/cheat-sheet/tags/docusaurus"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["Docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"Raspberry pi",permalink:"/cheat-sheet/raspberry pi"},next:{title:"Vscode cheat sheet",permalink:"/cheat-sheet/vscode"}},i={},c=[{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run",id:"run",level:2},{value:"Github Actions",id:"github-actions",level:2},{value:"Resources",id:"resources",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,a.kt)("p",null,"Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation.",(0,a.kt)("br",{parentName:"p"}),"\n","It provides out-of-the-box documentation features but can be used to create any kind of site."),(0,a.kt)("p",null,"\u26a1\ufe0f Docusaurus will help you ship a beautiful documentation site in no time",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udcb8 Building a custom tech stack is expensive. Instead, focus on your content and just write Markdown files",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udca5 Use advanced features like versioning, i18n, search and theme customizations"),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano .gitignore\nnode_modules\n\nnpx create-docusaurus@latest docusaurus classic\ncd website\n\n# npx create-docusaurus@latest --help\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'nano package.json\n"mybuild": "rm -r .docusaurus/; rm -r docs/; rm -rf ../docs; cp -r ../Tutorials docs/; docusaurus build; cp -r build ../docs"\n\nnano docusaurus.config.js\n# Visit https://github.com/mlibre/cheat-sheet/blob/master/website/docusaurus.config.js\n')),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Starts the development server.\nnpm start\n\n# Bundles your website into static files for production into the "build" folder\nnpm run build\n\n# Build  website for github pages\nnpm run mybuild\n\n# Serves the built website locally\nnpm run serve\n\n# Publishes the website to GitHub pages\nnpm deploy\n')),(0,a.kt)("h2",{id:"github-actions"},"Github Actions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir -p .github/workflows\nnano .github/workflows/npm.yml\n\nname: Generate Docs Folder\n\non:\n  push:\n    branches: [\'master\']\n\njobs:\n  build:\n    name: Make Website\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 20.x\n      \n      - name: Build docs\n        working-directory: ./docusaurus\n        run: npm install; npm run mybuild\n\n      - name: Commit and push changes\n        run: |\n          git config --global user.name "mlibre"\n          git config --global user.email "m.gh@linux.com"\n          git config --global core.autocrlf true\n          git add .\n          git commit -m "Build docs"\n          git push\n\n')),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs"},"https://docusaurus.io/docs"))))}d.isMDXComponent=!0}}]);