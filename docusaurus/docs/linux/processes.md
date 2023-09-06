---
sidebar_position: 14
tags:
  - Linux
  - process
  - monitor
---

# process

## ps, bg, fg, jobs, &, ctrl+comb

|             Command             |                    Short Description                    |
| :-----------------------------: | :-----------------------------------------------------: |
|            `ps -ef`             |       List all processes with ppid and exec path        |
| `ps aux \| grep <process_name>` |                Filter processes by name                 |
|          `bg <job_id>`          |    Resume a specific suspended job in the background    |
|          `fg <job_id>`          |    Bring a specific background job to the foreground    |
|            `jobs -l`            |          List background jobs with process IDs          |
|        `jobs %<job_id>`         |        Display information about a specific job         |
|     `systemctl status 1234`     |  Show the status of a specific systemd unit by its PID  |
|          `command1 &`           |            Run `command1` in the background             |
|             `nohup`             | Run a command that keeps running even after you log out |
|        `nohup command1`         |  Run `command1` and keep it running after logging out   |
|            `ctrl+c`             |                   Interrupt a process                   |
|            `ctrl+z`             |                    Suspend a process                    |
|            `ctrl+l`             |                Clear the terminal screen                |

## kill, pkill, killall

|       Command       |                       Short Description                       |
| :-----------------: | :-----------------------------------------------------------: |
|     `kill PID`      |   Terminate the process with the specified Process ID (PID)   |
|    `kill -9 PID`    |    Forcefully terminate the process with the specified PID    |
|    `kill -1 PID`    | Send the SIGHUP signal to the process with the specified PID  |
|   `kill -15 PID`    | Send the SIGTERM signal to the process with the specified PID |
|  `killall process`  |        Terminate all processes with the specified name        |
| `pkill -u username` |                       Kill by Username                        |
|   `pkill -t tty`    |                       Kill by Terminal                        |
| `pkill -f pattern`  |                        Kill by Pattern                        |
| `pkill -x process`  |                      Kill Exact Process                       |
| `pkill -n process`  |                      Kill Newest Process                      |

# pgrep

|                   Command                   |                      Short Description                       |
| :-----------------------------------------: | :----------------------------------------------------------: |
|                   `pgrep`                   |          List processes by name or other attributes          |
|                `pgrep sshd`                 |             List processes with the name 'sshd'              |
|         `pgrep nginx \| xargs kill`         | processes with 'nginx' in their name, send a SIGTERM to them |
| `pgrep -u masoud \| xargs -I {} kill -9 {}` |        and forcefully terminate prccess with "masoud"        |

## free, uptime, df

|         Command         |                           Short Description                            |
| :---------------------: | :--------------------------------------------------------------------: |
|        `free -m`        |                   Display memory usage in megabytes                    |
|        `free -h`        |            Display memory usage with human-readable format             |
|       `uptime -p`       |             Display uptime in a more human-readable format             |
|       `uptime -s`       |             Display the date and time since system started             |
|         `df -h`         |          Display disk space usage with human-readable format           |
|         `df -T`         |             Display disk space usage with filesystem type              |
|    `watch -n 1 date`    |           Watch and display the date and time every 1 second           |
|   `watch -n 5 df -h`    |           Watch and update disk space usage every 5 seconds            |
| `watch -cd -n 1 uptime` | Watch system uptime every 1 second with color highlighting for changes |

## tmux

|                    Command                     |                        Short Description                         |
| :--------------------------------------------: | :--------------------------------------------------------------: |
|                     `tmux`                     |                       Terminal multiplexer                       |
|            `tmux new -s mysession`             |           Create a new tmux session named "mysession"            |
|           `tmux attach -t mysession`           |         Attach to an existing session named "mysession"          |
|        `tmux kill-session -t mysession`        |            Remove the tmux session named "mysession"             |
|                   `tmux ls`                    |                 List all available tmux sessions                 |
|              `tmux split-window`               |              Split the current window horizontally               |
|                 `tmux detach`                  |               Detach from the current tmux session               |
| `tmux rename-session -t oldsession newsession` |     Rename a tmux session from "oldsession" to "newsession"      |
|                   `Ctrl-b %`                   |          Split the current window vertically (shortcut)          |
|                   `Ctrl-b "`                   |         Split the current window horizontally (shortcut)         |
|                   `Ctrl-b d`                   |         Detach from the current tmux session (shortcut)          |
|                   `Ctrl-b $`                   |              Rename the current session (shortcut)               |
|                   `Ctrl-b [`                   | Enter copy mode to scroll through the terminal output (shortcut) |
|                   `Ctrl-b o`                   |   Cycle through open windows in the current session (shortcut)   |
|                  `Ctrl-b Up`                   |   Choose the previous window using the Up arrow key (shortcut)   |
|                 `Ctrl-b Down`                  |    Choose the next window using the Down arrow key (shortcut)    |
