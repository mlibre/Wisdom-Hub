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
# /usr/lib/python312.zip
# /usr/lib/python3.12
# /usr/lib/python3.12/lib-dynload
# /home/mlibre/.local/lib/python3.12/site-packages
# /usr/lib/python3.12/site-packages

print (sys.executable)
# /usr/bin/python

help("a".find)
# Help on built-in function find:

# find(...) method of builtins.str instance
#     S.find(sub[, start[, end]]) -> int

#     Return the lowest index in S where substring sub is found,
#     such that sub is contained within S[start:end].  Optional
#     arguments start and end are interpreted as in slice notation.

#     Return -1 on failure.
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

text3 = "pi is {} or {}"
print(text3.format(3.14, 3)) # pi is 3.14 or 3

text4 = "pi is {0} or {1}"
print(text4.format(3.14, 3)) # pi is 3.14 or 3

text5 = "a big number {0:,.3f}"
print(text5.format(3000.14567)) # a big number 3,000.146

text6 = "a big number {:,.3f}"
print(text6.format(3000.14567)) # a big number 3,000.146

text7 = "pi is a number"
isLoc, isLoc2 = text7.find("is"), text2.index("is")
print(isLoc, isLoc2) # 3 3
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

### Functions

```python
def greet(name="Guest"):
    return f"Hello, {name}!"

print(greet()) # Hello, Guest!
print(greet("Bob")) # Hello, Bob!


def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4)) # 10


def describe_person(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

describe_person(name="Alice", age=25, city="New York")
# name: Alice
# age: 25
# city: New York


add = lambda x, y: x + y
print(add(3, 5)) # 8

# Using lambda with sort
points = [(2, 3), (1, 2), (4, 1)]
secondValue = lambda point: point[1] # always returns second value
points.sort(key=secondValue)
print(points) # [(4, 1), (1, 2), (2, 3)]


def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Something is happening before the function is called.
# Hello!
# Something is happening after the function is called.
```

### class

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value): # now we can set and get with "name" not "_name"
        self._name = value


class Employee(Person): # inherits from Person
    species = "Homo sapiens"  # Class variable
    def __init__(self, name, employee_id):
        super().__init__(name)
        self.employee_id = employee_id
        self._test1 = "test1"  # Protected attribute
        self.__test2 = "test2"   # Private attribute

    def get_employee_details(self):
        return f"Name: {self.name}, Employee ID: {self.employee_id}"

# Creating an instance of the subclass
employee1 = Employee("Bob", "E1234")
print(employee1.get_employee_details())
# Name: Bob, Age: 30, Employee ID: E1234
employee1.name = "Alice"
print(employee1.get_employee_details())
# Name: Alice, Age: 30, Employee ID: E1234
employee1.employee_id = "E1235"
print(employee1.get_employee_details())
```

### Error handling

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid value!")
else:
    print("error is not ValueError or ZeroDivisionError")
finally:
    print("This will execute no matter what")


# Rasing and error
def check_age(age):
    if age < 5:
        raise ValueError("Age must be 5 or older")
    return "Access granted"

try:
    check_age(4)
except ValueError as e:
    print(e)
```

## Math

```python
import math as m
m.pi # 3.141592653589793

from math import *
print(pi)

import random as r
print(r.random())
```

## NumPy

```bash
pip install numpy --break-system-packages
```

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr) # [1 2 3 4 5]


# Creating a 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2d)
# [[1 2 3]
#  [4 5 6]]
print(arr2d.shape) # (2, 3)


# Creating a 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6, 7]])
# Raises ValueError. The requested array has an inhomogeneous shape after 1 dimensions


arr = np.array([1, 2, 3, 4, 5])
# Mean
print(np.mean(arr)) # 3.0
# Sum
print(np.sum(arr)) # 15
# Standard deviation
print(np.std(arr)) # 1.4142135623730951
# Minimum and Maximum
print(np.min(arr)) # 1
print(np.max(arr)) # 5

# Save to a file
np.save('array.npy', arr)
# Load from a file
loaded_arr = np.load('array.npy')
print(loaded_arr) # [1 2 3 4 5]
```

## Pandas

```bash
pip install pandas --break-system-packages
```

```python
import pandas as pd
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}
df = pd.DataFrame(data)

print(df)
#       Name  Age         City
# 0    Alice   25     New York
# 1      Bob   30  Los Angeles
# 2  Charlie   35      Chicago

df['Age'] = df['Age'] + 1
print(df['Age']) # Age column
# 0    26
# 1    31
# 2    36

print(df.head(2)) # First And Second rows
#     Name  Age      City
# 0  Alice   25  New York
# 1      Bob   30  Los Angeles

print(df.iloc[0])  # First row
# Name       Alice
# Age           25
# City    New York


df1 = pd.DataFrame({
    'Name': ['Alice', 'Bob'],
    'Age': [25, 30]
})

df2 = pd.DataFrame({
    'Name': ['Alice', 'David'],
    'Age': [35, 40]
})

# Concatenating DataFrames
df_concat = pd.concat([df1, df2])

# Merging DataFrames on a key
df3 = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'City': ['New York', 'Los Angeles', 'Chicago']
})

merged_df = pd.merge(df_concat, df3, on='Name')
print(merged_df)
#     Name  Age         City
# 0  Alice   25     New York
# 1    Bob   30  Los Angeles
# 2  Alice   35     New York
```

## Matplotlib

```bash
pip install matplotlib --break-system-packages
```

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

plt.plot(x, y)
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('Simple Line Plot')
plt.show()
```

## Neural Network
