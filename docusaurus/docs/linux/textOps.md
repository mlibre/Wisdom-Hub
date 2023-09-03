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

## cat, zcat, less, more, head, tail, ccat, bat

|       Command        |           Short Description           |
| :------------------: | :-----------------------------------: |
|    `cat file.txt`    |        Concatenate and display        |
|  `cat -n file.txt`   |       Display with line numbers       |
|    `zcat file.gz`    |      Display compressed content       |
|   `ccat file.txt`    |       Colorize and concatenate        |
|    `bat file.txt`    |         Cat clone with syntax         |
|   `tail file.txt`    |  Display last N line (10 by default)  |
|  `tail -f file.txt`  |    Continuously display new lines     |
|   `head file.txt`    | Display first N lines (10 by default) |
| `head -n 5 file.txt` |         Display first 5 lines         |
|   `less file.txt`    |       View file with pagination       |
|   `more file.txt`    |        View file page by page         |

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

|       Command        |                       Short Description                        |
| :------------------: | :------------------------------------------------------------: |
|  `diff file1 file2`  |            Compares two files and shows differences            |
|     `sha256sum`      |        Computes and displays the SHA-256 hash of a file        |
| `sha256sum file.txt` | Calculates and prints the SHA-256 hash of the file `file.txt`. |
|         `cp`         |                  Copies files or directories                   |
|       `cp -r`        |       Copies directories and their contents recursively        |
|       `cp -v`        |        Copies files or directories with verbose output         |
|       `mv -i`        |        Moves (renames) files or directories with prompt        |
|         `mv`         |              Moves (renames) files or directories              |
|         `rm`         |                    Removes (deletes) files                     |
|       `rm -r`        |       Removes directories and their contents recursively       |
|       `mkdir`        |                    Creates a new directory                     |
|       `rmdir`        |                   Removes an empty directory                   |

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

|                        Command                         |                   Short Description                    |
| :----------------------------------------------------: | :----------------------------------------------------: |
|                         `find`                         |            Search for files and directories            |
|               `find path -name pattern`                |   Files with a specific name in the 'path' directory   |
|            `find /home/user -name "*.txt"`             |  All files with the '.txt' extension in '/home/user'   |
|            `find /etc -type d -name "conf"`            |      Locate directories named 'conf' under '/etc'      |
|           `find /var/log -type f -mtime +7`            | Find files in '/var/log' modified more than 7 days ago |
|          `find /usr/bin -executable -type f`           |          Find executable files in '/usr/bin'           |
|               `find /home -user masoud`                |     Files owned by the user 'masoud' under '/home'     |
|                `find /mnt -size +100M`                 |         Find files larger than 100MB in '/mnt'         |
|    `find /var/log -iname "*.log" -exec ls -l {} \;`    | Files in '/var/log' with a case-insensitive name match |
| `find /backup -type f -exec cp {} /backup_archive/ \;` |    Copy found files to '/backup_archive/' directory    |
