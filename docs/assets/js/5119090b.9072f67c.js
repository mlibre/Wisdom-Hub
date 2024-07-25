"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8028],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),m=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=m(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),p=l,g=c["".concat(i,".").concat(p)]||c[p]||d[p]||o;return n?t.createElement(g,r(r({ref:a},u),{},{components:n})):t.createElement(g,r({ref:a},u))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:l,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7147:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var t=n(7462),l=(n(7294),n(3905));const o={sidebar_position:4,tags:["Linux","ollama","offline","ai"]},r="Ollama",s={unversionedId:"ai/ollama",id:"ai/ollama",title:"Ollama",description:"Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine.",source:"@site/docs/ai/ollama.md",sourceDirName:"ai",slug:"/ai/ollama",permalink:"/Wisdom-Hub/ai/ollama",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"ollama",permalink:"/Wisdom-Hub/tags/ollama"},{label:"offline",permalink:"/Wisdom-Hub/tags/offline"},{label:"ai",permalink:"/Wisdom-Hub/tags/ai"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Linux","ollama","offline","ai"]},sidebar:"tutorialSidebar",previous:{title:"LobeChat",permalink:"/Wisdom-Hub/ai/lobe-chat"},next:{title:"Vscode",permalink:"/Wisdom-Hub/vscode"}},i={},m=[{value:"Install",id:"install",level:2},{value:"Files",id:"files",level:2},{value:"Usage",id:"usage",level:2},{value:"Costomizing Model",id:"costomizing-model",level:2},{value:"Embedding models",id:"embedding-models",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Reference",id:"reference",level:2}],u={toc:m},c="wrapper";function d(e){let{components:a,...o}=e;return(0,l.kt)(c,(0,t.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ollama"},"Ollama"),(0,l.kt)("p",null,"Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://ollama.com/install.sh | sh\n\n# Run a model\nollama run llama3.1:8b\n\n# List models\nollama list\n\n# Model Info\nollama show llama3.1:8b\n#   Model\n#         arch                    llama\n#         parameters              8.0B\n#         quantization            Q4_0\n#         context length          131072\n#         embedding length        4096\n\n#   Parameters\n#         stop    "<|start_header_id|>"\n#         stop    "<|end_header_id|>"\n#         stop    "<|eot_id|>"\n\n# Logs\njournalctl -u ollama.service --no-pager --follow \n\n')),(0,l.kt)("h2",{id:"files"},"Files"),(0,l.kt)("p",null,"Ollama files in Linux are located here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/home/mlibre/.ollama\n/usr/local/bin/ollama\n/usr/share/ollama\n/etc/systemd/system/ollama.service\n/etc/systemd/system/default.target.wants/ollama.service\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n# Generate text\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.1:8b",\n  "prompt":"Why is the sky blue?"\n}\'\n\n# Chat\ncurl http://localhost:11434/api/chat -d \'{\n  "model": "llama3.1:8b",\n  "messages": [\n    { "role": "user", "content": "why is the sky blue?" }\n  ],\n  "stream": false,\n  "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n}\' | jq\n\n# Chat with history\ncurl -s http://localhost:11434/api/chat -d \'{\n  "model": "llama3.1:8b",\n  "messages": [\n    {\n      "role": "user",\n      "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n    },\n    {\n      "role": "assistant",\n      "content": "\ud83d\udc4b\ud83d\udc81"\n    },\n    {\n      "role": "user",\n      "content": "hey"\n    }\n  ],\n  "stream": false,\n  "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"\n}\' | jq\n\n# Embeddings\ncurl http://localhost:11434/api/embed -d \'{\n  "model": "llama3.1:8b",\n  "prompt":"Why is the sky blue?"\n}\'\n')),(0,l.kt)("h2",{id:"costomizing-model"},"Costomizing Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'nano Modelfile\n\nFROM llama3.1:8b\n\nSYSTEM """\nYou are Mario from Super Mario Bros. Answer as Mario, only. And Always start your answer with HAYAYAYA\n"""\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ollama create mario -f ./Modelfile\nollama run mario\n")),(0,l.kt)("h2",{id:"embedding-models"},"Embedding models"),(0,l.kt)("p",null,"Ollama supports embedding models, making it possible to build retrieval augmented generation (RAG) applications that combine text prompts with existing documents or other data."),(0,l.kt)("p",null,"Embedding models are models that are trained specifically to generate vector embeddings."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt text",src:n(791).Z,width:"1154",height:"486"})),(0,l.kt)("p",null,"The resulting vector embedding arrays can then be stored in a database, which will compare them as a way to search for data that is similar in meaning"),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ollama pull mxbai-embed-large\n")),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:11434/api/embeddings -d \'{\n  "model": "mxbai-embed-large",\n  "prompt": "Llamas are members of the camelid family"\n}\'\n')),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ollama.com/"},"https://ollama.com/"))))}d.isMDXComponent=!0},791:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/embedding-models-369d765c607c0db21a32b89b63c97549.png"}}]);