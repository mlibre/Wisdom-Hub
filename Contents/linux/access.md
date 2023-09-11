---
sidebar_position: 2
tags:
  - Linux
  - access control
  - permissions
---

# Access

## whoami, id, groups, users

|      Command      |              Short Description              |
| :---------------: | :-----------------------------------------: |
|     `whoami`      |          Print current user's name          |
|       `id`        |      Print user and group information       |
|     `groups`      |           Print group memberships           |
| `groups username` |       Show groups for a specific user       |
|      `users`      |     Show a list of all logged-in users      |
| `cat /etc/passwd` |       information about system users        |
| `cat /etc/group`  |          information about groups           |
| `cat /etc/shadow` | encrypted password hashes for user accounts |

## chmod

|             Command              |                               Short Description                                |
| :------------------------------: | :----------------------------------------------------------------------------: |
|             `chmod`              |                            Change file permissions                             |
|         `chmod +x file`          |                        Add execute permission to a file                        |
|         `chmod -w file`          |                      Remove write permission from a file                       |
|         `chmod 644 file`         |            Set read and write for owner, read for group and others             |
|        `chmod -R 755 dir`        |                           Recursively set permission                           |
|   `chmod u=rwx,g=rx,o=rx file`   |              Set specific permissions for user, group, and others              |
|      `chmod u+s executable`      |                      Set the setuid bit on an executable                       |
|      `chmod g+s executable`      |                      Set the setgid bit on an executable                       |
|        `chmod a=-r file`         |           Remove read permission for all (owner, group, and others)            |
| `chmod -x $(find /path -type f)` | Remove execute permission from all files in a directory and its subdirectories |

> a+x will set all the x bits of the file
> +x will set all the x bits of the file that are not present in the umask

## chown, chgrp, newgrp

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
|                `newgrp`                 |                     Change your effective group ID                     |
|             `newgrp staff`              |                      Switch to the 'staff' group                       |

## SUID, GUID

When the `SUID` permission is set on an executable file, it means that when a regular user runs that executable, it will run with the permissions of the file's owner instead of the user who is executing it.  

when any user executes the `/usr/bin/passwd` command, it runs with the elevated permissions of the **root** user. This is necessary because changing a user's password requires write access to the **/etc/shadow** file, which is typically only accessible by the **root** user for security reasons.

The **/etc/shadow** file is owned by the root user and has restrictive permissions (e.g., **readable** and **writable** **only** by the **root** user). This means `regular` users do not have the necessary `permissions` to modify the file.

```bash
ls -l /usr/bin/passwd 
-rwsr-xr-x 1 root root 51552 Jan 25  2023 /usr/bin/passwd
```

## Sticky bit

The `sticky bit` on a directory ensures that only the owner of a file within that directory (or the superuser) can **delete** or **rename** that file, even if **others** have **write** permissions on the directory.

Imagine you have a `/tmp` directory on a Linux system with the `sticky bit set`:

```bash
chmod +t /tmp
```

In this setup:

- Alice can delete files she creates in `/tmp`
- Bob can delete files he creates in `/tmp`
- Other users cannot delete files created by Alice or Bob in `/tmp`, enhancing file security in shared directories like `/tmp`
