---
sidebar_position: 1
tags:
  - Network
  - DNS
  - VPN
---

# Network Tips

This section is a comprehensive guide to various topics related to Networking, including disabling IPv6, setting up DNS servers, VPN servers, and proxy servers. There are also topics on how to use different VPN services and redirect network traffic. This section provides in-depth information on how to configure different VPN protocols like OpenVPN, V2Ray, ShadowSocks, and WireGuard.

* [Disable IPV6](#disable-ipv6)
* [Setup DNS](#setup-dns)
  * [Using resolv.conf](#using-resolvconf)
  * [Using systemd](#using-systemd)
  * [DNS Server - dhclient](#dns-server---dhclient)
* [Flush System Settings](#flush-system-settings)
* [Open an application over socks](#open-an-application-over-socks)
* [Setup DNS Server](#setup-dns-server)
  * [Using Systemd](#using-systemd-1)
  * [Using dnsmasq](#using-dnsmasq)
* [Outline Proxy Server + Jump Server](#outline-proxy-server--jump-server)
  * [Initialization](#initialization)
  * [Outline Server](#outline-server)
  * [Jump server](#jump-server)
    * [With IPTables](#with-iptables)
    * [Using SSH Forward](#using-ssh-forward)
    * [Using socat](#using-socat)
    * [Optimization](#optimization)
    * [Fake Traffic script](#fake-traffic-script)
  * [Client-Side](#client-side)
    * [ShadowSocks Json config example ( rust )](#shadowsocks-json-config-example--rust-)
    * [ShadowSocks SS URL Format](#shadowsocks-ss-url-format)
* [Redirecting the whole network traffic](#redirecting-the-whole-network-traffic)
* [Proxy udp traffic from ssh](#proxy-udp-traffic-from-ssh)
* [Set System-wide DNS](#set-system-wide-dns)
  * [Shekan DNS](#shekan-dns)
  * [403 DNS](#403-dns)
  * [electrotm DNS](#electrotm-dns)
  * [OpenDns](#opendns)
  * [Global DNS](#global-dns)
  * [Setting domains directly in /etc/hosts](#setting-domains-directly-in-etchosts)
* [Simple python http.server](#simple-python-httpserver)

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

* Server: NetherLand
* OS: Ubuntu 22.04

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

* SSHD configs:

```bash
sudo nano /etc/ssh/sshd_config
AllowAgentForwarding yes
AllowTcpForwarding yes
TCPKeepAlive yes
PermitTunnel yes
GatewayPorts yes
```

* SysCtl Settings:

```bash
sudo nano /etc/sysctl.conf
net.ipv4.tcp_fastopen=3
net.ipv4.ip_forward=1

sudo sysctl -p
```

* [BBR script](https://github.com/teddysun/across/blob/master/bbr.sh)

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

* Install shadowSocks in Server B
* Run following commands in server A

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

* SSHD configs:

```bash
sudo nano /etc/ssh/sshd_config
AllowAgentForwarding yes
AllowTcpForwarding yes
TCPKeepAlive yes
PermitTunnel yes
GatewayPorts yes
```

* SysCtl Settings:

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

## Redirecting the whole network traffic

```bash
sudo ip route add 192.168.1.0/24 dev ppp0
# ppp0: vpn name
# 192.168.1.0: IP range
```

## Proxy udp traffic from ssh

<https://superuser.com/questions/53103/udp-traffic-through-ssh-tunnel>

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
