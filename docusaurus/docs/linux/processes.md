---
sidebar_position: 14
tags:
  - Linux
  - process
---

# process

## Find PID, PPID nad exec path

```bash
ps -fe | grep pulseaudio
# mlibre      1077     634  4 Aug30 ?        00:46:05 /usr/bin/pulseaudio --daemonize=no --log-target=journal
# mlibre     90672   75043  0 14:09 pts/2    00:00:00 grep pulseaudio
```

## Information

```bash
systemctl status PID
```
