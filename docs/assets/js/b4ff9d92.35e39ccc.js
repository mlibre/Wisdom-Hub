"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||b[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,tags:["Linux","python","ai"]},o="Python",p={unversionedId:"ai/python-for-ai",id:"ai/python-for-ai",title:"Python",description:"Install",source:"@site/docs/ai/python-for-ai.md",sourceDirName:"ai",slug:"/ai/python-for-ai",permalink:"/Wisdom-Hub/ai/python-for-ai",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"python",permalink:"/Wisdom-Hub/tags/python"},{label:"ai",permalink:"/Wisdom-Hub/tags/ai"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Linux","python","ai"]},sidebar:"tutorialSidebar",previous:{title:"AI",permalink:"/Wisdom-Hub/ai/"},next:{title:"Geenrative AI",permalink:"/Wisdom-Hub/ai/generative ai"}},l={},s=[{value:"Install",id:"install",level:2},{value:"Jupyter Notebook",id:"jupyter-notebook",level:2},{value:"Concepts",id:"concepts",level:2},{value:"String",id:"string",level:3},{value:"Numbers",id:"numbers",level:3},{value:"Lists",id:"lists",level:3},{value:"Arrays",id:"arrays",level:3}],u={toc:s},c="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python"},"Python"),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S python\npython --version\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Libraries and Executable path:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nprint ('\\n'.join(sys.path))\nprint (sys.executable)\n\n# /usr/lib/python312.zip\n# /usr/lib/python3.12\n# /usr/lib/python3.12/lib-dynload\n# /home/mlibre/.local/lib/python3.12/site-packages\n# /usr/lib/python3.12/site-packages\n# /usr/bin/python\n")),(0,a.kt)("h2",{id:"jupyter-notebook"},"Jupyter Notebook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notebook --break-system-packages\njupyter notebook\n")),(0,a.kt)("p",null,"You can also open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/tree")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/lab")),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"string"},"String"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'text = "abcd"\nprint ("thank :) %s" % text) # abcd\nprint (f"thank :) {text[0:3]}") # abc\nprint (f\'\'\'thanks\n:)\n{text[1:]} # bcd\n{text[-1]} # d\n\'\'\')\n\ntext2 = "pi is {pi:.2f}"\nprint(text2.format(pi = 3.144444)) # pi is 3.14\n\ntext3 = "pi is {0} or {1}"\nprint(text3.format(3.14, 3)) # pi is 3.14 or 3\n\ntext4 = "a big number {:,.3f}"\nprint(text4.format(3000.14567)) # a big number 3,000.146\n')),(0,a.kt)("h3",{id:"numbers"},"Numbers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"piString = \"3.14\"\npi = float(piString) # 3.14\nb = int(pi) # 3\nprint(f'''\nMultiplication: {pi * b}\nDivision: {pi / b}\nFloor division: {pi // b}\nModulus: {pi % b}\nExponentiation: {pi ** b}\n''')\n")),(0,a.kt)("h3",{id:"lists"},"Lists"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"mixed = [\"apple\", 2, 3.5, True]\nmixed.append(\"orange\")\nmixed.remove(3.5)\nprint(mixed) # ['apple', 2, True, 'orange']\n\nsquares = [x ** 2 for x in range(10)]\nprint(squares) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n")),(0,a.kt)("h3",{id:"arrays"},"Arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"myArray = [1, 2, 3, 4, 5]\nmyArray[0]\n")))}b.isMDXComponent=!0}}]);