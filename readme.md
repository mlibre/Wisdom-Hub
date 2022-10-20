# Linux Cheat Sheet

Linux Cheat Sheet is a collection of useful commands and shortcuts for Linux.

- [Automatic Shutdown](#automatic-shutdown)
- [Bash case-insensitive auto completion](#bash-case-insensitive-auto-completion)
- [Changing monitor or screen Brightness and Gamma](#changing-monitor-or-screen-brightness-and-gamma)
- [Resetting sound, audio](#resetting-sound-audio)
- [Fixing broken grub](#fixing-broken-grub)
  - [Using proxy](#using-proxy)
- [Performance](#performance)
  - [Disable Linux Watchdogs, compaction and](#disable-linux-watchdogs-compaction-and)
  - [Improve fstab performance](#improve-fstab-performance)
  - [Disabling journaling](#disabling-journaling)
- [XDG](#xdg)
  - [Make a startup script using XDG startup](#make-a-startup-script-using-xdg-startup)
- [Systemd, systemctl](#systemd-systemctl)
  - [Analyzing](#analyzing)
  - [Reloading](#reloading)
  - [Find services failed to start](#find-services-failed-to-start)
  - [Journal Size](#journal-size)
  - [Run a script after suspending has finished (resume)](#run-a-script-after-suspending-has-finished-resume)
  - [Unit files' locations](#unit-files-locations)
- [Autostarts and Startup scripts and programs locations](#autostarts-and-startup-scripts-and-programs-locations)
- [Flush Network settings](#flush-network-settings)
- [Disable IPV6](#disable-ipv6)
- [VPN And Proxy](#vpn-and-proxy)
  - [Initialization](#initialization)
  - [VPN over SSH](#vpn-over-ssh)
  - [SSH Dynamic Tunneling](#ssh-dynamic-tunneling)
  - [v2fly](#v2fly)
    - [Server](#server)
    - [Client](#client)
  - [Open an application using tor over socks](#open-an-application-using-tor-over-socks)
  - [shadowsocks](#shadowsocks)
  - [OpenVpn Server](#openvpn-server)
  - [WireGuard VPN Server](#wireguard-vpn-server)
    - [Server Configuration](#server-configuration)
    - [Peer Configuration](#peer-configuration)
  - [Redirecting the whole traffic](#redirecting-the-whole-traffic)
  - [VPNBook](#vpnbook)
  - [Protonvpn](#protonvpn)
    - [Install](#install)
    - [OpenVpn](#openvpn)
    - [WireGuard](#wireguard)
  - [Hide.me](#hideme)
  - [Windscribe](#windscribe)
- [Font](#font)
  - [Location](#location)
  - [List](#list)
  - [Fira Code](#fira-code)
- [Backup using Rsync](#backup-using-rsync)
- [Vulkan](#vulkan)
- [Dota 2](#dota-2)
  - [Dota 2 Options](#dota-2-options)
  - [Link NTFS game folder](#link-ntfs-game-folder)
  - [Run using proxy](#run-using-proxy)
- [Install Genymotoin Android emulator](#install-genymotoin-android-emulator)
- [Things to do before installing Manjaro/Arch Linux](#things-to-do-before-installing-manjaroarch-linux)
- [Things to do after installing Manjaro/Arch Linux](#things-to-do-after-installing-manjaroarch-linux)
  - [Install AMDGPU-PRO](#install-amdgpu-pro)
  - [Uninstall AMDGPU-PRO](#uninstall-amdgpu-pro)
  - [Blacklist Radeon](#blacklist-radeon)
- [Things to do after installing Windows 11](#things-to-do-after-installing-windows-11)
- [Install a new os on the phone](#install-a-new-os-on-the-phone)
  - [Backup data](#backup-data)
  - [Restore](#restore)
  - [Enable Developer options](#enable-developer-options)
  - [Install odin tools for Samsung >= 3.14](#install-odin-tools-for-samsung--314)
  - [Install samsung driver](#install-samsung-driver)
  - [Install adb](#install-adb)
  - [Download TWRP](#download-twrp)
    - [convert it to .md5](#convert-it-to-md5)
  - [Run Odin as administrator](#run-odin-as-administrator)
  - [Install bluestack](#install-bluestack)

## Tricks

### Automatic Shutdown

```bash
sudo shutdown -P +220 ## in 220 minutes, 3:30 hours
```

### Bash case-insensitive auto completion

```bash
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc
# echo 'set completion-ignore-case On' >> /etc/inputrc # as root
```

### Changing monitor or screen Brightness and Gamma

```bash
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

### Resetting sound, audio

```bash
pulseaudio --kill
pulseaudio --start
```

### Fixing broken grub

> Boot a live Manjaro image

```bash
sudo manjaro-chroot -a
grub-install
update-grub
```

> It will detect your current installed linux.  Restart the computer and it will boot the installed linux.  
Then run:

```bash
update-grub
```

### Using proxy, proxychains

```bash
proxychains yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm"  -S protonvpn
proxychains git clone https://github.com/boypt/vmess2json.git
sudo proxychains npm -g install v2ray-tools
sudo proxychains pacman -Syyuu
```

> proxychains config

```bash
sudo nano /etc/proxychains.conf 
socks5  127.0.0.1 1080
## comment proxy_dns
# proxy_dns
```

## Performance

### Disable Linux Watchdogs, compaction and more

```bash
sudo sh -c "echo 'kernel.nmi_watchdog=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'kernel.watchdog=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'vm.compaction_proactiveness=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'vm.zone_reclaim_mode=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'vm.page_lock_unfairness=1' >> /etc/sysctl.conf"
sudo sysctl -p
```

### Improve fstab performance

```bash
sudo nano /etc/fstab 
UUID=f74c37b2-8a12-4252-90a6-d31504507bcb / ext4  defaults,noatime,commit=60,barrier=0  0 1
```

### Disabling journaling

```bash
sudo tune2fs -f -O "^has_journal" /dev/sda2
```

### Journal Size

```bash
sudo nano /etc/systemd/journald.conf
```

```bash
SystemMaxUse=100M
```

## XDG

### Make a startup script using XDG startup

```bash
nano ~/.config/autostart/gamma_on_startup.desktop
```

```bash
[Desktop Entry]
Name=gamma-on-startup
Type=Application
Exec=bash -c  "/usr/local/bin/gamma_on_startup &> /dev/null" 
Terminal=true
```

```bash
desktop-file-validate ~/.config/autostart/gamma_on_startup.desktop
chmod +x ~/.config/autostart/gamma_on_startup.desktop
```

Example program:

```bash
sudo chmod a+rwx /usr/local/bin/
nano /usr/local/bin/gamma_on_startup

sleep 5
export DISPLAY=:0
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

```bash
sudo chmod a+rwx /usr/local/bin/gamma_on_startup
```

## Systemd, systemctl

### Unit files' locations

```bash
systemctl show --property=UnitPath
```

### Analyzing

```bash
systemd-analyze
systemd-analyze blame

systemctl --state=failed

sudo systemctl list-unit-files --type=service --state=enabled --all
sudo systemctl list-unit-files | grep enabled
```

### Reloading

```bash
systemctl daemon-reload
```

### Run a script after suspending has finished (resume)

```bash
sudo nano /etc/systemd/system/gamma.service
```

```bash
[Unit]
Description=Start Script in terminal
After=suspend.target graphical.target

[Service]
User=mlibre
Type=idle
Environment=DISPLAY=:0
ExecStartPre=/bin/sleep 10
ExecStart=/bin/bash /usr/local/bin/gamma_on_startup

[Install]
WantedBy=suspend.target graphical.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable gamma.service
systemctl status gamma
journalctl -u gamma
```

## Autostarts and Startup scripts and programs locations

- nano .profile
- nano /etc/profile
- ls /etc/profile.d/
- ls ~/.config/autostart
- ls /etc/xdg/autostart
- ls /usr/share/xsessions
- ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
- sudo systemctl list-unit-files --type=service --state=enabled --all
- ls /etc/init.d/
- nano ~/.xinitrc
- nano /etc/X11/xinit/xinitrc
- ls /etc/X11/xinit/xinitrc.d/
- cat ~/.xserverrc
- cat /etc/pam.d/
- ls /etc/xdg/lxsession/LXDE/autostart
- ls ~/.config/lxsession/LXDE/autostart
- crontab -e
- sudo crontab -e

- nano .bash_profile
- nano .bashrc
- nano /etc/bash.bashrc

## Flush Network settings

```bash
sudo killall sslocal; sudo ip link delete tun0;sudo wg-quick down wg0;sudo systemctl daemon-reload;sudo ip route flush table main;sudo iptables --flush;sudo systemctl restart network;sudo systemctl restart NetworkManager;sudo sysctl -p; sudo systemd-resolve --flush-caches; sudo resolvectl flush-caches

sudo systemd-resolve --flush-caches
sudo killall sslocal
sudo resolvectl flush-caches
sudo ip link delete tun0
sudo wg-quick down wg0
sudo systemctl daemon-reload
sudo ip route flush table main
sudo iptables --flush
sudo systemctl restart network
sudo systemctl restart NetworkManager
sudo sysctl -p
```

## Disable IPV6

```bash
sudo nano /etc/sysctl.conf

net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1

sudo sysctl -p 
```

## VPN over SSH

```bash
sudo proxychains pacman -S sshuttle
sudo sshuttle -v -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --dns --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0.0.0.0/0 --dns --disable-ipv6

su
echo "nameserver 8.8.8.8" > /etc/resolv.conf
resolvectl dns enp3s0 1.1.1.1 
resolvectl dns enp1s0f0u6 1.1.1.1
resolvectl dns
```

## VPN, Proxy Server Setup

- Server: NetherLand
- OS: Ubuntu 22.04

### Initialization

```bash
ssh root@51.89.88.80
passwd
adduser mlibre

apt update
apt dist-upgrade
apt install htop sudo psmisc net-tools ufw curl ntpdate
sudo apt purge snapd
sudo ntpdate time.nist.gov

nano /etc/sudoers
mlibre  ALL=(ALL:ALL) ALL

nano /etc/hosts
127.0.0.1 mlibre

systemctl disable rsyslog
systemctl disable apparmor.service
systemctl disable systemd-journald

# CTRL +D
ssh-keygen
ssh-copy-id -i ~/.ssh/id_rsa.pub mlibre@51.89.88.80
ssh mlibre@51.89.88.80

su
ssh-keygen
ssh-copy-id -i ~/.ssh/id_rsa.pub root@51.89.88.80

## Both server and client
sudo nano /etc/ssh/sshd_config
PermitTunnel yes
ClientAliveInterval 300
ClientAliveCountMax 6
TCPKeepAlive yes

sudo systemctl daemon-reload
sudo systemctl restart sshd
sudo systemctl status sshd

sudo nano /etc/sysctl.conf
net.ipv4.ip_forward=1

sudo nano /etc/resolv.conf
nameserver 1.1.1.1      
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8

# sudo apt install dnsmasq

sudo ufw allow 9090/udp
sudo ufw allow 9090/tcp
sudo ufw allow 51820/udp
sudo ufw allow 51820/tcp
sudo ufw allow 53/tcp
sudo ufw allow 53/udp
sudo ufw allow 80/udp
sudo ufw allow 80/tcp
sudo ufw allow 22/tcp
sudo ufw allow OpenSSH
sudo ufw allow dns
sudo ufw allow 5353/tcp
sudo ufw allow 5353/udp
sudo ufw allow 443/tcp
sudo ufw allow https
sudo ufw allow ssh
sudo ufw allow www
sudo ufw allow bootps

sudo ufw disable
sudo systemctl enable ufw
sudo ufw enable
sudo systemctl restart ufw
sudo systemctl status ufw
sudo ufw status
```



### SSH Dynamic Tunneling

```bash
ssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80
su
resolvectl dns enp3s0 1.1.1.1 
echo "nameserver 8.8.8.8" > /etc/resolv.conf
resolvectl dns enp1s0f0u6 1.1.1.1 
resolvectl dns

firefox: settings -> network -> socks5, proxy over dns
chromium: search proxy in the setting. open system proxy settings. manual specified: socks proxy: localhost 1080
```

### Jump server

> Cleint -> local ShadowSocks:1080->9090, IP: Server A
> -> Server A -> ssh -> Server B, ShadowSocks:9090

- Install shadowSocks in Server B
- run following command in server A

```bash
ssh -N -L 0.0.0.0:9090:95.216.162.13:9090 mlibre@95.216.162.13 -p 8756
                  APort              BPort                        BSSHPort

nano ssh.bash
# !/bin/bash

tmux new-session -d -s SshPF -n PortForwarder
tmux send-keys "while true; do ssh -N -L 0.0.0.0:9090:95.216.162.13:9090 esx@95.216.162.13 -p 8756; done" C-m
tmux send-keys "echo reserved" C-m

nano /etc/rc.local
/home/mlibre/sshPF.sh
exit 0;
```

### v2fly

#### Server

```bash
su
# /etc/systemd/system/v2ray.service
# /etc/systemd/system/v2ray.service.d/10-donot_touch_single_conf.conf
# v2ray --config=/etc/v2ray/config.json
# To remove: bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
systemctl enable v2ray
systemctl start v2ray
sudo nano  /usr/local/etc/v2ray/config.json
{
 "inbounds": [
  {
   "port": 10086, // server listening port
   "protocol": "vmess",
   "settings": {
    "clients": [
     {
      "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
     }
    ]
   }
  }
 ],
 "outbounds": [
  {
   "protocol": "freedom",
   "settings": {}
  }
 ]
}
sudo systemctl daemon-reload
v2ray test -c /usr/local/etc/v2ray/config.json
sudo systemctl restart v2ray
sudo systemctl status v2ray
sudo ufw allow 10086/udp
sudo ufw allow 10086/tcp
```

#### Client

```bash
sudo pacman -Syyuu v2ray
# sudo proxychains pacman -Su v2ray

// https://www.v2fly.org/
{
 "log": {
  //              "access": "./v2ray.log",
  //              "error": "./v2ray-e.log",
  "loglevel": "warning"
 },
 "inbounds": [
  {
   "port": 2080,
   "listen": "0.0.0.0",
   "tag": "socks-inbound",
   "protocol": "socks",
   "settings": {
    "auth": "noauth"
   },
   "sniffing": {
    "enabled": true,
    "destOverride": [
     "http",
     "tls"
    ]
   }
  }
 ],
 "outbounds": [
  {
   "protocol": "vmess",
   "settings": {
    "vnext": [
     {
      "address": "51.89.88.80", // server address, please modify it to your own server ip or domain name
      "port": 10086, // server port
      "users": [
       {
        "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
       }
      ]
     }
    ]
   }
  }
 ]
}

v2ray run -c /etc/v2ray/config.json
```

### Open an application using tor over socks

```bash
torsocks deluge
```

### shadowsocks

```bash

## Server

sudo apt install shadowsocks-libev -y
sudo nano /etc/shadowsocks-libev/config.json
{
    "server":["::1", "0.0.0.0"],
    "mode":"tcp_and_udp",
    "server_port":9090,
    "password":"password",
    "timeout":86400,
    "method":"chacha20-ietf-poly1305",
    "nameserver":"1.1.1.1",
    "fast_open": true
}
sudo ufw allow 9090/udp
sudo ufw allow 9090/tcp
sudo ufw allow 1080/udp
sudo ufw allow 1080/tcp
sudo ufw allow 443
sudo systemctl enable shadowsocks-libev.service
sudo systemctl restart shadowsocks-libev.service
sudo journalctl -f -u shadowsocks-libev.service

## Client
sudo pamac install shadowsocks-rust-bin
sudo nano /etc/shadowsocks/config.json 
{
    "servers": [
      {
          "address": "51.89.88.80",
          "port": 9090,
          "password": "password",
          "method":"chacha20-ietf-poly1305",
          "timeout": 86400
      }
    ],
    "mode":"tcp_and_udp",
    "local_port":1080,
    "local_address": "127.0.0.1",
    "fast_open": true
}

# sudo systemctl disable shadowsocks-rust-local@config
# sudo systemctl enable shadowsocks-rust-local@config
# sudo systemctl restart shadowsocks-rust-local@config
# sudo systemctl status shadowsocks-rust-local@config
# journalctl -f -u shadowsocks-rust-local@config

# sslocal  -d -c /etc/shadowsocks/config.json

sudo nano /lib/systemd/system/shadowsocks-rust-local@.service
[Unit]
Description=Shadowsocks-rust Local Client Service for %I
Documentation=https://github.com/shadowsocks/shadowsocks-rust
After=network.target

StartLimitIntervalSec=30s
StartLimitBurst=5

[Service]
Type=simple
DynamicUser=yes
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE
ExecStart=/usr/bin/sslocal --log-without-time -c /etc/shadowsocks/config.json

Restart=always
RestartSec=3s

[Install]
WantedBy=multi-user.target


## Firefox
socks host: 127.0.0.1
socks port: 1080
enable dns over proxy

sudo resolvectl dns enp3s0 1.1.1.1
echo "nameserver 8.8.8.8" > /etc/resolv.conf
```

### OpenVpn Server

```bash
https://github.com/mlibre/openvpn-install
curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
chmod +x openvpn-install.sh
sudo ./openvpn-install.sh
port: default/443, tcp, compression no
scp mlibre@51.89.88.80:/home/mlibre/mlibre.ovpn ~/

sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns tun0 1.1.1.1
sudo resolvectl dns enp3s0 1.1.1.1
sudo resolvectl dns
Global: 8.8.8.8
Link 2 (enp3s0): 1.1.1.1
Link 8 (tun0): 1.1.1.1
```

### VPN Chaining

#### route

- Client -> Server A -> Server B -> Internet

1. Install ubuntu 20.04 in both servers
2. Setup OpenVpn in server A And B (with default configs)
3. Generate `mlibreger.ovpn` in server b
4. Connect from A to B:

    ```bash
    ssh serverA
    sudo openvpn --config mlibreger.ovpn
    ```

5. Now you have eth0, lo and tun0 in server A

    ```bash
    tun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 1500
    inet 10.8.0.1  netmask 255.255.255.0  destination 10.8.0.1
    ```

6.

```bash
sudo iptables -t nat -D POSTROUTING -s 10.7.0.0/24 ! -d 10.7.0.0/24 -j SNAT --to-source 51.89.88.80
sudo iptables -A FORWARD -i tun0 -o wg0 -j ACCEPT
sudo iptables -A FORWARD -i wg0 -o tun0 -j ACCEPT 
sudo iptables -A FORWARD -d 10.7.0.0/24 -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo iptables -t nat -A POSTROUTING -s 10.7.0.0/24 -j SNAT --to-source 10.8.0.2
sudo ip route add default via 10.8.0.2 table 120 
sudo ip rule add from 10.7.0.0/24 table 120 
```

### WireGuard VPN Server

```bash
sudo pacman -Syyuu wireguard extra/wireguard-tools resolvconf
sudo apt update
apt-get purge nftables
sudo apt dist-upgrade
sudo apt install htop sudo wireguard wireguard-tools resolvconf iptables
update-alternatives --set iptables /usr/sbin/iptables-legacy
```

#### Server Configuration

```bash
sudo apt install dnsmasq
sudo systemctl enable dnsmasq
sudo systemctl status dnsmasq
sudo systemctl restart dnsmasq

### dns


# sudo nano /etc/resolv.conf
# sudo nano /etc/resolvconf/resolv.conf.d/head
sudo nano /etc/resolvconf/resolv.conf.d/base
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8

sudo systemctl enable resolvconf
nano /etc/systemd/resolved.conf
DNS=208.67.222.222 208.67.220.220 8.8.8.8

sudo nano /etc/dhcp/dhclient.conf
prepend domain-name-servers 208.67.222.222, 208.67.220.220, 8.8.8.8

sudo nano /etc/network/interfaces
iface eth0 inet static
  dns-nameservers 208.67.222.222 208.67.220.220 8.8.8.8

sudo reboot

resolvectl dns eth0 # make sure dns is set
# permanent? 
```

```bash
ip route list default
# Copy Device Name: eth0
ip -brief address show eth0
# Copy The server public ip
```

```bash
# https://github.com/mlibre/wireguard-install
```

```bash
sudo systemctl stop wg-quick@wg0.service
sudo systemctl disable wg-quick@wg0.service
sudo systemctl enable wg-quick@wg0.service
sudo systemctl start wg-quick@wg0.service
sudo systemctl status wg-quick@wg0.service
sudo wg
# sudo wg-quick down wg0
# sudo systemctl daemon-reload 
```

#### Peer Configuration

```bash
# https://github.com/mlibre/wireguard-install
sudo pacman -R firewalld ufw

sudo nano /etc/wireguard/wg0.conf

[Interface]
DNS = 1.1.1.1 
PostUp = resolvectl dns enp3s0 1.1.1.1

[Peer]
PersistentKeepalive = 25

### DNS

resolvectl dns
sudo resolvectl dns enp3s0 10.8.0.1
# sudo resolvectl dns enp3s0 208.67.222.222


# ON THE CLIENT
sudo wg-quick up wg0
sudo wg-quick down wg0
```

### Redirecting the whole traffic

```bash
sudo ip route add 192.168.1.0/24 dev ppp0
# ppp0: vpn name
# 192.168.1.0: IP range
```

### VPNBook

- Download OpenVpn file: <https://www.vpnbook.com/freevpn>
- Import in NetworkManger
- Enter username and password from here: <https://www.vpnbook.com/freevpn>

### Protonvpn

#### Install

```bash
sudo systemctl stop firewalld.service
yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm"  -S protonvpn
# proxychains yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm"  -S protonvpn
protonvpn
# proxychain protonvpn
```

#### OpenVpn

- Download openVpn config file form here: <https://account.protonvpn.com/downloads>
- Copy openVPn credentials: <https://account.protonvpn.com/account>
- Network Manager: New -> Import OpenVpn Saved Configuration. Paste credentials

#### WireGuard

```bash
sudo pacman -R firewalld
sudo ufw disable
sudo nano /etc/sysctl.conf
# add: net.ipv4.ip_forward=1
# net.ipv6.conf.all.forwarding=1
sudo sysctl -p
sudo pacman -S extra/wireguard-tools
# yay -S  qomui
# https://account.protonvpn.com/downloads#wireguard-configuration
sudo nano /etc/wireguard/wg0.conf
# past

resolvectl dns
sudo resolvectl dns enp3s0 10.2.0.1 # ip addr:(enp3s0). resolvectl dnsglobal:(10.2.0.1). can be added in POSTup wirgurd conf
sudo wg-quick up wg0
sudo wg-quick down wg0
sudo wg
```

### Hide.me

```bash
sudo systemctl stop firewalld.service
curl -L https://hide.me/download/linux-amd64 | tar -xJ && sudo ./install.sh
# Extend free trail 
# https://member.hide.me/en/
proxychains sudo ./hide.me token free-unlimited.hideservers.net
proxychains sudo ./hide.me connect free-unlimited.hideservers.net
```

### Windscribe

```bash
sudo systemctl stop firewalld.service
proxychains yay -S aur/windscribe-bin
```

## Font

### Location

- `~/.local/share/fonts/`
- `/usr/local/share/fonts/`
- `/usr/share/fonts/`

### List

List installed fonts

```bash
fc-match -a
```

### Fira Code

A popular code font.

```bash
sudo pacman -S ttf-fira-code
fc-match -a | grep -i fira
```

## Backup using Rsync

```bash
sudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*"} / /run/media/mlibre/H/OS/full-copy/
```

## Vulkan

```bash
sudo pacman -S vulkan-radeon lib32-vulkan-radeon
```

```bash
sudo nano /etc/environment
VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/radeon_icd.i686.json:/usr/share/vulkan/icd.d/radeon_icd.x86_64.json
```

## Dota 2

- Move Dota 2 to your local linux machine

### Dota 2 Options

  ```bash
  -high -nojoy -novid -novr -nohltv -map dota 
  ```

- Disable steam overlay, steam inputs, ...

### Link NTFS game folder

```bash
sudo mkdir -p /media/gamedisk
sudo blkid # FA709D69709D2CFF
id -u # 1000
id -g # 1000
sudo nano /etc/fstab
UUID=FA709D69709D2CFF /media/gamedisk ntfs uid=1000,gid=1000,rw,user,exec,umask=000 0 0
# UUID=FA709D69709D2CFF /media/gamedisk lowntfs-3g uid=1000,gid=1000,rw,user,exec,umask=000 0 0
mkdir -p ~/.steam/steam/steamapps/compatdata
sudo reboot
ln -s ~/.steam/steam/steamapps/compatdata /media/gamedisk/Steam/steamapps/
```

### Run using proxy

```bash
proxychains steam steam://rungameid/570
```

## Install Genymotoin Android emulator

```bash
sudo pamac install genymotion
```

## Things to do before installing Manjaro/Arch Linux

- Backup important data. Recovery-keys, Passwords, Postman and ...  

  ```bash
  cp -r /home/mlibre/.local/share/TelegramDesktop /run/media/mlibre/H/OS/caches/
  rsync -aAXHv ~/my_data/ /run/media/mlibre/H/OS/my_data/
  # ./data_rsync.bash
  ```

- Mark EFI partition while installing Manjaro/Arch Linux as /boot/efi. Don't check Format option.

## Things to do after installing Manjaro/Arch Linux

- Update System

  ```bash
  sudo systemctl disable pamac-daemon
  sudo systemctl disable pamac-mirrorlist.timer
  sudo systemctl disable pamac-mirrorlist.service
  sudo pacman -R manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro
  sudo pacman-mirrors --fasttrack
  sudo pacman -Syyuu
  sudo pacman -S telegram-desktop
  ```

- Import Data

  ```bash
  cp -r /run/media/mlibre/H/OS/caches/TelegramDesktop /home/mlibre/.local/share/
  cp -r /run/media/mlibre/H/OS/my_data/ ~/my_data
  # ./import_data.bash
  ```

- Make an XDG autostart script for gamma adjustment
- Put the gamma script in the `.bashrc` and `.zshrc` as well
- Install vscode

  ```bash
  pamac update --force-refresh
  pamac install visual-studio-code-bin
  ```

- Install ProtonVPN, mailspring
  
  ```bash
  pamac build protonvpn
  pamac build mailspring
  ```

- Remove Mainspring from startups. Use 24-hour clock. Uncheck automatically load images. Disabsetle mail signature.

- Install mlocate

  ```bash
  sudo pacman -S mlocate
  sudo updatedb
  ```
  
- KDE Settings -> Disable Mouse acceleration
- KDE Settings -> Startup and Shutdown: Start with empty session, Choose KDE Screen Saver, Review background services and Autostarts.
- KDE Settings -> Appearance -> Theme -> Breeze Dark, Breath Dark
- KDE Settings -> Appearance -> Font -> Enabled Anti-Aliasing, RGB, Slight. all +1 PT
- KDE Settings -> Workspace -> Search -> Disable Web Search Keywords
- KDE Settings -> Workspace Behavior -> Activities -> Privacy -> Dont remember soft
- KDE Settings -> Search for KRuuner -> settings -> uncheck all

- Pin Firefox, Terminal, ProtonVPN, Kate and VSCode to the panel
- Software Center: Disable automatic updates, Add AUR support
- Remove Virtual Desktops
- Pacman downloads parallel

  ```bash
  sudo nano /etc/pacman.conf
  ParallelDownloads = 5
  ```

- Remembers sudo password

  ```bash
  sudo nano /etc/sudoers
  Defaults        timestamp_timeout=300 # 5 hours
  ```

- Make a Swapfile

```bash
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
cat /etc/fstab
sudo bash -c "echo /swapfile none swap defaults 0 0 >> /etc/fstab"

sudo nano /etc/sysctl.conf
# vm.swappiness=10
```

- Fix time difference between linux and windows

  ```bash
  sudo timedatectl set-local-rtc 1 --adjust-system-clock
  # sudo timedatectl set-local-rtc 1
  sudo ntpdate time.nist.gov # update time
  ```

- Softwares

```bash
sudo pacman -S qbittorrent deluge clamav firefox gimp gparted libreoffice-fresh meld vlc ntfs-3g firewalld aria2 ttf-ubuntu-font-family gnome-keyring libsecret core/iputils clinfo tor torsocks steam-native-runtime
# sudo pacman -S electrum

sudo systemctl disable bluetooth.service
sudo systemctl disable tor.service
sudo systemctl disable samba
sudo systemctl disable cups

sudo systemctl enable firewalld
sudo systemctl restart firewalld

sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-port=30303/tcp
sudo firewall-cmd --permanent --add-port=30303/udp



sudo systemctl restart --now clamav-daemon
sudo freshclam
clamscan --recursive --infected /home
sudo systemctl disable --now clamav-freshclam
sudo systemctl disable --now clamav-daemon
# sudo systemctl enable --now clamav-daemon
# sudo systemctl enable --now clamav-freshclam
```

- Firefox: Enable DNS over HTTPS
- Enable automatic mounting of external drives: Settings -> Hardware -> Removable Storage -> Automount
- Konsole config:
  - Font: Monospace 13pt
  - Theme: Breath (customized, a bit darker)
  - Shell: Manjaro zsh

### Install AMDGPU-PRO

```bash
# https://wiki.archlinux.org/title/AMDGPU_PRO
pamac install vulkan-amdgpu-pro
pamac install lib32-vulkan-amdgpu-pro 
# pamac install amdgpu-pro-libgl
# pamac install lib32-amdgpu-pro-libgl
# pamac install opencl-amd
# pamac install amf-amdgpu-pro
glxinfo | grep "OpenGL vendor string"
lspci -v | grep -A 10 VGA
```

### Uninstall AMDGPU-PRO

```bash
pacman -R $(pacman -Qg Radeon_Software_for_Linux | cut -f2 -d" ")
```

### Blacklist Radeon

```bash
sudo nano /etc/modprobe.d/radeon.conf 
blacklist radeon
```

## Things to do after installing Windows 11

- Download and install all the updates
- Enable Ransomware protection
- Download DimScreen, Copy it to the download folder. Open. click on the settings. set brightness to 20%. Make a shortcut to the desktop
- search for gamma calibration in windows settings. set it to minimum
- Adjust date and time: auto. Timezone tehran +3:30
- Downloading updates active hours: 24 hours format. 1->11
- Disable all data usages settings in privacy and security
- uninstall mail, teams, one drive. xbox, facebook, microsoft todo, sticky notes, tips, weather
- Install firefox and login
- Install protonVPN
- personalize: sunrise
- network connection: metered connection
- Display: 3840x2160, 200%
- Steam: add your games' location to the Games' folder library. make it as default
- Steam: If your games are in a `NTFS` file system, follow [this](https://github.com/ValveSoftware/Proton/wiki/Using-a-NTFS-disk-with-Linux-and-Windows) to make game compatible with Linux.
- Pause windows updates for 5 weeks
- Check windows startups apps
- App store: disable automatic update
- Leave from "AMD user experience program". AMD settings -> last tab -> last option
- windows features: WSL, virtual machine, hyper-v (for android and linux apps)
- wsl --update
- wsl --install -d Ubuntu
- Disable Error Reporting: WIN+R -> services.msc -> Windows Error Reporting Service -> Properties -> disable

## Install a new os on the phone

### Backup data

```bash
sudo pacman -S android-tools
sudo adb devices
adb backup -apk -shared -all -f backup-file.ab
```

### Restore

```bash
adb restore file.ab
```

### Enable Developer options

- Several times clicks on the kernel tab
- Allow OEM unlocking
- Enter Download mod:
  1. Turn off the phone.  
  2. Hold vol key up + down.
  3. Now in the warning message page. choose "unlocking bootloader" that will perform a factory reset

### Install odin tools for Samsung >= 3.14

<https://samsungodin.com/>

### Install samsung driver

<https://developer.samsung.com/android-usb-driver>

### Install adb

<https://developer.android.com/studio/releases/platform-tools>

```bash
adb reboot download
```

### Download TWRP

<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>
<https://twrp.me/samsung/samsunggalaxya10.html>

#### convert it to .md5

<https://www.droidthunder.com/convert-img-to-tar-md5/>

### Run Odin as administrator

follow the instructions
<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>

### Install bluestack

<https://www.bluestacks.com/>

Download, login and install whatsapp, telegram and google
