---
sidebar_position: 5
tags:
  - Network
  - IPV6
  - socks
---

# Network Tips

This section is a comprehensive guide to various topics related to Networking, including disabling IPv6, setting up DNS servers, VPN servers, and proxy servers. There are also topics on how to use different VPN services and redirect network traffic. This section provides in-depth information on how to configure different VPN protocols like OpenVPN, V2Ray, ShadowSocks, and WireGuard.

* [Disable IPV6](#disable-ipv6)
* [Open an application over socks](#open-an-application-over-socks)
* [Redirecting the whole network traffic](#redirecting-the-whole-network-traffic)
* [Simple python http server](#simple-python-http-server)

## Disable IPV6

```bash
sudo nano /etc/sysctl.conf

net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1

sudo sysctl -p 
```

## Open an application over socks

```bash
torsocks deluge
tsokcs deluge
```

## Redirecting the whole network traffic

```bash
sudo ip route add 192.168.1.0/24 dev ppp0
# ppp0: vpn name
# 192.168.1.0: IP range
```

## Simple python http server

```bash
python3 -m http.server --bind 0.0.0.0 --cgi 8000
```
