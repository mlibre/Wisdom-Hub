---
sidebar_position: 1
tags:
  - network
  - basic
---

# Basics

## hostname, ifconfig, ping, curl, wget

|                     Command                      |                          Description                          |
| :----------------------------------------------: | :-----------------------------------------------------------: |
|                    `hostname`                    |                 Display the system's hostname                 |
|                  `hostname -i`                   |               Display the machine's IP address                |
|       `sudo hostnamectl hostname newname`        |               Change the hostname to "newname"                |
|                    `ifconfig`                    |             Display network interface information             |
|                 `ifconfig eth0`                  | Display details for a specific network interface (e.g., eth0) |
|                  `ifconfig -s`                   |   Display a short list of interfaces with basic information   |
|                  `netstat -nr`                   |               Display routing table information               |
|                  `netstat -na`                   |            Display all active network connections             |
|                `ping google.com`                 |      Ping Google's servers to check network connectivity      |
|               `ping -c 4 8.8.8.8`                |     Send 4 ping requests to Google's DNS server (8.8.8.8)     |
|               `ping -i 2 1.1.1.1`                |    Ping 1.1.1.1 with a 2-second interval between requests     |
|              `ping -s 100 1.1.1.1`               |        Send larger packets of 100 bytes while pinging         |
|            `curl https://example.com`            |        Retrieve the content of a website (example.com)        |
|  `curl -o newfile.txt https://example.com/file`  |       Download a file and save it with a different name       |
|      `curl -O https://example.com/file.zip`      |          Download a file (e.g., file.zip) from a URL          |
| `curl -X POST -d "data" https://api.example.com` |               Send POST data to an API endpoint               |
|          `curl -I https://example.com`           |             Fetch only the headers of a web page              |
|       `wget https://example.com/file.txt`        |          Download a file (e.g., file.txt) from a URL          |
|   `wget -c https://example.com/largefile.zip`    |              Resume a partially downloaded file               |
|                  `host domain`                   |             Display the IP addresses of a domain              |
