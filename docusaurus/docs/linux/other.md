---
sidebar_position: 10
tags:
  - Linux
  - XDG
  - Automatic
  - Shutdown
  - Manjaro
  - Windows 11
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

# Autostart

## Init

the `init` command refers to the process initialization system. It's the first process that gets started by the kernel during system boot, and it's assigned the process `ID (PID) of 1`

```bash
which init
# Output: /usr/bin/init

readlink -f /usr/bin/init
# Output: /usr/lib/systemd/systemd

ps -p 1
# Output:
# PID TTY          TIME CMD
#   1 ?        00:00:01 systemd

pstree -p 1
# Output:
# systemd(1)─┬─...
```

## Scripts and programs locations

- nano .profile
- nano /etc/profile
- nano ~/.bash_profile
- nano .bashrc
- nano /etc/bash.bashrc
- ls /etc/profile.d/
- ls ~/.config/autostart
- ls /etc/xdg/autostart
- ls /usr/share/xsessions
- ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
- ls usr/share/dbus-1/system-services/
- sudo systemctl list-unit-files --type=service --state=enabled --all
- ls /etc/init.d/
- nano ~/.xinitrc
- nano /etc/X11/xinit/xinitrc
- ls /etc/X11/xinit/xinitrc.d/
- cat ~/.xserverrc
- ls /etc/pam.d/
- ls /etc/rc*
- cat /etc/xdg/lxsession/LXDE/autostart
- ls ~/.config/lxsession/LXDE/autostart
- crontab -e
- sudo crontab -e
- ls -rla /etc/cron.*
- cat /usr/lib/sddm/sddm.conf.d/default.conf
- cat /etc/sddm.conf.d/00_manjaro_settings.conf

# Automatic Shutdown

|      Command      |            Description            |
| :---------------: | :-------------------------------: |
|  `shutdown now`   | Shutdown the system immediately.  |
| `shutdown -h +5`  | Shutdown the system in 5 minutes. |
| `shutdown -r now` |  Reboot the system immediately.   |
| `shutdown -r +10` | Reboot the system in 10 minutes.  |
| `shutdown -H now` |   Halt the system immediately.    |
|   `shutdown +5`   | Shutdown the system in 5 minutes. |

## Reading symlinks

```bash
readlink /bin/init
# ../lib/systemd/systemd
```

## System Info

```bash
uname -a
```

# Performance

## Disable Linux Watchdogs, compaction and more

```bash
sudo systemctl start systemd-sysctl.service
sudo systemctl enable systemd-sysctl.service

sudo nano /etc/sysctl.conf
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
fs.inode-nr=200000
vm.dirty_background_ratio=5
vm.vfs_cache_pressure=50
net.ipv4.tcp_max_syn_backlog=8192
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

# Manjaro

## Things to do before installing

- Backup important data. Recovery-keys, Passwords, Postman and ...  

```bash
cp -rf /home/mlibre/.local/share/TelegramDesktop /run/media/mlibre/D/linux/caches
cp $HISTFILE /run/media/mlibre/D/linux/caches/
sudo cp -r /etc /run/media/mlibre/D/caches/

