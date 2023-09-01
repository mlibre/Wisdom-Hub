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

# Editor

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
|    `cut -c 1-5 file.txt`    |             Select and print characters 1 to 5 from each line of "file.txt"              |
| `cut -d' ' -f 2-4 file.txt` | Select and print fields 2 to 4 from each line of "file.txt" using space as the delimiter |
