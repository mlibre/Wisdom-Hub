---
sidebar_position: 5
tags:
  - Linux
  - shell
  - bash
  - zsh
  - script
---

# Shell and Scripting

## Login shell vs non-login-shell

A shell session can be either a `login shell` or a `non-login shell`.

A `login shell` is the **first shell** that runs under **your user ID** when you start an interactive session, such as logging in via `tmux`, `SSH`, or `su -`. This shell reads and executes the environment configuration files `/etc/profile` and `~/.bash_profile` for `bash`. You can verify if a shell is a login shell by running `shopt login_shell`.

A `non-login shell` is any shell started in an **existing session**, like a terminal in a graphical environment, a shell **inside tmux**, or a shell within another shell. These shells **do not read** the environment configuration files (`/etc/profile` or `~/.bash_profile`), but they do read the shell configuration file (`~/.bashrc`, `/etc/bash.bashrc`).

## /etc/skel

The `/etc/skel/` directory in Linux is used as a **template** for creating a **new user's** home directory. When a new user is created with the **adduser command**, the system copies the files and directories contained in the `/etc/skel/` directory to the new user's home directory.

## Bash

### Basics

* `Variables`

```bash
my_var="Hello, World!"
echo $my_var
```

* `if`

```bash
if [ condition ]; then
  # Code to execute if condition is true
fi
```

* `loops`

```bash
for i in {1..5}; do
  echo "Iteration $i"
done
```

* `Functions`

```bash
my_function() {
  echo "Hello from my function!"
}
my_function
```

* `Command Line Arguments`

```bash
echo "First argument: $1"
```

* `Input and Output`

```bash
read -p "Enter your name: " name
echo "Hello, $name!"
```

### wait, ;, &&, ||, `, $()

|                     Command                     |                           Short Description                            |
| :---------------------------------------------: | :--------------------------------------------------------------------: |
|              `command1; command2`               |                 Run 'command1' followed by 'command2'                  |
|                    `ls; pwd`                    |            List files and then print the current directory             |
|          `mkdir myfolder; cd myfolder`          |               Create a folder and then navigate into it                |
|             command1 \|\| command2              |              Run 'command1', if it fails, run 'command2'               |
| ls /nonexistent \|\| echo "Directory not found" |  List a directory, and if it doesn't exist, display an error message   |
|             `command1 && command2`              |             Run 'command1', if it succeeds, run 'command2'             |
|            `git pull && npm install`            | Pull from a Git and install Node.js packages if the pull is successful |
|                     `wait`                      |           Pause execution until all background jobs are done           |
|          `sleep 10 & wait; echo "hi""`          |     Wait for background jobs to finish and then display a message      |
|                 `` `command` ``                 |           Executes `command` and returns its output as text.           |
|                      `$()`                      |     Executes a command within parentheses and returns its output.      |
|               `output=$(command)`               |         Executes `command` and stores its output in `output`.          |

### echo, env, export, set, unset, variables

|     Commands     |                              Description                               |
| :--------------: | :--------------------------------------------------------------------: |
|  `VAR_NAME=val`  |                        Set `VAR_NAME` to `val`                         |
|      `set`       |                 displays shell variables and functions                 |
|     `set -o`     |                     Display current shell options                      |
|     `set -e`     | Exit immediately if a command in a script exits with a non-zero status |
|  `unset MYVAR`   |            Unset the environment variable named `VAR_NAME`             |
|   `export VAR`   |                 Make var available to child processes                  |
|      `env`       |                     View current environment vars                      |
|   `echo $VAR`    |                         Display value of `VAR`                         |
|   `echo $PATH`   |                        Display value of `PATH`                         |
|   `echo $HOME`   |                     Display user's home directory                      |
|  `echo $EDITOR`  |                      Display default text editor                       |
| `echo $HISTFILE` |                      Display command history file                      |
|  `echo $SHELL`   |                     Display default shell program                      |
|   `echo $USER`   |                        Display current username                        |
|    `echo $?`     |                    Display last command exit status                    |
|   `echo $PS1`    |                        Display the shell prompt                        |

> Use `export` when you want to make a variable available to child processes
> Use `set` primarily for managing shell options and attributes, but it can also be used to set local variables

### source, alias

|        Command        |                   Description                    |
| :-------------------: | :----------------------------------------------: |
|       `source`        |  Load functions into the current shell session   |
|  `source ~/.bashrc`   |         Reloads the user's Bash profile          |
| `source my_script.sh` | Executes a shell script within the current shell |
|        `alias`        |        Create or display command aliases         |
|  `alias ll='ls -l'`   |  Creates an alias 'll' for the 'ls -l' command   |
|    `alias c=clear`    |   Creates an alias 'c' for the 'clear' command   |
|      `unalias c`      |   Remove the alias 'c' for the 'clear' command   |

### history

|     Commands      |                                   Description                                    |
| :---------------: | :------------------------------------------------------------------------------: |
|    `history 5`    |                   Displays the last 5 commands in the history                    |
|       `!!`        |                        Repeats the last executed command                         |
|       `!*`        |                   Represents all arguments of the last command                   |
|       `!n`        |                       Repeats the nth command in `history`                       |
|       `!-n`       |                 Repeats the nth command from the current command                 |
|     `!string`     |            Repeats the most recent command that starts with `string`             |
| `!:1`, `!:2`, ... |         Represents the first, second, etc. arguments of the last command         |
|       `!:0`       |                        Represents the command + arguments                        |
|  `command !:0-2`  |    Executes the **command** with the first two arguments of the last command     |
|  `command !:1-2`  | Executes the **command** with the second and third arguments of the last command |
|  `command !:2*`   |        Executes **command** from the second arguments of the last command        |
|  `some !571:2*`   |   Executes **some** from the second arguments of 571st command in the history    |

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

# you may put your PS1 in .bashrc
nano .bashrc
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
