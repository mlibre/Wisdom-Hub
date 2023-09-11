"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),k=a,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,tags:["Linux","access control","permissions"]},o="Access",p={unversionedId:"linux/access",id:"linux/access",title:"Access",description:"whoami, id, groups, users",source:"@site/docs/linux/access.md",sourceDirName:"linux",slug:"/linux/access",permalink:"/Wisdom-Hub/linux/access",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"access control",permalink:"/Wisdom-Hub/tags/access-control"},{label:"permissions",permalink:"/Wisdom-Hub/tags/permissions"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Linux","access control","permissions"]},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/Wisdom-Hub/linux/"},next:{title:"Disk",permalink:"/Wisdom-Hub/linux/disk-file"}},s={},l=[{value:"whoami, id, groups, users",id:"whoami-id-groups-users",level:2},{value:"chmod",id:"chmod",level:2},{value:"chown, chgrp, newgrp",id:"chown-chgrp-newgrp",level:2},{value:"SUID, GUID",id:"suid-guid",level:2},{value:"Sticky bit",id:"sticky-bit",level:2}],d={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access"},"Access"),(0,a.kt)("h2",{id:"whoami-id-groups-users"},"whoami, id, groups, users"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"whoami")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Print current user's name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Print user and group information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"groups")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Print group memberships")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"groups username")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Show groups for a specific user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"users")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Show a list of all logged-in users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"cat /etc/passwd")),(0,a.kt)("td",{parentName:"tr",align:"center"},"information about system users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"cat /etc/group")),(0,a.kt)("td",{parentName:"tr",align:"center"},"information about groups")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"cat /etc/shadow")),(0,a.kt)("td",{parentName:"tr",align:"center"},"encrypted password hashes for user accounts")))),(0,a.kt)("h2",{id:"chmod"},"chmod"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change file permissions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod +x file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Add execute permission to a file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod -w file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Remove write permission from a file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod 644 file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Set read and write for owner, read for group and others")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod -R 755 dir")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Recursively set permission")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod u=rwx,g=rx,o=rx file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Set specific permissions for user, group, and others")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod +s executable")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Set the setuid/setgid bit on an executable (advanced permission)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod a=-r file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Remove read permission for all (owner, group, and others)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chmod -x $(find /path -type f)")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Remove execute permission from all files in a directory and its subdirectories")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"a+x will set all the x bits of the file\n+x will set all the x bits of the file that are not present in the umask")),(0,a.kt)("h2",{id:"chown-chgrp-newgrp"},"chown, chgrp, newgrp"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chown")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change file owner and group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chown user:group file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change the owner and group of a file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chown -R user:group directory")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Recursively change the owner and group of a directory and its contents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chown -c user:group file")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change the ownership, show a message if the ownership changes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chgrp")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change group ownership of files and directories.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chgrp groupname file.txt")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change the group ownership of ",(0,a.kt)("inlineCode",{parentName:"td"},"file.txt")," to ",(0,a.kt)("inlineCode",{parentName:"td"},"groupname"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chgrp -R groupname /path/to/directory")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Recursively change group ownership to ",(0,a.kt)("inlineCode",{parentName:"td"},"groupname"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"chgrp --reference=file.txt test.txt")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change group ownership of ",(0,a.kt)("inlineCode",{parentName:"td"},"test.txt")," to match that of ",(0,a.kt)("inlineCode",{parentName:"td"},"file.txt"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"newgrp")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Change your effective group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"newgrp staff")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Switch to the 'staff' group")))),(0,a.kt)("h2",{id:"suid-guid"},"SUID, GUID"),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"SUID")," permission is set on an executable file, it means that when a regular user runs that executable, it will run with the permissions of the file's owner instead of the user who is executing it.  "),(0,a.kt)("p",null,"when any user executes the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/passwd")," command, it runs with the elevated permissions of the ",(0,a.kt)("strong",{parentName:"p"},"root")," user. This is necessary because changing a user's password requires write access to the ",(0,a.kt)("strong",{parentName:"p"},"/etc/shadow")," file, which is typically only accessible by the ",(0,a.kt)("strong",{parentName:"p"},"root")," user for security reasons."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"/etc/shadow")," file is owned by the root user and has restrictive permissions (e.g., ",(0,a.kt)("strong",{parentName:"p"},"readable")," and ",(0,a.kt)("strong",{parentName:"p"},"writable")," ",(0,a.kt)("strong",{parentName:"p"},"only")," by the ",(0,a.kt)("strong",{parentName:"p"},"root")," user). This means ",(0,a.kt)("inlineCode",{parentName:"p"},"regular")," users do not have the necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"permissions")," to modify the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /usr/bin/passwd \n-rwsr-xr-x 1 root root 51552 Jan 25  2023 /usr/bin/passwd\n")),(0,a.kt)("h2",{id:"sticky-bit"},"Sticky bit"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sticky bit")," on a directory ensures that only the owner of a file within that directory (or the superuser) can ",(0,a.kt)("strong",{parentName:"p"},"delete")," or ",(0,a.kt)("strong",{parentName:"p"},"rename")," that file, even if ",(0,a.kt)("strong",{parentName:"p"},"others")," have ",(0,a.kt)("strong",{parentName:"p"},"write")," permissions on the directory."),(0,a.kt)("p",null,"Imagine you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," directory on a Linux system with the ",(0,a.kt)("inlineCode",{parentName:"p"},"sticky bit set"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +t /tmp\n")),(0,a.kt)("p",null,"In this setup:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alice can delete files she creates in ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp")),(0,a.kt)("li",{parentName:"ul"},"Bob can delete files he creates in ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp")),(0,a.kt)("li",{parentName:"ul"},"Other users cannot delete files created by Alice or Bob in ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp"),", enhancing file security in shared directories like ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp"))))}c.isMDXComponent=!0}}]);