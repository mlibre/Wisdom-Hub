"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:13,tags:["Linux","shell","bash","zsh","script"]},l="Shell",i={unversionedId:"linux/shell",id:"linux/shell",title:"Shell",description:"Command types",source:"@site/docs/linux/shell.md",sourceDirName:"linux",slug:"/linux/shell",permalink:"/Wisdom-Hub/linux/shell",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"shell",permalink:"/Wisdom-Hub/tags/shell"},{label:"bash",permalink:"/Wisdom-Hub/tags/bash"},{label:"zsh",permalink:"/Wisdom-Hub/tags/zsh"},{label:"script",permalink:"/Wisdom-Hub/tags/script"}],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,tags:["Linux","shell","bash","zsh","script"]},sidebar:"tutorialSidebar",previous:{title:"Editor",permalink:"/Wisdom-Hub/linux/editor"},next:{title:"process",permalink:"/Wisdom-Hub/linux/processes"}},s={},c=[{value:"Command types",id:"command-types",level:2},{value:"Bash",id:"bash",level:2},{value:"Prompt Shell",id:"prompt-shell",level:3},{value:"Case-insensitive auto completion",id:"case-insensitive-auto-completion",level:3},{value:"Simple Bash Scripts",id:"simple-bash-scripts",level:2},{value:"Mouse location",id:"mouse-location",level:3},{value:"Get screen resolution",id:"get-screen-resolution",level:3},{value:"Click, Move and scroll on the screen",id:"click-move-and-scroll-on-the-screen",level:3},{value:"zsh",id:"zsh",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shell"},"Shell"),(0,r.kt)("h2",{id:"command-types"},"Command types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"type ls\n# ls is an alias for ls $LS_OPTIONS\n\ntype ssh\n# ssh is /usr/bin/ssh\n")),(0,r.kt)("h2",{id:"bash"},"Bash"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:"center"},"View current environment vars")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"VAR_NAME=val")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"VAR_NAME")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"val"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"export VAR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Make var available to child procs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $VAR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display value of ",(0,r.kt)("inlineCode",{parentName:"td"},"VAR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $PATH")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display value of ",(0,r.kt)("inlineCode",{parentName:"td"},"PATH"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $HOME")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display user's home directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $EDITOR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display default text editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $HISTFILE")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display command history file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $SHELL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display default shell program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $USER")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display current username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $?")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display last command exit status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $PS1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display the shell prompt")))),(0,r.kt)("h3",{id:"prompt-shell"},"Prompt Shell"),(0,r.kt)("p",null,"Display your current prompt shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo $PS1\n")),(0,r.kt)("p",null,"My simple prompt shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PS1=\'$(if [ $? -eq 0 ]; then echo -e "\\[\\033[42m\\] \\[\\033[0m\\]"; else echo -e "\\[\\033[41m\\] \\[\\033[0m\\]"; fi) \\[\\033[1;32m\\]$(if [ $(jobs | wc -l) -gt 0 ]; then echo -n "\\j "; fi)\\[\\033[1;36m\\]\\u\\[\\033[0m\\] \\[\\033[1;33m\\]\\w\\[\\033[0m\\] \'\n')),(0,r.kt)("p",null,"Make it permanent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano .bashrc\n# put your PS1 in the last line\n")),(0,r.kt)("h3",{id:"case-insensitive-auto-completion"},"Case-insensitive auto completion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion\necho 'set completion-ignore-case On' | sudo tee -a /etc/inputrc\n\n# or as root\necho 'set completion-ignore-case On' >> /etc/inputrc \n\n# or for current user only\necho \"set completion-ignore-case on\" >> ~/.inputrc\n")),(0,r.kt)("h2",{id:"simple-bash-scripts"},"Simple Bash Scripts"),(0,r.kt)("h3",{id:"mouse-location"},"Mouse location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"while true; do\n  sleep 2\n  xdotool getmouselocation\ndone\n")),(0,r.kt)("h3",{id:"get-screen-resolution"},"Get screen resolution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RES=$(xdpyinfo | grep dimensions | awk '{print $2}')\nWIDTH=$(echo $RES | awk -Fx '{print $1}')\nHEIGHT=$(echo $RES | awk -Fx '{print $2}')\n")),(0,r.kt)("h3",{id:"click-move-and-scroll-on-the-screen"},"Click, Move and scroll on the screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Usage: ./click2.bash 3 30\n\n# Check for two arguments\nif [[ $# -ne 3 ]]; then\n echo "Usage: $0 <mouse idle time in seconds> <sleep time in each loop> <specific action each Nth time>"\n exit 1\nfi\n\nmousemoveAndClick() {\n # Move the mouse to the specified coordinates\n xdotool mousemove $1 $2\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\nscroll() {\n local direction=$1\n local count=$2\n if [[ $direction == "up" ]]; then\n  for i in $(seq 1 $count); do\n   xdotool click 4\n   sleep 0.5\n  done    \n elif [[ $direction == "down" ]]; then\n  for i in $(seq 1 $count); do   \n   xdotool click 5 \n   sleep 0.5\n  done\n fi\n}\n\nremove_esc() {\n # Move the mouse to the specified coordinates\n xdotool mousemove 1575 572\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\npress_esc_and_click() {\n # Press ESC\n xdotool key Escape\n # Sleep for 1 second\n sleep 1\n # mouse click\n xdotool click 1\n remove_esc\n}\n\n\n\nbuy() {\n # Move the mouse to the specified coordinates\n xdotool mousemove 1556 1230\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\ncounter=0\n# Get the idle time in milliseconds\nIDLE_TIME=$(echo "$1 * 1000" | bc)\n\nwhile true; do\n # Get the current idle time of the mouse pointer in milliseconds\n IDLE=$(xprintidle)\n\n # Check if the mouse has been idle for at least the specified time\n if [[ $IDLE -ge $IDLE_TIME ]]; then\n   \n  ((counter++))\n  echo "Increasing $counter"\n\n  # Boss\n  mousemoveAndClick 34 393\n  press_esc_and_click\n  \n  # top left\n  mousemoveAndClick 1173 647\n  buy\n\n  if [[ $((counter % $3)) -eq 0 ]]; then\n   scroll "down" 40\n  fi\n fi\n\n # Sleep for specified time\n sleep $2\ndone\n')),(0,r.kt)("p",null,"And run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x click.sh\n./click.sh 1 30 50\n")),(0,r.kt)("h2",{id:"zsh"},"zsh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S zsh\n")))}d.isMDXComponent=!0}}]);