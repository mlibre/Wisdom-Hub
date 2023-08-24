---
sidebar_position: 4
tags:
  - Linux
  - Systemd
---

# Systemd

`Systemd` is a modern initialization and management system for Linux systems that replaces the traditional SysV init system. It provides more advanced features for managing system services and boot processes.

## Unit files' locations

```bash
systemctl show --property=UnitPath
```

## Analyzing

You can use various commands to analyze and manage services using systemd:

```bash
systemd-analyze
systemd-analyze blame

systemctl --state=failed

sudo systemctl list-unit-files --type=service --state=enabled --all
sudo systemctl list-unit-files | grep enabled # List only enabled unit files
journalctl -u example.service  # View the journal logs of a specific service
```

## Reloading

```bash
systemctl daemon-reload
```

## Run a script after suspending has finished (resume)

```bash
sudo nano /etc/systemd/system/gamma.service
```

```bash
[Unit]
Description=Start Script in terminal
After=suspend.target graphical.target

[Service]
User=mlibre
Type=idle
Environment=DISPLAY=:0
ExecStartPre=/bin/sleep 10
ExecStart=/bin/bash /usr/local/bin/gamma_on_startup

[Install]
WantedBy=suspend.target graphical.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable gamma.service
systemctl status gamma
journalctl -u gamma
```
