---
sidebar_position: 4
tags:
  - Linux
  - Systemd
---

# Systemd

`Systemd` is a modern initialization and management system for Linux systems that replaces the traditional SysV init system. It provides more advanced features for managing system services and boot processes.

|                               Commands                                |                  Description                  |
| :-------------------------------------------------------------------: | :-------------------------------------------: |
|                 `systemctl show --property=UnitPath`                  |          Display paths of unit files          |
|                           `systemd-analyze`                           |          Measure system startup time          |
|                        `systemd-analyze blame`                        |      Identify startup delay contributors      |
|                 `systemctl list-units --type=target`                  |                Systemd Targets                |
|                      `systemctl --state=failed`                       |               List failed units               |
|               `systemctl --state=active --type=target`                |              List active targets              |
| `sudo systemctl list-unit-files --type=service --state=enabled --all` |        List all enabled service units         |
|           `sudo systemctl list-unit-files \| grep enabled`            |         List enabled units using grep         |
|                   `systemctl cat graphical.target`                    |     Show content of graphical.target unit     |
|                     `systemctl is-system-running`                     |         Overall status of the system          |
|                       `systemctl daemon-reload`                       |  Reload systemd configuration and unit files  |
|                        `systemctl get-default`                        |      Get the default target or boot unit      |
|                    `journalctl -u example.service`                    |         View logs for a specific unit         |
|                 `sudo systemctl edit --full service`                  |     Edit the specified service unit file      |
|             `sudo systemctl edit --force --full service`              |         Create new unit if not exists         |
|                   `systemd-analyze verify service`                    |      Verify the syntax of service units       |
|                `sudo systemctl isolate rescue.target`                 |     Change system state to rescue target      |
|                        `systemctl soft-reboot`                        | Reboot the system without touching the kernel |

systemctl soft-reboot

## Targets

Systemd targets are units in the systemd initialization system that represent specific system states or operational modes. They are used to group and manage other units, such as services, that are relevant to a particular mode of operation

```bash
systemctl cat graphical.target
```

## Isolate

Start the **unit** specified on the command line and its dependencies and stop all others, unless they have `IgnoreOnIsolate=yes`

## Add service

```bash
sudo nano /etc/systemd/system/sshtunnel.service

[Unit]
Description=SSH Tunnel
After=network.target

[Service]
User=mlibre
Restart=always
RestartSec=20
ExecStart=ssh -L 0.0.0.0:1234:localhost:3128 -N pachan@43.204.151.127 -p 8756

[Install]
WantedBy=graphical.target

sudo systemctl daemon-reload
sudo systemctl enable sshtunnel
sudo systemctl reenable sshtunnel.service
sudo systemctl restart sshtunnel
sudo systemctl status sshtunnel
sudo journalctl -f -u sshtunnel
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
