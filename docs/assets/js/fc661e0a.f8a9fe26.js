"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4909],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},d=Object.keys(t);for(n=0;n<d.length;n++)a=d[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(n=0;n<d.length;n++)a=d[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,d=t.originalType,l=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,u=s["".concat(l,".").concat(c)]||s[c]||k[c]||d;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var d=a.length,i=new Array(d);i[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<d;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6665:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const d={sidebar_position:2,tags:["Linux","Backup","Disk","Rsync","Restore","ln","mount","dd"]},i="Disk",o={unversionedId:"linux/disk-file",id:"linux/disk-file",title:"Disk",description:"fdisk, gdisk, parted, mkfs, mkswap, lsblk",source:"@site/docs/linux/disk-file.md",sourceDirName:"linux",slug:"/linux/disk-file",permalink:"/Wisdom-Hub/linux/disk-file",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"Backup",permalink:"/Wisdom-Hub/tags/backup"},{label:"Disk",permalink:"/Wisdom-Hub/tags/disk"},{label:"Rsync",permalink:"/Wisdom-Hub/tags/rsync"},{label:"Restore",permalink:"/Wisdom-Hub/tags/restore"},{label:"ln",permalink:"/Wisdom-Hub/tags/ln"},{label:"mount",permalink:"/Wisdom-Hub/tags/mount"},{label:"dd",permalink:"/Wisdom-Hub/tags/dd"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Linux","Backup","Disk","Rsync","Restore","ln","mount","dd"]},sidebar:"tutorialSidebar",previous:{title:"Access",permalink:"/Wisdom-Hub/linux/access"},next:{title:"Systemd",permalink:"/Wisdom-Hub/linux/systemd"}},l={},p=[{value:"fdisk, gdisk, parted, mkfs, mkswap, lsblk",id:"fdisk-gdisk-parted-mkfs-mkswap-lsblk",level:2},{value:"df, du, fsck, tune2fs",id:"df-du-fsck-tune2fs",level:2},{value:"mount, umount",id:"mount-umount",level:2},{value:"ln",id:"ln",level:2},{value:"rsync",id:"rsync",level:2},{value:"dd",id:"dd",level:2},{value:"Backup using locate",id:"backup-using-locate",level:2}],m={toc:p},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"disk"},"Disk"),(0,r.kt)("h2",{id:"fdisk-gdisk-parted-mkfs-mkswap-lsblk"},"fdisk, gdisk, parted, mkfs, mkswap, lsblk"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"lsblk -af")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all devices + empty ones with infomration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo blkid -o list")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List devices in a machine-readable format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"blkid /dev/sda1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Retrieve information about /dev/sda1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fdisk -l")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List partitions on all disks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fdisk -l /dev/sdb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List partitions on /dev/sdb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fdisk /dev/sda")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Launch fdisk for /dev/sda")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"gdisk")),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPT disk partitioning utility")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo gdisk /dev/sda")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Launch gdisk for /dev/sda")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"parted")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Disk partitioning tool with more features")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo parted /dev/sda")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Launch parted for /dev/sda")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mkfs.ext4 /dev/sdb1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create an ext4 file system on /dev/sdb1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mkfs -t ntfs /dev/sdd1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create a VFAT File System on /dev/sdd1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo mkswap /dev/sdc1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create swap on /dev/sdc1")))),(0,r.kt)("h2",{id:"df-du-fsck-tune2fs"},"df, du, fsck, tune2fs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"du -sh /path/to/dir")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display disk usage summary for a directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"du -hd 1 /path/to/dir")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display disk usage for each subdirectory in the specified directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"df -h")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display disk space usage for all mounted filesystems in a human-readable format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"df -hiT")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display disk space usage with inodes and file system type included.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fsck /dev/sda1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Check and repair the file system on ",(0,r.kt)("inlineCode",{parentName:"td"},"/dev/sda1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fsck -y /dev/sdb2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Automatically repair the file system on ",(0,r.kt)("inlineCode",{parentName:"td"},"/dev/sdb2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fsck -C /dev/sdc1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display progress while checking and repairing ",(0,r.kt)("inlineCode",{parentName:"td"},"/dev/sdc1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sudo fsck.ext4 -yvfBcD /dev/sda4")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Check and repair ",(0,r.kt)("inlineCode",{parentName:"td"},"/dev/sda4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tune2fs -l /dev/sda1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display detailed filesystem information for /dev/sda1.")))),(0,r.kt)("h2",{id:"mount-umount"},"mount, umount"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"list of currently mounted file systems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mount /dev/sda1 /mnt")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Mounts the partition /dev/sda1 to the /mnt directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mount /dev/sda1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Mounts a device defined in ",(0,r.kt)("inlineCode",{parentName:"td"},"/etc/fstab"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mount -o loop image.iso /mnt/iso")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Mounts an ISO image file as a loop device to the /mnt/iso directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"umount /mnt")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unmounts the file system mounted at /mnt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"umount -l /mnt")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Lazy unmount, detaches the file system only when it's no longer in use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"mount UUID=1...AB /mnt/uuid")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Mounts file system using its UUID to the /mnt/uuid")))),(0,r.kt)("h2",{id:"ln"},"ln"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ln -s source_file link_name")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create a symbolic link to a file or directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ln source_file hard_link_name")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create a hard link to a file")))),(0,r.kt)("h2",{id:"rsync"},"rsync"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-a")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Archive mode (recursive, permissions, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sync recursively")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-e")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Specify the remote shell to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-v")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Verbose output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"--progress")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Show progress during transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-z")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Compress data during transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"--delete")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Delete extraneous files on the receiving side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-A")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Preserve ACLs (Access Control Lists)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-X")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Preserve extended attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-H")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Preserve hard links")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-n")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Perform a dry run")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Backup local directory to another location\nrsync -avz /path/to/source /path/to/destination\n\n# Backup local directory to remote server\nrsync -avz /path/to/local/directory user@remote.server:/path/to/remote/directory\n\n# Backup local directory to remote server, deleting files on remote server if they are deleted locally\nrsync -avz --delete /path/to/local/directory user@remote.server:/path/to/remote/directory\n\n# Create a full backup of the system to an external drive\nsudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*"} / /run/media/mlibre/H/OS/full-copy/\n\n# Backup to a server\nrsync -e "ssh -p 2222" source/ user@host:/destination/\n')),(0,r.kt)("h2",{id:"dd"},"dd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dd")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Copy and convert files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dd if=input of=output bs=block_size")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Copy data from 'input' to 'output' with specified block size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dd if=/dev/zero of=zerofile bs=1M count=100")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create a 100MB zero-filled file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dd if=input of=output bs=512 count=1 skip=2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Copy 512 bytes from 'input' to 'output' starting from byte 1024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dd if=/dev/random of=randomfile bs=1M count=1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Generate a 1MB file filled with random data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dd if=input ","|"," gzip > backup.dd.gzip"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Compress 'input' data using 'gzip' and save as 'backup.dd.gzip'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dd if=ubuntu.iso of=/dev/sdX bs=4M status=progress")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Write 'ubuntu.iso' to a USB drive ('/dev/sdX')")))),(0,r.kt)("h2",{id:"backup-using-locate"},"Backup using locate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tar -czvf backup.tar.gz $(locate x-ui)\nsudo tar -czvf backup.tar.gz $(locate x-ui) /root/\nsudo tar -czvf backup.tar.gz $(locate x-ui) /root/cert /root/cert.crt /root/private.key /root/.acme.sh\n\nsudo tar xvf backup.tar.gz -C / # Extract in root directory\n")))}k.isMDXComponent=!0}}]);