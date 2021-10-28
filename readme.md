# Changing monitor, screen gamma
```bash
xrandr --output HDMI-A-0 --brightness 0.75
```

# Systemd, systemctl

## Reloading
```bash
systemctl daemon-reload
```

## Find services failed to start
```bash
systemctl --state=failed
```

## Journal Size
```bash
sudo nano /etc/systemd/journald.conf
```
```bash
SystemMaxUse=100M
```

## Starting a script after GUI has loaded
```bash
sudo nano /lib/systemd/system/gamma-on-startup.service
``` 
```bash
[Unit]
Description=Set gamma on system startup

[Service]
Type=simple
ExecStart=/usr/bin/resume

[Install]
WantedBy=graphical.target
```
```bash
sudo systemctl daemon-reload
sudo systemctl enable gamma-on-startup.service
systemctl status gamma-on-startup
journalctl -u gamma-on-startup
```

## Run a script after suspending has finished (resume)
```bash
sudo nano /etc/systemd/system/gamma-on-resume.service
```
```bash
[Unit]
After=suspend.target
[Service]  
Type=simple
ExecStart=/usr/bin/resume
[Install]
WantedBy=suspend.target
```
```bash
sudo systemctl daemon-reload
sudo systemctl enable gamma-on-resume.service
systemctl status gamma-on-resume
journalctl -u gamma-on-resume
```

## Run a script on resume
```bash
sudo nano /lib/systemd/system-sleep/resume.sh
```
```bash
#!/bin/sh
PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/sbin:/usr/local/bin
case $1 in
	post)
		xrandr --output HDMI-A-0 --brightness 0.75
	;;
esac

exit 0
```
```bash
sudo chmod +x /lib/systemd/system-sleep/resume
sudo systemctl enable resume
```

## Unit files' locations
```bash
systemctl show --property=UnitPath
```

# XDG

## Make a startup script using XDG startup
```bash
nano ~/.config/autostart/gamma-on-startup.desktop
```
```bash
[Desktop Entry]
Name=gamma-on-startup
Type=Application
Exec=/usr/bin/resume
```
```bash
desktop-file-validate ~/.config/autostart/gamma-on-startup.desktop
chmod +x ~/.config/autostart/gamma-on-startup.desktop
cat /usr/bin/resume
sleep 5
xrandr --output HDMI-A-0 --brightness 0.75
echo "gamma is chengged"
```

# Autostarts and Startup scripts and programs locations
* nano .profile
* nano /etc/profile
* ls /etc/profile.d/
* ls ~/.config/autostart
* ls /etc/xdg/autostart
* ls /usr/share/xsessions
* ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
* sudo systemctl list-unit-files --type=service --state=enabled --all
* ls /etc/init.d/
* nano ~/.xinitrc
* nano /etc/X11/xinit/xinitrc
* ls /etc/X11/xinit/xinitrc.d/
* cat ~/.xserverrc
* cat /etc/pam.d/
* ls /etc/xdg/lxsession/LXDE/autostart
* ls ~/.config/lxsession/LXDE/autostart
* crontab -e
* sudo crontab -e

* nano .bash_profile
* nano .bashrc
* nano /etc/bash.bashrc