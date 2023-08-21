---
sidebar_position: 4
tags:
  - Linux
  - Systemd
---

# Systemd

## Unit files' locations

```bash
systemctl show --property=UnitPath
```

## Analyzing

```bash
systemd-analyze
systemd-analyze blame

systemctl --state=failed

sudo systemctl list-unit-files --type=service --state=enabled --all
sudo systemctl list-unit-files | grep enabled
systemctl journal -u example.service
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
