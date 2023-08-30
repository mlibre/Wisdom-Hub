---
sidebar_position: 1
tags:
  - Linux
  - Tips
  - Tricks
---

# Tips and Tricks

Linux Cheat Sheet is a collection of useful commands and shortcuts for Linux.  
And a comprehensive guide to various aspects of Linux operating system

* [Automatic Shutdown](#automatic-shutdown)
* [Changing monitor or screen Brightness and Gamma](#changing-monitor-or-screen-brightness-and-gamma)
* [Resetting sound, audio](#resetting-sound-audio)
* [Fixing broken grub](#fixing-broken-grub)
  * [EZ method](#ez-method)
  * [Second method](#second-method)
  * [Check boot errors, logs](#check-boot-errors-logs)
* [Resetting KDE](#resetting-kde)
* [Bash scripts](#bash-scripts)
  * [Mouse location](#mouse-location)
  * [Get screen resolution](#get-screen-resolution)
  * [Click, move and scroll on the screen](#click-move-and-scroll-on-the-screen)
* [Font](#font)
  * [Locations](#locations)
  * [List](#list)
  * [Fira Code](#fira-code)
  * [Cache](#cache)
* [Youtube-dl](#youtube-dl)
  * [Add Alias](#add-alias)
* [Instant cloud file share](#instant-cloud-file-share)
* [Windows 11](#windows-11)
  * [Make boatable usb](#make-boatable-usb)
  * [WoeUsb](#woeusb)
  * [Win2USB](#win2usb)
  * [Things to do after installing Windows 11](#things-to-do-after-installing-windows-11)

## Automatic Shutdown

|      Command      |            Description            |
| :---------------: | :-------------------------------: |
|  `shutdown now`   | Shutdown the system immediately.  |
| `shutdown -h +5`  | Shutdown the system in 5 minutes. |
| `shutdown -r now` |  Reboot the system immediately.   |
| `shutdown -r +10` | Reboot the system in 10 minutes.  |
| `shutdown -H now` |   Halt the system immediately.    |
|   `shutdown +5`   | Shutdown the system in 5 minutes. |

## Changing monitor or screen Brightness and Gamma

```bash
# List available outputs
xrandr

# Change the brightness and gamma of the HDMI-A-0 output
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

## Resetting sound, audio

```bash
pulseaudio --kill
pulseaudio --start
```

## Fixing broken grub

### EZ method

> Boot a live Manjaro image

```bash
sudo manjaro-chroot -a
grub-install
update-grub
```

> It will detect your current installed linux.  Restart the computer and it will boot the installed linux.  
Then run:

```bash
update-grub
```

### Second method

```bash
# Mount the file system and efi partition
sudo mount /dev/nvme0n1p4 /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /dev/pts /mnt/dev/pts
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo mkdir /efi
sudo mount /dev/nvme0n1p1 /efi

# Install grub and update grub configuration
sudo grub-install --root-directory=/mnt/ /dev/nvme0 --efi-directory=/efi --target=x86_64-efi --recheck
sudo chroot /mnt
sudo blkid -s UUID -o value /dev/nvme0n1p1
nano /etc/fstab
sudo update-grub
```

### Check boot errors, logs

```bash
sudo dmesg --level=emerg,alert,crit,err
# Open KsystemLog
```

## Resetting KDE

```bash
qdbus org.kde.KWin /Compositor suspend;
rm ~/.cache/ksycoca5*;
kquitapp5 plasmashell;
killall plasmashell;
kstart5 plasmashell;
```

## Bash scripts

### Mouse location

```bash
while true; do

    sleep 2
    xdotool getmouselocation

done
```

### Get screen resolution

```bash
  RES=$(xdpyinfo | grep dimensions | awk '{print $2}')
  WIDTH=$(echo $RES | awk -Fx '{print $1}')
  HEIGHT=$(echo $RES | awk -Fx '{print $2}')
```

### Click, move and scroll on the screen

```bash
#!/bin/bash

# Usage: ./click2.bash 3 30

# Check for two arguments
if [[ $# -ne 2 ]]; then
 echo "Usage: $0 <seconds> <sleep>"
 exit 1
fi

mousemoveAndClick() {
 # Move the mouse to the specified coordinates
 xdotool mousemove $1 $2
 # mouse click
 xdotool click 1
 # Sleep for 1 second
 sleep 2
}

scroll() {
 local direction=$1
 local count=$2
 if [[ $direction == "up" ]]; then
  for i in $(seq 1 $count); do
   xdotool click 4
   sleep 1
  done    
 elif [[ $direction == "down" ]]; then
  for i in $(seq 1 $count); do   
   xdotool click 5 
   sleep 1
  done
 fi
}

press_esc_and_click() {
 # Press ESC
 xdotool key Escape

 # Sleep for 1 second
 sleep 1

 # mouse click
 xdotool click 1
}

# Get the idle time in milliseconds
IDLE_TIME=$(echo "$1 * 1000" | bc)

while true; do
 # Get the current idle time of the mouse pointer in milliseconds
 IDLE=$(xprintidle)

 # Check if the mouse has been idle for at least the specified time
 if [[ $IDLE -ge $IDLE_TIME ]]; then
  # Get screen resolution
  # RES=$(xdpyinfo | grep dimensions | awk '{print $2}')
  # WIDTH=$(echo $RES | awk -Fx '{print $1}')
  # HEIGHT=$(echo $RES | awk -Fx '{print $2}')

  mousemoveAndClick 2512 1237
  press_esc_and_click

  mousemoveAndClick 1173 647
  mousemoveAndClick 1556 1230

  mousemoveAndClick 37 312
  mousemoveAndClick 1276 1068
  press_esc_and_click

  
  mousemoveAndClick 30 217
  scroll "down" 30
  mousemoveAndClick 1247 1195
  press_esc_and_click

 fi

 # Sleep for specified time
 sleep $2
done
```

And run:

```bash
chmod +x click.sh
./click.sh 10 0.5
```

## Font

### Locations

* `~/.local/share/fonts/`
* `/usr/local/share/fonts/`
* `/usr/share/fonts/`

### List

List installed fonts

```bash
fc-match -a
fc-list : file
```

### Fira Code

A popular code font.

```bash
sudo pacman -S ttf-fira-code
fc-match -a | grep -i fira
```

### Cache

```bash
sudo rm -v /var/cache/fontconfig/*
fc-cache -r
```

## Youtube-dl

```bash
# Install
sudo pacman -S youtube-dl yt-dlp

# Download best quality
yt-dlp "https://www.youtube.com/link"

yt-dlp -f b --write-description  --write-auto-sub --write-subs --embed-subs --write-info-json --max-filesize 100M --download-sections "*6:02-13:40" --proxy socks5://127.0.0.1:1080/ --verbose "https://www.youtube.com/link"

# List formats and sizes
yt-dlp -F "https://www.youtube.com/link"
yt-dlp -f 22 "https://www.youtube.com/link" 

youtube-dl -f best "https://www.youtube.com/link"
```

### Add Alias

```bash
nano ~/.bashrc
alias yd='yt-dlp -f b --write-auto-sub --write-subs --embed-subs --write-info-json --max-filesize 100M'
yd "link"

## Install Genymotoin Android emulator

```bash
sudo pamac install genymotion
```

## Instant cloud file share

```bash
# -F autodestroy=1 autodestroy on download or expire in 5
curl https://oshi.at -F f=@/home/true/backup.tar.gz -F expire=5 minutes
curl -F "file=@/home/mlibre/Downloads/backup.tar.gz" "https://file.io/?expires=1w"
```

## Windows 11

### Make boatable usb

### WoeUsb

```bash
sudo pacman -Suy p7zip python-pip python-wxpython
git clone https://github.com/WoeUSB/WoeUSB-ng.git
sudo pip3 install .
sudo woeusb --workaround-skip-grub --target-filesystem NTFS --device ~/Win11_22H2_English_x64v1.iso  /dev/sdb
```

### Win2USB

```bash
https://github.com/ValdikSS/windows2usb
chmod +x windows2usb*
./windows2usb-0.2.4-x86_64.AppImage /dev/sdb ~/Win11_22H2_English_x64v1.iso gpt+uefintfs
```

### Things to do after installing Windows 11

* Download and install all the updates
* Enable Ransomware protection
* Download DimScreen, Copy it to the download folder. Open. click on the settings. set brightness to 20%. Make a shortcut to the desktop
* search for gamma calibration in windows settings. set it to minimum
* Adjust date and time: auto. Timezone tehran +3:30
* Downloading updates active hours: 24 hours format. 1->11
* Disable all data usages settings in privacy and security
* uninstall mail, teams, one drive. xbox, facebook, microsoft todo, sticky notes, tips, weather
* Install firefox and login
* Install protonVPN
* personalize: sunrise
* network connection: metered connection
* Display: 3840x2160, 200%
* Steam: add your games' location to the Games' folder library. make it as default
* Steam: If your games are in a `NTFS` file system, follow [this](https://github.com/ValveSoftware/Proton/wiki/Using-a-NTFS-disk-with-Linux-and-Windows) to make game compatible with Linux.
* Pause windows updates for 5 weeks
* Check windows startups apps
* App store: disable automatic update
* Leave from "AMD user experience program". AMD settings -> last tab -> last option
* windows features: WSL, virtual machine, hyper-v (for android and linux apps)
* wsl --update
* wsl --install -d Ubuntu
* Disable Error Reporting: WIN+R -> services.msc -> Windows Error Reporting Service -> Properties -> disable
```
