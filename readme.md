# Linux Cheat Sheet

Linux Cheat Sheet is a collection of useful commands and shortcuts for Linux.

- [Automatic Shutdown](#automatic-shutdown)
- [Bash case-insensitive auto completion](#bash-case-insensitive-auto-completion)
- [Changing monitor or screen Brightness and Gamma](#changing-monitor-or-screen-brightness-and-gamma)
- [XDG](#xdg)
  - [Make a startup script using XDG startup](#make-a-startup-script-using-xdg-startup)
- [Systemd, systemctl](#systemd-systemctl)
  - [Reloading](#reloading)
  - [Find services failed to start](#find-services-failed-to-start)
  - [Journal Size](#journal-size)
  - [Starting a script after GUI has loaded](#starting-a-script-after-gui-has-loaded)
  - [Run a script after suspending has finished (resume)](#run-a-script-after-suspending-has-finished-resume)
  - [Run a script after system-sleep resume](#run-a-script-after-system-sleep-resume)
  - [Unit files' locations](#unit-files-locations)
- [Autostarts and Startup scripts and programs locations](#autostarts-and-startup-scripts-and-programs-locations)
- [VPN](#vpn)
  - [Redirecting the whole traffic](#redirecting-the-whole-traffic)
- [Install Genymotoin Android emulator](#install-genymotoin-android-emulator)
- [Font](#font)
  - [Location](#location)
  - [List](#list)
  - [Fira Code](#fira-code)
- [Backup using Rsync](#backup-using-rsync)
- [Resetting sound, audio](#resetting-sound-audio)
- [Fixing broken grub](#fixing-broken-grub)
- [Open an application using tor over socks](#open-an-application-using-tor-over-socks)
- [Things to do before installing Manjaro/Arch Linux](#things-to-do-before-installing-manjaroarch-linux)
- [Things to do after installing Manjaro/Arch Linux](#things-to-do-after-installing-manjaroarch-linux)
  - [Install AMDGPU-PRO](#install-amdgpu-pro)
  - [Uninstall AMDGPU-PRO](#uninstall-amdgpu-pro)
  - [Blacklist Radeon](#blacklist-radeon)
- [Things to do after installing Windows 11](#things-to-do-after-installing-windows-11)
- [Install a new os on the phone](#install-a-new-os-on-the-phone)
  - [backup data](#backup-data)
  - [Enable Developer options](#enable-developer-options)
  - [Install odin tools for Samsung >= 3.14](#install-odin-tools-for-samsung--314)
  - [Install samsung driver](#install-samsung-driver)
  - [Install adb](#install-adb)
  - [Download TWRP](#download-twrp)
    - [convert it to .md5](#convert-it-to-md5)
  - [Run Odin as administrator](#run-odin-as-administrator)
  - [Install bluestack](#install-bluestack)

## Automatic Shutdown

```bash
sudo shutdown -P +220 ## in 220 minutes, 3:30 hours
```

## Bash case-insensitive auto completion

```bash
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc
# echo 'set completion-ignore-case On' >> /etc/inputrc
```

## Changing monitor or screen Brightness and Gamma

```bash
xrandr --output HDMI-A-0 --brightness 0.75 --gamma 0.75:0.75:0.75 
```

## Disable Linux Watchdogs, compaction and

```bash
sudo sh -c "echo 'kernel.nmi_watchdog=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'kernel.watchdog=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'vm.compaction_proactiveness=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'vm.zone_reclaim_mode=0' >> /etc/sysctl.conf"
sudo sh -c "echo 'vm.page_lock_unfairness=1' >> /etc/sysctl.conf"
sudo sysctl -p
```

## Improve fstab performance

```bash
sudo nano /etc/fstab 
UUID=f74c37b2-8a12-4252-90a6-d31504507bcb /     ext4    defaults,noatime,commit=60,barrier=0    0       1
```

## Disabling journaling

```bash
sudo tune2fs -f -O "^has_journal" /dev/sda2
```

## Vulkan

```bash
sudo pacman -S vulkan-radeon lib32-vulkan-radeon
```

```bash
sudo nano /etc/environment
VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/radeon_icd.i686.json:/usr/share/vulkan/icd.d/radeon_icd.x86_64.json
```

## Dota 2

- Move Dota 2 to your local linux machine
- Dota 2 Options

  ```bash
  -high -nojoy -novid -novr -nohltv -map dota 
  ```

- Disable steam overlay, steam inputs, ...
- Link your NTFS game folder

```bash
sudo mkdir -p /media/gamedisk
sudo blkid # FA709D69709D2CFF
id -u # 1000
id -g # 1000
sudo nano /etc/fstab
UUID=FA709D69709D2CFF /media/gamedisk ntfs uid=1000,gid=1000,rw,user,exec,umask=000 0 0
# UUID=FA709D69709D2CFF /media/gamedisk lowntfs-3g uid=1000,gid=1000,rw,user,exec,umask=000 0 0
mkdir -p ~/.steam/steam/steamapps/compatdata
sudo reboot
ln -s ~/.steam/steam/steamapps/compatdata /media/gamedisk/Steam/steamapps/
```

## XDG

### Make a startup script using XDG startup

```bash
nano ~/.config/autostart/gamma_on_startup.desktop
```

```bash
[Desktop Entry]
Name=gamma-on-startup
Type=Application
Exec=bash -c  "/usr/local/bin/gamma_on_startup &> /dev/null" 
Terminal=true
```

```bash
desktop-file-validate ~/.config/autostart/gamma_on_startup.desktop
chmod +x ~/.config/autostart/gamma_on_startup.desktop
```

Example program:

```bash
sudo chmod a+rwx /usr/local/bin/
nano /usr/local/bin/gamma_on_startup

sleep 5
xrandr --output HDMI-A-0 --brightness 0.75 --gamma 0.75:0.75:0.75 
```

```bash
sudo chmod a+rwx /usr/local/bin/gamma_on_startup
```

## Systemd, systemctl

### Analyzing

```bash
systemd-analyze
systemd-analyze blame
```

### Reloading

```bash
systemctl daemon-reload
```

### Find services failed to start

```bash
systemctl --state=failed
```

### Journal Size

```bash
sudo nano /etc/systemd/journald.conf
```

```bash
SystemMaxUse=100M
```

### Run a script after suspending has finished (resume)

```bash
sudo nano /etc/systemd/system/gamma.service
```

```bash
[Unit]
Description=Start Script in terminal
After=suspend.target graphical.target network-online.target NetworkManager-wait-online.service

[Service]
User=mlibre
Type=idle
Environment=DISPLAY=:0
ExecStartPre=/bin/sleep 10
ExecStart=/usr/bin/xterm -e /usr/local/bin/gamma_on_startup

[Install]
WantedBy=suspend.target graphical.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable gamma.service
systemctl status gamma
journalctl -u gamma
```

### Unit files' locations

```bash
systemctl show --property=UnitPath
```

## Autostarts and Startup scripts and programs locations

- nano .profile
- nano /etc/profile
- ls /etc/profile.d/
- ls ~/.config/autostart
- ls /etc/xdg/autostart
- ls /usr/share/xsessions
- ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
- sudo systemctl list-unit-files --type=service --state=enabled --all
- ls /etc/init.d/
- nano ~/.xinitrc
- nano /etc/X11/xinit/xinitrc
- ls /etc/X11/xinit/xinitrc.d/
- cat ~/.xserverrc
- cat /etc/pam.d/
- ls /etc/xdg/lxsession/LXDE/autostart
- ls ~/.config/lxsession/LXDE/autostart
- crontab -e
- sudo crontab -e

- nano .bash_profile
- nano .bashrc
- nano /etc/bash.bashrc

## VPN

### Redirecting the whole traffic

```bash
sudo ip route add 192.168.1.0/24 dev ppp0
# ppp0: vpn name
# 192.168.1.0: IP range
```

## Install Genymotoin Android emulator

```bash
sudo pamac install genymotion
```

## Font

### Location

- `~/.local/share/fonts/`
- `/usr/local/share/fonts/`
- `/usr/share/fonts/`

### List

List installed fonts

```bash
fc-match -a
```

### Fira Code

A popular code font.

```bash
sudo pacman -S ttf-fira-code
fc-match -a | grep -i fira
```

## Backup using Rsync

```bash
sudo rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/var/*","/media/*","/usr/*","/lib/*","/lib64/","/lost+found","/swapfile",".npm*",".npm/*","node_modules*","node_modules/*","mesa_shader_cache*","steamapps*","Data*","Steam*"} / /run/media/mlibre/H/OS/full-copy/
```

## Resetting sound, audio

```bash
pulseaudio --kill
# pulseaudio --start
```

## Fixing broken grub

Boot a live Manjaro image

```bash
sudo manjaro-chroot -a
grub-install
update-grub
```

It will detect your current installed linux.  
Restart the computer and it will boot the installed linux.  
Then run:

```bash
update-grub
```

## Open an application using tor over socks

```bash
torsocks deluge
```

## Things to do before installing Manjaro/Arch Linux

- Backup important data. Recovery-keys, Passwords, Postman and ...  

  ```bash
  cp -r /home/mlibre/.local/share/TelegramDesktop /run/media/mlibre/H/OS/caches/
  rsync -aAXHv ~/my_data/ /run/media/mlibre/H/OS/my_data/
  # ./data_rsync.bash
  ```

- Mark EFI partition while installing Manjaro/Arch Linux as /boot/efi. Don't check Format option.

## Things to do after installing Manjaro/Arch Linux

- Update System

  ```bash
  sudo systemctl disable pamac-daemon
  sudo pacman -R manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil
  sudo pacman-mirrors --fasttrack
  sudo pacman -Syyuu
  sudo pacman -S telegram-desktop
  ```

- Import Data

  ```bash
  cp -r /run/media/mlibre/H/OS/caches/TelegramDesktop /home/mlibre/.local/share/
  cp -r /run/media/mlibre/H/OS/my_data/ ~/my_data
  # ./import_data.bash
  ```

- Make an XDG autostart script for gamma adjustment
- Put the gamma script in the `.bashrc` and `.zshrc` as well
- Install vscode

  ```bash
  pamac update --force-refresh
  pamac install visual-studio-code-bin
  ```

- Install ProtonVPN, mailspring
  
  ```bash
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
- KDE Settings -> Search for KRuuner -> settings -> uncheck all

- Pin Firefox, Terminal, ProtonVPN, Kate and VSCode to the panel
- Software Center: Disable automatic updates, Add AUR support
- Remove Virtual Desktops
- Pacman downloads parallel

  ```bash
  sudo nano /etc/pacman.conf
  ParallelDownloads = 5
  ```

- Remembers sudo password

  ```bash
  sudo nano /etc/sudoers
  Defaults        timestamp_timeout=300 # 5 hours
  ```

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
sudo pacman -S qbittorrent deluge clamav firefox gimp gparted libreoffice-fresh meld vlc ntfs-3g firewalld aria2 ttf-ubuntu-font-family gnome-keyring libsecret core/iputils clinfo tor torsocks steam-native-runtime
# sudo pacman -S electrum

sudo systemctl disable bluetooth.service
sudo systemctl disable tor.service
sudo systemctl disable samba
sudo systemctl disable cups

sudo systemctl enable firewalld
sudo systemctl restart firewalld

sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-port=30303/tcp
sudo firewall-cmd --permanent --add-port=30303/udp



sudo systemctl restart --now clamav-daemon
sudo freshclam
clamscan --recursive --infected /home
sudo systemctl disable --now clamav-freshclam
sudo systemctl disable --now clamav-daemon
# sudo systemctl enable --now clamav-daemon
# sudo systemctl enable --now clamav-freshclam
```

- Firefox: Enable DNS over HTTPS
- Enable automatic mounting of external drives: Settings -> Hardware -> Removable Storage -> Automount
- Konsole config:
  - Font: Monospace 13pt
  - Theme: Breath (customized, a bit darker)
  - Shell: Manjaro zsh

### Install AMDGPU-PRO

```bash
# https://wiki.archlinux.org/title/AMDGPU_PRO
pamac install vulkan-amdgpu-pro
pamac install lib32-vulkan-amdgpu-pro 
# pamac install amdgpu-pro-libgl
# pamac install lib32-amdgpu-pro-libgl
# pamac install opencl-amd
# pamac install amf-amdgpu-pro
glxinfo | grep "OpenGL vendor string"
lspci -v | grep -A 10 VGA
```

### Uninstall AMDGPU-PRO

```bash
pacman -R $(pacman -Qg Radeon_Software_for_Linux | cut -f2 -d" ")
```

### Blacklist Radeon

```bash
sudo nano /etc/modprobe.d/radeon.conf 
blacklist radeon
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

## Install a new os on the phone

### backup data

```bash
adb backup -apk -shared -all -f backup-file.adb
```

### Enable Developer options

- Several times clicks on the kernel tab
- Allow OEM unlocking
- Enter Download mod:
  1. Turn off the phone.  
  2. Hold vol key up + down.
  3. Now in the warning message page. choose "unlocking bootloader" that will perform a factory reset

### Install odin tools for Samsung >= 3.14

<https://samsungodin.com/>

### Install samsung driver

<https://developer.samsung.com/android-usb-driver>

### Install adb

<https://developer.android.com/studio/releases/platform-tools>

```bash
adb reboot download
```

### Download TWRP

<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>
<https://twrp.me/samsung/samsunggalaxya10.html>

#### convert it to .md5

<https://www.droidthunder.com/convert-img-to-tar-md5/>

### Run Odin as administrator

follow the instructions
<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>

### Install bluestack

<https://www.bluestacks.com/>

Download, login and install whatsapp, telegram and google
