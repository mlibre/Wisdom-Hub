---
sidebar_position: 12
tags:
  - Linux
  - editor
  - cat
  - less
  - split
  - text
---

# TextOps

## cat, zcat, less, more, head, tail, ccat, bat, tee

|       Command        |                      Short Description                       |
| :------------------: | :----------------------------------------------------------: |
|    `cat file.txt`    |                   Concatenate and display                    |
|  `cat -n file.txt`   |                  Display with line numbers                   |
|    `zcat file.gz`    |                  Display compressed content                  |
|   `ccat file.txt`    |                   Colorize and concatenate                   |
|    `bat file.txt`    |                    Cat clone with syntax                     |
|   `tail file.txt`    |             Display last N line (10 by default)              |
|  `tail -f file.txt`  |                Continuously display new lines                |
|   `head file.txt`    |            Display first N lines (10 by default)             |
| `head -n 5 file.txt` |                    Display first 5 lines                     |
|   `less file.txt`    |                  View file with pagination                   |
|   `more file.txt`    |                    View file page by page                    |
| `ls \| tee list.txt` | Redirect the **ls** output to both terminal and **list.txt** |

## split

|              Command              |              Short Description              |
| :-------------------------------: | :-----------------------------------------: |
|         `split file.txt`          |            Split file into parts            |
|          `split -l 100`           |          Split into 100-line files          |
|           `split -b 1M`           |            Split into 1MB files             |
|       `split -n 3 file.txt`       |          Split into 3 equal parts           |
|            `split -d`             |            Use numeric suffixes             |
|      `split -d test.txt hi`       | Use numeric suffixes and custom prefix "hi" |
|           `split -a 3`            |           Use 3-character suffix            |
| `cat hi* > concatenated_file.txt` |    Concatenate files starting with "hi"     |

## cut

|           Command           |                                    Short Description                                     |
| :-------------------------: | :--------------------------------------------------------------------------------------: |
|    `cut -f 1,3 file.txt`    |         Select and print the first and third fields from each line of "file.txt"         |
| `cut -d' ' -f 2-4 file.txt` | Select and print fields 2 to 4 from each line of "file.txt" using space as the delimiter |
|    `cut -c 1-5 file.txt`    |             Select and print characters 1 to 5 from each line of "file.txt"              |

## sort, nl, shuf, uniq

|             Command             |              Short Description              |
| :-----------------------------: | :-----------------------------------------: |
|         `sort file.txt`         |          Sort lines in a text file          |
|          `nl file.txt`          |           Number lines in a file            |
|       `nl -b a file.txt`        |       Number lines, showing all lines       |
|      `nl -s "," file.txt`       |       Number lines, custom separator        |
|         `shuf file.txt`         |           Shuffle lines in a file           |
|       `sort -r file.txt`        |         Sort lines in reverse order         |
|       `sort -n file.txt`        |           Sort lines numerically            |
|      `shuf -n 5 file.txt`       |      Shuffle and display only 5 lines       |
|         `uniq file.txt`         |       Display unique lines in a file        |
|       `uniq -c file.txt`        |  Count and display unique lines with count  |
| `cat file.txt \| tr -s ' ' ','` | Translate spaces to commas in a text stream |

## diff, sha256sum, cp, mv, rm

Certainly, here's a table of the commands you requested in markdown format, with centered text alignment as per your preference:

|       Command        |                       Short Description                       |
| :------------------: | :-----------------------------------------------------------: |
|  `diff file1 file2`  |           Compares two files and shows differences            |
|     `sha256sum`      |       Computes and displays the SHA-256 hash of a file        |
| `sha256sum file.txt` | Calculates and prints the SHA-256 hash of the file `file.txt` |
|         `cp`         |                  Copies files or directories                  |
|       `cp -r`        |       Copies directories and their contents recursively       |
|       `cp -v`        |        Copies files or directories with verbose output        |
|       `mv -i`        |       Moves (renames) files or directories with prompt        |
|         `mv`         |             Moves (renames) files or directories              |
|         `rm`         |                    Removes (deletes) files                    |
|       `rm -r`        |      Removes directories and their contents recursively       |
|       `mkdir`        |                    Creates a new directory                    |
|       `rmdir`        |                  Removes an empty directory                   |

## dd

