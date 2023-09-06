---
sidebar_position: 16
tags:
  - Linux
  - XDG
  - Automatic
  - Shutdown
---

# Automatic Shutdown

|      Command      |            Description            |
| :---------------: | :-------------------------------: |
|  `shutdown now`   | Shutdown the system immediately.  |
| `shutdown -h +5`  | Shutdown the system in 5 minutes. |
| `shutdown -r now` |  Reboot the system immediately.   |
| `shutdown -r +10` | Reboot the system in 10 minutes.  |
| `shutdown -H now` |   Halt the system immediately.    |
|   `shutdown +5`   | Shutdown the system in 5 minutes. |

# XDG

## Make a startup script using XDG startup

```bash
mkdir -p ~/.config/autostart
nano ~/.config/autostart/gamma_on_startup.desktop
```

```bash
[Desktop Entry]
Name=gamma-on-startup
Type=Application
Exec=bash -c  "/usr/local/bin/gamma_on_startup &> /dev/null" 
Terminal=true
```

```bash
desktop-file-validate ~/.config/autostart/gamma_on_startup.desktop
chmod +x ~/.config/autostart/gamma_on_startup.desktop
```

Example program:

```bash
sudo chmod a+rwx /usr/local/bin/
nano /usr/local/bin/gamma_on_startup

sleep 5
export DISPLAY=:0
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

```bash
sudo chmod a+rwx /usr/local/bin/gamma_on_startup
```

## Reading symlinks

```bash
readlink /bin/init
# ../lib/systemd/systemd
```

## System Info

```bash
uname -a
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
