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
|            `ctrl+c`             |                   Interrupt a process                   |
|            `ctrl+z`             |                    Suspend a process                    |
|            `ctrl+l`             |                Clear the terminal screen                |
|              `bg`               |        Resume a suspended job in the background         |
|          `bg <job_id>`          |    Resume a specific suspended job in the background    |
|              `fg`               | Bring the most recent background job to the foreground  |
|          `fg <job_id>`          |    Bring a specific background job to the foreground    |
|             `jobs`              |                List all background jobs                 |
|            `jobs -l`            |          List background jobs with process IDs          |
|        `jobs %<job_id>`         |        Display information about a specific job         |
|     `systemctl status 1234`     |  Show the status of a specific systemd unit by its PID  |
|               `&`               |             Run a command in the background             |
|          `command1 &`           |            Run `command1` in the background             |
|             `nohup`             | Run a command that keeps running even after you log out |
|        `nohup command1`         |  Run `command1` and keep it running after logging out   |


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
