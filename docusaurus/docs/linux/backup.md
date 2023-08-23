---
sidebar_position: 3
tags:
  - Linux
  - Backup
  - Rsync
  - Restore
---

# Backup

## Rsync

```bash
# Backup local directory to another location
rsync -avz /path/to/source /path/to/destination

# Backup local directory to remote server
rsync -avz /path/to/local/directory user@remote.server:/path/to/remote/directory

# Backup local directory to remote server, deleting files on remote server if they are deleted locally
rsync -avz --delete /path/to/local/directory user@remote.server:/path/to/remote/directory

# Create a full backup of the system to an external drive
sudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*"} / /run/media/mlibre/H/OS/full-copy/
```

## Partial Backup using locate

```bash
sudo tar -czvf backup.tar.gz $(locate x-ui)
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/cert /root/cert.crt /root/private.key /root/.acme.sh

sudo tar xvf backup.tar.gz -C / # Extract in root directory
```
