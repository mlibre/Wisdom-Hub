---
sidebar_position: 8
tags:
  - Linux
  - Autostarts
  - Start Up
---

# Autostart

## Init

the `init` command refers to the process initialization system. It's the first process that gets started by the kernel during system boot, and it's assigned the process `ID (PID) of 1`

```bash
which init
# Output: /usr/bin/init

readlink -f /usr/bin/init
# Output: /usr/lib/systemd/systemd

ps -p 1
# Output:
# PID TTY          TIME CMD
#   1 ?        00:00:01 systemd

pstree -p 1
# Output:
# systemd(1)─┬─...
```

## Scripts and programs locations

* nano .profile
* nano /etc/profile
* nano ~/.bash_profile
* nano .bashrc
* nano /etc/bash.bashrc
* ls /etc/profile.d/
* ls ~/.config/autostart
* ls /etc/xdg/autostart
* ls /usr/share/xsessions
* ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
* ls usr/share/dbus-1/system-services/
* sudo systemctl list-unit-files --type=service --state=enabled --all
* ls /etc/init.d/
* nano ~/.xinitrc
* nano /etc/X11/xinit/xinitrc
* ls /etc/X11/xinit/xinitrc.d/
* cat ~/.xserverrc
* ls /etc/pam.d/
* ls /etc/rc*
* cat /etc/xdg/lxsession/LXDE/autostart
* ls ~/.config/lxsession/LXDE/autostart
* crontab -e
* sudo crontab -e
* ls -rla /etc/cron.*
* cat /usr/lib/sddm/sddm.conf.d/default.conf
* cat /etc/sddm.conf.d/00_manjaro_settings.conf
