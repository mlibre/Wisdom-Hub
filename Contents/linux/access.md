---
sidebar_position: 2
tags:
  - Linux
  - access control
  - permissions
---

# Access

## whoami, id, groups, users

|      Command      |         Short Description          |
| :---------------: | :--------------------------------: |
|     `whoami`      |     Print current user's name      |
|       `id`        |  Print user and group information  |
|     `groups`      |      Print group memberships       |
| `groups username` |  Show groups for a specific user   |
|      `users`      | Show a list of all logged-in users |
| `cat /etc/passwd` |   information about system users   |
| `cat /etc/group`  |      information about groups      |

## chmod

|             Command              |                               Short Description                                |
| :------------------------------: | :----------------------------------------------------------------------------: |
|             `chmod`              |                            Change file permissions                             |
|         `chmod +x file`          |                        Add execute permission to a file                        |
|         `chmod -w file`          |                      Remove write permission from a file                       |
|         `chmod 644 file`         |            Set read and write for owner, read for group and others             |
|        `chmod -R 755 dir`        |                           Recursively set permission                           |
|   `chmod u=rwx,g=rx,o=rx file`   |              Set specific permissions for user, group, and others              |
|      `chmod +s executable`       |        Set the setuid/setgid bit on an executable (advanced permission)        |
|        `chmod a=-r file`         |           Remove read permission for all (owner, group, and others)            |
| `chmod -x $(find /path -type f)` | Remove execute permission from all files in a directory and its subdirectories |

> a+x will set all the x bits of the file
> +x will set all the x bits of the file that are not present in the umask

## chown

|                 Command                 |                           Short Description                            |
| :-------------------------------------: | :--------------------------------------------------------------------: |
|                 `chown`                 |                      Change file owner and group                       |
|         `chown user:group file`         |                  Change the owner and group of a file                  |
|     `chown -R user:group directory`     | Recursively change the owner and group of a directory and its contents |
|       `chown -c user:group file`        |     Change the ownership, show a message if the ownership changes      |
|                 `chgrp`                 |            Change group ownership of files and directories.            |
|       `chgrp groupname file.txt`        |        Change the group ownership of `file.txt` to `groupname`.        |
| `chgrp -R groupname /path/to/directory` |           Recursively change group ownership to `groupname`.           |
|  `chgrp --reference=file.txt test.txt`  |   Change group ownership of `test.txt` to match that of `file.txt`.    |
