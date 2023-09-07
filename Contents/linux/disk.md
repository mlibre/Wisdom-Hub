---
sidebar_position: 3
tags:
  - Linux
  - Backup
  - Disk
  - Rsync
  - Restore
---

# Disk

## fdisk, gdisk, parted, mkfs, mkswap, lsblk

|         Command          |             Short Description             |
| :----------------------: | :---------------------------------------: |
|       `lsblk -af`        | all devices + empty ones with infomration |
|   `sudo blkid -o list`   | List devices in a machine-readable format |
|    `blkid /dev/sda1`     |   Retrieve information about /dev/sda1    |
|        `fdisk -l`        |       List partitions on all disks        |
|   `fdisk -l /dev/sdb`    |        List partitions on /dev/sdb        |
|  `sudo fdisk /dev/sda`   |         Launch fdisk for /dev/sda         |
|         `gdisk`          |       GPT disk partitioning utility       |
|  `sudo gdisk /dev/sda`   |         Launch gdisk for /dev/sda         |
|         `parted`         | Disk partitioning tool with more features |
|  `sudo parted /dev/sda`  |        Launch parted for /dev/sda         |
|  `mkfs.ext4 /dev/sdb1`   |  Create an ext4 file system on /dev/sdb1  |
| `mkfs -t ntfs /dev/sdd1` |  Create a VFAT File System on /dev/sdd1   |
| `sudo mkswap /dev/sdc1`  |         Create swap on /dev/sdc1          |

## df, du, fsck, tune2fs

|              Command               |                                Short Description                                 |
| :--------------------------------: | :------------------------------------------------------------------------------: |
|       `du -sh /path/to/dir`        |                   Display disk usage summary for a directory.                    |
|      `du -hd 1 /path/to/dir`       |       Display disk usage for each subdirectory in the specified directory.       |
|              `df -h`               | Display disk space usage for all mounted filesystems in a human-readable format. |
|             `df -hiT`              |       Display disk space usage with inodes and file system type included.        |
|       `sudo fsck /dev/sda1`        |                 Check and repair the file system on `/dev/sda1`                  |
|      `sudo fsck -y /dev/sdb2`      |               Automatically repair the file system on `/dev/sdb2`                |
|      `sudo fsck -C /dev/sdc1`      |            Display progress while checking and repairing `/dev/sdc1`             |
| `sudo fsck.ext4 -yvfBcD /dev/sda4` |                           Check and repair `/dev/sda4`                           |
|       `tune2fs -l /dev/sda1`       |              Display detailed filesystem information for /dev/sda1.              |

## mount, umount

|              Command               |                           Short Description                            |
| :--------------------------------: | :--------------------------------------------------------------------: |
|              `mount`               |                 list of currently mounted file systems                 |
|       `mount /dev/sda1 /mnt`       |          Mounts the partition /dev/sda1 to the /mnt directory          |
|         `mount /dev/sda1`          |                Mounts a device defined in `/etc/fstab`                 |
| `mount -o loop image.iso /mnt/iso` |  Mounts an ISO image file as a loop device to the /mnt/iso directory   |
|           `umount /mnt`            |                Unmounts the file system mounted at /mnt                |
|          `umount -l /mnt`          | Lazy unmount, detaches the file system only when it's no longer in use |
|   `mount UUID=1...AB /mnt/uuid`    |           Mounts file system using its UUID to the /mnt/uuid           |

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

## Backup using locate

```bash
sudo tar -czvf backup.tar.gz $(locate x-ui)
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/cert /root/cert.crt /root/private.key /root/.acme.sh

sudo tar xvf backup.tar.gz -C / # Extract in root directory
```
