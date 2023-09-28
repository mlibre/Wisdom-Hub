---
sidebar_position: 2
tags:
  - Linux
  - SSH
  - Port Forwarding
---

# SSH

|                     Command                     |                                           Description                                            |
| :---------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|                      `-L`                       |  Local Port Forwarding, accessing a remote port locally by binding local port to a remote port   |
|     `ssh -L 8080:localhost:80 user@remote`      |                                                                                                  |
|                      `-R`                       | Remote Port Forwarding, Open port on remote server that forwards to local port on another server |
|     `ssh -R 80:localhost:8080 user@remote`      |                                                                                                  |
|                      `-D`                       | Dynamic Port Forwarding, Creates a SOCKS proxy that can route traffic through an SSH connection  |
|            `ssh -D 8080 user@remote`            |                                                                                                  |
|                      `-A`                       |                Agent Forwarding - Forwards SSH keys/identities to remote servers                 |
|              `ssh -A user@remote`               |                                                                                                  |
|                      `-J`                       |                Jump Hosts - Proxy through multiple hosts to reach a destination.                 |
| `ssh -J user@host1,user@host2 user@destination` |                                                                                                  |
|                      `-N`                       |                Do not execute a remote command. Useful for just forwarding ports.                |
|    `ssh -N -L 8080:localhost:80 user@remote`    |                                                                                                  |
|                      `-f`                       |                  Requests ssh to go to background just before command execution                  |
|          `ssh -f user@remote command`           |                                                                                                  |
|                      `-v`                       |                     Verbose mode. Multiple -v options increase the verbosity                     |
|              `ssh -v user@remote`               |                                                                                                  |
|                      `-X`                       |            Enables X11 forwarding, allowing graphical applications to be run remotely            |
|              `ssh -X user@remote`               |                                                                                                  |

## ssh-keygen

SSH key pairs are essential for secure authentication. To generate an SSH key pair, you can use the `ssh-keygen` command. This command generates both a private key (usually stored in `~/.ssh/id_rsa`) and a public key (stored in `~/.ssh/id_rsa.pub`).

To generate a new key pair, you can use the following command:

```bash
ssh-keygen
```

## ssh-copy-id

```bash
sudo ssh-copy-id -i .ssh/id_rsa.pub -p 22 mlibre@192.168.1.136
```

## SSH Config File

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

## Local Port Forwarding (-L)

Allows accessing a remote port locally by binding a local port to a remote port. Useful for accessing services only available on loopback.

Example:

```bash
ssh -N -f -L 1337:127.0.0.1:80 root@internal-web.int
```

## Remote Port Forwarding (-R)

Opens a port on a remote server that forwards to a local port on another server. Useful for pivoting through networks.

Example:

```bash
ssh -N -f -R 3000:127.0.0.1:80 root@vuln-server.int
```

## Dynamic Port Forwarding (-D)

Creates a SOCKS proxy that can route traffic through an SSH connection. Useful for proxying web traffic.

Example:

```bash
ssh -N -f -D 8080 root@vuln-server.int
ssh -D 0.0.0.0:8080 -N mlibre@51.89.88.80
```

## Agent Forwarding (-A)

Forwards SSH keys/identities to remote servers. Can be risky if keys have high privileges.

Example:

```bash
ssh -A -J root@vuln-server.int root@internal-web.int
```

## Jump Hosts (-J)

Proxy through multiple hosts to reach a destination.

Example:

```bash
ssh -J root@host1,root@host2 root@destination
```

## Script to fix ssh and reset to default configs

```bash
#!/bin/bash

new_config="
Port 22
AddressFamily any
ListenAddress 0.0.0.0

SyslogFacility AUTH
LogLevel INFO

PermitRootLogin yes
PubkeyAuthentication yes

PasswordAuthentication yes

UsePAM yes

X11Forwarding yes

Subsystem       sftp    /usr/lib/ssh/sftp-server
MaxSessions 1000
"

# Backup the existing SSH server configuration
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup

# Write the new configuration to the SSH server config file
echo "$new_config" | sudo tee /etc/ssh/sshd_config > /dev/null

echo "SSH server configuration has been replaced."
sudo ufw disable
sudo iptables -F
sudo mv /etc/hosts.deny /etc/hosts.deny_backup
sudo touch /etc/hosts.deny
sudo systemctl enable sshd
sudo systemctl restart sshd

# User creation
new_username="mlibre"
new_password="password"

sudo useradd -m -s /bin/bash "$new_username"
echo "$new_username:$new_password" | sudo chpasswd

# Add your public key to the new user's authorized_keys file
your_public_key="your ssh public key"

sudo mkdir -p /home/"$new_username"/.ssh
echo "$your_public_key" | sudo tee -a /home/"$new_username"/.ssh/authorized_keys > /dev/null
sudo chown -R "$new_username":"$new_username" /home/"$new_username"/.ssh
sudo chmod 700 /home/"$new_username"/.ssh
sudo chmod 600 /home/"$new_username"/.ssh/authorized_keys

echo "Your public key has been added to the authorized_keys file of user $new_username."

echo "$new_username ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/"$new_username" > /dev/null

echo "$new_username - maxlogins 1000" | sudo tee -a /etc/security/limits.conf > /dev/nulls
echo "fs.file-max = 65535" | sudo tee -a /etc/sysctl.conf > /dev/null
```
