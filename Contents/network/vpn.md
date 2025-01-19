---
sidebar_position: 3
tags:
  - Linux
  - VPN
  - openVPN
  - proxy
---

# VPN & Proxy

## Proxy to VPN

```bash
pamac install tun2proxy
sudo tun2proxy --setup --proxy "http://127.0.0.1:2080" --dns over-tcp  --bypass "104.21.32.243"
# "104.21.32.243" is the IP of the VPN server
```

## Tor

In VPS:

```bash
sudo apt install tor
sudo systemctl enable tor
sudo systemctl restart tor
sudo nano /etc/tor/torrc
SocksPort 0.0.0.0:9050 # Bind to this address:port too.
SocksPolicy accept *

sudo systemctl restart tor
journalctl -u tor
curl --socks5 localhost:9050 https://check.torproject.org/

```

In local Linux:

```bash
ssh -L 9050:localhost:9050 -N mlibre@176.124.193.114
```

## SSH

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
ExecStart=ssh -L 0.0.0.0:1234:localhost:3128 -N server@95.216.208.60 -p 8756

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
ExecStart=ssh -D 3080 -C -N server@95.216.208.60 -p 8756

[Install]
WantedBy=graphical.target
```

## VPN over SSH

```bash
sudo pacman -S sshuttle

sudo sshuttle -v -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --disable-ipv6
# sudo nano /etc/resolv.conf
# nameserver 1.1.1.1
# nameserver 4.2.2.4
# sudo systemctl restart systemd-resolved.service
# sudo sshuttle -vv -r mlibre@176.124.193.114 0/0 -x 0.0.0.0  --dns --disable-ipv6
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
ssh root@ip
apt update
apt purge snapd ufw firewalld
apt dist-upgrade
apt install sudo git bash-completion zip unzip aria2 curl nano htop
adduser mlibre
usermod -a -G sudo mlibre
sudo sh -c "echo 'mlibre ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers"
# passwd mlibre
reboot

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
# install BBR, WARP

    # warp u => Uninstall Warp
    # warp a => Change Warp Account Type (free, plus, ...)
    # warp y => Turn on/off WireProxy

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
* vless-2096-h2-reality-no-sniff-stackoverflow.com:443
* trojan-tls-TCP-443-allow-insecure-alp-all-sni-stackoverflow.com
* vmess-ws-tls-2053-allow-insecure-aph-all
* vmess-h2-TLS-H2-HTTP1-allow-insecure-stackoverflow.com-80
* vmess-h2-TLS-H2-allow-insecure-8443
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

## Cloudflare worker

<https://github.com/iErfun/BPB-Panel-EN/>
