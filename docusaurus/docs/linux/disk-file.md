---
sidebar_position: 2
tags:
  - linux
  - backup
  - disk
  - rsync
  - restore
  - ln
  - mount
  - dd
  - clone
  - rescue
---

# Disk

## fdisk, gdisk, parted, mkfs, mkswap, lsblk

|         Command          |             Short Description             |
| :----------------------: | :---------------------------------------: |
|       `lsblk -af`        | all devices + empty ones with infomration |
|   `sudo blkid -o list`   | List devices in a machine-readable format |
|    `blkid /dev/sda1`     |   Retrieve information about /dev/sda1    |
|     `sudo fdisk -l`      |       List partitions on all disks        |
| `sudo fdisk -l /dev/sdb` |        List partitions on /dev/sdb        |
|  `sudo fdisk /dev/sda`   |         Launch fdisk for /dev/sda         |
|         `gdisk`          |       GPT disk partitioning utility       |
|  `sudo gdisk /dev/sda`   |         Launch gdisk for /dev/sda         |
|         `parted`         | Disk partitioning tool with more features |
|  `sudo parted /dev/sda`  |        Launch parted for /dev/sda         |
|  `mkfs.ext4 /dev/sdb1`   |  Create an ext4 file system on /dev/sdb1  |
| `mkfs -t ntfs /dev/sdd1` |  Create a VFAT File System on /dev/sdd1   |
| `sudo mkswap /dev/sdc1`  |         Create swap on /dev/sdc1          |

## df, du, fsck, tune2fs, ntfsfix

|              Command               |                          Short Description                          |
| :--------------------------------: | :-----------------------------------------------------------------: |
|       `du -sh /path/to/dir`        |             Display disk usage summary for a directory              |
|      `du -hd 1 /path/to/dir`       | Display disk usage for each subdirectory in the specified directory |
|              `df -h`               |  Display disk usage for all mounted filesystems in readable format  |
|             `df -hiT`              |      Display disk space usage with inodes and file system type      |
|       `sudo fsck /dev/sda1`        |           Check and repair the file system on `/dev/sda1`           |
|      `sudo fsck -y /dev/sdb2`      |         Automatically repair the file system on `/dev/sdb2`         |
|      `sudo fsck -C /dev/sdc1`      |      Display progress while checking and repairing `/dev/sdc1`      |
| `sudo fsck.ext4 -yvfBcD /dev/sda4` |                    Check and repair `/dev/sda4`                     |
|       `tune2fs -l /dev/sda1`       |        Display detailed filesystem information for /dev/sda1        |
|     `ntfsfix -b -d /dev/sda1`      |             Diagnose and fix NTFS issues on a partition             |

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

## ln

|             Command             |               Short Description               |
| :-----------------------------: | :-------------------------------------------: |
|  `ln -s source_file link_name`  | Create a symbolic link to a file or directory |
| `ln source_file hard_link_name` |         Create a hard link to a file          |

## rsync

|    Option    |                  Description                  |
| :----------: | :-------------------------------------------: |
|     `-a`     |  Archive mode (recursive, permissions, etc.)  |
|     `-r`     |               Sync recursively                |
|     `-e`     |        Specify the remote shell to use        |
|     `-v`     |                Verbose output                 |
| `--progress` |         Show progress during transfer         |
|     `-z`     |         Compress data during transfer         |
|     `-P`     |       Keep partially transferred files        |
|  `--delete`  | Delete extraneous files on the receiving side |
|     `-A`     |     Preserve ACLs (Access Control Lists)      |
|     `-X`     |         Preserve extended attributes          |
|     `-H`     |              Preserve hard links              |
|     `-n`     |               Perform a dry run               |

```bash
# Backup local directory to another location
rsync -avz /path/to/source /path/to/destination

# Backup local directory to remote server
rsync -avz /path/to/local/directory user@remote.server:/path/to/remote/directory

# Backup local directory to remote server, deleting files on remote server if they are deleted locally
rsync -avz --delete /path/to/local/directory user@remote.server:/path/to/remote/directory

# Create a full backup of the system to an external drive
sudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*","/home/mlibre/media/*"} / /run/media/mlibre/D/Linux/backup/

# Backup to a server
rsync -e "ssh -p 2222" source/ user@host:/destination/

# Download a large file from a remote server using rsync with resume capability
rsync -LvzP -e "ssh -p 8756" pro@65.21.54.29:/home/pro/largeFile.zip file.zip
```

## dd

|                       Command                        |                     Short Description                     |
| :--------------------------------------------------: | :-------------------------------------------------------: |
|                         `dd`                         |                  Copy and convert files                   |
|           `dd if=in of=out bs=block_size`            |  Copy data from 'in' to 'out' with specified block size   |
|    `dd if=/dev/zero of=zerofile bs=1M count=100`     |              Create a 100MB zero-filled file              |
|       `dd if=in of=out bs=512 count=1 skip=2`        |   Copy 512 bytes from 'in' to 'out' starting byte 1024    |
|   `dd if=/dev/random of=randomfile bs=1M count=1`    |        Generate a 1MB file filled with random data        |
|          dd if=in \| gzip > backup.dd.gzip           | Compress 'in' data using 'gzip', save as 'backup.dd.gzip' |
| `dd if=ubuntu.iso of=/dev/sdX bs=4M status=progress` |      Write 'ubuntu.iso' to a USB drive ('/dev/sdX')       |

## ddrescue

`ddrescue` is a program that can be used to recover damaged hard disks. like flash memories, sd cards and ...

It can be used to recover data from a hard disk that has been corrupted by a disk error, or from a hard disk that has been damaged by a software error.

```bash
sudo ddrescue -f -n /dev/sdb sd-card-copy.img r.log 
```

## Backup using locate

```bash
sudo tar -czvf backup.tar.gz $(locate x-ui)
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/cert /root/cert.crt /root/private.key /root/.acme.sh

sudo tar xvf backup.tar.gz -C / # Extract in root directory
```

## Automatic mount using fstab

```bash
sudo nano /etc/fstab
UUID=0CCB69562B33DFDD                       /home/mlibre/media/D   ntfs-3g        uid=1000,gid=1000,rw,auto,user,exec,umask=000 0 0
```
