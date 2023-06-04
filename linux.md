# Linux Cheat Sheet

Linux Cheat Sheet is a collection of useful commands and shortcuts for Linux.  
And a comprehensive guide to various aspects of Linux operating system

- [Tips and Tricks](#tips-and-tricks)
  - [Automatic Shutdown](#automatic-shutdown)
  - [Bash case-insensitive auto completion](#bash-case-insensitive-auto-completion)
  - [Changing monitor or screen Brightness and Gamma](#changing-monitor-or-screen-brightness-and-gamma)
  - [Resetting sound, audio](#resetting-sound-audio)
  - [Fixing broken grub](#fixing-broken-grub)
    - [EZ method](#ez-method)
    - [Second method](#second-method)
  - [Check boot errors, logs](#check-boot-errors-logs)
  - [Using proxies](#using-proxies)
    - [proxychains config](#proxychains-config)
  - [Resetting KDE](#resetting-kde)
  - [Click on the screen](#click-on-the-screen)
  - [Instant cloud file share](#instant-cloud-file-share)
- [Backup](#backup)
  - [Rsync](#rsync)
  - [Partical Backup using locate](#partical-backup-using-locate)
- [Performance](#performance)
  - [Disable Linux Watchdogs, compaction and more](#disable-linux-watchdogs-compaction-and-more)
  - [Improve fstab, ssd, nvme performance](#improve-fstab-ssd-nvme-performance)
  - [Disabling journaling](#disabling-journaling)
  - [Journal Size](#journal-size)
- [XDG](#xdg)
  - [Make a startup script using XDG startup](#make-a-startup-script-using-xdg-startup)
- [Systemd](#systemd)
  - [Unit files' locations](#unit-files-locations)
  - [Analyzing](#analyzing)
  - [Reloading](#reloading)
  - [Run a script after suspending has finished (resume)](#run-a-script-after-suspending-has-finished-resume)
- [Autostarts and Startup scripts and programs locations](#autostarts-and-startup-scripts-and-programs-locations)
- [Font](#font)
  - [Locations](#locations)
  - [List](#list)
  - [Fira Code](#fira-code)
  - [Cache](#cache)
- [Vulkan](#vulkan)
- [Dota 2](#dota-2)
  - [Dota 2 Options](#dota-2-options)
  - [Link NTFS game folder](#link-ntfs-game-folder)
  - [Run using proxy](#run-using-proxy)
  - [Disable desktop effects](#disable-desktop-effects)
- [lutris](#lutris)
  - [Installation](#installation)
  - [With Proxy](#with-proxy)
  - [Proxy per game](#proxy-per-game)
  - [Unexpected error](#unexpected-error)
- [Install Genymotoin Android emulator](#install-genymotoin-android-emulator)
- [Windows 11](#windows-11)
  - [Make boatable usb](#make-boatable-usb)
    - [WoeUsb](#woeusb)
    - [Win2USB](#win2usb)
    - [Things to do after installing Windows 11](#things-to-do-after-installing-windows-11)
- [Manjaro/Arch Linux](#manjaroarch-linux)
  - [Things to do before installing](#things-to-do-before-installing)
  - [Things to do after installing](#things-to-do-after-installing)
  - [AMDGPU](#amdgpu)
    - [TearFree, EnablePageFlip, DRI3](#tearfree-enablepageflip-dri3)
    - [Reducing DRI latency](#reducing-dri-latency)
    - [check xorg config file](#check-xorg-config-file)
    - [Blocking radon](#blocking-radon)
    - [Install AMDGPU-PRO](#install-amdgpu-pro)
    - [Uninstall AMDGPU-PRO](#uninstall-amdgpu-pro)
  - [Blacklist Radeon](#blacklist-radeon)
  - [Install Wine](#install-wine)
- [Install a new os on the phone](#install-a-new-os-on-the-phone)
  - [Backup data](#backup-data)
  - [Restore](#restore)
  - [Enable Developer options](#enable-developer-options)
  - [Install odin tools for Samsung \>= 3.14](#install-odin-tools-for-samsung--314)
  - [Install samsung driver](#install-samsung-driver)
  - [Install adb](#install-adb)
  - [Download TWRP](#download-twrp)
    - [convert it to .md5](#convert-it-to-md5)
  - [Run Odin as administrator](#run-odin-as-administrator)
  - [Install bluestack](#install-bluestack)
  - [Youtube-dl](#youtube-dl)
- [Network](#network)
- [Raspberry pi](#raspberry-pi)

## Tips and Tricks

### Automatic Shutdown

```bash
# Schedule a shutdown for 220 minutes (3 hours and 30 minutes) in the future
sudo shutdown -P +220

# Shutdown the system immediately
sudo shutdown -h now
```

### Bash case-insensitive auto completion

```bash
# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc

# or as root
echo 'set completion-ignore-case On' >> /etc/inputrc 

# or for current user only
echo "set completion-ignore-case on" >> ~/.inputrc
```

### Changing monitor or screen Brightness and Gamma

```bash
# List available outputs
xrandr

# Change the brightness and gamma of the HDMI-A-0 output
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

### Resetting sound, audio

```bash
pulseaudio --kill
pulseaudio --start
```

### Fixing broken grub

#### EZ method

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

#### Second method

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

### Check boot errors, logs

```bash
sudo dmesg --level=emerg,alert,crit,err
# Open KsystemLog
```

### Using proxies

```bash
# Use proxychains to run yay, git, npm and pacman
proxychains yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm"  -S protonvpn
proxychains git clone https://github.com/boypt/vmess2json.git
sudo proxychains npm -g install v2ray-tools
sudo proxychains pacman -Syyuu

# Set the http and https proxy environment variables
export http_proxy=socks5://127.0.0.1:1080
export https_proxy=socks5://127.0.0.1:1080
```

#### proxychains config

```bash
sudo nano /etc/proxychains.conf 
socks5  127.0.0.1 1080
## comment proxy_dns
# proxy_dns
```

### Resetting KDE

```bash
qdbus org.kde.KWin /Compositor suspend;
rm ~/.cache/ksycoca5*;
kquitapp5 plasmashell;
killall plasmashell;
kstart5 plasmashell;
```

### Click on the screen

```bash
# Install xdotool
sudo pacman -S xdotool
xdotool mousemove <x> <y> click 1
# xdotool getmouselocation
# xdotool mousemove 843 1044 click 1
```

> Simple script to click on the screen for given minutes and sleep time

```bash
#!/bin/bash

# Check for two arguments
if [[ $# -ne 2 ]]; then
    echo "Usage: $0 <minutes> <sleep>"
    exit 1
fi

# Convert minutes to seconds
RUN_TIME=$(echo "$1 * 60" | bc)

while [[ $(echo "$RUN_TIME > 0" | bc) -eq 1 ]]; do
    # Get screen resolution
    RES=$(xdpyinfo | grep dimensions | awk '{print $2}')
    WIDTH=$(echo $RES | awk -Fx '{print $1}')
    HEIGHT=$(echo $RES | awk -Fx '{print $2}')

    # Move mouse to center of screen and click
    xdotool mousemove $((WIDTH/2)) $((HEIGHT/2))
    xdotool click 1

    # Sleep for specified time
    sleep $2

    # Decrement run time by sleep time
    RUN_TIME=$(echo "$RUN_TIME - $2" | bc)
done
```

And run:

```bash
chmod +x click.sh
./click.sh 10 0.5
```

### Instant cloud file share

```bash
# -F autodestroy=1 autodestroy on download or expire in 5
curl https://oshi.at -F f=@/home/true/backup.tar.gz -F expire=5 minutes
curl -F "file=@/home/mlibre/Downloads/backup.tar.gz" "https://file.io/?expires=1w"
```

## Backup

### Rsync

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

### Partical Backup using locate

```bash
sudo tar -czvf backup.tar.gz $(locate x-ui)
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/
sudo tar -czvf backup.tar.gz $(locate x-ui) /root/cert /root/cert.crt /root/private.key /root/.acme.sh

sudo tar xvf backup.tar.gz -C / # Extract in root directory
```

## Performance

### Disable Linux Watchdogs, compaction and more

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

### Improve fstab, ssd, nvme performance

```bash
sudo nano /etc/fstab 
UUID=f74c37b2-8a12-4252-90a6-d31504507bcb / ext4  defaults,noatime,nodiratime,commit=60,barrier=0  0 1
```

```bash
sudo nano /etc/udev/rules.d/60-ioschedulers.rules

ACTION=="add|change", KERNEL=="nvme[0-9]n[0-9]", ATTR{queue/scheduler}="none"
```

### Disabling journaling

```bash
sudo tune2fs -f -O "^has_journal" /dev/sda2
```

### Journal Size

```bash
sudo nano /etc/systemd/journald.conf
SystemMaxUse=100M
sudo systemctl restart systemd-journald
```

## XDG

### Make a startup script using XDG startup

```bash
mkdir -p ~/.config/autostart
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
export DISPLAY=:0
xrandr --output HDMI-A-0 --brightness 0.70 --gamma 0.70:0.70:0.70 
```

```bash
sudo chmod a+rwx /usr/local/bin/gamma_on_startup
```

## Systemd

### Unit files' locations

```bash
systemctl show --property=UnitPath
```

### Analyzing

```bash
systemd-analyze
systemd-analyze blame

systemctl --state=failed

sudo systemctl list-unit-files --type=service --state=enabled --all
sudo systemctl list-unit-files | grep enabled
systemctl journal -u example.service
```

### Reloading

```bash
systemctl daemon-reload
```

### Run a script after suspending has finished (resume)

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

## Autostarts and Startup scripts and programs locations

- nano .profile
- nano /etc/profile
- nano ~/.bash_profile
- nano .bashrc
- nano /etc/bash.bashrc
- ls /etc/profile.d/
- ls ~/.config/autostart
- ls /etc/xdg/autostart
- ls /usr/share/xsessions
- ls -1 /lib/systemd/system/.service /etc/systemd/system/.service
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

## Font

### Locations

- `~/.local/share/fonts/`
- `/usr/local/share/fonts/`
- `/usr/share/fonts/`

### List

List installed fonts

```bash
fc-match -a
fc-list : file
```

### Fira Code

A popular code font.

```bash
sudo pacman -S ttf-fira-code
fc-match -a | grep -i fira
```

### Cache

```bash
sudo rm -v /var/cache/fontconfig/*
fc-cache -r
```

## Vulkan

```bash
sudo pacman -S vulkan-radeon lib32-vulkan-radeon
```

```bash
sudo nano /etc/environment
VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/radeon_icd.i686.json:/usr/share/vulkan/icd.d/radeon_icd.x86_64.json
```

## Steam Games

- Move Games to your local linux machine
- Disable steam overlay, steam inputs, ...

### Link NTFS game folder

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

### Run using proxy

```bash
proxychains steam steam://rungameid/100
```

### Disable desktop effects

```bash
qdbus org.kde.KWin /Compositor suspend
# qdbus org.kde.KWin /Compositor resume
xset -dpms
xset s off
```

## lutris

### Installation

```bash
sudo pacman -S telegram-desktop lutris vkd3d tsocks proxychains
```

### With Proxy

```bash
sudo nano /etc/tsocks.conf

server = 127.0.0.1
server_port = 1080
server_type = 5

tsocks lutris
```

```bash
# make sure proxy_dns is commneted
proxychains lutris
```

### Proxy per game

```bash
# Check show advanced options
# Put /usr/bin/tsocks in
# Game -> configuration -> System options -> command prefix
```

### Unexpected error

```bash
rm -r ~/.wine
```

## Install Genymotoin Android emulator

```bash
sudo pamac install genymotion
```

## Windows 11

### Make boatable usb

#### WoeUsb

```bash
sudo pacman -Suy p7zip python-pip python-wxpython
git clone https://github.com/WoeUSB/WoeUSB-ng.git
sudo pip3 install .
sudo woeusb --workaround-skip-grub --target-filesystem NTFS --device ~/Win11_22H2_English_x64v1.iso  /dev/sdb
```

#### Win2USB

```bash
https://github.com/ValdikSS/windows2usb
chmod +x windows2usb*
./windows2usb-0.2.4-x86_64.AppImage /dev/sdb ~/Win11_22H2_English_x64v1.iso gpt+uefintfs
```

#### Things to do after installing Windows 11

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

## Manjaro/Arch Linux

### Things to do before installing

- Backup important data. Recovery-keys, Passwords, Postman and ...  

```bash
cp -rf /home/mlibre/.local/share/TelegramDesktop /run/media/mlibre/D/caches
cp $HISTFILE /run/media/mlibre/D/caches/
rsync -aAXHv ~/my_data/ /run/media/mlibre/H/OS/my_data/
sudo cp -r /etc /run/media/mlibre/D/caches/
# ./data_rsync.bash
# Copy systemctl units
```

- Mark EFI partition while installing Manjaro/Arch Linux as /boot/efi. Don't check Format option.

### Things to do after installing

- Remove and disable unnecessary packages

  ```bash
  echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER
  sudo systemctl disable pamac-daemon
  sudo systemctl disable pamac-mirrorlist.timer
  sudo systemctl disable pamac-mirrorlist.service
  sudo pacman -R manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro pamac-tray-icon-plasma kdeconnect
  ```

- Pacman downloads parallel

  ```bash
  sudo nano /etc/pacman.conf
  ParallelDownloads = 5
  ```
  
- Upgrade

  ```bash
  pamac update --force-refresh
  sudo pacman-mirrors --fasttrack
  sudo pacman -Syyuu
  sudo pacman -S telegram-desktop unzip thermald ntfs-3g
  sudo systemctl enable --now thermald.service
  pamac install visual-studio-code-bin onlyoffice-bin microsoft-edge-stable-bin

  # Disable "Show mini menu when selecting text" in microsoft edge settings
  ```

- Import Data

  ```bash
  cp -r /run/media/mlibre/H/OS/caches/TelegramDesktop /home/mlibre/.local/share/
  cp -r /run/media/mlibre/H/OS/my_data/ ~/my_data
  # ./import_data.bash
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
sudo pacman -S qbittorrent firefox libreoffice-fresh meld vlc ntfs-3g  aria2 ttf-ubuntu-font-family gnome-keyring libsecret core/iputils clinfo tor torsocks steam-native-runtime
# sudo pacman -S electrum gimp gparted firewalld clamav deluge

sudo systemctl disable bluetooth.service
sudo systemctl disable tor.service
sudo systemctl disable samba
sudo systemctl disable cups
balooctl disable && balooctl purge &&
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

- Firefox: Enable DNS over HTTPS
- Enable automatic mounting of external drives: Settings -> Hardware -> Removable Storage -> Automount
- Konsole config:
  - Font: Monospace 13pt
  - Theme: Breath (customized, a bit darker)
  - Shell: Manjaro zsh

- Steam: Allow auto-update only between 1AM - 11AM

### AMDGPU

#### TearFree, EnablePageFlip, DRI3

```bash
# settings files
/usr/share/X11/xorg.conf.d/
/etc/X11/xorg.conf.d/

sudo nano /usr/share/X11/xorg.conf.d/10-amdgpu.conf

Section "OutputClass"
    Identifier "AMDgpu"
    MatchDriver "amdgpu"
    Driver "amdgpu"
    Option "TearFree" "true"
    Option "DRI" "3"
    Option "EnablePageFlip" "on"
EndSection

cat /var/log/Xorg.0.log | grep -i tear
```

#### Reducing DRI latency

```bash
sudo nano /etc/drirc

<driconf>
   <device>
       <application name="Default">
           <option name="vblank_mode" value="0" />
       </application>
   </device>
</driconf>
```

#### check xorg config file

```bash
sudo Xorg -config /usr/share/X11/xorg.conf.d/10-amdgpu.conf
```

#### Blocking radon

```bash
sudo nano /etc/modprobe.d/radeon.conf

blacklist radeon
```

#### Install AMDGPU-PRO

```bash
# https://wiki.archlinux.org/title/AMDGPU_PRO
pamac install vulkan-amdgpu-pro lib32-vulkan-amdgpu-pro 
pamac install amdgpu-pro-oglp lib32-amdgpu-pro-oglp 
# pamac install amdgpu-pro-libgl lib32-amdgpu-pro-libgl
# pamac install opencl-amd
# pamac install amf-amdgpu-pro
glxinfo | grep "OpenGL vendor string"
lspci -v | grep -A 10 VGA
vk_pro steam
```

#### Uninstall AMDGPU-PRO

```bash
pacman -R $(pacman -Qg Radeon_Software_for_Linux | cut -f2 -d" ")
```

### Blacklist Radeon

```bash
sudo nano /etc/modprobe.d/radeon.conf 
blacklist radeon
```

### Install Wine

```bash
# pamac install wine-stable
sudo pacman -S wine winetricks
winetricks corefonts vcrun2013 vcrun2015 winhttp allcodecs d3dcompiler_42 d3dcompiler_43 d3dcompiler_47 d3dx9 dotnet dxvk quartz
sudo setcap cap_net_raw+epi /usr/bin/wine
```

## Install a new os on the phone

### Backup data

```bash
sudo pacman -S android-tools
sudo adb devices
adb backup -apk -shared -all -f backup-file.ab
```

### Restore

```bash
adb restore file.ab
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

### Youtube-dl

```bash
youtube-dl -f best --proxy socks5://127.0.0.1:1080/ --write-auto-sub "https://www.youtube.com/link"
```