# Or full backup
sudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*"} / /run/media/mlibre/D/Linux/backup/
```

- Mark EFI partition while installing Manjaro/Arch Linux as /boot/efi. Don't check Format option.

## Things to do after installing

- Remove and disable unnecessary packages

  ```bash
  echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER
  sudo systemctl disable pamac-daemon
  sudo systemctl disable pamac-mirrorlist.timer
  sudo systemctl disable pamac-mirrorlist.service
  sudo pacman -R manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro pamac-tray-icon-plasma kdeconnect vde2  qemu-common qemu-system-arm qemu-user-static-binfmt qemu-system-arm-firmware scrcpy

  # or

  echo "manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro pamac-tray-icon-plasma kdeconnect vde2  qemu-common qemu-system-arm qemu-user-static-binfmt qemu-system-arm-firmware scrcpy" | xargs -d " " -I {} sudo pacman --noconfirm -R {}
  ```

- Pacman downloads parallel

  ```bash
  sudo nano /etc/pacman.conf
  ParallelDownloads = 5
  ```
  
- Upgrade

  ```bash
  pamac update --force-refresh
  pamac update -a
  sudo pacman-mirrors --fasttrack
  sudo pacman -Syyuu
  sudo pacman -S telegram-desktop unzip thermald ntfs-3g
  sudo systemctl enable --now thermald.service
  pamac install visual-studio-code-bin onlyoffice-bin
  ```

- Import Data

  ```bash
  cp -r /run/media/mlibre/H/OS/caches/TelegramDesktop /home/mlibre/.local/share/
  ```

- Make an XDG autostart script for gamma adjustment
- Put the gamma script in the `.bashrc` and `.zshrc` as well

- Install ProtonVPN, mailspring, shadowsocks, Nekoray
  
  ```bash
  sudo pamac install shadowsocks-rust-bin
  pamac build protonvpn
  pamac build mailspring
  ```

- Remove Mainspring from startups. Use 24-hour clock. Uncheck automatically load images. Disabsetle mail signature.

- Install mlocate

  ```bash
  sudo pacman -S mlocate
  sudo updatedb
  ```
  
- KDE Settings -> Disable Mouse acceleration
- KDE Settings -> Startup and Shutdown: Start with empty session, Choose KDE Screen Saver, Review background services and Autostarts.
- KDE Settings -> Appearance -> Theme -> Breeze Dark, Breath Dark
- KDE Settings -> Appearance -> Font -> Enabled Anti-Aliasing, RGB, Slight. all +1 PT
- KDE Settings -> Workspace -> Search -> Disable Web Search Keywords
- KDE Settings -> Workspace Behavior -> Activities -> Privacy -> Dont remember soft
- KDE Settings -> Search for kRunner -> settings -> uncheck all

- Pin Firefox, Terminal, ProtonVPN, Kate and VSCode to the panel
- Software Center: Disable automatic updates, Add AUR support
- Remove Virtual Desktops
- Make a Swapfile

```bash
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
cat /etc/fstab
sudo bash -c "echo /swapfile none swap defaults 0 0 >> /etc/fstab"

sudo nano /etc/sysctl.conf
# vm.swappiness=10
```

- Fix time difference between linux and windows

  ```bash
  sudo timedatectl set-local-rtc 1 --adjust-system-clock
  # sudo timedatectl set-local-rtc 1
  sudo ntpdate time.nist.gov # update time
  ```

- Softwares

```bash
sudo pacman -S qbittorrent firefox libreoffice-fresh meld vlc ntfs-3g  aria2 ttf-ubuntu-font-family gnome-keyring libsecret core/iputils clinfo tor torsocks steam-native-runtime
# sudo pacman -S electrum gimp gparted firewalld clamav deluge
```

- Firefox: Enable DNS over HTTPS
- Enable automatic mounting of external drives: Settings -> Hardware -> Removable Storage -> Automount
- Konsole config:
  - Font: Monospace 13pt
  - Theme: Breath (customized, a bit darker)
  - Shell: Manjaro zsh

- Steam: Allow auto-update only between 1AM - 11AM

- Performance

```bash
sudo systemctl disable bluetooth.service
sudo systemctl disable tor.service
sudo systemctl disable samba
sudo systemctl disable cups
balooctl disable && balooctl purge
sudo rm /etc/cron.d/0hourly
sudo rm /etc/xdg/autostart/baloo_file.desktop
sudo rm /etc/xdg/autostart/pamac-tray-budgie.desktop
sudo rm /etc/xdg/autostart/pamac-tray.desktop
sudo rm /etc/xdg/autostart/msm_kde_notifier.desktop
sudo rm /etc/xdg/autostart/org.gnome.SettingsDaemon*
sudo rm /etc/xdg/autostart/print-applet.desktop

