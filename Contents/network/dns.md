---
sidebar_position: 4
tags:
  - dns
---

# DNS

## Configuring DNS on Linux

### resolv.conf

```bash
sudo nano /etc/resolv.conf
nameserver 1.1.1.1
nameserver 1.0.0.1
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8
nameserver 8.8.4.4

# echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
```

### resolvconf

```bash
sudo systemctl enable resolvconf
sudo nano /etc/resolvconf/resolv.conf.d/head
sudo nano /etc/resolvconf/resolv.conf.d/base
nameserver 1.1.1.1
nameserver 208.67.222.222
nameserver 208.67.220.220
nameserver 8.8.8.8
```

### systemd-resolved

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

### dhclient

```bash
sudo nano /etc/dhcp/dhclient.conf
prepend domain-name-servers 208.67.222.222, 208.67.220.220, 8.8.8.8

sudo nano /etc/network/interfaces
iface eth0 inet static
  dns-nameservers 208.67.222.222 208.67.220.220 8.8.8.8
```

## Fast System-wide DNS Setup

### Shekan

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

### 403

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

### electrotm

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

### Cloudflare

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

## Setting domains directly in /etc/hosts

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

## Setting Up DNS Server

### Using Systemd

```bash
sudo nano /etc/systemd/resolved.conf
[Resolve]
DNS=1.1.1.1 9.9.9.9#dns.quad9.net 8.8.8.8
FallbackDNS=208.67.222.222 208.67.220.220
DNSSEC=yes
DNSOverTLS=no
Cache=yes        
DNSStubListener=yes
ReadEtcHosts=yes
#Domains=
#LLMNR=no
#MulticastDNS=no

sudo systemctl enable systemd-resolved.service
sudo systemctl restart systemd-resolved.service
sudo systemctl restart NetworkManager
```

### Using dnsmasq

```bash
sudo apt install dnsmasq
```
