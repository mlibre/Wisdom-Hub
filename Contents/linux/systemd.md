---
sidebar_position: 4
tags:
  - Linux
  - Systemd
  - startup
  - service
---

# Systemd

`Systemd` is a modern initialization and management system for Linux systems that replaces the traditional SysV init system. It provides more advanced features for managing system services and boot processes.

|                               Commands                                |                  Description                  |
| :-------------------------------------------------------------------: | :-------------------------------------------: |
|                 `systemctl show --property=UnitPath`                  |          Display paths of unit files          |
|        `systemctl show --property=UnitPath --user --no-pager`         |   Display user-specific paths of unit files   |
|                        `systemctl get-default`                        |         Get system the default target         |
|                    `systemctl get-default --user`                     |            Get user default target            |
|                   `systemctl cat graphical.target`                    |     Show content of graphical.target unit     |
|               `systemctl status default.target --user`                |    Show status of user default.target unit    |
|                           `systemd-analyze`                           |          Measure system startup time          |
|                        `systemd-analyze blame`                        |      Identify startup delay contributors      |
|                 `systemctl list-units --type=target`                  |                Systemd Targets                |
|            `systemctl list-unit-files --type target --all`            |  all target unit files, regardless of state   |
|                      `systemctl --state=failed`                       |               List failed units               |
|               `systemctl --state=active --type=target`                |              List active targets              |
| `sudo systemctl list-unit-files --type=service --state=enabled --all` |        List all enabled service units         |
|            sudo systemctl list-unit-files \| grep enabled             |         List enabled units using grep         |
|                     `systemctl is-system-running`                     |         Overall status of the system          |
|                       `systemctl daemon-reload`                       |  Reload systemd configuration and unit files  |
|                    `journalctl -u example.service`                    |         View logs for a specific unit         |
|                 `sudo systemctl edit --full service`                  |     Edit the specified service unit file      |
|             `sudo systemctl edit --force --full service`              |         Create new unit if not exists         |
|                   `systemd-analyze verify service`                    |      Verify the syntax of service units       |
|                `sudo systemctl isolate rescue.target`                 |     Change system state to rescue target      |
|                        `systemctl soft-reboot`                        | Reboot the system without touching the kernel |
|                        `systemctl status PID`                         |     Show the status of a specific process     |

> `list-units` shows only loaded units by systemd, while `list-unit-files` displays all available unit files, loaded or not

# How system boots

1. When the system boots up, the firmware (BIOS or UEFI) initializes the hardware and starts the bootloader (like GRUB 2)
2. The bootloader then loads both the Linux kernel and an initial RAM-based filesystem (`initramfs`) into memory
3. The `initramfs` contains a small executable called `init`
4. This `init` executable is actually a version of **systemd**, which performs necessary actions such as loading appropriate filesystem drivers, handling device events with udev, ...
5. Once the real root filesystem is found, checked, and mounted, a second instance of **systemd** takes over as the main system and service manager, and this instance is what gets the **PID 1**
6. This systemd instance starts other system services like `systemd-journald` and a user manager instance for each logged-in user. These user manager instances are started as `user@UID.service`, where UID is the numerical user ID of the logged-in user. These instances use the same executable as the system manager, but start a different set of units specific to each user
7. Each `systemd --user` instance manages a hierarchy of units specific to that user.

> The process of starting a user manager instance in systemd is handled through the `pam_systemd` module. This module is responsible for registering user sessions with the systemd login manager, `systemd-logind.service`

```bash
# Firmware initializes hardware and loads bootloader
firmware -> bootloader (GRUB)

# Bootloader loads kernel and initramfs into memory
bootloader -> kernel, initramfs

# initramfs runs init (systemd)
initramfs -> init (systemd)

# init prepares and mounts the real root filesystem
init -> mount root filesystem

# init executes the main systemd instance on the root filesystem
init -> systemd

# systemd starts system services and user sessions
systemd -> services, user sessions

# Each user session may run a systemd --user instance
user session -> systemd --user
```

## Targets

Systemd targets are units in the systemd initialization system that represent specific system states or operational modes. They are used to group and manage other units, such as services, that are relevant to a particular mode of operation

```bash
systemctl cat graphical.target
```

## Isolate

Start the **unit** specified on the command line and its dependencies and stop all others, unless they have `IgnoreOnIsolate=yes`

## Add a system service

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

## Add a user service

```bash
nano ~/.config/systemd/user/my-service.service

[Unit]
Description=My User Service

[Service]
ExecStart=echo "hi everyone, hope good things happen for all"

[Install]
WantedBy=default.target


systemctl --user daemon-reload
systemctl --user enable my-service
systemctl --user reenable my-service.service
systemctl --user restart my-service
systemctl --user status my-service
journalctl --user -f -u my-service
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
