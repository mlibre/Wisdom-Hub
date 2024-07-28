---
sidebar_position: 1
tags:
  - Linux
  - python
  - ai
---

# Python

## Install

```bash
sudo pacman -S python
python --version
```

> Library path:

```python
import sys
print ('\n'.join(sys.path))

# /usr/lib/python312.zip
# /usr/lib/python3.12
# /usr/lib/python3.12/lib-dynload
# /home/mlibre/.local/lib/python3.12/site-packages
# /usr/lib/python3.12/site-packages
```

> Executable path

```python
import sys
print (sys.executable)
```

## Usage

```bash
nano test.py
print ("hello world")
```

## Tools

### Jupyter Notebook

```bash
pip install notebook --break-system-packages
jupyter notebook
```

You can also open `http://localhost:8888/tree` or `http://localhost:8888/lab` yourself
