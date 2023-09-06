---
sidebar_position: 7
tags:
  - Linux
  - Vulkan
  - Game
  - Graphic
  - GUI
---

# multimedia

## Font

### Locations

* `~/.local/share/fonts/`
* `/usr/local/share/fonts/`
* `/usr/share/fonts/`

### List

List installed fonts

```bash
fc-match -a
fc-list NotoSansBengali-Light
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

## Resetting KDE

```bash
qdbus org.kde.KWin /Compositor suspend;
rm ~/.cache/ksycoca5*;
kquitapp5 plasmashell;
killall plasmashell;
kstart5 plasmashell;
```

## Resetting sound, audio

```bash
systemctl --user restart pulseaudio

# OR

pulseaudio --kill
pulseaudio --start
```

## Changing monitor or screen Brightness and Gamma

```bash
# List available outputs
xrandr

# Screen 0: minimum 320 x 200, current 2560 x 1440, maximum 16384 x 16384
# DisplayPort-0 disconnected (normal left inverted right x axis y axis)
# HDMI-A-0 connected primary 2560x1440+0+0 (normal left inverted right x axis y axis) 621mm x 341mm
#    3840x2160     60.00 +  50.00    59.94    30.00    30.00    25.00    24.00    29.97    23.98  
#    2560x1600     59.97  
#    2560x1440     59.95* 


# Change the brightness and gamma of the HDMI-A-0 output
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

## Vulkan

```bash
sudo pacman -S vulkan-radeon lib32-vulkan-radeon
```

```bash
sudo nano /etc/environment
VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/radeon_icd.i686.json:/usr/share/vulkan/icd.d/radeon_icd.x86_64.json
```

## Steam

### Fix common bugs

* Move Games to your local linux machine
* Disable steam overlay, steam inputs, ...
* Link NTFS game folder

```bash
sudo mkdir -p /media/gamedisk
sudo blkid ## FA709D69709D2CFF
id -u ## 1000
id -g ## 1000
sudo nano /etc/fstab
UUID=FA709D69709D2CFF /media/gamedisk ntfs uid=1000,gid=1000,rw,user,exec,umask=000 0 0
## UUID=FA709D69709D2CFF /media/gamedisk lowntfs-3g uid=1000,gid=1000,rw,user,exec,umask=000 0 0
mkdir -p ~/.steam/steam/steamapps/compatdata
sudo reboot
ln -s ~/.steam/steam/steamapps/compatdata /media/gamedisk/Steam/steamapps/
```

### Scaling Interface

Run Steam like this:

```bash
STEAM_FORCE_DESKTOPUI_SCALING=1.5 steam-runtime
```

### Run using proxy

```bash
proxychains steam steam://rungameid/100
```

### Disable desktop effects

```bash
qdbus org.kde.KWin /Compositor suspend
## qdbus org.kde.KWin /Compositor resume
xset -dpms
xset s off
```

## lutris

### Installation

```bash
sudo pacman -S telegram-desktop lutris vkd3d tsocks proxychains
```

### With Proxy

```bash
sudo nano /etc/tsocks.conf

server = 127.0.0.1
server_port = 1080
server_type = 5

tsocks lutris
```

```bash
## make sure proxy_dns is commneted
proxychains lutris
```

### Proxy per game

```bash
# Check show advanced options
# Put /usr/bin/tsocks in
# Game -> configuration -> System options -> command prefix
```

### Fix Unexpected wine errors

```bash
rm -r ~/.wine
```

## AMDGPU

### TearFree, EnablePageFlip, DRI3

```bash
# settings files
/usr/share/X11/xorg.conf.d/
/etc/X11/xorg.conf.d/

sudo nano /usr/share/X11/xorg.conf.d/10-amdgpu.conf

Section "OutputClass"
    Identifier "AMDgpu"
    MatchDriver "amdgpu"
    Driver "amdgpu"
    Option "TearFree" "true"
    Option "DRI" "3"
    Option "EnablePageFlip" "on"
EndSection

cat /var/log/Xorg.0.log | grep -i tear
```

### Reducing DRI latency

```bash
sudo nano /etc/drirc

<driconf>
   <device>
       <application name="Default">
           <option name="vblank_mode" value="0" />
       </application>
   </device>
</driconf>
```

### check xorg config file

```bash
sudo Xorg -config /usr/share/X11/xorg.conf.d/10-amdgpu.conf
```

### Blocking radon

```bash
sudo nano /etc/modprobe.d/radeon.conf

blacklist radeon
```

### Install AMDGPU-PRO

```bash
# https://wiki.archlinux.org/title/AMDGPU_PRO
pamac install vulkan-amdgpu-pro lib32-vulkan-amdgpu-pro 
pamac install amdgpu-pro-oglp lib32-amdgpu-pro-oglp 
# pamac install amdgpu-pro-libgl lib32-amdgpu-pro-libgl
# pamac install opencl-amd
# pamac install amf-amdgpu-pro
glxinfo | grep "OpenGL vendor string"
lspci -v | grep -A 10 VGA
vk_pro steam
```

### Uninstall AMDGPU-PRO

```bash
pacman -R $(pacman -Qg Radeon_Software_for_Linux | cut -f2 -d" ")
```

### Blacklist Radeon

```bash
sudo nano /etc/modprobe.d/radeon.conf 
blacklist radeon
```
