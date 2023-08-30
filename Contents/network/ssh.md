---
sidebar_position: 2
tags:
  - Linux
  - VPN
  - SSH
---

# SSH

| Option |                                                                            Description                                                                             |                     Example                     |
| :----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------: |
|  `-L`  | Local Port Forwarding - Allows accessing a remote port locally by binding a local port to a remote port. Useful for accessing services only available on loopback. |     `ssh -L 8080:localhost:80 user@remote`      |
|  `-R`  |          Remote Port Forwarding - Opens a port on a remote server that forwards to a local port on another server. Useful for pivoting through networks.           |     `ssh -R 80:localhost:8080 user@remote`      |
|  `-D`  |                 Dynamic Port Forwarding - Creates a SOCKS proxy that can route traffic through an SSH connection. Useful for proxying web traffic.                 |            `ssh -D 8080 user@remote`            |
|  `-A`  |                           Agent Forwarding - Forwards SSH keys/identities to remote servers. Can be risky if keys have high privileges.                            |              `ssh -A user@remote`               |
|  `-J`  |                                                 Jump Hosts - Proxy through multiple hosts to reach a destination.                                                  | `ssh -J user@host1,user@host2 user@destination` |
|  `-N`  |                                                 Do not execute a remote command. Useful for just forwarding ports.                                                 |    `ssh -N -L 8080:localhost:80 user@remote`    |
|  `-f`  |                                                  Requests ssh to go to background just before command execution.                                                   |          `ssh -f user@remote command`           |
|  `-v`  |                        Verbose mode. Causes ssh to print debugging messages about its progress. Multiple -v options increase the verbosity.                        |              `ssh -v user@remote`               |

# Local Port Forwarding (-L)

Allows accessing a remote port locally by binding a local port to a remote port. Useful for accessing services only available on loopback.

Example:

```bash
ssh -N -f -L 1337:127.0.0.1:80 root@internal-web.int
```

# Remote Port Forwarding (-R)

Opens a port on a remote server that forwards to a local port on another server. Useful for pivoting through networks.

Example:

```bash
ssh -N -f -R 3000:127.0.0.1:80 root@vuln-server.int
```

# Dynamic Port Forwarding (-D)

Creates a SOCKS proxy that can route traffic through an SSH connection. Useful for proxying web traffic.

Example:

```bash
ssh -N -f -D 8080 root@vuln-server.int
ssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80
```

# Agent Forwarding (-A)

Forwards SSH keys/identities to remote servers. Can be risky if keys have high privileges.

Example:

```bash
ssh -A -J root@vuln-server.int root@internal-web.int
```

# Jump Hosts (-J)

Proxy through multiple hosts to reach a destination.

Example:

```bash
ssh -J root@host1,root@host2 root@destination
```

The guide covers many other useful SSH concepts like port forwarding, SSH config, and key generation.

# ssh-keygen

SSH key pairs are essential for secure authentication. To generate an SSH key pair, you can use the `ssh-keygen` command. This command generates both a private key (usually stored in `~/.ssh/id_rsa`) and a public key (stored in `~/.ssh/id_rsa.pub`).

To generate a new key pair, you can use the following command:

```bash
ssh-keygen
```

# ssh-copy-id

```bash
sudo ssh-copy-id -i .ssh/id_rsa.pub -p 22 mlibre@192.168.1.136
```

# SSH Config File

```bash
nano ~/.ssh/config

host funserver
  User mlibre
  IdentityFile /home/mlibre/.ssh/id_rsa
  Port 2222
```

```bash
ssh funserver
```

# VPN over SSH

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
