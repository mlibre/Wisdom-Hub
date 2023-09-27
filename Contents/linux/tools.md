---
sidebar_position: 10
tags:
  - Linux
  - tools
---

# Awesome Tools

## Shell

### ble.sh

Syntax highlighting and auto suggestions for bash

```bash
# https://github.com/akinomyoga/ble.sh
git clone --recursive --depth 1 --shallow-submodules https://github.com/akinomyoga/ble.sh.git
make -C ble.sh install PREFIX=~/.local
echo 'source ~/.local/share/blesh/ble.sh' >> ~/.bashrc

# Install in Manjaro
pamac install blesh-git
```

### Bash It

```bash
git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it
~/.bash_it/install.sh

source ~/.bashrc

bashit
bash-it show aliases
bash-it show plugins
bash-it show completions

bash-it enable completion all
bash-it update
bash-it reload

ls ~/.bash_it/themes/

bash-it enable plugin man

cd $BASH_IT
./uninstall.sh
```

## System monitoring

### Neofetch

```bash
neofetch 
██████████████████  ████████   mlibre@mlibre-systemproductname 
██████████████████  ████████   ------------------------------- 
██████████████████  ████████   OS: Manjaro Linux x86_64 
██████████████████  ████████   Kernel: 6.1.49-1-MANJARO 
████████            ████████   Uptime: 38 mins 
████████  ████████  ████████   Packages: 1657 (pacman) 
████████  ████████  ████████   Shell: bash 5.1.16 
████████  ████████  ████████   Resolution: 2560x1440 
████████  ████████  ████████   DE: Plasma 5.27.7 
████████  ████████  ████████   WM: KWin 
████████  ████████  ████████   Theme: [Plasma], Breeze [GTK2/3] 
████████  ████████  ████████   Icons: [Plasma], breeze [GTK2/3] 
████████  ████████  ████████   Terminal: konsole 
████████  ████████  ████████   CPU: 12th Gen Intel i5-12400F (12) @ 5.600GHz 
                               GPU: AMD ATI Radeon RX 6400/6500 XT/6500M 
                               Memory: 5046MiB / 31906MiB 
                                                       
```

### htop

```bash
htop
```

### prettyping

```bash
sudo pacman -S prettyping
prettyping
```

## Network Monitoring

### bmon

```bash
sudo pacman -S bmon
bmon
```

## Wine

```bash
# pamac install wine-stable
sudo pacman -S wine winetricks
winetricks corefonts vcrun2013 vcrun2015 winhttp allcodecs d3dcompiler_42 d3dcompiler_43 d3dcompiler_47 d3dx9 dotnet dxvk quartz
sudo setcap cap_net_raw+epi /usr/bin/wine
```

## proxy

### proxychains

```bash
sudo nano /etc/proxychains.conf 
socks5  127.0.0.1 1080
# comment proxy_dns
# proxy_dns
```

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

## Youtube Download

```bash
# Install
sudo pacman -S youtube-dl yt-dlp

# Download best quality
yt-dlp "https://www.youtube.com/link"

yt-dlp -f b --write-description  --write-auto-sub --write-subs --embed-subs --write-info-json --max-filesize 100M --download-sections "*6:02-13:40" --proxy socks5://127.0.0.1:1080/ --verbose "https://www.youtube.com/link"

# List formats and sizes
yt-dlp -F "https://www.youtube.com/link"
yt-dlp -f 22 "https://www.youtube.com/link" 

youtube-dl -f best "https://www.youtube.com/link"
```

### Add Alias

```bash
nano ~/.bashrc
alias yd='yt-dlp -f b --write-auto-sub --write-subs --embed-subs --write-info-json --max-filesize 100M'
yd "link"

## Install Genymotoin Android emulator

```bash
sudo pamac install genymotion
```

## Instant cloud file share

```bash
# -F autodestroy=1 autodestroy on download or expire in 5
curl https://oshi.at -F f=@/home/true/backup.tar.gz -F expire=5 minutes
curl -F "file=@/home/mlibre/Downloads/backup.tar.gz" "https://file.io/?expires=1w"
```

## Open Interpreter

```bash
python -m venv myvirtenv
source myvirtenv/bin/activate
pip install open-interpreter
interpreter --model tiiuae/falcon-180B
```

## Timewarrior

A simple time tracking tool for command line.

```bash
sudo pacman -S timew
```

### Usage

|             Command             |            Description            |
| :-----------------------------: | :-------------------------------: |
|             `timew`             | Create the database if not exist  |
|   `timew start tag1 "tag 2"`    | Start tracking with multiple tags |
|          `timew stop`           | Stop tracking time for last task  |
|        `timew continue`         |      Continue the last task       |
| `timew track 9:00 - 11:00 tag1` |     Historical track for tag1     |
|   `timew modify end @1 12:45`   |      Modify end @1 to 12:45       |

### Advanced Usage

|               Command                |        Description        |
| :----------------------------------: | :-----------------------: |
| `timew track 12:00:00 to 13:00 tag1` | Historical track for tag1 |
|    `timew track 7pm for 2h tag1`     | Historical track for tag1 |
|       `timew move @1 11:00:00`       |   Moving @1 to 11:00:00   |
|      `timew lengthen @1 30min`       |   lengthing @1 by 30min   |

### Features

|             Command             |           Description            |
| :-----------------------------: | :------------------------------: |
|         `timew summary`         |        View time summary         |
| `timew summary yesterday - now` | View time summary from yesterady |
|      `timew summary tag1`       | View summary for tasks with tag1 |
|      `timew summary :ids`       |    View time summary with ids    |
|           `timew day`           |        Show daily summary        |
|          `timew tags`           |     List all available tags      |
|       `timew help delete`       |            Using help            |
|        `timew delete @1`        |        Delete ID@1 entry         |
|         `timew export`          |  Export data for today to JSON   |

### backup

```bash
tar -czvf  tm.tar.gz /home/mlibre/.local/share/timewarrior
```

### Restpre

```bash
tar -xzvf tm.tar.gz /home/mlibre/.local/share/timewarrior
tar -xvzf tm.tar.gz -C /
```

### Alies

```bash
nano .bashrc
alias tm='timew'
alias tms='timew start'
alias tmt='timew track'
alias tmd='timew delete'
alias tmo='timew summary :ids'
alias tmm='timew move'
alias tml='timew lengthen'
alias tmm='timew modify'
```
