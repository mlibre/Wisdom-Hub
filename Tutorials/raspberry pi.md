---
sidebar_position: 4
tags:
  - Raspberry pi
---

# Raspberry pi

- [Raspberry Pi OS](#raspberry-pi-os)
- [First Things](#first-things)
- [rasp-config](#rasp-config)
- [Fix $PATH](#fix-path)
- [Network](#network)
  - [Disable ipv6](#disable-ipv6)
  - [Disable WiFi and Bluetooth](#disable-wifi-and-bluetooth)
  - [Find rpi in the Network](#find-rpi-in-the-network)
  - [Enable ipv4 forwarding](#enable-ipv4-forwarding)
  - [Static DNS](#static-dns)
- [Make Swap File](#make-swap-file)
- [VNC](#vnc)
  - [Enable VNC](#enable-vnc)
  - [Fix VNC Low Resolution](#fix-vnc-low-resolution)
- [Install Ajenti 2](#install-ajenti-2)
- [Install Nekoray](#install-nekoray)
- [Install NodeJs](#install-nodejs)
- [Install Whisper](#install-whisper)
- [Install Latest Python](#install-latest-python)
- [AUTOMATIC1111 Stable diffusion webui](#automatic1111-stable-diffusion-webui)
- [chroot](#chroot)
  - [mount](#mount)
  - [umount](#umount)

## Raspberry Pi OS

- Download the [Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/) image
- Install `rpi-imager`

```bash
sudo pacman -S rpi-imager
```

- Connect your SD card to your computer and run:

```bash
rpi-imager
```

- First use `Erase the SD card` options
- From the settings menu, you can set the `Hostname` and ...
- Select `Write` and wait for the process to finish
- Connect the Raspberry Pi to your computer or router and run:

```bash
sudo nmap -sP 192.168.1.0/24 | grep -B 2 -i raspberry

Nmap scan report for 192.168.1.136
Host is up (0.00047s latency).
MAC Address: DC:A6:32:9A:EF:16 (Raspberry Pi Trading)
```

- Now you can connect to your Raspberry Pi using `ssh`:

```bash
sudo ssh-copy-id -i .ssh/id_rsa.pub -p 22 mlibre@192.168.1.136
ssh mlibre@192.168.1.136
sudo passwd
```

## First Things

```bash
sudo rm cron.daily/apt-compat

sudo apt-get purge geany mariadb-common apt-listchanges cups cups-browsed cups-daemon apparmor
sudo apt autoremove --purge
sudo rpi-update
# rollback from rpi-update
# sudo apt install --reinstall raspberrypi-bootloader raspberrypi-kernel raspberrypi-kernel-headers

sudo apt update
sudo apt full-upgrade
sudo apt install -y protobuf-compiler protobuf-c-compiler libyaml-cpp0.6 libyaml-cpp-dev libzxingcore-dev libzxingcore1 qtbase5-dev qtbase5-dev-tools build-essential cmake linux-headers-arm64 ninja-build libqt5svg5-dev qttools5-dev mlocate ruby-google-protobuf python3-protobuf r-cran-rprotobuf libupb0 libupb-dev gogoprotobuf golang-gitaly-proto-dev golang-github-gogo-googleapis-dev golang-gogoprotobuf-dev gradle-plugin-protobuf grpc-proto libactivemq-protobuf-java libarcus-dev libarcus3 libghc-protobuf-dev libghc-protobuf-prof libhawtbuf-java g++ git bazel-bootstrap python3-grpc-tools python3-arcus protoc-gen-go libprotozero-dev libprotoc-dev libqt5x11extras5-dev fswebcam python3-pip libsdl2-dev wget git python3 python3-venv libgdbm-dev libsqlite3-dev tk-dev libncursesw5-dev aria2 libdb5.3-dev llvm autoconf rfkill raspberrypi-ui-mods realvnc-vnc-server raspberrypi-bootloader raspberrypi-kernel raspberrypi-kernel-headers 

sudo apt clean
sudo apt autoclean
sudo rpi-update

sudo usermod -a -G video $USER
sudo usermod -a -G gpio $USER

sudo updatedb
pip install pyyaml
pip3 install torch torchvision torchaudio

sudo reboot
```

## rasp-config

```bash
sudo raspi-config
```

- `Update`
- `Display Options`: `VNC Resolution`
- `Performance`: `GPU Memory` to min of `896`
- `Advance Options`: `Expand filesystem`, `Predicetd Network Interface Names`

## Fix $PATH

```bash
nano .bashrc

if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi
```

## Network

### Disable ipv6

```bash
sudo nano /etc/sysctl.conf
net.ipv6.conf.all.disable_ipv6 = 1
```

### Disable WiFi and Bluetooth

```bash
sudo systemctl disable wpa_supplicant
sudo systemctl disable bluetooth
sudo systemctl disable hciuart
```

```bash
sudo rfkill block wifi
sudo rfkill block bluetooth
```

```bash
sudo nano /boot/config.txt

[all]
dtoverlay=disable-wifi
dtoverlay=disable-bt
```

### Enable ipv4 forwarding

```bash
sudo nano /etc/sysctl.conf

net.ipv4.ip_forward=1

sudo sysctl -p
```

### Find rpi in the Network

```bash
sudo nmap -sP 192.168.1.0/24 | grep -B 2 -i raspberry
```

### Improve Performace

```bash
sudo nano /etc/sysctl.conf
net.ipv4.tcp_rmem = 4096 87380 629145
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_no_metrics_save = 1
net.ipv4.tcp_moderate_rcvbuf = 1
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_sack = 0
net.ipv4.tcp_window_scaling = 1
```

### Static DNS

```bash
sudo nano /etc/dhcpcd.conf

static domain_name_servers=1.1.1.1 8.8.8.8
```

## Make Swap File

```bash
sudo dphys-swapfile swapoff
sudo nano /etc/dphys-swapfile
CONF_SWAPSIZE=10240
CONF_MAXSWAP=12240
sudo dphys-swapfile setup
sudo dphys-swapfile swapon

# sudo nano /etc/sysctl.conf
# vm.swappiness=10
```

## VNC

### Enable VNC

```bash
sudo raspi-config
# Enable VNC

sudo systemctl restart vncserver-x11-serviced.service
sudo systemctl status vncserver-x11-serviced.service
sudo nano /root/.vnc/config.d/vncserver-x11

AllowChangeDefaultPrinter=0
Authentication=VncAuth
EnableAutoUpdateChecks=0
Encryption=PreferOff

sudo vncpasswd -legacy -service
```

### Fix VNC Low Resolution

```bash
sudo nano /boot/config.txt

framebuffer_width=1920
framebuffer_height=1080
hdmi_force_hotplug=1
hdmi_group=2
hdmi_mode=16
```

## Docker

```bash
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker
# Dont use sudo anymore
docker run hello-world

sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

### Fix permission

If you encounter any permission issue

```bash
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R
```

### Make a custom docker image

```bash
docker pull ubuntu
docker ps -a
docker images
docker run --name proxy_container -it ubuntu /bin/bash
apt update
apt install sudo htop
docker commit proxy_container proxy_image
docker save proxy_image proxy_image.tar
```

## Install Ajenti 2

```bash
curl https://raw.githubusercontent.com/ajenti/ajenti/master/scripts/install.sh | sudo bash -s -
sudo systemctl enable ajenti.service
sudo systemctl start ajenti.service
sudo tail -f /var/log/ajenti/ajenti.log
```

- Open `http://192.168.1.136:8000` and login with `root` and `password`

## Install Nekoray

```bash
# https://github.com/MatsuriDayo/nekoray/blob/main/docs/Build_Linux.md
git clone https://github.com/MatsuriDayo/nekoray.git --recursive
cd nekoray
./libs/build_deps_all.sh
mkdir build
cd build
cmake -GNinja ..
ninja
```

- Install `Traffic Widget`, `Cron`, `Date And Time` and `Network` plugins

## Install NodeJs

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt-get install -y nodejs
```

## Install Whisper

```bash
git clone https://github.com/ggerganov/whisper.cpp.git
cd whisper.cpp
# git checkout reaspberry
bash ./models/download-ggml-model.sh base.en
bash ./models/download-ggml-model.sh small
make
make stream
make base
./main -f samples/jfk.wav --print-colors
# ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav
```

## Install Latest Python

```bash
# https://www.python.org/downloads/
mkdir python3.10
cd python3.10
wget https://www.python.org/ftp/python/3.10.10/Python-3.10.10.tar.xz
tar xvf Python-3.10.10.tar.xz
rm Python-3.10.10.tar.xz
cd Python-3.10.10
./configure --enable-optimizations --with-ensurepip=install
make -j 8
sudo make altinstall
sudo make install
sudo rm /usr/bin/python
sudo rm /usr/bin/python3
sudo ln -s /usr/local/bin/python3.10 /usr/bin/python
sudo ln -s /usr/local/bin/python3.10 /usr/bin/python3
```

## AUTOMATIC1111 Stable diffusion webui

```bash
# bash <(wget -qO- https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh)
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
cd stable-diffusion-webui
rm -r venv/
pip cache purge
rm -r ~/.cache/pip/
git pull
./webui.sh
```

## chroot

To fix bootloader, kernel and other issues

### mount

```bash
mkdir /media/rootfs
mount /dev/sdb2 /media/rootfs
mount /dev/sdb1 /media/rootfs/boot
cp /usr/bin/qemu-arm-static /media/rootfs
mount -o bind /dev /media/rootfs/dev/
mount -o bind /proc/ /media/rootfs/proc/
mount -o bind /sys/ /media/rootfs/sys/
mount -o bind /dev/pts/ /media/rootfs/dev/pts/

chroot /media/rootfs/

export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
sudo dpkg-reconfigure locales
apt remove apt-listchanges
apt update
apt full-upgrade
apt install --reinstall raspberrypi-bootloader raspberrypi-kernel raspberrypi-kernel-headers
```

### umount

```bash
umount /media/rootfs/dev/pts
umount /media/rootfs/proc/
umount /media/rootfs/sys/
umount /media/rootfs/boot
umount /media/rootfs/dev/
umount /media/rootfs/
```
