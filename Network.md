# Network

- [Disable IPV6](#disable-ipv6)
- [Setup DNS](#setup-dns)
  - [Advance](#advance)
- [Flush Network settings](#flush-network-settings)
- [VPN over SSH](#vpn-over-ssh)
  - [VPN Over Socks Proxy](#vpn-over-socks-proxy)
- [SSH Dynamic Tunneling](#ssh-dynamic-tunneling)
- [Open an application using tor over socks](#open-an-application-using-tor-over-socks)
- [Outline Proxy + Jump Server](#outline-proxy--jump-server)
  - [Initialization](#initialization)
  - [Outline Server](#outline-server)
  - [Jump server](#jump-server)
    - [With IPTables](#with-iptables)
    - [Using SSH Forward](#using-ssh-forward)
    - [Optimization](#optimization)
    - [Confusion Traffic script](#confusion-traffic-script)
  - [Client - ShadowSocks config example ( rust version )](#client---shadowsocks-config-example--rust-version-)
- [OpenVpn Server](#openvpn-server)
- [ShadowSocks Server](#shadowsocks-server)
  - [Server](#server)
  - [Client](#client)
- [WireGuard VPN Server](#wireguard-vpn-server)
  - [Server Configuration](#server-configuration)
  - [Peer Configuration](#peer-configuration)
- [Redirecting the whole network traffic](#redirecting-the-whole-network-traffic)
- [Free VPNs](#free-vpns)
  - [VPNBook](#vpnbook)
  - [Protonvpn](#protonvpn)
    - [Install](#install)
    - [OpenVpn](#openvpn)
    - [WireGuard](#wireguard)
  - [Hide.me](#hideme)
  - [Windscribe](#windscribe)

## Disable IPV6

```bash
sudo nano /etc/sysctl.conf

net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1

sudo sysctl -p 
```

## Setup DNS

```bash
su
echo "nameserver 8.8.8.8" > /etc/resolv.conf
resolvectl dns enp3s0 1.1.1.1 
resolvectl dns enp1s0f0u6 1.1.1.1
resolvectl dns
```

### Advance

```bash
sudo nano /etc/resolv.conf
nameserver 1.1.1.1
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8
```

```bash
sudo systemctl enable resolvconf
sudo nano /etc/resolvconf/resolv.conf.d/head
sudo nano /etc/resolvconf/resolv.conf.d/base
nameserver 1.1.1.1
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8
```

```bash
sudo nano /etc/systemd/resolved.conf
[Resolve]
DNS=1.1.1.1 208.67.222.222 208.67.220.220 8.8.8.8

sudo nano /run/systemd/resolve/stub-resolv.conf
nameserver 1.1.1.1
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8

sudo systemctl enable systemd-resolved
```

```bash
sudo nano /etc/dhcp/dhclient.conf
prepend domain-name-servers 208.67.222.222, 208.67.220.220, 8.8.8.8

sudo nano /etc/network/interfaces
iface eth0 inet static
  dns-nameservers 208.67.222.222 208.67.220.220 8.8.8.8
```

```bash
resolvectl dns eth0 # make sure dns is set
# permanent? 
```

## Flush Network settings

```bash
sudo killall sslocal; sudo ip link delete tun0;sudo wg-quick down wg0;sudo systemctl daemon-reload;sudo ip route flush table main;sudo iptables --flush;sudo systemctl restart network;sudo systemctl restart NetworkManager;sudo sysctl -p; sudo systemd-resolve --flush-caches; sudo resolvectl flush-caches

sudo killall sslocal winedevice.exe wineserver services.exe EpicGamesLaunch EpicWebHelper.e explorer.exe lutris-wrapper: steamwebhelper gitstatusd steam
sudo killall -9 sslocal winedevice.exe wineserver services.exe EpicGamesLaunch EpicWebHelper.e explorer.exe lutris-wrapper: steamwebhelper gitstatusd steam
pkill -f -e -c lutris-wrapper
pkill -f -e -c lutris
pkill -f -e -c wine
pkill -f -e -c steam
pkill -f -e -c sslocal
qdbus org.kde.KWin /Compositor suspend
sudo systemctl stop shadowsocks-rust-local@config

sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo ip link delete tun0
sudo wg-quick down wg0
sudo systemctl daemon-reload
sudo ip route flush table main
sudo iptables --flush
sudo systemctl restart network
sudo systemctl restart NetworkManager
sudo sysctl -p

sudo systemctl restart shadowsocks-rust-local@config
sync; echo 3 > /proc/sys/vm/drop_caches
rm ~/.cache/ksycoca5*
```

## VPN over SSH

```bash
sudo proxychains pacman -S sshuttle

sudo sshuttle -v -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --dns --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0.0.0.0/0 --dns --disable-ipv6
```

### VPN Over Socks Proxy

> SS server address: 87.107.164.69

```bash
nano mlibre.ovpn
socks-proxy 127.0.0.1 1090
route 87.107.164.69 255.255.255.255 net_gateway
route 192.168.0.0 255.255.0.0 net_gateway
```

## SSH Dynamic Tunneling

```bash
ssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80

# Setup DNS

firefox: settings -> network -> socks5, proxy over dns
chromium: search proxy in the setting. open system proxy settings. manual specified: socks proxy: localhost 1080
```

## Open an application using tor over socks

```bash
torsocks deluge
```

## Outline Proxy + Jump Server

- Server: NetherLand
- OS: Ubuntu 22.04

### Initialization

```bash
ssh root@51.89.88.80
passwd
adduser mlibre

apt update
apt dist-upgrade
apt install htop sudo psmisc net-tools curl ntpdate ufw
sudo apt purge snapd
sudo ntpdate time.nist.gov

nano /etc/sudoers
mlibre  ALL=(ALL:ALL) ALL

nano /etc/hosts
127.0.0.1 mlibre

sudo systemctl disable rsyslog
sudo systemctl disable apparmor.service
sudo systemctl disable systemd-journald
sudo systemctl disable apport-autoreport.path
sudo systemctl disable apport-forward.socket

# CTRL +D
ssh-keygen
ssh-copy-id -i ~/.ssh/id_rsa.pub mlibre@51.89.88.80
# ssh-copy-id -i ~/.ssh/id_rsa.pub -p 2138 mlibre@87.107.164.69
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
sudo sysctl -p

sudo nano /etc/resolv.conf
nameserver 1.1.1.1      
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8

# sudo apt install dnsmasq

sudo ufw allow 9090/udp
sudo ufw allow 9090/tcp
sudo ufw allow 1194
sudo ufw allow 1194/tcp
sudo ufw allow 1194/udp
sudo ufw allow 51820/udp
sudo ufw allow 51820/tcp
sudo ufw allow 51449
sudo ufw allow 51449/tcp
sudo ufw allow 51449/udp
sudo ufw allow 64920
sudo ufw allow 64920/udp
sudo ufw allow 64920/tcp
sudo ufw allow 53263
sudo ufw allow 53263/udp
sudo ufw allow 53263/tcp
sudo ufw allow 56777/udp
sudo ufw allow 56777/tcp
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

### Outline Server

1. Download outline manager in your local linux system
2. <https://getoutline.org/get-started/#step-1>
3. Run and follow instructions
4. In server: open ssh, https and other ports + ports mentioned in outline manager settings:

  ```bash
    sudo ufw allow 51449
    sudo ufw allow 51449/tcp
    sudo ufw allow 51449/udp
    sudo ufw allow 64920
    sudo ufw allow 64920/udp
    sudo ufw allow 64920/tcp
  ```

5. Open Manager
6. Create keys
7. Share keys

  ```bash
  # Keys are like this
  ss://BASE64 STRING@IP:PORT/?outline=1
  ```

8. You can also open keys with ShadowSocks
9. You can also extract URL information: <https://shadowsocks.org/guide/sip002.html#sip002-uri-scheme>

### Jump server

#### With IPTables

```bash
sudo apt install iptables-persistent
sudo nano /etc/iptables/rules.v4

# Generated by iptables-save v1.8.4 on Sun Nov 27 20:17:17 2022
*nat
:PREROUTING ACCEPT [18895:9137441]
:INPUT ACCEPT [6852:1538364]
:OUTPUT ACCEPT [31:7269]
:POSTROUTING ACCEPT [31:7269]
-A PREROUTING -p tcp -m tcp --dport 64920  -j DNAT --to-destination 46.249.49.193:64920
-A PREROUTING -p udp -m udp --dport 64920  -j DNAT --to-destination 46.249.49.193:64920
-A POSTROUTING -j MASQUERADE
COMMIT
# Completed on Sun Nov 27 20:17:17 2022
# Generated by iptables-save v1.8.4 on Sun Nov 27 20:17:17 2022
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
COMMIT
# Completed on Sun Nov 27 20:17:17 2022

sudo systemctl enable netfilter-persistent.service
sudo systemctl restart netfilter-persistent.service
```

#### Using SSH Forward

> Client -> A (Jump Server) -> B (Outline Server)

- Install shadowSocks in Server B
- Run following commands in server A

```bash
# Server A IP: 87.107.164.69
# Server A SSH Port: 2138
# Server B IP: 46.249.49.193
# Server B SSH Port: 56777
# Server B ShadowSocks/Outline ports: 64920, 56777, 51449
# ufw allow ......
ssh-copy-id -i ~/.ssh/id_rsa.pub mlibre@46.249.49.193 -p 56777
sudo ssh-copy-id -i /root/.ssh/id_rsa.pub root@46.249.49.193 -p 56777

ssh -N -L 0.0.0.0:64920:46.249.49.193:64920 mlibre@46.249.49.193 -p 56777
#                 APort BIP           BPort       BIP               BSSHPort
```

- Make a startup script

```bash
sudo nano /etc/systemd/system/sshtunnel.service

[Unit]
Description=SSH Tunnel
After=network.target

[Service]
User=mlibre
Restart=always
RestartSec=20
ExecStart=ssh -N -L 0.0.0.0:64920:46.249.49.193:64920 mlibre@46.249.49.193 -p 56777

[Install]
WantedBy=multi-user.target

sudo systemctl enable sshtunnel
sudo systemctl restart sshtunnel
sudo systemctl status sshtunnel
sudo journalctl -f -u sshtunnel
```

#### Optimization

https://github.com/shadowsocks/shadowsocks/wiki/Optimizing-Shadowsocks

#### Confusion Traffic script

```bash
```

### Client - ShadowSocks config example ( rust version )

```json
{
    "servers": [
      {
          "address": "87.107.164.69", // Server A IP Address
          "port": 64920,
          "password": "password", // Extracted OUTLINE Key Information
          "method":"chacha20-ietf-poly1305", // Extracted OUTLINE Key Information
          "timeout": 86400
      }
    ],
    "mode":"tcp_and_udp",
    "local_port":1080,
    "local_address": "127.0.0.1",
    "fast_open": true
}
```

```bash
su
echo "nameserver 1.1.1.1" > /etc/resolv.conf
echo "nameserver 8.8.8.8" > /etc/resolv.conf
echo "nameserver 8.8.4.4" > /etc/resolv.conf
resolvectl dns enp3s0 1.1.1.1
```

## OpenVpn Server

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


Add these lines to your .ovpn file:

socks-proxy 127.0.0.1 1080
route SHADOWSOCKS_SERVER_IP 255.255.255.255 net_gateway

```

## V2Ray Server

```bash
bash <(curl -Ls https://raw.githubusercontent.com/NidukaAkalanka/x-ui-english/master/install.sh)
```
1. Open Panel
2. Create simple GRPC inbound
3. Install https://github.com/Matsuridayo/nekoray/releases

## ShadowSocks Server

### Server

```bash
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

# Custom instance
sudo nano /etc/systemd/system/direct.service
[Unit]
Description=Shadowsocks
After=network.target

StartLimitIntervalSec=30s
StartLimitBurst=5

[Service]
Type=simple
User=mlibre
Group=mlibre
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE
ExecStart=ss-server -c /etc/shadowsocks-libev/config.json

Restart=always
RestartSec=3s

[Install]
WantedBy=multi-user.target
```

### Client

```bash
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

## WireGuard VPN Server

```bash
sudo pacman -Syyuu wireguard extra/wireguard-tools resolvconf
sudo apt update
apt-get purge nftables
sudo apt dist-upgrade
sudo apt install htop sudo wireguard wireguard-tools resolvconf iptables
update-alternatives --set iptables /usr/sbin/iptables-legacy
```

### Server Configuration

```bash
https://github.com/angristan/wireguard-install
curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh
chmod +x wireguard-install.sh
sudo ./wireguard-install.sh
```

### Peer Configuration

```bash
resolvectl dns
sudo resolvectl dns enp3s0 10.8.0.1
# sudo resolvectl dns enp3s0 208.67.222.222


# ON THE CLIENT
sudo wg-quick up wg0
sudo wg-quick down wg0
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

## Redirecting the whole network traffic

```bash
sudo ip route add 192.168.1.0/24 dev ppp0
# ppp0: vpn name
# 192.168.1.0: IP range
```

## Free VPNs

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
