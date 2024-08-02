---
sidebar_position: 2
tags:
  - Network
  - AI
  - Neural
---

# Neural Network

## Install Packages

```bash
pip install --upgrade pip --break-system-packages
# If you have permission issues
# sudo chmod a+rwx /usr/lib/python3.12/ -R

# https://wiki.archlinux.org/title/GPGPU
sudo pamac install opencl-amd --no-confirm
# Or
# sudo pamac install rocm-core rocm-hip-sdk rocm-opencl-sdk --no-confirm
sudo usermod -a -G render,video $LOGNAME
rocminfo

# If you are using RDNA or RDNA 2 architecture like AMD Radeon RX 6500 XT, you may need to follow this step:
sudo nano ~/.profile
# Add the following lines:
export HSA_OVERRIDE_GFX_VERSION=10.3.0
export ROC_ENABLE_PRE_VEGA=1


# https://www.tensorflow.org/install/pip
pip uninstall tensorflow-rocm numpy
pip install tensorflow --break-system-packages

pip install https://repo.radeon.com/rocm/manylinux/rocm-rel-6.1.3/tensorflow_rocm-2.15.1-cp310-cp310-manylinux_2_28_x86_64.whl numpy==1.26.4 --break-system-packages


# https://pytorch.org/
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --break-system-packages
```

## Check GPU Support

```python
import tensorflow as tf   # TensorFlow registers PluggableDevices here
import torch

print(tf.config.list_physical_devices())
print(tf.__version__)

print(torch.cuda.is_available())
print(torch.version.hip)
```

## Concepts

### Neuron

A neuron is a function that takes some inputs, applies a weighted sum to them, and then generates an output using an activation function

```python
def neuronFunc(inputs):
    weights = [0.5, -0.5]
    bias = 0.0
    output = inputs[0] * weights[0] + inputs[1] * weights[1] + bias
    return output

neuronOut = neuronFunc([1.0, 2.0])
print("Neuron output:", neuronOut)
```

### Activation Function

An activation function is applied to the output of a neuron to introduce non-linearity into the model. This helps the neural network learn complex patterns

#### Sigmoid Activation Function

```python
import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

# Apply the activation function
activeOutput = sigmoid(neuronOut)
print("Activated output (sigmoid):", activeOutput)
```

#### Linear Activation Function

The linear activation function directly outputs the input value without any modification.

```python
def linear(x):
    return x

activeOutput = linear(neuronOut)
print("Activated output (linear):", activeOutput)
```

### Loss Function

A loss function measures how well a neural network model performs a certain task by calculating the difference between the predicted output and the actual output. The goal of training is to minimize this loss.

```python
y_true = 0.8
loss = (y_true - activeOutput)
print("Loss:", loss)
```

### Gradient

In neural networks, gradients are used to update the model parameters to minimize the loss function. it is called optimization.

```python
def f(x):
    return x**2

def gradient(f, x):
    h = 1e-7  # A small number for numerical approximation
    return (f(x + h) - f(x - h)) / (2 * h)

x = 3
grad = gradient(f, x)
print("Gradient of f at x = {}: {}".format(x, grad))

```

### Gradient Descent

Gradient Descent is an optimization algorithm used to minimize the loss function by iteratively moving towards the steepest descent direction defined by the negative of the gradient.

```python
def gradient_descent(f, starting_point, learning_rate, num_iterations):
    x = starting_point
    for _ in range(num_iterations):
        grad = gradient(f, x)
        x = x - learning_rate * grad
    return x

starting_point = 3
learning_rate = 0.1
num_iterations = 100
optimal_x = gradient_descent(f, starting_point, learning_rate, num_iterations)
print("Optimal x:", optimal_x)
```

There are 3 types of gradient descent:

- Batch Gradient Descent
- Stochastic Gradient Descent
- Mini-Batch Gradient Descent

#### Batch Gradient Descent

Batch Gradient Descent computes the gradient of the loss function with respect to the entire training dataset. It updates the parameters in the direction of the gradient computed from the entire dataset

```python
def batch_gradient_descent(X, y, learning_rate, num_iterations):
    m = len(y)
    theta = np.zeros(X.shape[1])
    for _ in range(num_iterations):
        gradients = 2/m * X.T.dot(X.dot(theta) - y)
        theta = theta - learning_rate * gradients
    return theta

# Example usage
import numpy as np
X = np.array([[1, 1], [1, 2], [2, 2], [2, 3]])
y = np.dot(X, np.array([1, 2])) + 3
theta = batch_gradient_descent(X, y, 0.1, 1000)
print("Theta (Batch Gradient Descent):", theta)
```

#### Stochastic Gradient Descent (SGD)

Stochastic Gradient Descent updates the parameters for each training example, rather than the entire dataset, which often leads to faster convergence.

```python
def stochastic_gradient_descent(X, y, learning_rate, num_iterations):
    m = len(y)
    theta = np.zeros(X.shape[1])
    for _ in range(num_iterations):
        for i in range(m):
            random_index = np.random.randint(m)
            xi = X[random_index:random_index+1]
            yi = y[random_index:random_index+1]
            gradients = 2 * xi.T.dot(xi.dot(theta) - yi)
            theta = theta - learning_rate * gradients
    return theta

theta = stochastic_gradient_descent(X, y, 0.1, 1000)
print("Theta (Stochastic Gradient Descent):", theta)
```

#### Mini-Batch Gradient Descent

Mini-Batch Gradient Descent strikes a balance between Batch Gradient Descent and Stochastic Gradient Descent by updating the parameters using small batches of the training dataset.

```python
def mini_batch_gradient_descent(X, y, learning_rate, num_iterations, batch_size):
    m = len(y)
    theta = np.zeros(X.shape[1])
    for _ in range(num_iterations):
        shuffled_indices = np.random.permutation(m)
        X_shuffled = X[shuffled_indices]
        y_shuffled = y[shuffled_indices]
        for i in range(0, m, batch_size):
            xi = X_shuffled[i:i+batch_size]
            yi = y_shuffled[i:i+batch_size]
            gradients = 2/len(yi) * xi.T.dot(xi.dot(theta) - yi)
            theta = theta - learning_rate * gradients
    return theta

theta = mini_batch_gradient_descent(X, y, 0.1, 1000, batch_size=2)
print("Theta (Mini-Batch Gradient Descent):", theta)
```

## Resources
