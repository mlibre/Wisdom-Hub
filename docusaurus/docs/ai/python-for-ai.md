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

You can also open `http://localhost:8888/tree` or `http://localhost:8888/lab`

## Concepts

### String

```python
text = "abcd"
print ("thank :) %s" % text) # abcd
print (f"thank :) {text[0:3]}") # abc
print (f'''thanks
:)
{text[1:]} # bcd
{text[-1]} # d
''')

text2 = "pi is {pi:.2f}"
print(text2.format(pi = 3.144444)) # pi is 3.14

text3 = "pi is {0} or {1}"
print(text3.format(3.14, 3)) # pi is 3.14 or 3

text4 = "a big number {:,.3f}"
print(text4.format(3000.14567)) # a big number 3,000.146
```

### Number

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

### List

```python
mixed = ["apple", 2, 3.5, True]
mixed.append("orange")
mixed.remove(3.5)
print(mixed) # ['apple', 2, True, 'orange']

squares = [x ** 2 for x in range(10)]
print(squares) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Tuple

```python
fruits = ("apple", "banana", "cherry")
# Tuples are immutable, so you can't modify them directly
fruits[0] = "kiwi" # would raise an error
```

### Dictionary

```python
person = {
  "name": "Alice",
  "age": 25,
  "city": "New York"
}
print(person) # {'name': 'Alice', 'age': 25, 'city': 'New York'}
print(person["name"]) # Alice
print(person.keys()) # dict_keys(['name', 'age', 'city'])
print(person.items()) # dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])
```

### Loop

```python
text = "abcd"
for i in text:
  print(i)
# a b c d

for i in range(5):
    print(i)
# 0 1 2 3 4

# Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# apple banana cherry

# Looping through a dictionary
person = {"name": "Alice", "age": 25, "city": "New York"}
for key, value in person.items():
    print(f"{key}: {value}")
# name: Alice
# age: 25
# city: New York
```
