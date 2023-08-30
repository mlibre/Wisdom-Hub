---
sidebar_position: 13
tags:
  - Linux
  - shell
---

# Shell

## Bash

## Case-insensitive auto completion

```bash
# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc

# or as root
echo 'set completion-ignore-case On' >> /etc/inputrc 

# or for current user only
echo "set completion-ignore-case on" >> ~/.inputrc
```

## zsh

```bash
sudo pacman -S zsh
```