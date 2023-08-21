---
sidebar_position: 9
tags:
  - Linux
  - Autostarts
---


# Install a new os on the phone

## Backup data

```bash
sudo pacman -S android-tools
sudo adb devices
adb backup -apk -shared -all -f backup-file.ab
```

## Restore

```bash
adb restore file.ab
```

## Enable Developer options

* Several times clicks on the kernel tab
* Allow OEM unlocking
* Enter Download mod:
  1. Turn off the phone.  
  2. Hold vol key up + down.
  3. Now in the warning message page. choose "unlocking bootloader" that will perform a factory reset

## Install odin tools for Samsung >= 3.14

<https://samsungodin.com/>

## Install samsung driver

<https://developer.samsung.com/android-usb-driver>

## Install adb

<https://developer.android.com/studio/releases/platform-tools>

```bash
adb reboot download
```

## Download TWRP

<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>
<https://twrp.me/samsung/samsunggalaxya10.html>

## convert it to .md5

<https://www.droidthunder.com/convert-img-to-tar-md5/>

## Run Odin as administrator

follow the instructions
<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>