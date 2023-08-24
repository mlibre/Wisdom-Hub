---
sidebar_position: 4
tags:
  - Linux
  - Systemd
---

# Systemd

`Systemd` is a modern initialization and management system for Linux systems that replaces the traditional SysV init system. It provides more advanced features for managing system services and boot processes.

|                               Commands                                |                 Description                 |
| :-------------------------------------------------------------------: | :-----------------------------------------: |
|                 `systemctl show --property=UnitPath`                  |         Display paths of unit files         |
|                           `systemd-analyze`                           |         Measure system startup time         |
|                        `systemd-analyze blame`                        |     Identify startup delay contributors     |
|                      `systemctl --state=failed`                       |              List failed units              |
| `sudo systemctl list-unit-files --type=service --state=enabled --all` |       List all enabled service units        |
|           `sudo systemctl list-unit-files \| grep enabled`            |        List enabled units using grep        |
|                    `journalctl -u example.service`                    |        View logs for a specific unit        |
|                       `systemctl daemon-reload`                       | Reload systemd configuration and unit files |
|                        `systemctl get-default`                        |     Get the default target or boot unit     |
|                 `systemctl list-units --type=target`                  |               Systemd Targets               |
|                   `systemctl cat graphical.target`                    |    Show content of graphical.target unit    |

## Targets

Systemd targets are units in the systemd initialization system that represent specific system states or operational modes. They are used to group and manage other units, such as services, that are relevant to a particular mode of operation

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
