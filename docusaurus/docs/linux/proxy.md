---
sidebar_position: 10
tags:
  - Linux
  - Proxy
---

# Proxy

## proxychains

```bash
sudo nano /etc/proxychains.conf 
socks5  127.0.0.1 1080
# comment proxy_dns
# proxy_dns
```

## Using proxies

```bash
# Use proxychains to run yay, git, npm and pacman
proxychains yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm"  -S protonvpn
proxychains git clone https://github.com/boypt/vmess2json.git
sudo proxychains npm -g install v2ray-tools
sudo proxychains pacman -Syyuu

# Set the http and https proxy environment variables
export http_proxy=socks5://127.0.0.1:1080
export https_proxy=socks5://127.0.0.1:1080
```
