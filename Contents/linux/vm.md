---
sidebar_position: 12
tags:
  - Linux
  - VM
  - Virtual Machine
  - KDM
---

# Virtual Machine

Check if your system supports virtualization:

```bash
lscpu | grep Virtualization
# Virtualization:          VT-x

lsmod | grep kvm
# kvm_intel             430080  0
# kvm                  1363968  1 kvm_intel
```

## Vagrant

```bash
sudo pacman -S virtualbox linux69-headers
sudo pacman -S vagrant 
mkdir debian
cd debian
vagrant init debian/bookworm64
nano Vagrantfile
# config.vm.network "forwarded_port", guest: 3000, host: 3000
# config.vm.box_check_update = false
# config.vm.network "public_network"

# Method 1
export http_proxy="http://127.0.0.1:2081"
export https_proxy="socks5://127.0.0.1:2080"
vagrant up

# Method 2
aria2c -x 15 https://vagrantcloud.com/debian/boxes/bookworm64/versions/12.20240503.1/providers/virtualbox/unknown/vagrant.box
vagrant box add debian/bookworm64 vagrant.box
vagrant up

# SSH
vagrant ssh
sudo apt update
sudo apt install curl wget nano net-tools
sudo cp /sbin/ifconfig /bin

# git, nodejs
sudo apt install git
## github cli: https://github.com/cli/cli/blob/trunk/docs/install_linux.md
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22
gh auth login
# revoke access
# https://github.com/settings/connections/applications/178c6fc778ccc68e1d6a

# reload
vagrant reload
```

## systemd-nspawn

```bash
mkdir ~/mycontainer
dd if=/run/media/mlibre/B/manjaro-kde-24.0.2-240611-linux69.iso of=mycontainer.img bs=4M status=progress conv=sync
mkdir ~/mycontainer/rootfs
sudo mount -o loop ~/mycontainer.img ~/mycontainer/rootfs
sudo umount /home/mlibre/mycontainer/rootfs
```

## podman

```bash
sudo pacman -Syu podman
```

## LXC

```bash
sudo pacman -S lxc lxd
lxc-checkconfig

sudo systemctl disable lxd
sudo systemctl disable lxc
sudo systemctl disable lxd.socket
sudo systemctl restart lxd

# sudo lxc list
# sudo lxc delete my-nodejs-container --force

sudo lxd init
sudo systemctl restart lxd
sudo lxc launch ubuntu:20.04 my-nodejs-container
sudo lxc exec my-nodejs-container -- /bin/bash

sudo lxc-create --name mycontainer --template download
```

## KVM
