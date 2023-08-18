---
sidebar_position: 2
tags:
  - Linux
  - Performance
---

# Performance

## Disable Linux Watchdogs, compaction and more

```bash
sudo systemctl start systemd-sysctl.service
sudo systemctl enable systemd-sysctl.service
# sudo nano /etc/sysctl.conf
# And
sudo nano /etc/sysctl.d/sys.conf

net.ipv4.tcp_fastopen=3
net.ipv4.ip_forward=1
kernel.nmi_watchdog=0
kernel.watchdog=0
vm.compaction_proactiveness=0
vm.zone_reclaim_mode=0
vm.page_lock_unfairness=1
kernel.perf_event_paranoid=-1
fs.inode-nr = 200000
vm.dirty_background_ratio=5
vm.vfs_cache_pressure=50
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_tw_reuse=1
vm.min_free_kbytes=2500000
```

## Improve fstab, ssd, nvme performance

```bash
sudo nano /etc/fstab 
UUID=f74c37b2-8a12-4252-90a6-d31504507bcb / ext4  defaults,noatime,nodiratime,commit=60,barrier=0  0 1
```

```bash
sudo nano /etc/udev/rules.d/60-ioschedulers.rules

ACTION=="add|change", KERNEL=="nvme[0-9]n[0-9]", ATTR{queue/scheduler}="none"
```

## Disabling journaling

```bash
sudo tune2fs -f -O "^has_journal" /dev/sda2
```

## Journal Size

```bash
sudo nano /etc/systemd/journald.conf
SystemMaxUse=100M
sudo systemctl restart systemd-journald
```