|                       Command                        |                        Short Description                        |
| :--------------------------------------------------: | :-------------------------------------------------------------: |
|                         `dd`                         |                     Copy and convert files                      |
|        `dd if=input of=output bs=block_size`         |  Copy data from 'input' to 'output' with specified block size   |
|    `dd if=/dev/zero of=zerofile bs=1M count=100`     |                 Create a 100MB zero-filled file                 |
|    `dd if=input of=output bs=512 count=1 skip=2`     | Copy 512 bytes from 'input' to 'output' starting from byte 1024 |
|   `dd if=/dev/random of=randomfile bs=1M count=1`    |           Generate a 1MB file filled with random data           |
|        `dd if=input \| gzip > backup.dd.gzip`        | Compress 'input' data using 'gzip' and save as 'backup.dd.gzip' |
| `dd if=ubuntu.iso of=/dev/sdX bs=4M status=progress` |         Write 'ubuntu.iso' to a USB drive ('/dev/sdX')          |

## find

|                          Command                          |                   Short Description                    |
| :-------------------------------------------------------: | :----------------------------------------------------: |
|                          `find`                           |            Search for files and directories            |
|                 `find path -name pattern`                 |   Files with a specific name in the 'path' directory   |
|              `find /home/user -name "*.txt"`              |  All files with the '.txt' extension in '/home/user'   |
|             `find /etc -type d -name "conf"`              |      Locate directories named 'conf' under '/etc'      |
|             `find /var/log -type f -mtime +7`             | Find files in '/var/log' modified more than 7 days ago |
|            `find /usr/bin -executable -type f`            |          Find executable files in '/usr/bin'           |
|                 `find /home -user masoud`                 |     Files owned by the user 'masoud' under '/home'     |
|                  `find /mnt -size +100M`                  |         Find files larger than 100MB in '/mnt'         |
|     `find /var/log -iname "*.log" -exec ls -l {} \;`      | Files in '/var/log' with a case-insensitive name match |
|  `find /backup -type f -exec cp {} /backup_archive/ \;`   |    Copy found files to '/backup_archive/' directory    |
| `find ./ -type f -exec ls {} \; -exec echo "file: {}" \;` |                  Having two commands                   |

## tar, gzip, guzip, xz, unxz

|            Command            |                Short Description                 |
| :---------------------------: | :----------------------------------------------: |
|            `gzip`             |            Compress files using gzip             |
|        `gzip file.txt`        |         Compress the file.txt using gzip         |
|       `gzip -d file.gz`       |          Decompress file.gz using gzip           |
|           `gunzip`            |      Decompress files compressed with gzip       |
|       `gunzip file.gz`        |         Decompress file.gz using gunzip          |
|             `xz`              |             Compress files using xz              |
|         `xz file.txt`         |          Compress the file.txt using xz          |
|        `xz -d file.xz`        |           Decompress file.xz using xz            |
|            `unxz`             |       Decompress files compressed with xz        |
|        `unxz file.xz`         |          Decompress file.xz using unxz           |
|             `tar`             |         Create and extract tar archives          |
| `tar -cvf archive.tar files/` | Create a tar archive from the 'files/' directory |
|    `tar -xvf archive.tar`     |         Extract files from 'archive.tar'         |
|            `rsync`            |        Synchronize files and directories         |

## rsync

|                         Command                          |            Short Description            |
| :------------------------------------------------------: | :-------------------------------------: |
|                         `rsync`                          |            Remote file sync             |
|             `rsync -av source/ destination/`             |       Sync files and directories        |
|             `rsync -r source/ destination/`              |            Sync recursively             |
|             `rsync -z source/ destination/`              |     Compress files during transfer      |
| `rsync -e "ssh -p 2222" source/ user@host:/destination/` |        Using SSH and custom port        |
|          `rsync --delete source/ destination/`           | Delete extraneous files at destination  |
|             `rsync -n source/ destination/`              |            Perform a dry run            |
|      `rsync --exclude='*.log' source/ destination/`      |         Exclude specific files          |
|       `rsync --bwlimit=1000 source/ destination/`        |   Limit bandwidth usage to 1000 KB/s    |
|         `rsync --progress source/ destination/`          |      Show progress during transfer      |
|          `rsync --backup source/ destination/`           | Create backup copies at the destination |

## streams

Certainly, here's a Markdown table with centered text alignment that lists the Linux commands you mentioned, along with their short descriptions and real-world examples:

