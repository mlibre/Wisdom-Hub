---
sidebar_position: 1
tags:
  - Linux
  - access control
  - permissions
---

# Access

## User and Groups

### whoami, id, groups, users

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

### passwd, useradd, adduser, usermod

|                Command                 |                          Short Description                           |
| :------------------------------------: | :------------------------------------------------------------------: |
|           `passwd username`            |               Change password for the user 'username'                |
|          `passwd -l username`          | Lock user's password, she cannot use  password to login or change it |
|          `passwd -u username`          |                   Unlock the password of the user                    |
|               `useradd`                |                           Create new user                            |
|         `useradd -m username`          |               Create a new user with a home directory                |
|   `useradd -m -G groupname username`   |       Create user with home directory and add them to a group        |
|   `useradd -m -s /bin/bash username`   |   Create user with home directory and `/bin/bash` for login shell    |
|           `adduser username`           |              Interactively create a new user 'username'              |
|   `usermod -a -G groupname username`   |           Add the user 'username' to the group 'groupname'           |
|     `usermod -l newname username`      |      Change the login name of the user 'username' to 'newname'       |
| `usermod -m -d /new/home/dir username` |                  Move (create) user home directory                   |
| `sudo usermod --expiredate 1 username` |                  Set the user to expire immediately                  |

### groupadd, userdel, chage

|          Command           |                     Short Description                     |
| :------------------------: | :-------------------------------------------------------: |
|         `groupadd`         |              Add a new group to the system.               |
| `sudo groupadd developers` |            Create a group named "developers".             |
|    `sudo userdel john`     |              Delete the user account "john".              |
|   `sudo userdel -r jane`   | Delete the user account "jane" along with home directory. |
|    `chage -l username`     |        List password aging information for a user.        |
|   `chage -M 90 username`   |      Set maximum password age to 90 days for a user.      |

### getent

`getent` retrieves entries from databases configured in `/etc/nsswitch.conf`

|        Command         |                           Short Description                           |
| :--------------------: | :-------------------------------------------------------------------: |
|        `getent`        |            Retrieve entries from administrative databases             |
|    `getent passwd`     | Retrieve user account information (e.g., usernames, home directories) |
|     `getent hosts`     |       Retrieve host information (e.g., IP addresses, hostnames)       |
| `getent passwd mlibre` |              Retrieve information for the user "mlibre"               |

## /etc/skel

The `/etc/skel/` directory in Linux is used as a **template** for creating a **new user's** home directory. When a new user is created with the **adduser or useradd -m command**, the system copies the files and directories contained in the `/etc/skel/` directory to the new user's home directory.

## Files and Folders

### chmod

|                     Command                     |                        Short Description                        |
| :---------------------------------------------: | :-------------------------------------------------------------: |
|                     `chmod`                     |                     Change file permissions                     |
|                 `chmod +x file`                 |                Add execute permission to a file                 |
|                 `chmod -w file`                 |               Remove write permission from a file               |
|                `chmod 644 file`                 |     Set read and write for owner, read for group and others     |
|               `chmod -R 755 dir`                |                   Recursively set permission                    |
|          `chmod u=rwx,g=rx,o=rx file`           |      Set specific permissions for user, group, and others       |
|             `chmod u+s executable`              |               Set the setuid bit on an executable               |
|             `chmod g+s executable`              |               Set the setgid bit on an executable               |
|                `chmod a=-r file`                |    Remove read permission for all (owner, group, and others)    |
|        `chmod -x $(find /path -type f)`         | Remove execute permission of all files in directory and its sub |
|    `find /path -type f -exec chmod -x {} \;`    |                  Alternative to above command                   |
| find /path -type f -print0 \| xargs -0 chmod -x |                  Alternative to above command                   |

> a+x will set all the x bits of the file  
> +x will set all the x bits of the file that are not present in the umask  
> -print0 tells find to print the results separated by null characters, instead of spaces or newlines. This is useful for safely handling filenames that might contain spaces or special characters  
> -0 tells xargs to expect input separated by null characters, and not by spaces or newlines. It ensures that xargs correctly processes the list of files provided by find

### chown, chgrp, newgrp

|                 Command                 |                           Short Description                            |
| :-------------------------------------: | :--------------------------------------------------------------------: |
|            `chown user file`            |                       Change the owner of a file                       |
|         `chown user:group file`         |                  Change the owner and group of a file                  |
|     `chown -R user:group directory`     | Recursively change the owner and group of a directory and its contents |
|       `chown -c user:group file`        |     Change the ownership, show a message if the ownership changes      |
|                 `chgrp`                 |            Change group ownership of files and directories.            |
|       `chgrp groupname file.txt`        |        Change the group ownership of `file.txt` to `groupname`.        |
| `chgrp -R groupname /path/to/directory` |           Recursively change group ownership to `groupname`.           |
|  `chgrp --reference=file.txt test.txt`  |   Change group ownership of `test.txt` to match that of `file.txt`.    |
|                `newgrp`                 |                Change the user primary group (default)                 |
|             `newgrp staff`              |                      Switch to the 'staff' group                       |

### SUID, GUID

When the `SUID` permission is set on an executable file, it means that when a regular user runs that executable, it will run with the permissions of the file's owner instead of the user who is executing it.  

when any user executes the `/usr/bin/passwd` command, it runs with the elevated permissions of the **root** user. This is necessary because changing a user's password requires write access to the **/etc/shadow** file, which is typically only accessible by the **root** user for security reasons.

The **/etc/shadow** file is owned by the root user and has restrictive permissions (e.g., **readable** and **writable** **only** by the **root** user). This means `regular` users do not have the necessary `permissions` to modify the file.

```bash
ls -l /usr/bin/passwd 
-rwsr-xr-x 1 root root 51552 Jan 25  2023 /usr/bin/passwd
```

### Sticky bit

The `sticky bit` on a directory ensures that only the owner of a file within that directory (or the superuser) can **modify**, **delete** or **rename** that file, even if **others** have **write** permissions on the directory or the files.

Imagine you have a `/tmp` directory on a Linux system with the `sticky bit set`:

```bash
chmod +t /tmp
```

In this setup:

- Alice can delete files she creates in `/tmp`
- Bob can delete files he creates in `/tmp`
- Other users cannot delete files created by Alice or Bob in `/tmp`, enhancing file security in shared directories like `/tmp`

### umask

`umask` is a Linux command that controls the `default` permissions for `newly` created files and directories

```bash
umask
# 0022
```

- For files: 666 - 0022 = `0644`
- For directories: 777 - 0022 = `0755`

```bash
# read and write permissions to the owner and remove all permissions for others and groups on newly created files:
umask u=rw,go=

# remove write permissions for the users, group and others on newly created directories:
umask ugo-w
```
