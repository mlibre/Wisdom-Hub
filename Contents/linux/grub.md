---
sidebar_position: 14
tags:
  - Linux
  - grub
---

# GRUB

File:

- /etc/default/grub
- /etc/grub.d/
- /boot/grub/grub.cfg
- /boot/efi/EFI/
- /boot/grub/x86_64-efi/ 

## Regenerate grub.cfg

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Fixing broken grub

### Easy method using Manjaro Live

> Boot a live Manjaro image

```bash
sudo manjaro-chroot -a
grub-install
update-grub
```

> It will detect your current installed linux.  Restart the computer and it will boot the installed linux.  
Then run:

```bash
update-grub
```

### General method

```bash
# Mount the file system and efi partition
sudo mount /dev/nvme0n1p4 /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /dev/pts /mnt/dev/pts
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo mkdir /efi
sudo mount /dev/nvme0n1p1 /efi

# Install grub and update grub configuration
sudo grub-install --root-directory=/mnt/ /dev/nvme0 --efi-directory=/efi --target=x86_64-efi --recheck
sudo chroot /mnt
sudo blkid -s UUID -o value /dev/nvme0n1p1
nano /etc/fstab
sudo update-grub
```