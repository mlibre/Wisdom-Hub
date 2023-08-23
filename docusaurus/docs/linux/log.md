---
sidebar_position: 11
tags:
  - Linux
  - Log
---

# Log

In Linux, the kernel uses a `ring buffer` to keep log messages from when the system starts. This buffer has a set size, and when it's full, new messages replace old ones.

The kernel log buffer is important for keeping the system working well and finding issues. User applications have their own ways of logging, which gives a bigger picture of what the whole system is doing.

Also, applications and services made by users can create their own messages. These are usually handled by different logging systems like `syslogd` or `systemd-journald`.

## dmesg

The `dmesg` command is used to display the kernel ring buffer. By default it read the messaged from `/dev/kmsg`, that provides access to the kernel ring buffer.

```bash
dmesg
```

## journalctl

`journalctl` is a command-line utility for viewing and querying logs from the `systemd` journal, a system logging service commonly used in modern Linux distributions

```bash
sudo systemctl restart systemd-journald.service
```

|               Description                |             Command             |
| :--------------------------------------: | :-----------------------------: |
|               Kernel Logs                |         `journalctl -k`         |
| Current Boot Logs, including kernel logs |         `journalctl -b`         |
|             Unit Files Logs              |  `journalctl -u sshd.service`   |
|           Systemd Logs Runtime           |         `journalctl -f`         |
|                 Verbose                  | `journalctl -u sshd.service -x` |

## Syslog

It is a standard for recording events in a computer system.

### rsyslog

`rsyslog` is a free and open source `syslog` implementation.

## lastlog

The `lastlog` command displays the last login times and information for all users on the system.  
It provides details such as the username, port, and timestamp of the last login for each user. It reads the `/var/log/lastlog` binary file to retrieve this information.

```bash
lastlog
Username         Port     From                                       Latest
root                                                                **Never logged in**
nobody                                                              **Never logged in**
dbus                                                                **Never logged in**
bin                                                                 **Never logged in**
mlibre           pts/2    127.0.0.1                                 Sun Aug 20 22:39:47 +0330 2023
```