|                 Command                 |                     Short Description                     |
| :-------------------------------------: | :-------------------------------------------------------: |
|                   `>`                   |            Redirects standard output to a file            |
|             `ls > list.txt`             |        Redirects `ls` command output to `list.txt`        |
|                  `>>`                   |             Appends standard output to a file             |
|     `echo "Hello" >> greeting.txt`      |             Appends "Hello" to `greeting.txt`             |
|                  `2>`                   |            Redirects standard error to a file             |
|   `ls non_existent_dir 2> error.log`    |            Logs error from `ls` to `error.log`            |
|                  `2>>`                  |             Appends standard error to a file              |
| `find /non_existent_dir 2>> errors.log` |              Appends errors to `errors.log`               |
|                  `&>`                   |    Redirects both standard output and error to a file     |
|    `curl example.com &> website.log`    | Logs both output and errors from `curl` to `website.log`  |
|                  `&>>`                  |     Appends both standard output and error to a file      |
|         `git pull &>> git.log`          |      Appends both git output and errors to `git.log`      |
|                  `<>`                   |      Redirects both input and output from/to a file       |
|          `cat <> combined.txt`          |            Reads and writes to `combined.txt`             |
|   `command > output.txt 2> error.txt`   | Redirects output to `output.txt` and error to `error.txt` |
|  `command 2>&1 > output_and_error.txt`  | Redirects both output and error to `output_and_error.txt` |

## pipe

|        Command         |                     Description                      |
| :--------------------: | :--------------------------------------------------: |
|          `\|`          |     Redirect output from one command to another.     |
| `command1 \| command2` | Execute `command1` and pass its output to `command2` |
|   `ls \| grep .txt`    |    List and filter files with a `.txt` extension     |
| `ps aux \| grep nginx` |     List and filter processes related to `nginx`     |
| `cat file.txt \| less` |     Display file contents using the `less` pager     |
| `dmesg \| tail -n 10`  |       Display the last 10 kernel log messages        |
|    `ls \| sort -r`     |       List files in reverse alphabetical order       |
| `find /home \| wc -l`  |        Count files and directories in `/home`        |
|  `du -h \| sort -rh`   |     List disk usage, human-readable, and sorted      |
|  `ls \| tee file.txt`  |       List files and save output to `file.txt`       |
|   `ls \| head -n 5`    |   List the first 5 files in the current directory    |

## xargs

`xargs` is a Linux command-line tool that takes input from standard input and passes it as arguments to another command. It separates input items by spaces, tabs or newlines by default, but you can specify a different delimiter with the `-d` option. The output is the result of executing the specified command with the input items as arguments.  

By default, `xargs` will process as many input items as possible in a single execution of the command.

* `-n 1`: This option in xargs specifies that only one input item should be used for each execution of the command. It ensures that the command is run once for each input item
* `-I {}`: The -I option allows you to specify a placeholder (in this case, {}) to represent where the input item should be placed within the command. It also process one input item at a time

|                            Command                             |                         Short Description                          |
| :------------------------------------------------------------: | :----------------------------------------------------------------: |
|                            `xargs`                             |        Build and execute command lines from standard input         |
|          `find /path -type f -print \| xargs command`          |   Execute **command** on each file found by the **find** command   |
|               `echo arg1 arg2 \| xargs command`                |      Execute **command** with arguments **arg1** and **arg2**      |
|                     `ls *.txt \| xargs rm`                     |         Remove all **.txt** files in the current directory         |
|               `cat list.txt \| xargs -n 1 echo`                |    Print each line of **list.txt** using **echo** (one by one)     |
|                `ls \| xargs -I {} mv {} {}.bak`                |  Add ".bak" extension to all files in this directory (one by one)  |
|   `find /path -type f -name "*.log" -print0 \| xargs -0 rm`    | Remove ".log" files in "/path" with handling of special characters |
| `grep pattern f1 f2 \| xargs sed -i 's/pattern/replacement/g'` | Search and replace "pattern" with "replacement" in multiple files  |
|  `echo file1 file2 file3 \| xargs -I % sh -c 'cp % /backup'`   |             Copy multiple files to a backup directory              |
|     `find /path -type f -print \| xargs -P 4 -I % gzip %`      |     Parallel compression of files in "/path" using 4 processes     |
|       `ls *.txt \| xargs -n 1 -I {} mv {} /destination/`       |         Move each ".txt" file to "/destination/" directory         |
|  `echo file1 file2 \| xargs -d ' ' -I % sh -c 'touch %.txt'`   |              Create ".txt" files with specified names              |

## grep

|                 Command                  |                               Short Description                                |
| :--------------------------------------: | :----------------------------------------------------------------------------: |
|          `grep 'error' log.txt`          |                   Search for 'error' messages in a log file                    |
|   `grep -r 'function foo()' /project`    | Recursively find files containing 'function foo()' in the '/project' directory |
|          `grep -i 'todo' *.js`           |            Search case-insensitively for 'todo' in JavaScript files            |
| `grep -E '^\d{3}-\d{2}-\d{4}$' data.txt` |        Use extended regex to find social security numbers in 'data.txt'        |
|        `grep -l 'pattern' *.txt`         |            List files containing 'pattern' in the current directory            |
|       `grep -v 'warning' log.txt`        |      Invert the match to display lines without 'warning' in the log file       |
