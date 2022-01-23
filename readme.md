# Linux Cheat Sheet

Linux Cheat Sheet is a collection of useful commands and shortcuts for Linux.

- [Automatic Shutdown](#automatic-shutdown)
- [Changing monitor, screen gamma](#changing-monitor-screen-gamma)
- [Systemd, systemctl](#systemd-systemctl)
  - [Reloading](#reloading)
  - [Find services failed to start](#find-services-failed-to-start)
  - [Journal Size](#journal-size)
  - [Starting a script after GUI has loaded](#starting-a-script-after-gui-has-loaded)
  - [Run a script after suspending has finished (resume)](#run-a-script-after-suspending-has-finished-resume)
  - [Run a script after system-sleep resume](#run-a-script-after-system-sleep-resume)
  - [Unit files' locations](#unit-files-locations)
- [XDG](#xdg)
  - [Make a startup script using XDG startup](#make-a-startup-script-using-xdg-startup)
- [Autostarts and Startup scripts and programs locations](#autostarts-and-startup-scripts-and-programs-locations)
- [VPN](#vpn)
  - [Redirecting the whole traffic](#redirecting-the-whole-traffic)
- [Font](#font)
  - [Location](#location)
  - [List](#list)
  - [Fira Code](#fira-code)
- [Backup using Rsync](#backup-using-rsync)
- [Things to do after installing Manjaro/Arch Linux](#things-to-do-after-installing-manjaroarch-linux)

## Automatic Shutdown

```bash
sudo shutdown -P +220 ## in 220 minutes, 3:30 hours
```

## Changing monitor, screen gamma

```bash
xrandr --output HDMI-A-0 --brightness 0.75
```

## Systemd, systemctl

### Reloading

```bash
systemctl daemon-reload
```

### Find services failed to start

```bash
systemctl --state=failed
```

### Journal Size

```bash
sudo nano /etc/systemd/journald.conf
```

```bash
SystemMaxUse=100M
```

### Starting a script after GUI has loaded

```bash
sudo nano /lib/systemd/system/myprogram.service
```

```bash
[Unit]
Description=Set gamma on system boots up
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=idle
ExecStartPost=/bin/sleep 5
ExecStart=/usr/bin/myprogram
[Install]
WantedBy=graphical.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable myprogram.service
systemctl status myprogram
journalctl -u myprogram
```

### Run a script after suspending has finished (resume)

```bash
sudo nano /etc/systemd/system/myprogram.service
```

```bash
[Unit]
After=suspend.target
[Service]  
Type=simple
ExecStart=/usr/bin/myprogram
[Install]
WantedBy=suspend.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable myprogram.service
systemctl status myprogram
journalctl -u myprogram
```

### Run a script after system-sleep resume

```bash
sudo nano /lib/systemd/system-sleep/myprogram.sh
```

```bash
#!/bin/sh
PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/sbin:/usr/local/bin
case $1 in
 post)
  /usr/bin/myprogram
 ;;
esac

exit 0
```

```bash
sudo chmod +x /lib/systemd/system-sleep/myprogram
sudo systemctl enable myprogram
```

### Unit files' locations

```bash
systemctl show --property=UnitPath
```

## XDG

### Make a startup script using XDG startup

```bash
nano ~/.config/autostart/gamma-on-startup.desktop
```

```bash
[Desktop Entry]
Name=gamma-on-startup
Type=Application
Exec=bash -c  '/usr/bin/resume &> resume.log' 
Terminal=true
```

```bash
desktop-file-validate ~/.config/autostart/gamma-on-startup.desktop
chmod +x ~/.config/autostart/gamma-on-startup.desktop
cat /usr/bin/resume

sleep 5
xrandr --output HDMI-A-0 --brightness 0.75
echo "gamma is changed"
```

## Autostarts and Startup scripts and programs locations

- nano .profile
- nano /etc/profile
- ls /etc/profile.d/
- ls ~/.config/autostart
- ls /etc/xdg/autostart
- ls /usr/share/xsessions
- ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
- sudo systemctl list-unit-files --type=service --state=enabled --all
- ls /etc/init.d/
- nano ~/.xinitrc
- nano /etc/X11/xinit/xinitrc
- ls /etc/X11/xinit/xinitrc.d/
- cat ~/.xserverrc
- cat /etc/pam.d/
- ls /etc/xdg/lxsession/LXDE/autostart
- ls ~/.config/lxsession/LXDE/autostart
- crontab -e
- sudo crontab -e

- nano .bash_profile
- nano .bashrc
- nano /etc/bash.bashrc

## VPN

### Redirecting the whole traffic

```bash
sudo ip route add 192.168.1.0/24 dev ppp0
# ppp0: vpn name
# 192.168.1.0: IP range
```

## Font

### Location

- `~/.local/share/fonts/`
- `/usr/local/share/fonts/`
- `/usr/share/fonts/`

### List

List installed fonts

```bash
fc-match -a
```

### Fira Code

A popular code font.

```bash
sudo pacman -S ttf-fira-code
fc-match -a | grep -i fira
```

## Backup using Rsync

```bash
sudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found","/swapfile",".npm*","node_modules*","mesa_shader_cache*","steamapps*"} / /run/media/mlibre/H/OS/full-copy/
```

## Things to do after installing Manjaro/Arch Linux

```bash
sudo pacman -Syyuu
sudo pacman -S deluge clamav electrum chromium firefox gimp gparted libreoffice-fresh meld vlc  visual-studio-code-bin

sudo freshclam
sudo systemctl enable --now clamav-daemon
sudo systemctl enable --now clamav-freshclam
clamscan --recursive --infected /home

sudo systemctl disable --now clamav-daemon
sudo systemctl disable --now clamav-freshclam