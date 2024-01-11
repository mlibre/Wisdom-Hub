---
sidebar_position: 3
tags:
  - Linux
  - VPN
  - openVPN
---

# VPN

## SSH

### HTTP/S proxy over SSH

* Install squid on the server

  ```bash
    sudo pacman -S squid
    sudo systemctl enable squid
    sudo systemctl start squid
    sudo nano /etc/squid/squid.conf
    http_port 3128
  ```

* Configure the client

```bash
sudo nano /etc/systemd/system/sshtunnel.service

[Unit]
Description=SSH Tunnels
After=network.target

[Service]
User=mlibre
Restart=always
RestartSec=20
ExecStart=ssh -L 0.0.0.0:1234:localhost:3128 -N amita@95.216.208.60 -p 8756

[Install]
WantedBy=graphical.target
```

### Socks proxy over SSH

```bash
sudo nano /etc/systemd/system/sshtunnelsocks.service
[Unit]
Description=SSH Tunnels
After=network.target

[Service]
User=mlibre
Restart=always
RestartSec=20
ExecStart=ssh -D 3080 -C -N amita@95.216.208.60 -p 8756

[Install]
WantedBy=graphical.target
```

## VPN over SSH

```bash
sudo pacman -S sshuttle

sudo sshuttle -v -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --dns --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0.0.0.0/0 --dns --disable-ipv6
```

## openVPN Over Socks

> SS server address: 87.80.80.80

```bash
nano mlibre.ovpn
socks-proxy 127.0.0.1 1090
route 87.80.80.80 255.255.255.255 net_gateway
route 192.168.0.0 255.255.0.0 net_gateway
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
  
* vultr.com -> server setting -> ipv4 -> reverse DNS

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
  
* SSL/TLS: Full
* Disable DNSSEC, Always Use HTTPS, Automatic HTTPS Rewrites
* Enable TLS 1.3, HTTP2/3, GRPC, WS and ... in Network/SSL tab
* Enable Development mode
* Add a "A" DNS record: domain.ga, DNS only ( no proxy )
* Add a "A" DNS record: v4p.domain.ga, proxy
* Add a "AAAA" DNS record: v6.domain.ga, proxy ( don't make dns-only for ipv6 )

### XUI Panel

```bash
sudo su
cd
apt purge snapd 
apt update
apt dist-upgrade
apt install git

sudo ufw allow 2053
sudo ufw allow 2053/udp
sudo ufw allow 2053/tcp
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
# Set the certs for panel
ls
acme.sh --info
acme.sh --list
# lsof -i :80
```

* Open Panel (<https://domain.ga:8443/xui/inbounds>)
* trojan-tls-TCP-443-allow-insecure-alp-all-sni-stackoverflow.com
* vmess-ws-tls-2053-allow-insecure-aph-all
* vmess-h2-TLS-H2-HTTP1-allow-insecure-stackoverflow.com-80
* vmess-h2-TLS-H2-allow-insecure-8443
* vless-2096-h2-reality-no-sniff
* In firefox: Check Proxy DNS when using SOCKS v5

<!-- - Create a free domain from freenom.com
  > Use Shekan DNS, Use fake american IP address -->
<!-- - Get a valid certificate using certbot -->

### Nekoray

* Nekoray Supports SS, Vmess and ....
* Download from <https://github.com/Matsuridayo/nekoray/releases>

```bash
aria2c -x 10 "https://github.com/MatsuriDayo/nekoray/releases/download/2.9/nekoray-2.9-2022-12-19-linux64.zip"
unzip nekoray-2.9-2022-12-19-linux64.zip
cd nekoray
./nekoray
# Settings -> security -> Skip TLS certificate
# paste vmess setting. Address: portal.domain.ga, host: portal.domain.ga
# paste vmess setting. Address: iv6.domain.ga, host: iv6.domain.ga
```

* Open Nekoray -> Routing Settings -> remote DNS: localhost

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

## Free VPNs

### VPNBook

* Download OpenVpn file: <https://www.vpnbook.com/freevpn>
* Import in NetworkManger
* Enter username and password from here: <https://www.vpnbook.com/freevpn>

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

* Download openVpn config file form here: <https://account.protonvpn.com/downloads>
* Copy openVPn credentials: <https://account.protonvpn.com/account>
* Network Manager: New -> Import OpenVpn Saved Configuration. Paste credentials

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
