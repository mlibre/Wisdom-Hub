---
sidebar_position: 8
tags:
  - Linux
  - Automation
---

# Automation

## cron, at

|       Command        |               Short Description                |
| :------------------: | :--------------------------------------------: |
|         `at`         |            Schedule one-time tasks             |
| `at 2:30pm tomorrow` | Schedule a task to run at 2:30 PM the next day |
|  `at now + 1 hour`   |   Schedule a task to run in 1 hour from now    |
|        `atq`         |            List pending 'at' tasks             |
|      `crontab`       |            Schedule recurring tasks            |
|     `crontab -e`     |         Edit your user's crontab file          |
|     `crontab -l`     |        List your user's crontab entries        |
|     `crontab -r`     |           Remove your user's crontab           |
|    `*/15 * * * *`    |   Run a command every 15 minutes using cron    |
|      `@reboot`       |      Run a command at system startup time      |