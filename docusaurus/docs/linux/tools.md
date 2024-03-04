---
sidebar_position: 10
tags:
  - Linux
  - tools
---

# Awesome Tools

## Utilities

### tldr

```bash
sudo pacman -S tldr

tldr apt

# ssh

#   Secure Shell is a protocol used to securely log onto remote systems.
#   It can be used for logging or executing commands on a remote server.
#   More information: https://man.openbsd.org/ssh.

#   - Connect to a remote server:
#     ssh username@remote_host

#   - Connect to a remote server with a specific identity (private key):
#     ssh -i path/to/key_file username@remote_host
# ...
```

## Shell

### Atuin

Sync, search and backup shell history with [Atuin](https://atuin.sh/)

```bash
bash <(curl --proto '=https' --tlsv1.2 -sSf https://setup.atuin.sh)
atuin import auto
```

### tbmk

A commands bookmark for terminal

```bash
git clone https://github.com/linhx/tbmk.git
cd tbmk
go build .
./install
```

* Search: type and `ctrl + space`
* Delete: in the result screen, select the item then press `ctrl + d`
* Add: `ctrl + t`. you can type the command first then press `ctrl + t`
* Edit: Override the old one by add new command with the same title.

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

### Toolong

A terminal application to view, tail, merge, and search log files (plus JSONL)

```bash
pipx install toolong
tl mylogfile.log
```

### synth-shell

synth-shell improves your terminal experience and productivity by adding color, extra info, and convenience

```bash
git clone --recursive https://github.com/andresgongora/synth-shell.git
cd synth-shell
./setup.sh
```

### hstr

A command history search tool for bash
https://github.com/dvorka/hstr

```bash
sudo pamac install hstr
hstr
```

To comes up with CTRL-R

```bash
# bash
hstr --show-bash-configuration >> ~/.bashrc
# zsh
hstr --show-zsh-configuration >> ~/.zshrc
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

## Download using aria2 and proxy

```bash
aria2c -x 15 "https://link.zip" --all-proxy="http://127.0.0.1:2081"
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
pip install --upgrade open-interpreter
export COHERE_API_KEY=APY_KEY
interpreter --model command-nightly
```
