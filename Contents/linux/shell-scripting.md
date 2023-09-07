---
sidebar_position: 13
tags:
  - Linux
  - shell
  - bash
  - zsh
  - script
---

# Shell and Scripting

## Bash

|     Commands      |                           Description                            |
| :---------------: | :--------------------------------------------------------------: |
|       `env`       |                  View current environment vars                   |
|  `VAR_NAME=val`   |                     Set `VAR_NAME` to `val`                      |
|   `export VAR`    |                Make var available to child procs                 |
|    `echo $VAR`    |                      Display value of `VAR`                      |
|   `echo $PATH`    |                     Display value of `PATH`                      |
|   `echo $HOME`    |                  Display user's home directory                   |
|  `echo $EDITOR`   |                   Display default text editor                    |
| `echo $HISTFILE`  |                   Display command history file                   |
|   `echo $SHELL`   |                  Display default shell program                   |
|   `echo $USER`    |                     Display current username                     |
|     `echo $?`     |                 Display last command exit status                 |
|    `echo $PS1`    |                     Display the shell prompt                     |
|       `!!`        |                Repeats the last executed command                 |
|       `!*`        |           Represents all arguments of the last command           |
|       `!n`        |               Repeats the nth command in `history`               |
|       `!-n`       |         Repeats the nth command from the current command         |
|     `!string`     |    Repeats the most recent command that starts with `string`     |
| `!:1`, `!:2`, ... | Represents the first, second, etc. arguments of the last command |
|       `!:0`       |                Represents the command + arguments                |

### Command types

```bash
type ls
# ls is an alias for ls $LS_OPTIONS

type ssh
# ssh is /usr/bin/ssh
```

### Prompt Shell

```bash
echo $PS1

PS1='$(if [ $? -eq 0 ]; then echo -e "\[\033[42m\] \[\033[0m\]"; else echo -e "\[\033[41m\] \[\033[0m\]"; fi) \[\033[1;32m\]$(if [ $(jobs | wc -l) -gt 0 ]; then echo -n "\j "; fi)\[\033[1;36m\]\u\[\033[0m\] \[\033[1;33m\]\w\[\033[0m\] \[\033[1;34m\]$(if [ $(date +%H) -ge 6 -a $(date +%H) -lt 18 ]; then echo -n "☀️"; else echo -n "🌙"; fi)\[\033[0m\] '
```

```bash
nano .bashrc
# put your PS1 in the last line
```

### Case-insensitive Auto completion

```bash
# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc

# or as root
echo 'set completion-ignore-case On' >> /etc/inputrc 

# or for current user only
echo "set completion-ignore-case on" >> ~/.inputrc
```

### Simple Bash Scripts

#### Mouse location

```bash
while true; do
  sleep 2
  xdotool getmouselocation
done
```

#### Get screen resolution

```bash
RES=$(xdpyinfo | grep dimensions | awk '{print $2}')
WIDTH=$(echo $RES | awk -Fx '{print $1}')
HEIGHT=$(echo $RES | awk -Fx '{print $2}')
```

#### Click, Move and scroll on the screen

```bash
#!/bin/bash

# Usage: ./click2.bash 3 30

# Check for two arguments
if [[ $# -ne 3 ]]; then
 echo "Usage: $0 <mouse idle time in seconds> <sleep time in each loop> <specific action each Nth time>"
 exit 1
fi

mousemoveAndClick() {
 # Move the mouse to the specified coordinates
 xdotool mousemove $1 $2
 # mouse click
 xdotool click 1
 # Sleep for 1 second
 sleep 1
}

scroll() {
 local direction=$1
 local count=$2
 if [[ $direction == "up" ]]; then
  for i in $(seq 1 $count); do
   xdotool click 4
   sleep 0.5
  done    
 elif [[ $direction == "down" ]]; then
  for i in $(seq 1 $count); do   
   xdotool click 5 
   sleep 0.5
  done
 fi
}

remove_esc() {
 # Move the mouse to the specified coordinates
 xdotool mousemove 1575 572
 # mouse click
 xdotool click 1
 # Sleep for 1 second
 sleep 1
}

press_esc_and_click() {
 # Press ESC
 xdotool key Escape
 # Sleep for 1 second
 sleep 1
 # mouse click
 xdotool click 1
 remove_esc
}



buy() {
 # Move the mouse to the specified coordinates
 xdotool mousemove 1556 1230
 # mouse click
 xdotool click 1
 # Sleep for 1 second
 sleep 1
}

counter=0
# Get the idle time in milliseconds
IDLE_TIME=$(echo "$1 * 1000" | bc)

while true; do
 # Get the current idle time of the mouse pointer in milliseconds
 IDLE=$(xprintidle)

 # Check if the mouse has been idle for at least the specified time
 if [[ $IDLE -ge $IDLE_TIME ]]; then
   
  ((counter++))
  echo "Increasing $counter"

  # Boss
  mousemoveAndClick 34 393
  press_esc_and_click
  
  # top left
  mousemoveAndClick 1173 647
  buy

  if [[ $((counter % $3)) -eq 0 ]]; then
   scroll "down" 40
  fi
 fi

 # Sleep for specified time
 sleep $2
done
```

And run:

```bash
chmod +x click.sh
./click.sh 1 30 50
```

## zsh

```bash
sudo pacman -S zsh
```

## Font

```bash
Monospace 12
```