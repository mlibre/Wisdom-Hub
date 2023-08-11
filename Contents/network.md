---
sidebar_position: 3
tags:
  - Network
  - DNS
  - VPN
---

# Network

This section is a comprehensive guide to various topics related to Networking, including disabling IPv6, setting up DNS servers, VPN servers, and proxy servers. There are also topics on how to use different VPN services and redirect network traffic. This section provides in-depth information on how to configure different VPN protocols like OpenVPN, V2Ray, ShadowSocks, and WireGuard.

- [Disable IPV6](#disable-ipv6)
- [Setup DNS](#setup-dns)
  - [Using resolv.conf](#using-resolvconf)
  - [Using systemd](#using-systemd)
  - [DNS Server - dhclient](#dns-server---dhclient)
- [Flush System Settings](#flush-system-settings)
- [VPN over SSH](#vpn-over-ssh)
  - [VPN Over Socks  ( openVPN )](#vpn-over-socks---openvpn-)
- [SSH Dynamic Tunneling](#ssh-dynamic-tunneling)
- [Open an application over socks](#open-an-application-over-socks)
- [Setup DNS Server](#setup-dns-server)
  - [Using Systemd](#using-systemd-1)
  - [Using dnsmasq](#using-dnsmasq)
- [Outline Proxy Server + Jump Server](#outline-proxy-server--jump-server)
  - [Initialization](#initialization)
  - [Outline Server](#outline-server)
  - [Jump server](#jump-server)
    - [With IPTables](#with-iptables)
    - [Using SSH Forward](#using-ssh-forward)
    - [Using socat](#using-socat)
    - [Optimization](#optimization)
    - [Fake Traffic script](#fake-traffic-script)
  - [Client-Side](#client-side)
    - [ShadowSocks Json config example ( rust )](#shadowsocks-json-config-example--rust-)
    - [ShadowSocks SS URL Format](#shadowsocks-ss-url-format)
- [OpenVpn Server](#openvpn-server)
- [V2Ray VPN/Proxy Server](#v2ray-vpnproxy-server)
  - [disable ping](#disable-ping)
  - [Change server hostname](#change-server-hostname)
  - [Add domain to the cloudflare](#add-domain-to-the-cloudflare)
  - [XUI Panel](#xui-panel)
  - [Nekoray](#nekoray)
- [ShadowSocks Server](#shadowsocks-server)
  - [Server](#server)
  - [Client](#client)
- [WireGuard VPN Server](#wireguard-vpn-server)
  - [Server Configuration](#server-configuration)
  - [Peer Configuration](#peer-configuration)
- [Redirecting the whole network traffic](#redirecting-the-whole-network-traffic)
- [Proxy udp traffic from ssh](#proxy-udp-traffic-from-ssh)
- [Free VPNs](#free-vpns)
  - [VPNBook](#vpnbook)
  - [Protonvpn](#protonvpn)
    - [Install](#install)
    - [OpenVpn](#openvpn)
    - [WireGuard](#wireguard)
  - [Hide.me](#hideme)
  - [Windscribe](#windscribe)
- [Set System-wide DNS](#set-system-wide-dns)
  - [Shekan DNS](#shekan-dns)
  - [403 DNS](#403-dns)
  - [Global DNS](#global-dns)
  - [Setting domains directly in /etc/hosts](#setting-domains-directly-in-etchosts)

## Disable IPV6

```bash
sudo nano /etc/sysctl.conf

net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1

sudo sysctl -p 
```

## Setup DNS

### Using resolv.conf

```bash
sudo nano /etc/resolv.conf
nameserver 1.1.1.1
nameserver 1.0.0.1
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8
nameserver 8.8.4.4

# echo "nameserver 8.8.8.8" > /etc/resolv.conf
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

### Using systemd

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
sudo systemctl restart systemd-resolved

# resolvectl dns enp3s0 1.1.1.1 
# resolvectl dns enp1s0f0u6 1.1.1.1
resolvectl dns
```

### DNS Server - dhclient

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

## Flush System Settings

```bash
sudo killall sslocal winedevice.exe wineserver services.exe EpicGamesLaunch EpicWebHelper.e explorer.exe lutris-wrapper:;
sudo killall steamwebhelper gitstatusd steam;
sudo killall -9 sslocal winedevice.exe wineserver services.exe EpicGamesLaunch EpicWebHelper.e explorer.exe lutris-wrapper:;
sudo killall -9 steamwebhelper gitstatusd steam;
pkill -f -e -c lutris-wrapper;
pkill -f -e -c lutris;
pkill -f -e -c wine;
pkill -f -e -c steam;
pkill -f -e -c sslocal;
sudo systemctl stop shadowsocks-rust-local@config;

sudo systemd-resolve --flush-caches;
sudo resolvectl flush-caches;
sudo ip link delete tun0;
sudo wg-quick down wg0;
sudo systemctl daemon-reload;
sudo ip route flush table main;
sudo iptables --flush;
sudo systemctl restart network;
sudo systemctl restart NetworkManager;
sudo sysctl -p;

sudo systemctl restart shadowsocks-rust-local@config;
sync; echo 3 > /proc/sys/vm/drop_caches;
```

## VPN over SSH

```bash
sudo pacman -S sshuttle

sudo sshuttle -v -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --dns --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0.0.0.0/0 --dns --disable-ipv6
```

### VPN Over Socks  ( openVPN )

> SS server address: 87.80.80.80

```bash
nano mlibre.ovpn
socks-proxy 127.0.0.1 1090
route 87.80.80.80 255.255.255.255 net_gateway
route 192.168.0.0 255.255.0.0 net_gateway
```

## SSH Dynamic Tunneling

```bash
ssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80

# Setup DNS

firefox: settings -> network -> socks5, proxy over dns
chromium: search proxy in the setting. open system proxy settings. manual specified: socks proxy: localhost 1080
```

## Open an application over socks

```bash
torsocks deluge
tsokcs deluge
```

## Setup DNS Server

### Using Systemd

```bash
sudo nano /etc/systemd/resolved.conf
[Resolve]
DNS=1.1.1.1 9.9.9.9#dns.quad9.net 8.8.8.8
FallbackDNS=208.67.222.222 208.67.220.220
#Domains=
#LLMNR=no
#MulticastDNS=no
DNSSEC=yes
DNSOverTLS=no
Cache=yes        
DNSStubListener=yes
ReadEtcHosts=yes

sudo systemctl enable systemd-resolved.service
sudo systemctl restart systemd-resolved.service
sudo systemctl restart NetworkManager
```

### Using dnsmasq

```bash
sudo apt install dnsmasq
```

## Outline Proxy Server + Jump Server

- Server: NetherLand
- OS: Ubuntu 22.04

### Initialization

```bash
ssh root@51.89.88.80
passwd
adduser mlibre

apt update
apt dist-upgrade
apt install htop sudo psmisc net-tools curl ntpdate
sudo apt purge snapd ufw
sudo apt autoremove --purge
sudo ntpdate time.nist.gov

nano /etc/sudoers
mlibre  ALL=(ALL:ALL) NOPASSWD: ALL

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
# ClientAliveInterval 300
# ClientAliveCountMax 6
TCPKeepAlive yes
AllowAgentForwarding yes
AllowTcpForwarding yes
PermitTunnel yes
GatewayPorts yes

sudo systemctl daemon-reload
sudo systemctl restart sshd
sudo systemctl status sshd

sudo nano /etc/sysctl.conf
net.ipv4.ip_forward=1
net.ipv4.tcp_fastopen=3
fs.file-max = 5000000

sudo sysctl -p

sudo nano /etc/resolv.conf
nameserver 1.1.1.1      
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8

sudo ufw allow 9090/udp
sudo ufw allow 9090/tcp
sudo ufw allow 9090
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
4. Save the credentials

  ```bash
  ...
  {"apiUrl":"https://41.249.49.191:13108/112-XA1EFIGPw","certSha256":"121"}
  ```

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
10. Run [BBR script](https://github.com/teddysun/across/blob/master/bbr.sh)

### Jump server

- SSHD configs:

```bash
sudo nano /etc/ssh/sshd_config
AllowAgentForwarding yes
AllowTcpForwarding yes
TCPKeepAlive yes
PermitTunnel yes
GatewayPorts yes
```

- SysCtl Settings:

```bash
sudo nano /etc/sysctl.conf
net.ipv4.tcp_fastopen=3
net.ipv4.ip_forward=1

sudo sysctl -p
```

- [BBR script](https://github.com/teddysun/across/blob/master/bbr.sh)

#### With IPTables

```bash
sudo apt install iptables-persistent
sudo nano /etc/iptables/rules.v4

*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
COMMIT
*nat
:PREROUTING ACCEPT [18895:9137441]
:INPUT ACCEPT [6852:1538364]
:OUTPUT ACCEPT [31:7269]
:POSTROUTING ACCEPT [31:7269]

-A PREROUTING -d 87.107.164.69/32 -p udp -m udp --dport 67 -j DNAT --to-destination 46.249.49.193:443
-A PREROUTING -d 87.107.164.69/32 -p tcp -m tcp --dport 67 -j DNAT --to-destination 46.249.49.193:443

-A PREROUTING -d 87.107.164.69/32 -p udp -m udp --dport 34964 -j DNAT --to-destination 46.249.49.193:34964
-A PREROUTING -d 87.107.164.69/32 -p tcp -m tcp --dport 34964 -j DNAT --to-destination 46.249.49.193:34964

#-A PREROUTING -p tcp -m tcp --dport 64921 -j DNAT --to-destination 46.249.49.193:64920
#-A PREROUTING -p udp -m udp --dport 64921 -j DNAT --to-destination 46.249.49.193:64920
#-A PREROUTING -p tcp -m tcp --dport 22055 -j DNAT --to-destination 46.249.49.193:22054
#-A PREROUTING -p udp -m udp --dport 22055 -j DNAT --to-destination 46.249.49.193:22054
-A POSTROUTING -j MASQUERADE
COMMIT

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

#### Using socat

```bash
sudo socat -dd TCP4-LISTEN:8000,fork TCP4:Shadowsocks-server-ip:9000
sudo socat -dd UDP-LISTEN:8000,fork UDP:Shadowsocks-server-ip:9000
```

#### Optimization

<https://github.com/shadowsocks/shadowsocks/wiki/Optimizing-Shadowsocks>

#### Fake Traffic script

> [namizun](https://github.com/malkemit/namizun)

### Client-Side

- SSHD configs:

```bash
sudo nano /etc/ssh/sshd_config
AllowAgentForwarding yes
AllowTcpForwarding yes
TCPKeepAlive yes
PermitTunnel yes
GatewayPorts yes
```

- SysCtl Settings:

```bash
sudo nano /etc/sysctl.conf
net.ipv4.tcp_fastopen=3
net.ipv4.ip_forward=1

sudo sysctl -p
```

#### ShadowSocks Json config example ( rust )

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

#### ShadowSocks SS URL Format

```bash
sslocal --server-url "ss://dsadsadasda@11.11.49.193:11111" --local-addr "127.0.0.1:1080"
```

## OpenVpn Server

```bash
https://github.com/mlibre/openvpn-install
curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
chmod +x openvpn-install.sh
sudo ./openvpn-install.sh
port: random, tcp, curreny system resolver, compression yes
scp -P 2138 mlibre@87.107.164.69:/home/mlibre/mlibre.ovpn .

DNS_SERVER="1.1.1.1"
sudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"
sudo sed -i '/^\s*#*DNS=/d' /etc/systemd/resolved.conf && sudo sed -i '$ a\DNS='"$DNS_SERVER" /etc/systemd/resolved.conf
sudo systemctl daemon-reload; wait;
sudo systemctl restart systemd-networkd; wait;
sudo systemctl restart systemd-resolved; wait;
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns eth0 "$DNS_SERVER"
sudo resolvectl dns tun0 "$DNS_SERVER"
sudo resolvectl dns enp3s0 "$DNS_SERVER"
sudo resolvectl dns enp5s0 "$DNS_SERVER"
sudo resolvectl dns docker0 "$DNS_SERVER"
sudo resolvectl dns
Global: 1.1.1.1
Link 2 (enp3s0): 1.1.1.1
Link 8 (tun0): 1.1.1.1


Add these lines to your .ovpn file:

socks-proxy 127.0.0.1 1080
route SHADOWSOCKS_SERVER_IP 255.255.255.255 net_gateway
```

## V2Ray VPN/Proxy Server

### disable ping

```bash
sudo nano /etc/sysctl.conf
net.ipv4.conf.icmp_echo_ignore_all = 1

sudo nano /etc/sysctl.d/sys.conf
net.ipv4.conf.icmp_echo_ignore_all = 1
```

### Change server hostname
  
- vultr.com -> server setting -> ipv4 -> reverse DNS

```bash
  proxychains ssh -p port true@000.000.13.13

  sudo nano /etc/cloud/cloud.cfg
  # preserve_hostname: true
  
  sudo nano /etc/hostname
  domain.ga

  sudo nano /etc/hosts
  127.0.1.1 domain.ga

  sudo hostnamectl set-hostname domain.ga
```

### Add domain to the cloudflare
  
- SSL/TLS: Full
- Disable DNSSEC, Always Use HTTPS, Automatic HTTPS Rewrites
- Enable TLS 1.3, HTTP2/3, GRPC, WS and ... in Network/SSL tab
- Enable Development mode
- Add a "A" DNS record: domain.ga, DNS only ( no proxy )
- Add a "A" DNS record: v4p.domain.ga, proxy
- Add a "AAAA" DNS record: v6.domain.ga, proxy ( don't make dns-only for ipv6 )

### XUI Panel

```bash
sudo su
cd
apt purge snapd 
apt update
apt dist-upgrade
apt install git

sudo ufw allow 35400
sudo ufw allow 35400/udp
sudo ufw allow 35400/tcp
sudo ufw allow 2087
sudo ufw allow 2087/udp
sudo ufw allow 2087/tcp
sudo ufw allow 2096
sudo ufw allow 2096/udp
sudo ufw allow 2096/tcp
sudo ufw allow 8443
sudo ufw allow 8443/udp
sudo ufw allow 8443/tcp
sudo ufw allow 2053
sudo ufw allow 2053/udp
sudo ufw allow 2053/tcp
sudo ufw allow 3678
sudo ufw allow 3678/udp
sudo ufw allow 3678/tcp
sudo ufw allow 2289
sudo ufw allow 2289/udp
sudo ufw allow 2289/tcp
sudo ufw allow 9090
sudo ufw allow 9090/udp
sudo ufw allow 9090/tcp
sudo ufw allow 1080
sudo ufw allow 1080/udp
sudo ufw allow 1080/tcp
sudo ufw allow 443
sudo ufw allow 443/tcp
sudo ufw allow 443/udp
sudo ufw allow 80
sudo ufw allow 80/tcp
sudo ufw allow 80/udp
sudo ufw allow 5353
sudo ufw allow 5353/tcp
sudo ufw allow 5353/udp
sudo ufw allow 53
sudo ufw allow 53/tcp
sudo ufw allow 53/udp
sudo ufw allow OpenSSH
sudo ufw allow https
sudo ufw allow ssh
sudo ufw allow www
sudo ufw allow bootps
sudo ufw allow dns


cd
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
# cat /usr/local/x-ui/bin/config.json
# tar -czvf x-ui.tgz /usr/local/x-ui/
# proxychains scp -P 3612 true@199.247.13.13:x-ui.tgz .
# proxychains scp -P 3612 root@199.247.13.13:cert.crt .
# proxychains scp -P 3612 root@199.247.13.13:private.key .


sudo su
x-ui
# Open ports, active firewall
# install BBR
# revoke certificate the root domain
# issue certificate
# Set Panel port 8443
# Set the certs address for panel
ls
acme.sh --info
acme.sh --list
# lsof -i :80
```

- Open Panel (<https://domain.ga:8443/xui/inbounds>)
- trojan-tls-443-allow-insecure-alp-all
- vmess-ws-tls-2053-allow-insecure-aph-all
- vmess-h2-TLS-H2-allow-insecure-8443
- vless-2096-h2-reality-no-sniff
- In firefox: Check Proxy DNS when using SOCKS v5

<!-- - Create a free domain from freenom.com
  > Use Shekan DNS, Use fake american IP address -->
<!-- - Get a valid certificate using certbot -->

### Nekoray

- Nekoray Supports SS, Vmess and ....
- Download from <https://github.com/Matsuridayo/nekoray/releases>

```bash
aria2c -x 10 "https://github.com/MatsuriDayo/nekoray/releases/download/2.9/nekoray-2.9-2022-12-19-linux64.zip"
unzip nekoray-2.9-2022-12-19-linux64.zip
cd nekoray
./nekoray
# Settings -> security -> Skip TLS certificate
# paste vmess setting. Address: portal.domain.ga, host: portal.domain.ga
# paste vmess setting. Address: iv6.domain.ga, host: iv6.domain.ga
```

- Open Nekoray -> Routing Settings -> remote DNS: localhost

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
    "method":"chacha20-ietf-poly1305",
    "timeout":1000,
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
          "timeout": 1000
      }
    ],
    "mode":"tcp_and_udp",
    "local_port":1080,
    "local_address": "127.0.0.1",
    "fast_open": true,
    "dns": "1.1.1.1",
    "remote_dns_address": "8.8.8.8"
}

# sudo systemctl disable shadowsocks-rust-local@config
# sudo systemctl enable shadowsocks-rust-local@config
# sudo systemctl restart shadowsocks-rust-local@config
# sudo systemctl status shadowsocks-rust-local@config
# journalctl -f -u shadowsocks-rust-local@config

# sslocal -c /etc/shadowsocks/config.json -d
# sslocal --config /etc/shadowsocks-rust/germany.json -v --outbound-bind-interface lo --tun-interface-name tun0

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

## Proxy udp traffic from ssh

<https://superuser.com/questions/53103/udp-traffic-through-ssh-tunnel>

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
yay -S aur/windscribe-bin
# proxychains yay -S aur/windscribe-bin
```

### Warp

```bash
pamac insatll cloudflare-warp-bin

sudo nano /etc/systemd/resolved.conf
ResolveUnicastSingleLabel=yes
sudo systemctl restart systemd-resolved.service

sudo systemctl restart warp-svc.service 
sudo systemctl enable warp-svc.service 
warp-cli set-families-mode off
warp-cli delete
warp-cli register
warp-cli disconnect

warp-cli connect
warp-cli status
warp-cli settings

warp-cli set-mode --help
warp-cli set-mode warp
warp-cli set-mode doh
warp-cli set-mode warp+doh
warp-cli set-mode proxy
warp-cli set-proxy-port 4040 # Set the listening port for WARP proxy (127.0.0.1:{port})

warp-cli -vvv -l connect
warp-cli -l status
warp-cli enable-dns-log
warp-cli -l enable-dns-log
journalctl -xeu warp-svc.service
journalctl -u systemd-resolved -f
warp-diag

proxychains midori
```

## Set System-wide DNS

### Shekan DNS

```bash
# resolvectl query identitytoolkit.googleapis.com
DNS_SERVER="178.22.122.100"
sudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"
sudo sed -i '/^\s*#*DNS=/d' /etc/systemd/resolved.conf && sudo sed -i '$ a\DNS='"$DNS_SERVER" /etc/systemd/resolved.conf
sudo systemctl daemon-reload; wait;
sudo systemctl restart systemd-networkd; wait;
sudo systemctl restart systemd-resolved; wait;
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns eth0 "$DNS_SERVER"
sudo resolvectl dns tun0 "$DNS_SERVER"
sudo resolvectl dns enp3s0 "$DNS_SERVER"
sudo resolvectl dns enp5s0 "$DNS_SERVER"
sudo resolvectl dns docker0 "$DNS_SERVER"
sudo resolvectl dns
```

### 403 DNS

```bash
DNS_SERVER="10.202.10.102"
sudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"
sudo sed -i '/^\s*#*DNS=/d' /etc/systemd/resolved.conf && sudo sed -i '$ a\DNS='"$DNS_SERVER" /etc/systemd/resolved.conf
sudo systemctl daemon-reload; wait;
sudo systemctl restart systemd-networkd; wait;
sudo systemctl restart systemd-resolved; wait;
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns eth0 "$DNS_SERVER"
sudo resolvectl dns tun0 "$DNS_SERVER"
sudo resolvectl dns enp3s0 "$DNS_SERVER"
sudo resolvectl dns enp5s0 "$DNS_SERVER"
sudo resolvectl dns docker0 "$DNS_SERVER"
sudo resolvectl dns
```

### electrotm DNS

```bash
DNS_SERVER="78.157.42.101"
sudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"
sudo sed -i '/^\s*#*DNS=/d' /etc/systemd/resolved.conf && sudo sed -i '$ a\DNS='"$DNS_SERVER" /etc/systemd/resolved.conf
sudo systemctl daemon-reload; wait;
sudo systemctl restart systemd-networkd; wait;
sudo systemctl restart systemd-resolved; wait;
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns eth0 "$DNS_SERVER"
sudo resolvectl dns tun0 "$DNS_SERVER"
sudo resolvectl dns enp3s0 "$DNS_SERVER"
sudo resolvectl dns enp5s0 "$DNS_SERVER"
sudo resolvectl dns docker0 "$DNS_SERVER"
sudo resolvectl dns
```

### OpenDns

```bash
DNS_SERVER="208.67.222.222"
sudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"
sudo sed -i '/^\s*#*DNS=/d' /etc/systemd/resolved.conf && sudo sed -i '$ a\DNS='"$DNS_SERVER" /etc/systemd/resolved.conf
sudo systemctl daemon-reload; wait;
sudo systemctl restart systemd-networkd; wait;
sudo systemctl restart systemd-resolved; wait;
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns eth0 "$DNS_SERVER"
sudo resolvectl dns tun0 "$DNS_SERVER"
sudo resolvectl dns enp3s0 "$DNS_SERVER"
sudo resolvectl dns enp5s0 "$DNS_SERVER"
sudo resolvectl dns docker0 "$DNS_SERVER"
sudo resolvectl dns
```

### Global DNS

```bash
DNS_SERVER="1.1.1.1"
sudo sh -c "echo nameserver $DNS_SERVER > /etc/resolv.conf"
sudo sed -i '/^\s*#*DNS=/d' /etc/systemd/resolved.conf && sudo sed -i '$ a\DNS='"$DNS_SERVER" /etc/systemd/resolved.conf
sudo systemctl daemon-reload; wait;
sudo systemctl restart systemd-networkd; wait;
sudo systemctl restart systemd-resolved; wait;
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo resolvectl dns eth0 "$DNS_SERVER"
sudo resolvectl dns tun0 "$DNS_SERVER"
sudo resolvectl dns enp3s0 "$DNS_SERVER"
sudo resolvectl dns enp5s0 "$DNS_SERVER"
sudo resolvectl dns docker0 "$DNS_SERVER"
sudo resolvectl dns
```

### Setting domains directly in /etc/hosts

```bash
sudo nano /etc/hosts

10.202.10.4 securetoken.googleapis.com
50.7.87.84  identitytoolkit.googleapis.com
50.7.87.84  bard.google.com
50.7.85.222 openai.com
50.7.85.220 chat.openai.com
50.7.87.85  cdn.openai.com
188.68.52.244 www.bing.com
50.7.87.85  marketplace.visualstudio.com
50.7.85.222 auth0.openai.com
50.7.85.218 api.codium.ai
```

## Simple python http.server

```bash
python3 -m http.server --bind 0.0.0.0 --cgi 8000
```