# sudo systemctl enable firewalld
# sudo systemctl restart firewalld

# sudo firewall-cmd --permanent --add-service=https
# sudo firewall-cmd --permanent --add-port=30303/tcp
# sudo firewall-cmd --permanent --add-port=30303/udp

# sudo systemctl restart --now clamav-daemon
# sudo freshclam
# clamscan --recursive --infected /home
# sudo systemctl disable --now clamav-freshclam
# sudo systemctl disable --now clamav-daemon
# sudo systemctl enable --now clamav-daemon
# sudo systemctl enable --now clamav-freshclam
```

## Apply New Configs

```bash
# Default config file
ls -laR /etc/skel

# apply default configs
# method 1
cp -rf /etc/skel/.* ~/
rm -f ~/.config/dconf/user

# method 2
sudo useradd --create-home newusername
sudo passwd newusername
```

# Windows 11

## Make boatable usb

## WoeUsb

```bash
sudo pacman -Suy p7zip python-pip python-wxpython
git clone https://github.com/WoeUSB/WoeUSB-ng.git
sudo pip3 install .
sudo woeusb --workaround-skip-grub --target-filesystem NTFS --device ~/Win11_22H2_English_x64v1.iso  /dev/sdb
```

## Win2USB

```bash
https://github.com/ValdikSS/windows2usb
chmod +x windows2usb*
./windows2usb-0.2.4-x86_64.AppImage /dev/sdb ~/Win11_22H2_English_x64v1.iso gpt+uefintfs
```

## Things to do after installing Windows 11

- Download and install all the updates
- Enable Ransomware protection
- Download DimScreen, Copy it to the download folder. Open. click on the settings. set brightness to 20%. Make a shortcut to the desktop
- search for gamma calibration in windows settings. set it to minimum
- Adjust date and time: auto. Timezone tehran +3:30
- Downloading updates active hours: 24 hours format. 1->11
- Disable all data usages settings in privacy and security
- uninstall mail, teams, one drive. xbox, facebook, microsoft todo, sticky notes, tips, weather
- Install firefox and login
- Install protonVPN
- personalize: sunrise
- network connection: metered connection
- Display: 3840x2160, 200%
- Steam: add your games' location to the Games' folder library. make it as default
- Steam: If your games are in a `NTFS` file system, follow [this](https://github.com/ValveSoftware/Proton/wiki/Using-a-NTFS-disk-with-Linux-and-Windows) to make game compatible with Linux.
- Pause windows updates for 5 weeks
- Check windows startups apps
- App store: disable automatic update
- Leave from "AMD user experience program". AMD settings -> last tab -> last option
- windows features: WSL, virtual machine, hyper-v (for android and linux apps)
- wsl --update
- wsl --install -d Ubuntu
- Disable Error Reporting: WIN+R -> services.msc -> Windows Error Reporting Service -> Properties -> disable

# Install a new os on the phone

## Backup data

```bash
sudo pacman -S android-tools
sudo adb devices
adb backup -apk -shared -all -f backup-file.ab
```

## Restore

```bash
adb restore file.ab
```

## Enable Developer options

- Several times clicks on the kernel tab
- Allow OEM unlocking
- Enter Download mod:
  1. Turn off the phone.  
  2. Hold vol key up + down.
  3. Now in the warning message page. choose "unlocking bootloader" that will perform a factory reset

## Install odin tools for Samsung >= 3.14

<https://samsungodin.com/>

## Install samsung driver

<https://developer.samsung.com/android-usb-driver>

## Install adb

<https://developer.android.com/studio/releases/platform-tools>

```bash
adb reboot download
```

## Download TWRP

<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>
<https://twrp.me/samsung/samsunggalaxya10.html>

## convert it to .md5

<https://www.droidthunder.com/convert-img-to-tar-md5/>

## Run Odin as administrator

follow the instructions
<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>
