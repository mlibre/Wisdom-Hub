---
sidebar_position: 2
tags:
  - Linux
  - VPN
  - SSH
---

# VPN over SSH

```bash
sudo pacman -S sshuttle

sudo sshuttle -v -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0/0 -x 51.89.88.80 --dns --disable-ipv6
# sudo sshuttle -vvvv -r mlibre@51.89.88.80 0.0.0.0/0 --dns --disable-ipv6
```

## VPN Over Socks  ( openVPN )

> SS server address: 87.80.80.80

```bash
nano mlibre.ovpn
socks-proxy 127.0.0.1 1090
route 87.80.80.80 255.255.255.255 net_gateway
route 192.168.0.0 255.255.0.0 net_gateway
```

# SSH Dynamic Tunneling

```bash
ssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80

# Setup DNS

firefox: settings -> network -> socks5, proxy over dns
chromium: search proxy in the setting. open system proxy settings. manual specified: socks proxy: localhost 1080
```
