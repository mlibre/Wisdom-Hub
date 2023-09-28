"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,tags:["Linux","SSH","Port Forwarding"]},s="SSH",i={unversionedId:"network/ssh",id:"network/ssh",title:"SSH",description:"|                     Command                     |                                           Description                                            |",source:"@site/docs/network/ssh.md",sourceDirName:"network",slug:"/network/ssh",permalink:"/Wisdom-Hub/network/ssh",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"SSH",permalink:"/Wisdom-Hub/tags/ssh"},{label:"Port Forwarding",permalink:"/Wisdom-Hub/tags/port-forwarding"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Linux","SSH","Port Forwarding"]},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/Wisdom-Hub/network/"},next:{title:"VPN",permalink:"/Wisdom-Hub/network/vpn"}},l={},d=[{value:"ssh-keygen",id:"ssh-keygen",level:2},{value:"ssh-copy-id",id:"ssh-copy-id",level:2},{value:"SSH Config File",id:"ssh-config-file",level:2},{value:"Local Port Forwarding (-L)",id:"local-port-forwarding--l",level:2},{value:"Remote Port Forwarding (-R)",id:"remote-port-forwarding--r",level:2},{value:"Dynamic Port Forwarding (-D)",id:"dynamic-port-forwarding--d",level:2},{value:"Agent Forwarding (-A)",id:"agent-forwarding--a",level:2},{value:"Jump Hosts (-J)",id:"jump-hosts--j",level:2},{value:"Script to fix ssh and reset to default configs",id:"script-to-fix-ssh-and-reset-to-default-configs",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh"},"SSH"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-L")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Local Port Forwarding, accessing a remote port locally by binding local port to a remote port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -L 8080:localhost:80 user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-R")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Remote Port Forwarding, Open port on remote server that forwards to local port on another server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -R 80:localhost:8080 user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-D")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Dynamic Port Forwarding, Creates a SOCKS proxy that can route traffic through an SSH connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -D 8080 user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-A")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Agent Forwarding - Forwards SSH keys/identities to remote servers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -A user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-J")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Jump Hosts - Proxy through multiple hosts to reach a destination.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -J user@host1,user@host2 user@destination")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-N")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Do not execute a remote command. Useful for just forwarding ports.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -N -L 8080:localhost:80 user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-f")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Requests ssh to go to background just before command execution")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -f user@remote command")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-v")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Verbose mode. Multiple -v options increase the verbosity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -v user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-X")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Enables X11 forwarding, allowing graphical applications to be run remotely")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ssh -X user@remote")),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"ssh-keygen"},"ssh-keygen"),(0,a.kt)("p",null,"SSH key pairs are essential for secure authentication. To generate an SSH key pair, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command. This command generates both a private key (usually stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),") and a public key (stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub"),")."),(0,a.kt)("p",null,"To generate a new key pair, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")),(0,a.kt)("h2",{id:"ssh-copy-id"},"ssh-copy-id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ssh-copy-id -i .ssh/id_rsa.pub -p 22 mlibre@192.168.1.136\n")),(0,a.kt)("h2",{id:"ssh-config-file"},"SSH Config File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/.ssh/config\n\nhost funserver\n  User mlibre\n  IdentityFile /home/mlibre/.ssh/id_rsa\n  Port 2222\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh funserver\n")),(0,a.kt)("h2",{id:"local-port-forwarding--l"},"Local Port Forwarding (-L)"),(0,a.kt)("p",null,"Allows accessing a remote port locally by binding a local port to a remote port. Useful for accessing services only available on loopback."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -N -f -L 1337:127.0.0.1:80 root@internal-web.int\n")),(0,a.kt)("h2",{id:"remote-port-forwarding--r"},"Remote Port Forwarding (-R)"),(0,a.kt)("p",null,"Opens a port on a remote server that forwards to a local port on another server. Useful for pivoting through networks."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -N -f -R 3000:127.0.0.1:80 root@vuln-server.int\n")),(0,a.kt)("h2",{id:"dynamic-port-forwarding--d"},"Dynamic Port Forwarding (-D)"),(0,a.kt)("p",null,"Creates a SOCKS proxy that can route traffic through an SSH connection. Useful for proxying web traffic."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -N -f -D 8080 root@vuln-server.int\nssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80\n")),(0,a.kt)("h2",{id:"agent-forwarding--a"},"Agent Forwarding (-A)"),(0,a.kt)("p",null,"Forwards SSH keys/identities to remote servers. Can be risky if keys have high privileges."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -A -J root@vuln-server.int root@internal-web.int\n")),(0,a.kt)("h2",{id:"jump-hosts--j"},"Jump Hosts (-J)"),(0,a.kt)("p",null,"Proxy through multiple hosts to reach a destination."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -J root@host1,root@host2 root@destination\n")),(0,a.kt)("h2",{id:"script-to-fix-ssh-and-reset-to-default-configs"},"Script to fix ssh and reset to default configs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nnew_config="\nPort 22\nAddressFamily any\nListenAddress 0.0.0.0\n\nSyslogFacility AUTH\nLogLevel INFO\n\nPermitRootLogin yes\nPubkeyAuthentication yes\n\nPasswordAuthentication yes\n\nUsePAM yes\n\nX11Forwarding yes\n\nSubsystem       sftp    /usr/lib/ssh/sftp-server\nMaxSessions 1000\n"\n\n# Backup the existing SSH server configuration\nsudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup\n\n# Write the new configuration to the SSH server config file\necho "$new_config" | sudo tee /etc/ssh/sshd_config > /dev/null\n\necho "SSH server configuration has been replaced."\nsudo ufw disable\nsudo iptables -F\nsudo mv /etc/hosts.deny /etc/hosts.deny_backup\nsudo touch /etc/hosts.deny\nsudo systemctl enable sshd\nsudo systemctl restart sshd\n\n# User creation\nnew_username="mlibre"\nnew_password="password"\n\nsudo useradd -m -s /bin/bash "$new_username"\necho "$new_username:$new_password" | sudo chpasswd\n\n# Add your public key to the new user\'s authorized_keys file\nyour_public_key="your ssh public key"\n\nsudo mkdir -p /home/"$new_username"/.ssh\necho "$your_public_key" | sudo tee -a /home/"$new_username"/.ssh/authorized_keys > /dev/null\nsudo chown -R "$new_username":"$new_username" /home/"$new_username"/.ssh\nsudo chmod 700 /home/"$new_username"/.ssh\nsudo chmod 600 /home/"$new_username"/.ssh/authorized_keys\n\necho "Your public key has been added to the authorized_keys file of user $new_username."\n\necho "$new_username ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/"$new_username" > /dev/null\n\necho "$new_username - maxlogins 1000" | sudo tee -a /etc/security/limits.conf > /dev/nulls\necho "fs.file-max = 65535" | sudo tee -a /etc/sysctl.conf > /dev/null\n')))}m.isMDXComponent=!0}}]);