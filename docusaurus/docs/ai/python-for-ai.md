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

> Libraries and Executable path:

```python
import sys
print ('\n'.join(sys.path))
print (sys.executable)

# /usr/lib/python312.zip
# /usr/lib/python3.12
# /usr/lib/python3.12/lib-dynload
# /home/mlibre/.local/lib/python3.12/site-packages
# /usr/lib/python3.12/site-packages
# /usr/bin/python
```

## Jupyter Notebook

```bash
pip install notebook --break-system-packages
jupyter notebook
```

You can also open `http://localhost:8888/tree` or `http://localhost:8888/lab` yourself

## Concepts

### String

```python
userInput = input("write something :)") # abcd
print ("thank :) %s" % userInput) # abcd
print (f"thank :) {userInput[0:3]}") # abc
print (f'''thanks
:)
{userInput[1:]} # bcd
{userInput[-1]} # d
''')
```

### Numbers

```python
piString = "3.14"
pi = float(piString) # 3.14
b = int(pi) # 3
print(f'''
Multiplication: {pi * b}
Division: {pi / b}
Floor division: {pi // b}
Modulus: {pi % b}
Exponentiation: {pi ** b}
''')
```

### Arrays

```python
myArray = [1, 2, 3, 4, 5]
myArray[0]
```
