---
sidebar_position: 16
tags:
  - Linux
  - toold
---

# Awesome Tools

## Shell

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


cd $BASH_IT
./uninstall.sh
```

## System monitoring

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

## Files

### bat

```bash
sudo pacman -S bat
bat .ssh/id_rsa.pub 
```

### ccat

```bash
pamac isntall ccat
ccat file.txt
```

## Youtube-dl

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
