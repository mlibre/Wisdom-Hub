---
sidebar_position: 13
tags:
  - Linux
  - shell
  - bash
  - zsh
  - script
---

# Shell

## Command types

```bash
type ls
# ls is an alias for ls $LS_OPTIONS

type ssh
# ssh is /usr/bin/ssh
```

## Bash

|     Commands      |                        Description                        |
| :---------------: | :-------------------------------------------------------: |
|       `env`       |       View all environment variables currently set        |
| `VAR_NAME=value`  |  Set an environment variable named `VAR_NAME` to `value`  |
| `export VAR_NAME` | Make an environment variable available to child processes |
| `echo $VAR_NAME`  | Display the value of the environment variable `VAR_NAME`  |
|   `echo $PATH`    |   Display the value of the `PATH` environment variable    |
|   `echo $HOME`    |   Display the path to the current user's home directory   |
|  `echo $EDITOR`   |     Display the default text editor for various tasks     |
| `echo $HISTFILE`  |      Display the file where command history is saved      |
|   `echo $SHELL`   |         Display the user's default shell program          |
|   `echo $USER`    |               Display the current username                |
|     `echo $?`     |   Display the exit status of the last executed command    |



### Case-insensitive auto completion

```bash
# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc

# or as root
echo 'set completion-ignore-case On' >> /etc/inputrc 

# or for current user only
echo "set completion-ignore-case on" >> ~/.inputrc
```

## Simple Bash Scripts

### Mouse location

```bash
while true; do
  sleep 2
  xdotool getmouselocation
done
```

### Get screen resolution

```bash
RES=$(xdpyinfo | grep dimensions | awk '{print $2}')
WIDTH=$(echo $RES | awk -Fx '{print $1}')
HEIGHT=$(echo $RES | awk -Fx '{print $2}')
```

### Click, Move and scroll on the screen

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
